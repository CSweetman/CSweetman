import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-[#244047] dark:bg-[#1c1c1c] bg-opacity-50 backdrop-blur-xl fixed w-full z-10 text-csweet-dark-font text-xl">
            <div className="container mx-auto flex justify-between items-center p-4">
                CSweetman
                <div className="hidden md:flex items-center">
                    <Link to="/" className=" hover:text-[#4d8b9a] mx-4">
                        Home
                    </Link>
                    <Link to="/about" className=" hover:text-[#4d8b9a] mx-4">
                        About Me
                    </Link>
                    <Link to="/experience" className=" hover:text-[#4d8b9a] mx-4">
                        Work Experience
                    </Link>
                    <Link to="/tools" className=" hover:text-[#4d8b9a] mx-4">
                        Tools I Like
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
