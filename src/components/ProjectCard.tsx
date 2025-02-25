import { ProjectProps } from "../types"
import Badge from "./Badge"
import Tooltip from "@mui/material/Tooltip"

const ProjectCard = ({ project, idx }: ProjectProps) => {
    const getHostedHeaderStyles = (isHosted: boolean) => {
        return isHosted ? "text-white " : "text-red-300"
    }

    const getHostedStyles = (isHosted: boolean) => {
        return isHosted ? "" : ""
    }

    return (
        <>
            <Tooltip
                title={project.url !== "" ? "" : <p style={{ fontSize: "16px" }}>Not Hosted Yet</p>}
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
                    className={`${getHostedStyles(project.url !== "")}  text-white py-[10px] h-[500px] mx-auto 2xl:w-[400px] lg:w-[400px] md:w-[300px] sm:w-[240px] rounded-3xl  flex flex-col gap-2 z-10`}
                >
                    {/* <div className="text-2xl flex justify-center items-center w-[100%] "> */}
                    <div className="text-2xl w-[100%] ">
                        <div></div>
                        <div
                            className={`${getHostedHeaderStyles(project.url !== "")} ${idx % 2 === 0 ? "border-[#2c4f58]" : "border-[#fa78a1]"} border-t-4 pt-4 pb-4`}
                        >
                            {project.name}
                        </div>
                    </div>

                    <div className="flex justify-center border-2 mx-auto p-3 rounded-md bg-[#ecfefd] ">
                        {project.url !== "" ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt="" width={400} />
                            </a>
                        ) : (
                            <img src={project.image} alt="" width={400} />
                        )}
                    </div>
                    <div className="flex flex-col h-[100%]  justify-between items-center gap-4 px-8 text-left">
                        <div className="flex h-[100%] justify-between items-center">
                            <p>{project.description}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center">
                            {project.stack.map((badge, i) => (
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
