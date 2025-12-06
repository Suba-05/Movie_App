 import { createContext } from "react";

 const WatchlistContext = createContext({
     Watchlist:[],
    toggleWatchlist:() => {},
    setWatchlist:() => {},
});
export default WatchlistContext; 