import "./App.css"
import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
// import cloudleft from "./assets/project-imgs/cloudleft.png"
// import cloudright from "./assets/project-imgs/cloudright.png"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

export default function App() {
    return (
        <>
            <Router>
                <div className=" min-h-[100vh] z-[-10]">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="projects/:id" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    {/* <img
                        src={cloudleft}
                        alt=""
                        className=" fixed bottom-0 left-0 h-[40%] min-[320px]:hidden xl:inline "
                    />
                    <img
                        src={cloudright}
                        alt=""
                        className=" fixed bottom-0 right-0 h-[15%] min-[320px]:hidden xl:inline "
                    /> */}
                </div>
            </Router>
        </>
    )
}
