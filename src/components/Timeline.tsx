import { timeline } from "../data/timelineData"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"

const Timeline = () => {
    return (
        <>
            <div className="hidden xl:flex flex-col border-l-2 border-l-white text-white pb-8 ">
                {timeline.map((event, i) => (
                    <div className="pl-6 text-left text-[14px]" key={i}>
                        <div className="h-8">
                            <div className="relative right-[85px] top-[32px]">{event.year}</div>
                            <AccountCircleOutlinedIcon
                                className="relative top-[8px] right-[40px] z-20 bg-[#51515E] text-[#ff8aa9]"
                                style={{ fontSize: 30 }}
                            />
                        </div>
                        <div className="w-40">{event.title}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Timeline
