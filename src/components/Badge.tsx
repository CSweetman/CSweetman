type BadgeProps = {
    name: string
    priority: number
}

type Badge = {
    bg: string
    text: string
    og: string
}

const nameToColor: { [key: string]: Badge } = {
    react: {
        bg: "bg-[#81e2fc]",
        text: "text-[#1d424b]",
        og: "#61dbfb",
    },
    angular: {
        bg: "bg-[#e11a42]",
        text: "text-[#43000d]",
        og: "#f92c9e",
    },
    tailwind: {
        bg: "bg-[#57b1bb]",
        text: "text-[#143236]",
        og: "#44a8b3",
    },

    solidjs: {
        bg: "bg-[#497fc1]",
        text: "text-[#16263a]",
        og: "#497fc1",
    },
    typescript: {
        bg: "bg-[#5794d2]",
        text: "text-[#0d243c]",
        og: "#2d79c7",
    },
    leetcode: {
        bg: "bg-[#f89f1b]",
        text: "text-[#4a3008]",
        og: "#f89f1b",
    },
    nextjs: {
        bg: "bg-[#000000]",
        text: "text-[#ffffff]",
        og: "#000000",
    },
    prisma: {
        bg: "bg-[#3d5d6f]",
        text: "text-[#082435]",
        og: "#0c344b",
    },
    postgres: {
        bg: "bg-[#7095b2]",
        text: "text-[#244866]",
        og: "#336791",
    },
}

const Badge = (props: BadgeProps) => {
    return (
        <span
            className={`inline-block whitespace-nowrap rounded-full ${nameToColor[props.name.toLowerCase()].bg} ${nameToColor[props.name.toLowerCase()].text} 
                px-[0.65em] pb-[0.35em] pt-[0.35em] text-center align-baseline text-md font-bold leading-none dark:bg-slate-900 dark:text-primary-500
                `}
        >
            {props.name}
        </span>
    )
}

export default Badge
