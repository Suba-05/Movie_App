import React ,{ useState , useEffect } from "react";
import Moviecard from "../components/Moviecard";

//import Vaaranam-Aayiram from "../images/Vaaranam-Aayiram";

{/* const Movie = [
    {
    poster:"https://c.saavncdn.com/635/Vaaranam-Aayiram-Tamil-2008-20190629141128-500x500.jpg",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://m.media-amazon.com/images/M/MV5BNjk2NGQwNmYtMDViZS00NjE5LWI4MzMtZWJjZmIwNmI5ODk2XkEyXkFqcGc@._V1_.jpg",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://upload.wikimedia.org/wikipedia/en/c/c4/Maanaadu_poster.jpg",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://pbs.twimg.com/media/GoqChO1WwAAH2lA.jpg",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://i.redd.it/first-look-posters-of-vijay-movies-since-2012-v0-pe9uhrxv7i7b1.jpg?width=600&format=pjpg&auto=webp&s=184916fcaf751798eaac36ed6ef24d57beb2b519",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://i.redd.it/237f4tryd2xb1.jpg",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VU4naAa2cRY2Qke5Dus1J-cND2S_gSayjg&s",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36sFAizkRE_g9-uUG-zoBVzvUfJ4l1Bc05g&s",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPfNEYTCoSz0oC4LQZCsFsVujZB0Rj7ScpQ&s",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://i.redd.it/first-look-posters-of-vijay-movies-since-2012-v0-uyr29juv7i7b1.jpg?width=1200&format=pjpg&auto=webp&s=b76ba4376a3179bcd65afcf933d7f7efea20f23d",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://i.pinimg.com/474x/e1/33/e4/e133e47df0215feefa9938d6ecec1ba6.jpg",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

    {
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKT4zFuMrnVU3SfCv66bppvrDgh0S5MuQbwg&s",
    title:"vaaranam-Aayiram",
    release_date:"27/12/2008",
    },

]; */}

const Home = () => {

    const [Movie , setMovie] = useState([]);
    const [Page , setPage] = useState(1);
    const [Search , setSearch] = useState("");

    

                                                                   
    useEffect(() => {
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=d31075ff3c843c60a4a0c474db5ec284&Page=${Page}';
        if(Search){
            url='https://api.themoviedb.org/3/Search/movie?api_key=d31075ff3c843c60a4a0c474db5ec284&query=${Search}';
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => setMovie(data.results));
    } , [Page , Search]);
    return(
        <div className="p-4 pt-16">

            <input type="text" placeholder="Search Movies" 
            className="p-2 w-3/4  md:w-1/2 border rounded border-gray-700 bg-gray-900 bg-opacity-60
             backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2  z-10"
             onChange={(e) => setSearch(e.target.value)}/>

            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {Movie && Movie.map((Movie) => {
                    return(
                        <Moviecard key={Movie.id} Movie={Movie} />
                    )
                })}
            </div>
             <div className="pagination-container flex justify-between mt-5">
                <button
                disabled={Page === 1}
                className="p-2 bg-gray-700 text-white rounded" onClick={() => {
                    setPage(prevPage => prevPage-1);
                    window.scrollTo(0, 0);
                }}>&lt; Previous</button>

                <button className="p-2 bg-gray-700 text-white rounded"
                onClick={() => {
                    setPage(prevPage => prevPage+1);
                    window.scrollTo(0, 0);
                }}>Next &gt;</button>
             </div>
            
        </div>
    );
};

export default Home;