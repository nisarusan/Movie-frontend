import './HomePage.css';
import NavMenu from "../../component/NavMenu/NavMenu.jsx";
import SearchBar from "../../component/SearchBar/SearchBar.jsx";
import FeaturedMovieIntro from "../../component/FeaturedMovieIntro/FeaturedMovieIntro.jsx";

function HomePage() {

    return (
        <>
            <div className="container">
                <NavMenu/>
                <div className="home">
                    <SearchBar/>
                    <FeaturedMovieIntro/>
                </div>
            </div>
        </>
    );
}

export default HomePage;