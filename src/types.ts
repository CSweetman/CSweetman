export type ProjectProps = {
    project: Project
    idx: number
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

export type TimelineProps = {
    year: string
    title: string
}

export type AboutButtonColors = "DARK" | "LIGHT"
