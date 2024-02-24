import './NavMenu.css';
import MovieApp from "../../assets/MovieAppIcon.svg?react";
import HomeIcon from '../../assets/HomeIcon.svg?react';
import MovieIcon from '../../assets/MovieIcon.svg?react';
import TvShowIcon from '../../assets/TvShowIcon.svg?react';
import {NavLink} from "react-router-dom";
import AvatarImage from '../../assets/avatar.svg?react'

function NavMenu() {
    return (
        <>
            <header>
                <nav className="menu">
                    <MovieApp/>
                    <NavLink className={({isActive}) => isActive && 'login--active'} to="/homepage">
                        <HomeIcon/>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive && 'login--active'} to="/">
                        <MovieIcon/>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive && 'login--active'} to="/">
                        <TvShowIcon/>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive && 'login--active'} to="/">
                        <span className="avatars"><AvatarImage/></span>
                    </NavLink>
                </nav>
            </header>
        </>
    );
}

export default NavMenu;