import { TechRowProps } from "../types"
import DynamicIconRenderer from "./DynamicIconRenderer"

const TechRow = ({ title, tech }: TechRowProps) => {
    return (
        <>
            <div className="flex  flex-col gap-8">
                <h1 className="text-2xl text-center">{title}</h1>
                <div className="flex flex-row justify-center gap-8 md:gap-24 flex-wrap">
                    {tech.map((t, i) => (
                        <div key={i} className="flex items-center flex-col gap-4 md:w-12 text-[#aad1db]">
                            <DynamicIconRenderer iconName={t} props={{ className: "w-8 h-8 md:w-16 md:h-16" }} />
                            <p className="hidden md:block text-xs md:text-base text-center text-white w-8 md:w-24 ">
                                {t}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechRow
