import "./App.css"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

export default function App() {
    return (
        <>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="projects/:id" element={<HomePage />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}
