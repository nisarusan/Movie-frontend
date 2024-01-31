import './LoginPage.css';
import MovieAppLogo from "/src/assets/movieapp.svg?react";
import TabBarMenu from "../../component/tabBarMenu/tabBarMenu.jsx";
import {Routes, Route} from "react-router-dom";
import LoginTab from "../LoginTab/LoginTab.jsx";
import SignupTab from "../SignupTab/SignupTab.jsx";
function LoginPage() {
    return (
        <>
            <main className="login-container">
                <nav>
                    <MovieAppLogo/>
                </nav>
                <section className="login-page">
                        <TabBarMenu />
                        <Routes>
                            <Route path="/login/*" element={<LoginTab />} />
                            <Route path="/signup" element={<SignupTab />} />
                        </Routes>
                </section>
            </main>
        </>
    )
        ;
}

export default LoginPage;