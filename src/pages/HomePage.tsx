import { useState } from "react"
import AboutButton from "../components/AboutButton"
import Carousel from "../components/Carousel"
import DynamicIconRenderer from "../components/DynamicIconRenderer"
import Timeline from "../components/Timeline"
import { techList, techStack } from "../data/techStackData"
import { TechStack } from "../types"
import TechRow from "../components/TechRow"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const HomePage = () => {
    const [desc, setDesc] = useState(0)

    return (
        <>
            <section className="">
                {/* Welcome Page */}
                <div className="flex flex-col items-center h-[100%] ">
                    <div className="text-center w-[100%]  pt-[8rem] pb-[12rem]  bg-[#222629]">
                        <div className="mt-16 mb-8 flex justify-center items-center gap-4 ">
                            {/* <a href={"https://github.com/CSweetman"} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="bg-transparent fa-2xl mt-5 pt-2 px-2 border-t-[3px] border-[#2c4f58] text-[#ffffff] hover:border-transparent hover:text-[#2c4f58] hover:outline-none cursor-pointer transition delay-[50ms]"
                                    style={{ textDecoration: "none" }}
                                    />
                                    </a> */}
                            <h1 className="text-3xl md:text-4xl lg:text-6xl  text-white">Christopher Sweetman</h1>
                            {/* <a
                                href={"https://www.linkedin.com/in/christopher-sweetman/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <FontAwesomeIcon
                                icon={faLinkedin}
                                className="bg-transparent fa-2xl mt-5 pt-2 px-2 border-t-[3px] border-[#2c4f58] text-[#ffffff] hover:border-transparent hover:text-[#2c4f58] hover:outline-none cursor-pointer transition delay-[50ms]"
                                style={{ textDecoration: "none" }}
                                />
                                </a> */}
                        </div>
                        <h1 className="text-4xl mb-8 text-[#ffffff]">Welcome to my Portfolio</h1>
                        <div className="flex justify-center gap-4">
                            <AboutButton
                                color={"DARK"}
                                text="LinkedIn"
                                url="https://www.linkedin.com/in/christopher-sweetman/"
                            />
                            <AboutButton color={"LIGHT"} text="Github" url="https://github.com/CSweetman" />
                        </div>
                    </div>

                    <div className="h-[10px] bg-[#3e4044] w-[100%]"></div>
                    {/* Projects */}
                    <div className=" text-center bg-[#51515E] py-[6rem]">
                        <h1 className="text-5xl mb-16 text-[#ffffff]">About Me</h1>
                        <div className="flex justify-center">
                            <div className="w-[80%] lg:w-[55%]  flex flex-col xl:flex-row justify-center gap-20 z-10">
                                <div className="">
                                    <p className="text-[#fff8ff] sm:text-sm md:text-base">
                                        Hi, I'm <span className="text-[#ff8aa9]">Christopher Sweetman</span>. I'm a full
                                        stack web developer with 3 years of work experience under my belt. I started
                                        passionately create web app projects in my own time and have been keeping up to
                                        date with the web development landscape. I specialize with more front end
                                        technologies being most proficient with React while having a background in
                                        Angular, SolidJS and Next.js. On the backend I can set up servers using Java
                                        frameworks such as Spring Boot and other dabbled with other frameworks like KTOR
                                        and Flask.
                                        <br />
                                        <br />
                                        Please check out some of the projects I have worked on and hosted on the main
                                        page. I will be updating this portfolio as I add more projects and with more
                                        pages over time! I am currently looking for a new developer position, please
                                        reach out if you are interested.
                                    </p>
                                </div>
                                <div className="ml-20 flex items-center">
                                    <Timeline />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[10px] bg-[#595964] w-[100%]"></div>
                    <div className="text-center w-[100%] h-[900px] bg-[#5E5E66] py-20  ">
                        <h1 className="text-5xl font-bold tracking-wider text-white mb-8">Projects</h1>
                        <h2 className="text-3xl font-bold tracking-wider text-white mb-12">
                            Please check out my prior works!
                        </h2>
                        <Carousel />

                        {/* <div className="mt-10 w-[100%]"> */}
                        {/* <dl className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-20 gap-y-10"> */}
                        {/* <dl className="w-[70%] grid grid-cols-auto gap-y-10"> */}
                        {/* <div className="flex justify-evenly gap-20 flex-wrap"> */}
                        {/* {projects.map((prj, i) => (
                                    <ProjectCard {...prj} key={i} />
                                ))} */}
                        {/* </div> */}
                        {/* </dl> */}
                        {/* </div> */}
                    </div>

                    {/* BREAK */}
                    <div className="h-[10px] bg-[#585862] w-[100%]"></div>

                    {/* TECH STACK */}
                    <div className=" w-[100%] bg-[#51515E] py-20 text-white">
                        {/* MAIN TECH STACK */}
                        <h1 className="text-center text-5xl font-bold tracking-wider mb-16">Tech Stack</h1>
                        <div className="text-center mx-[10%] md:mx-[30%] flex flex-col mt-10 gap-10">
                            <div className="flex flex-row gap-16 justify-center flex-wrap">
                                {techStack.map((tech: TechStack, i) => {
                                    return (
                                        <div
                                            className={`flex py-2 w-24 flex-col items-center border-t-[3px] hover:text-[#ff8aa9] cursor-pointer transition-colors delay-[50ms] outline-none
                                                        ${desc === i ? "text-[#ff8aa9]  border-[#ff8aa9]" : "text-[#aad1db] border-transparent"}`}
                                            onClick={() => setDesc(i)}
                                            key={i}
                                        >
                                            <DynamicIconRenderer iconName={tech.name} props={{ size: 75 }} />
                                            <p
                                                className={`lg:text-xl   ${desc === i ? "text-[#ff8aa9]" : "text-[#ffffff] hover:text-[#ff8aa9]"}`}
                                            >
                                                {tech.name}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex justify-center w-[100%] py-[2rem] md:py-[4rem] px-[1rem] bg-[#222629] rounded-2xl">
                                <p className=" text-sm md:text-base md:h-[7rem] lg:h-[4rem]">
                                    {techStack[desc].description}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-12  md:px-32 gap-12">
                            {Object.entries(techList).map(([key, value], i) => (
                                <TechRow key={i} title={key} tech={value} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
