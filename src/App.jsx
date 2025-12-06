import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import WatchlistProvider from './context/WatchlistProvider'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <WatchlistProvider>
    <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Watchlist' element={<Watchlist />} />
        </Routes>

      
    </BrowserRouter>
    </WatchlistProvider>
  )
};

export default App;
