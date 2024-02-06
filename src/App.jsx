import {useState} from 'react'
import './App.css'
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import {Route, Routes} from "react-router-dom";
import LoginTab from "./pages/LoginTab/LoginTab.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
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
            <Routes>
            {/*    <Slider slide={movieMap} />*/}

                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}

export default App
