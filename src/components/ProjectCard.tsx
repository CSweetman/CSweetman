import React from "react"
import { ProjectProps } from "../types"
import Badge from "./Badge"
import Tooltip from "@mui/material/Tooltip"

const ProjectCard = (props: ProjectProps) => {
    const getCardBg = (isHosted: boolean) => {
        return isHosted ? "text-black" : "text-red-300"
    }

    return (
        <>
            <div
                className={`py-[10px] mx-auto 2xl:w-[480px] lg:w-[400px] md:w-[300px] sm:w-[240px] rounded-3xl bg-white  hover:bg-[#b9d8d7] flex flex-col gap-2 z-10`}
            >
                {/* <div className="text-2xl flex justify-center items-center w-[100%] "> */}
                <div className="text-2xl w-[100%] ">
                    <div></div>
                    <Tooltip
                        title={props.url !== "" ? "" : "Not Hosted Yet"}
                        placement="top"
                        slotProps={{
                            popper: {
                                modifiers: [
                                    {
                                        name: "offset",
                                        options: {
                                            offset: [0, 0],
                                        },
                                    },
                                ],
                            },
                        }}
                    >
                        <div className={`${getCardBg(props.url !== "")}`}>{props.name}</div>
                    </Tooltip>
                </div>

                <div className="flex justify-center border-2 mx-auto p-3 rounded-md bg-[#ecfefd] ">
                    {props.url !== "" ? (
                        <a href={props.url} target="_blank" rel="noopener noreferrer">
                            <img src={props.image} alt="" width={400} />
                        </a>
                    ) : (
                        <img src={props.image} alt="" width={400} />
                    )}
                </div>
                <div className="flex flex-col h-[100%]  justify-between items-center gap-4 px-8 text-left">
                    <p>{props.description}</p>
                    <div className="flex gap-2 flex-wrap justify-center">
                        {props.stack.map((badge, i) => (
                            <Badge {...badge} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
