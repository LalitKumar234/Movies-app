import { useEffect, useState, useRef } from 'react';
import { searchMovies } from '../api/imdb';

export interface SearchedMovieTypes {
    title: string;
    year: string;
    imdbID: string;
    poster: string;
    actors: string;
}

export default function useSearchMovies(query: string): { data: SearchedMovieTypes[], loading: boolean, error: any, refetch: () => void } {
  const [data, setData] = useState<SearchedMovieTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query || query.trim() === '') {
      setData([]);
      setError(null);
      setLoading(false);
      return;
    }

    controllerRef.current?.abort();
    const ctrl = new AbortController();
    controllerRef.current = ctrl;

    setLoading(true);
    setError(null);

    searchMovies(query, { signal: ctrl.signal })
      .then(res => {
        if (res && res.description && Array.isArray(res.description)) {
          setData(res.description.map((item: any) => {
              return {
                  title: item['#TITLE'] || '',
                  year: item['#YEAR'] || '',
                  imdbID: item['#IMDB_ID'] || '',
                  poster: item['#IMG_POSTER'] || '',
                  actors: item['#ACTORS'] || ''
              }
          }));
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') return;
        setError(err);
        setLoading(false);
      });

    return () => ctrl.abort();
  }, [query]);

  const refetch = () => {
    if (query && query.trim() !== '') {
      setLoading(true);
      setError(null);
      
      const ctrl = new AbortController();
      controllerRef.current = ctrl;
      
      searchMovies(query, { signal: ctrl.signal })
        .then(res => {
          if (res && res.description && Array.isArray(res.description)) {
            setData(res.description.map((item: any) => {
                return {
                    title: item['#TITLE'] || '',
                    year: item['#YEAR'] || '',
                    imdbID: item['#IMDB_ID'] || '',
                    poster: item['#IMG_POSTER'] || '',
                    actors: item['#ACTORS'] || ''
                }
            }));
          } else {
            setData([]);
          }
          setLoading(false);
        })
        .catch(err => {
          if (err.name === 'AbortError') return;
          setError(err);
          setLoading(false);
        });
    }
  };

  return { data, loading, error, refetch };
}