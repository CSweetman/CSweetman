export interface IconProps {
    size?: string | number // You can pass the size as a string or number
    // color?: string // Color prop for the icon
    className?: string // className prop for the icon
}

export type ProjectProps = {
    project: Project
    idx: number
}

export type TechRowProps = {
    title: string,
    tech: string[],
}

export type Project = {
    id: number
    name: string
    description: string
    url: string
    image: string
    stack: {
        name: string
        priority: number
    }[]
}

export type TechStack = {
    name: string
    description?: string
    // img: IconType
}

export type TimelineProps = {
    year: string
    title: string
}

export type AboutButtonColors = "DARK" | "LIGHT"
