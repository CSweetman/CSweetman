import { ProjectProps } from "../types"
import minesweeper from "../assets/project-imgs/csweetman-minesweeper.png"
import neetdraw from "../assets/project-imgs/csweetman-neetdraw-crop.png"
import amalgam from "../assets/project-imgs/path-to-amalgam.png"

export const projects: ProjectProps[] = [
    {
        id: 1,
        name: "NeetDraw",
        description: `A gameified daily todo list that gives the user a random amount leetcode problems to do each day. 
            The full list of problems is scraped from Neetcode, hence the name NeetDraw. Inspired by Wordle`,
        url: "//www.csweetman-neetdraw.com/",
        image: neetdraw,
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
        description: `Minesweeper app built in React. Built with multiple themes with accessibility in mind. See if you can avoid getting exploded on!`,
        url: "//www.csweetman-minesweeper.com/",
        image: minesweeper,
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
        url: "",
        image: amalgam,
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
