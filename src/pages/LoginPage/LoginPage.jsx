import './LoginPage.css';
import MovieAppLogo from "/src/assets/movieapp.svg?react";
import TabBarMenu from "../../component/tabBarMenu/tabBarMenu.jsx";
import React, { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import LoginTab from "../LoginTab/LoginTab.jsx";
import SignupTab from "../SignupTab/SignupTab.jsx";
function LoginPage() {
    return (
        <>
            <main>
                <nav>
                    <MovieAppLogo/>
                </nav>
                <section>
                    <div className="login">
                        <TabBarMenu />
                        <Routes>
                            <Route path="/login" element={<LoginTab />} />
                            <Route path="/signup" element={<SignupTab />} />
                        </Routes>
                        <form action="">
                            <div className="login-input">
                                <label htmlFor="name"><input type="text" placeholder="naam"/></label>
                                <label htmlFor="name"><input type="email" placeholder="email"/></label>
                                <label htmlFor="name"><input type="text" placeholder="last name"/></label>
                            </div>
                            <button className="btn btn-gradient" type="submit">Registreer</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
        ;
}

export default LoginPage;