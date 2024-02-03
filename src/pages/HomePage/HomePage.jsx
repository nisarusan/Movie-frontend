import './HomePage.css';
import NavMenu from "../../component/NavMenu/NavMenu.jsx";
import SearchBar from "../../component/SearchBar/SearchBar.jsx";
import FeaturedMovieIntro from "../../component/FeaturedMovieIntro/FeaturedMovieIntro.jsx";
import TrendingToday from "../../component/trendingToday/TrendingToday.jsx";
import MoviesToday from "../../component/MoviesToday/MoviesToday.jsx";

function HomePage() {
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