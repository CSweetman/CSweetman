export type ProjectProps = {
    id: number,
    name: string
    description: string
    url: string
    image: string
    stack: {
        name: string
        priority: number
    }[]
}
