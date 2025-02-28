import { Project } from "../types"
import minesweeper from "../assets/project-imgs/csweetman-minesweeper.png"
import neetdraw from "../assets/project-imgs/csweetman-neetdraw-crop.png"
import amalgam from "../assets/project-imgs/path-to-amalgam.png"
import inventoryManager from "../assets/project-imgs/csweetman-inventorymanager2.png"

export const projects: Project[] = [
    {
        id: 2,
        name: "Inventory Manager",
        description: `An ecommerce page that allows users to check their expenses and items on various pages.`,
        url: "//main.d1e8mj59u9yn6g.amplifyapp.com/dashboard/",
        image: inventoryManager,
        stack: [
            {
                name: "Nextjs",
                priority: 3,
            },
            {
                name: "Tailwind",
                priority: 3,
            },
            {
                name: "Postgres",
                priority: 3,
            },
            {
                name: "Typescript",
                priority: 2,
            },
            {
                name: "Prisma",
                priority: 2,
            },
        ],
    },
    {
        id: 3,
        name: "NeetDraw",
        description: `A gameified daily todo list that gives random leetcode problems daily. 
            The full list of problems is scraped from Neetcode. Inspired by Wordle`,
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
        id: 4,
        name: "Minesweeper",
        description: `Minesweeper app built in React. Built with multiple themes with accessibility in mind. See if you can avoid the explosions!`,
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
        id: 5,
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
