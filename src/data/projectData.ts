import { ProjectProps } from "../types"
import img1 from "../assets/project-imgs/1.jpg"
import img2 from "../assets/project-imgs/2.jpg"
import img3 from "../assets/project-imgs/3.jpg"

export const projects: ProjectProps[] = [
    {
        id: 1,
        name: "NeetDraw",
        description: `A gameified daily todo list that gives the user a random amount leetcode problems to do each day. 
            The full list of problems is scraped from Neetcode, hence the name NeetDraw. Inspired by Wordle`,
        url: "//www.google.com",
        image: img1,
        stack: [
            {
                name: "React",
                priority: 3,
            },
            {
                name: "Tailwind",
                priority: 3,
            },
            {
                name: "Typescript",
                priority: 2,
            },
            {
                name: "Leetcode",
                priority: 1,
            },
        ],
    },
    {
        id: 2,
        name: "Minesweeper",
        description: `Minesweeper game app built in React.`,
        url: "//www.google.com",
        image: img2,
        stack: [
            {
                name: "React",
                priority: 3,
            },
            {
                name: "Tailwind",
                priority: 3,
            },
            {
                name: "Typescript",
                priority: 3,
            },
        ],
    },
    {
        id: 3,
        name: "Path to Amalgam",
        description: `A SolidJS game where the player controls an army of units across a 2D grid to fight an opposing CPU army with 50+ weapons and spells. Inspired by Fire Emblem`,
        url: "//www.google.com",
        image: img3,
        stack: [
            {
                name: "SolidJS",
                priority: 3,
            },
            {
                name: "Tailwind",
                priority: 3,
            },
            {
                name: "Typescript",
                priority: 3,
            },
            {
                name: "Angular",
                priority: 3,
            },
        ],
    },
]
