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

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovieData();
    }, []);

    const getMovieData = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDIwYzA5OTk3YjY3YzFlMDFlMTU4NGQxNTQ4Y2E0NiIsInN1YiI6IjY1YjFlMGI3ZTI2N2RlMDE0OTA3ZDVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2byAR_KsLD-MI_ydsH_3yZx_BJSzQ1zD06hZ8oB-EbQ",
                    Accept: "application/json"
                }
            });
            setMovies(response.data.results);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    console.log(movies);

    return (
        <>
            <main className="homepage-wrapper">
                <NavMenu/>
                <div className="container">
                    <div className="home">
                        <SearchBar/>
                        <MoviesPage />

                        {/*<FeaturedMovieIntro/>*/}
                        {/*<TrendingToday/>*/}
                        {/*{loading ? (*/}
                        {/*    <p>Loading...</p>*/}
                        {/*) : error ? (*/}
                        {/*    <p>Error: {error.message}</p>*/}
                        {/*) : (*/}
                        {/*    <>*/}
                        {/*        <MoviesToday title="Movies today" data={movies}/>*/}
                        {/*        <MoviesToday title="Popular " data={movies}/>*/}
                        {/*        <MoviesToday title="Top rated" data={movies}/>*/}
                        {/*    </>*/}
                        {/*)}*/}
                        {/*<GenresCategory />*/}
                    </div>
                </div>
            </main>
        </>
    );
}

export default HomePage;
