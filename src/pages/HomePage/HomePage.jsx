import './HomePage.css';
import NavMenu from "../../component/NavMenu/NavMenu.jsx";
import SearchBar from "../../component/SearchBar/SearchBar.jsx";
import FeaturedMovieIntro from "../../component/FeaturedMovieIntro/FeaturedMovieIntro.jsx";
import TrendingToday from "../../component/trendingToday/TrendingToday.jsx";

function HomePage() {
    return (
        <>
            <div className="container">
                <NavMenu/>
                <div className="home">
                    <SearchBar/>
                    <FeaturedMovieIntro/>
                    <TrendingToday />
                </div>
            </div>
        </>
    );
}

export default HomePage;