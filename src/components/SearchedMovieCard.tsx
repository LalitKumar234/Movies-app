import type { SearchedMovieTypes } from '../hooks/useSearchMovies'

const SearchedMovieCard = ({ movie, onClick }: { movie: SearchedMovieTypes, onClick: () => void }) => {
    return (
        <div onClick={onClick} className="flex items-start justify-start p-2 gap-3 cursor-pointer hover:bg-gray-100 rounded-md transition-all duration-300">
            <img src={movie.poster} alt={movie.title} className="w-12 h-20 object-contain"/>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{movie.title} (<span className="text-sm text-gray-500">{movie.year}</span>)</h3>
                <p className="text-sm text-gray-500">{movie.actors}</p>
            </div>
        </div>
    )
}

export default SearchedMovieCard
