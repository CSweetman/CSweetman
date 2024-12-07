import React from "react"
import { ProjectProps } from "../types"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projectData"

const HomePage = () => {
    return (
        <>
            <section className="">
                {/* Welcome Page */}
                <div className="flex flex-col justify-start items-center bg-style pt-[10rem] px-10 h-[100%] gap-20 min-h-[80vh]">
                    <div className="text-center">
                        <h1 className="text-4xl text-csweet-dark-font">Welcome to my Portfolio</h1>
                        <h2 className="mt-3 text-2xl text-csweet-dark-font">Please check out my prior projects!</h2>
                    </div>
                    {/* Projects */}
                    <div className="text-center w-[100%]">
                        <div className="text-3xl font-bold tracking-wider text-csweet-dark-font uppercase">
                            Projects
                        </div>
                        <div className="mt-10 w-[100%]">
                            <dl className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-20 gap-y-10">
                                {/* <dl className="w-[70%] grid grid-cols-auto gap-y-10"> */}
                                {/* <div className="flex justify-evenly gap-20 flex-wrap"> */}
                                {projects.map((prj, i) => (
                                    <ProjectCard {...prj} key={i} />
                                ))}
                                {/* </div> */}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
