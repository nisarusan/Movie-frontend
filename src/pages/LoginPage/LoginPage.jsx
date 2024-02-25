import './LoginPage.css';
import MovieAppLogo from "/src/assets/movieapp.svg?react";
import TabBarMenu from "../../component/tabBarMenu/tabBarMenu.jsx";
import {
    BrowserRouter as Router,
    Route, Routes,
} from 'react-router-dom';
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
                        <Route exact path="/login">
                            {/*{coordinates={weatherData && weatherData.coord}}*/}
                            <LoginTab />
                        </Route>
                        <Route path="/signup">
                            {/*coordinates={weatherData && weatherData.coord}*/}
                            <SignupTab  />
                        </Route>
                    </Routes>
                </section>
            </main>
        </>
    )
        ;
}

export default LoginPage;