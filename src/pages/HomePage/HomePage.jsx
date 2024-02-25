import './HomePage.css';
import NavMenu from "../../component/NavMenu/NavMenu.jsx";
import SearchBar from "../../component/SearchBar/SearchBar.jsx";
import FeaturedMovieIntro from "../../component/FeaturedMovieIntro/FeaturedMovieIntro.jsx";
import TrendingToday from "../../component/trendingToday/TrendingToday.jsx";
import MoviesToday from "../../component/MoviesToday/MoviesToday.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import GenresCategory from "../../component/GenresCategory/GenresCategory.jsx";
import MoviesPage from "../MoviesPage/MoviesPage.jsx";
import ProfilePage from "../ProfilePage/ProfilePage.jsx";
import {Route, Routes} from "react-router-dom";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        getMovieData();
    }, []);

    const getMovieData = async () => {
        try {
            const urlMovieDb = 'https://api.themoviedb.org/3/trending/movie/day';
            const urlMoviesTotal = 'http://localhost:8080/movies';
            const response = await axios.get(`${urlMoviesTotal}`, {
                headers: {

                    //imdb
                    // Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDIwYzA5OTk3YjY3YzFlMDFlMTU4NGQxNTQ4Y2E0NiIsInN1YiI6IjY1YjFlMGI3ZTI2N2RlMDE0OTA3ZDVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2byAR_KsLD-MI_ydsH_3yZx_BJSzQ1zD06hZ8oB-EbQ",
                    // Authorization: "Basic " + btoa("henk:name"),
                    Accept: "application/json"
                }
            });
            console.log(response);
            setMovies(response.data.results);
            setMovies(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }


    return (
        <>

                        {/*<ProfilePage />*/}
                        {/*<MoviesToday title="Movies today" data={movies}/>*/}
                        {/*<MoviesPage />*/}

                        <FeaturedMovieIntro/>
                        <TrendingToday/>
            {/*            /!*{loading ? (*!/*/}
            {/*            /!*    <p>Loading...</p>*!/*/}
            {/*            /!*) : error ? (*!/*/}
            {/*            /!*    <p>Error: {error.message}</p>*!/*/}
            {/*            /!*) : (*!/*/}
            {/*            /!*    <>*!/*/}
                                <MoviesToday title="Movies" data={movies}/>
            {/*            /!*        <MoviesToday title="Popular " data={movies}/>*!/*/}
            {/*            /!*        <MoviesToday title="Top rated" data={movies}/>*!/*/}
            {/*            /!*    </>*!/*/}
            {/*            /!*)}*!/*/}
            {/*            /!*<GenresCategory />*!/*/}

        </>
    );
}

export default HomePage;
