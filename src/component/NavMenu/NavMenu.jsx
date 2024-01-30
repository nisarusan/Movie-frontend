import './NavMenu.css';
import MovieApp from "../../assets/MovieAppIcon.svg?react";
import HomeIcon from '../../assets/HomeIcon.svg?react';
import MovieIcon from '../../assets/MovieIcon.svg?react';
import TvShowIcon from '../../assets/TvShowIcon.svg?react';
function NavMenu() {
    return (
        <>
            <header>
                <nav className="menu">
                    <MovieApp />
                    <HomeIcon/>
                    <MovieIcon/>
                    <TvShowIcon/>
                </nav>
            </header>
        </>
    );
}

export default NavMenu;