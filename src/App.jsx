import {useState} from 'react'
import './App.css'
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import {Route, Routes} from "react-router-dom";
import LoginTab from "./pages/LoginTab/LoginTab.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesToday from "./component/MoviesToday/MoviesToday.jsx";
import NavMenu from "./component/NavMenu/NavMenu.jsx";
import SearchBar from "./component/SearchBar/SearchBar.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import SignupTab from "./pages/SignupTab/SignupTab.jsx";
// import Slider from "./component/SwiperSlide/SwiperSlide.jsx";
// import movie1 from './assets/movie-1.png';
// import movie2 from './assets/movie-2.png';
// import movie3 from './assets/movie-3.png';
// import movie4 from './assets/movie-4.png';
// import movie5 from './assets/movie-5.png';
// import movie6 from './assets/movie-6.png';
//
// const movieMap = [
//     {
//         image: movie1
//     },
//     {
//         image: movie2
//     },
//     {
//         image: movie3
//     },
//     {
//         image: movie4
//     },
//     {
//         image: movie5
//     },
//     {
//         image: movie6
//     }
// ]
function App() {
    return (
        <>
            <main className="homepage-wrapper">
                <NavMenu/>
                <div className="container">
                    <div className="home">
                        <SearchBar/>
                        <Routes>
                            <Route path={"/"} element={<HomePage/>}/>
                            <Route path={"/login"} element={<LoginPage/>}/>
                            <Route path={"/movies"} element={<MoviesPage/>}/>
                            <Route path={"/tv"} element={<MoviesPage/>}/>
                            <Route path={"/profile"} element={<ProfilePage/>}/>
                            <Route path={"/signup"} element={<SignupTab/>}/>
                        </Routes>
            {/*<Routes>*/}
            {/*    <Slider slide={movieMap} />*/}
            {/*    <Route path="/" element={<HomePage />} />*/}
            {/*</Routes>*/}
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
