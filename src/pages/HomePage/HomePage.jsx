import './HomePage.css';
import NavMenu from "../../component/NavMenu/NavMenu.jsx";
import SearchBar from "../../component/SearchBar/SearchBar.jsx";

function HomePage() {

    return (
        <>
            <div className="container">
                <NavMenu/>
                <SearchBar/>

            </div>
        </>
    );
}

export default HomePage;