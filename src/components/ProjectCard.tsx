import { ProjectProps } from "../types"
import Badge from "./Badge"
import Tooltip from "@mui/material/Tooltip"

const ProjectCard = (props: ProjectProps) => {
    const getHostedHeaderStyles = (isHosted: boolean) => {
        return isHosted ? "text-black " : "text-red-300"
    }

    const getHostedStyles = (isHosted: boolean) => {
        return isHosted ? "hover:bg-[#b9d8d7] " : ""
    }

    return (
        <>
            <Tooltip
                title={props.url !== "" ? "" : <p style={{ fontSize: "16px" }}>Not Hosted Yet</p>}
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
                <div
                    className={`${getHostedStyles(props.url !== "")} py-[10px] mx-auto 2xl:w-[480px] lg:w-[400px] md:w-[300px] sm:w-[240px] rounded-3xl bg-white flex flex-col gap-2 z-10`}
                >
                    {/* <div className="text-2xl flex justify-center items-center w-[100%] "> */}
                    <div className="text-2xl w-[100%] ">
                        <div></div>
                        <div className={`${getHostedHeaderStyles(props.url !== "")}`}>{props.name}</div>
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
            </Tooltip>
        </>
    )
}

export default ProjectCard
