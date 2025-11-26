import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from '../api/imdb';

interface MovieDetailTypes {
    main?: {
      runtime?: {
        seconds: number
      }
    },
    short?: {
        image: string,
        keywords: string,
        name: string,
        datePublished: string,
        description: string,
        genre: string[],
        trailer?: {
            embedUrl: string
        },
        url: string,
        review?: {
          reviewRating: any
        }
    }
}

export default function useMovieDetails(ttId: string) {
  const [data, setData] = useState<MovieDetailTypes>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!ttId) {
      setData({
        main: { runtime: { seconds: 0 } },
        short: {
          image: '',
          keywords: '',
          name: '',
          datePublished: '',
          description: '',
          genre: [],
          url: '',
          trailer: { embedUrl: '' },
          review: { reviewRating: null }
        }
      });
      setLoading(false);
      setError(null);
      return;
    }

    controllerRef.current?.abort();
    const ctrl = new AbortController();
    controllerRef.current = ctrl;

    setLoading(true);
    setError(null);

    getMovieDetails(ttId, { signal: ctrl.signal })
      .then(res => {
        setData(res || {});
        setLoading(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') return;
        setError(err);
        setLoading(false);
      });

    return () => ctrl.abort();
  }, [ttId]);

  return { data, loading, error };
}