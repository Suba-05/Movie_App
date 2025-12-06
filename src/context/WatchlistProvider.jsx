import { useState } from "react";
import WatchlistContext from "./WatchlistContext";

export const WatchlistProvider = ({children}) => {
    const [watchlist , setWatchlist] = useState([]);

    const toggleWatchlist = (Movie) => {
    const index = watchlist.findIndex((M) => M.id === Movie.id);
    if( index === -1){
        setWatchlist([...watchlist,Movie]);
    }else{
        setWatchlist([...watchlist.slice(0,index),...watchlist.slice(index + 1)]);
    }
}

const ContextValue = {
    watchlist,
    toggleWatchlist,
    setWatchlist,
}

    return (
        <WatchlistContext.Provider 
        value={ContextValue}>{children}
        </WatchlistContext.Provider>
    )
};
export default WatchlistProvider;
