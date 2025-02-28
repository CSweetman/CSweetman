import { Link } from "react-router-dom"

const Header = () => {
    return (
        // <div className=" bg-opacity-50 backdrop-blur-xl fixed w-full  text-csweet-dark-font text-xl z-20">
        <div className="bg-[#272732] bg-opacity-75 backdrop-blur-xl fixed w-full text-[#fff0ff] text-xl z-20">
            <div className="container mx-auto flex justify-between items-center p-4 text-2xl">
                <Link to="/" className=" hover:text-[#fff0ffbc] mx-4 hover:font-outline-hover">
                    <p className="text-2xl">CSweetman</p>
                </Link>
                <div className="hidden md:flex items-center">
                    {/* <Link to="/" className=" hover:text-[#086278] mx-4 font-outline-4 hover:font-outline-hover"> */}
                    <Link to="/" className=" hover:text-[#fff0ffbc] mx-4  hover:font-outline-hover">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-[#fff0ffbc] mx-4 hover:font-outline-hover">
                        About Me
                    </Link>
                    {/* <Link to="/experience" className=" hover:text-[#4d8b9a] mx-4">
                        Work Experience
                    </Link>
                    <Link to="/tools" className=" hover:text-[#4d8b9a] mx-4">
                        Tools I Like
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Header
