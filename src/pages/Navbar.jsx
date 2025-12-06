import { useContext } from 'react';
import {Link} from 'react-router-dom';
import WatchlistContext from '../context/WatchlistContext';
const Navbar = () => {
    const { watchlist} = useContext(WatchlistContext)
    return(
        <nav className='bg-gray-900 p-4 text-white flex justify-between fixed   top-0  z-10 w-4/5'>
            <Link to="/" className="text-xl font-bold">Movie App</Link>
            <Link to="/Watchlist" className="text-xl font-bold">Watchlist({watchlist.length})</Link>
        </nav>
    );
};
export default Navbar;

