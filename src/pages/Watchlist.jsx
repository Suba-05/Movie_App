
import { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import WatchlistContext from "../context/WatchlistContext";
import Moviecard from "../components/Moviecard";
const Watchlist = () => {
    const {watchlist ,setWatchlist} = useContext(WatchlistContext)

    const [search , setSearch] = useState("")

    const filterMovies = watchlist.filter(
        (Movie) => 
            Movie.title.toLowerCase().includes(search.toLowerCase()) 
    );

    return(
        <div className="p-4 pt-16">

            <input type="text" placeholder="Search Movies" 
            className="p-2 w-3/4  md:w1/2 border rounded border-gray-700 bg-gray-900 bg-opacity-60
             backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2  z-10"
             onChange={(e) => setSearch(e.target.value)}
             />

             <div className="mt-16 flex justify-center">
                <GenreFilter />
             </div>

             <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {filterMovies && filterMovies.map((movie) => {
                    return(
                        <Moviecard key={movie.id} Movie={movie} />
                    )
                })}
            </div>

        </div>
    )
};

export default Watchlist;