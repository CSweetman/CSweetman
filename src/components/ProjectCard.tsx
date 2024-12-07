import React from "react"
import { ProjectProps } from "../types"
import Badge from "./Badge"

const ProjectCard = (props: ProjectProps) => {
    return (
        <>
            <div
                className="py-[10px] mx-auto 2xl:w-[480px] lg:w-[400px] md:w-[300px] sm:w-[240px] border-2
             border-[#244047] flex flex-col gap-2 "
            >
                <div className="text-2xl ">
                    <div>{props.name}</div>
                </div>
                <a href={props.url}>
                    <img src={props.image} alt="" />
                </a>
                <div className="flex flex-col h-[100%] justify-center items-center gap-4">
                    <p>{props.description}</p>
                    <div className="flex gap-2 flex-wrap justify-center">
                        {props.stack.map((i) => (
                            <Badge {...i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
