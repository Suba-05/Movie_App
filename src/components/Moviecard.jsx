import { useContext } from "react";
import { FaHeart , FaRegHeart } from "react-icons/fa";
import WatchlistContext from "../context/WatchlistContext";

const Moviecard = ({Movie}) => {
    const {toggleWatchlist , watchlist} = useContext(WatchlistContext);
    const inWatchlist = watchlist.some((M) => M.id === Movie.id);

    const image_base ='https://image.tmdb.org/t/p/w500/';
    return(
        <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white relative">
            
            <img src={image_base + Movie.poster_path} alt={Movie.title} loading="lazy"
            className="w-full h-80 object-contain rounded-sm" />
            <h3 className="text-lg font-bold mt-4">{Movie.title} </h3>
            <p className="text-sm text-gray-400">{Movie.release_date} </p>
            <button className="absolute top-2 right-2 text-red-500 text-xl"
            onClick={() => toggleWatchlist(Movie)}>
                {
                inWatchlist ? <FaHeart /> : <FaRegHeart />
                }

            </button>
        </div>
    );
}

export default Moviecard;