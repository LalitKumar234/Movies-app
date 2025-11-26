import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import useMovieDetails from "../hooks/useMoviesDetails";
import ErrorMessage from "../components/ErrorMessage";
import { ArrowIcon, BackButton, TrailerIcon, WatchNowIcon, MenuIcon} from "../assets/icons";
import StarRating from "../components/StarRating";
import { formatDuration, formatReleaseDate, truncateDescription } from "../utils/format";
import NotFound from "../components/NotFound";

const MovieDetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movie, loading: detailsLoading, error: detailsError } = useMovieDetails(id as string);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);

  if (detailsLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (detailsError) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <ErrorMessage error={{ message: "Failed to load movie details" }} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  if (!movie?.short) {
    return (
      <NotFound onGoBack={()=>navigate('/')} />
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="relative h-screen w-full overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${movie.short.image})`,
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center z-10">
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <BackButton />
          </button>

          <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <MenuIcon />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{movie.short.name}</h1>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span>{new Date(movie.short.datePublished).getFullYear()}</span>
            <StarRating rating={movie.short?.review?.reviewRating} />
            <span>{formatDuration(movie?.main?.runtime?.seconds || 0)}</span>
          </div>
          <div className="flex gap-2 mb-6">
            {movie.short?.genre.map((g, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm capitalize"
              >
                {g}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mb-4 flex-wrap">
             <Link to={movie.short?.trailer?.embedUrl || '#'}>
               <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                 <TrailerIcon />
                 Trailer
               </button>
             </Link>

             <Link to={movie.short.url}>
               <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors flex-1">
                 <WatchNowIcon />
                 Watch now
               </button>
             </Link>
           </div>
        </div>
      </div>
      <div className="bg-black text-white p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Storyline</h2>
          {movie.short.datePublished && (
            <div className="mb-4">
              <span className="text-gray-400 text-sm">Released: </span>
              <span className="text-white text-sm">{formatReleaseDate(movie.short.datePublished)}</span>
            </div>
          )}
          <p className="text-gray-300 leading-relaxed mb-4">
            {showFullDescription
              ? movie.short.description
              : truncateDescription(movie.short.description)
            }
          </p>
          {movie.short.description && movie.short.description.length > 200 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              {showFullDescription ? 'Read less' : 'Read more'}
              <ArrowIcon showFullDescription={showFullDescription} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsScreen
