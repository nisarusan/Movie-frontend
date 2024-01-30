import {useState} from 'react'
import './App.css'
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import {Route, Routes} from "react-router-dom";
import LoginTab from "./pages/LoginTab/LoginTab.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}

export default App
