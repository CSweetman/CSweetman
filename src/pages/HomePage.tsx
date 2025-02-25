import Carousel from "../components/Carousel"
import Timeline from "../components/Timeline"

const HomePage = () => {
    return (
        <>
            <section className="">
                {/* Welcome Page */}
                <div className="flex flex-col items-center  h-[100%] min-h-[80vh] z-10 ">
                    <div className="text-center w-[100%] h-[600px] pt-[10rem]  bg-[#222629]">
                        <h1 className="text-4xl text-[#fff0ff]">Welcome to my Portfolio</h1>
                        <h2 className="mt-3 text-2xl text-[#fff0ff] ">Please check out my prior projects!</h2>
                        {/* <h1 className="text-4xl text-csweet-dark-font font-outline-4">Welcome to my Portfolio</h1>
                        <h2 className="mt-3 text-2xl text-csweet-dark-font font-outline-4">
                            Please check out my prior projects!
                        </h2> */}
                    </div>

                    <div className="h-[10px] bg-[#3e4044] w-[100%]"></div>
                    {/* Projects */}
                    <div className="flex justify-center text-center bg-[#474b4f] py-[5rem]">
                        <div className="w-[55%]  flex justify-center gap-20 z-10">
                            <div className="">
                                <p className="text-[#fff8ff] sm:text-sm md:text-base">
                                    Hi, I'm <span className="text-[#ff8aa9]">Christopher Sweetman</span>. I'm a full
                                    stack web developer with 3 years of work experience under my belt. I started
                                    passionately create web app projects in my own time and have been keeping up to date
                                    with the web development landscape. I specialize with more front end technologies
                                    being most proficient with React while having a background in Angular, SolidJS and
                                    Next.js. On the backend I can set up servers using Java frameworks such as Spring
                                    Boot and other dabbled with other frameworks like KTOR and Flask.
                                    <br />
                                    <br />
                                    Please check out some of the proejcts I have worked on and hosted on the main page.
                                    I will be updating this portfolio as I add more projects and with more pages over
                                    time! I am currently looking for a new developer position, please reach out if you
                                    are interested.
                                </p>
                            </div>
                            <div className="ml-20 ">
                                <Timeline />
                            </div>
                        </div>
                    </div>
                    <div className="h-[10px] bg-[#3e4044] w-[100%]"></div>
                    <div className="text-center w-[100%] h-[750px] bg-[#6b6e70] py-20">
                        {/* <div className="text-3xl font-bold tracking-wider text-csweet-dark-font uppercase">
                            Projects
                        </div> */}
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
                </div>
            </section>
        </>
    )
}

export default HomePage
