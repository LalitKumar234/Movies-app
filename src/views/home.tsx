
import backgroundImage from '../assets/maxres.jpg';
import { useEffect, useState } from 'react';
import useDebouncedValue from '../hooks/useDebouncedValue';
import useSearchMovies from '../hooks/useSearchMovies';
import SearchedMovieCard from '../components/SearchedMovieCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dropDown, setDropDown] = useState(false);
    const debouncedQuery = useDebouncedValue(searchQuery, 400);
    const { data: results, loading: searchLoading, error: searchError } = useSearchMovies(debouncedQuery);
    const navigate = useNavigate();

    useEffect(() => {
        if (results.length > 0) {
            setDropDown(true);
        } else {
            setDropDown(false);
        }
    }, [results]);

    console.log(searchError, "searchError");

    return (
        <div className="relative min-h-screen w-full">
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    height: "100vh",
                    backgroundSize: "cover",
                }}
                className="relative w-full h-screen bg-no-repeat bg-black/10 px-4"
            >
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="pt-10 sm:pt-20 relative z-10 flex flex-col h-full max-w-2xl mx-auto gap-4">
                    <h1 className='text-white text-2xl sm:text-5xl font-bold text-center'>Search for your faviorite, movies and shows</h1>
                    <p className=' text-sm sm:text-lg text-center text-pink-400'>Unlimited movies, TV shows and more. Watch anywhere. Cancel anytime.</p>
                    <div className='flex w-full gap-4 relative'>
                        <div className='flex items-center gap-2 justify-center w-full bg-white rounded pr-2'>
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                type="text"
                                placeholder='Search for a movie or show'
                                className='rounded w-full p-3 text-black focus:outline-none focus:ring-0 border border-white ring-0'
                            />
                            <div className={`loader1 ${searchLoading ? '' : 'opacity-0'}`}></div>
                            {
                                searchQuery ? <button onClick={() => setSearchQuery('')} className="text-xs bg-pink-500 text-white rounded-full p-2">Clear</button> : null
                            }
                        </div>
                        {dropDown && (
                            <div className='absolute w-full max-w-2xl top-full left-0  bg-white rounded-b-md p-2 max-h-96 overflow-y-auto'>
                                {
                                    results.map((movie) =>
                                        <SearchedMovieCard
                                            onClick={() => navigate(`/movie-detail/${movie.imdbID}`)}
                                            key={movie.imdbID}
                                            movie={movie}
                                        />)
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
