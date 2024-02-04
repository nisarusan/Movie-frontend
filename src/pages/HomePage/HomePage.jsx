import './HomePage.css';
import NavMenu from "../../component/NavMenu/NavMenu.jsx";
import SearchBar from "../../component/SearchBar/SearchBar.jsx";
import FeaturedMovieIntro from "../../component/FeaturedMovieIntro/FeaturedMovieIntro.jsx";
import TrendingToday from "../../component/trendingToday/TrendingToday.jsx";
import MoviesToday from "../../component/MoviesToday/MoviesToday.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovieData();
    }, []);
    async function getMovieData() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`);
            setMovies(response);
        } catch(e) {
            console.error(e);
        }
    }
    return (
        <>
            <main className="homepage-wrapper">
                <NavMenu/>
                <div className="container">
                    <div className="home">
                        <SearchBar/>
                        <FeaturedMovieIntro/>
                        <TrendingToday/>
                        <MoviesToday/>
                        <MoviesToday/>
                        <MoviesToday/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default HomePage;