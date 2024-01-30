import React from 'react';
import './tabBarMenu.css';
import {NavLink} from 'react-router-dom';
function TabBarMenu() {
    return (
        <>
            <div className="login-wrapper">
                <NavLink className={({ isActive }) => isActive && 'login--active'} to="/">
                    Login
                </NavLink>
                <NavLink className={({ isActive }) => isActive && 'login--active'} to="/signup">
                    Signup
                </NavLink>
            </div>
        </>
    );
}

export default TabBarMenu;