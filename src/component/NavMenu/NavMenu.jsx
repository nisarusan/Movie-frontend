import './NavMenu.css';
import MovieApp from "../../assets/MovieAppIcon.svg?react";
import HomeIcon from '../../assets/HomeIcon.svg?react';
import MovieIcon from '../../assets/MovieIcon.svg?react';
import TvShowIcon from '../../assets/TvShowIcon.svg?react';
import {NavLink, Routes, Route} from "react-router-dom";
import AvatarImage from '../../assets/avatar.svg?react'
import HomePage from "../../pages/HomePage/HomePage.jsx";
import MoviesToday from "../MoviesToday/MoviesToday.jsx";

function NavMenu() {
    return (
        <>
            <header>
                <nav className="menu">
                    <MovieApp/>
                    <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to="/">
                        <HomeIcon/>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : "active-link"} to="/movies">
                        <MovieIcon/>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to="/tv">
                        <TvShowIcon/>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to="/profile">
                        <span className="avatars"><AvatarImage/></span>
                    </NavLink>
                </nav>
            </header>
        </>
    );
}

export default NavMenu;