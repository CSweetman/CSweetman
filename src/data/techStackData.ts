import { IconProps, TechStack } from "../types"
// import reactLogo from "../assets/techStackLogos/React-logo.png"
// import expressLogo from "../assets/techStackLogos/express-logo.png"
// import postgresLogo from "../assets/techStackLogos/postgresql-logo.png"
// import awsLogo from "../assets/techStackLogos/aws-logo.png"
import {
    SiReact,
    SiExpress,
    SiPostgresql,
    SiAmazonwebservices,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiAngular,
    SiSolid,
    SiSpring,
    SiTailwindcss,
    SiGithub,
    SiJest,
    SiPostman,
    SiJira,
    SiPython,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { PiFileSql } from "react-icons/pi"

// export const techStack: TechStack[] = [
//     {
//         name: "React",
//     },
// {
//     name: "Express.js",
//     img: expressLogo,
// },
// {
//     name: "Postgres",
//     img: postgresLogo,
// },
// {
//     name: "AWS",
//     img: awsLogo,
// },
// ]

export const techStack: TechStack[] = [
    {
        name: "React",
        description:
            "Most familiar framework that I've built a majority of web apps in. Built familiarty with Reactive frameworks: Next.JS, SolidJS, etc.",
    },
    {
        name: "Express.js",
        description: "Primary tool used to build the backend, APIs, and middleware in my apps.",
    },
    {
        name: "Postgres",
        description: "I have experience with SQL databases and have used Postgres in multiple projects.",
    },
    {
        name: "AWS",
        description:
            "Use many AWS cloud services to supliment apps (DynamoDB, API Gateway, Lambda) and cleanly deploy.",
    },
]

const languageStack = ["JavaScript", "TypeScript", "Java", "SQL", "Python"]
const frameworkStack = ["React", "Next.js", "Angular", "SolidJS", "Spring Boot", "Express.js", "TailwindCSS"]
const toolsStack = ["AWS", "Git", "Jest", "Postman", "Jira"]

export const techList = {
    Languages: languageStack,
    Frameworks: frameworkStack,
    Tools: toolsStack,
}

export const stackIconMap: { [key: string]: React.ComponentType<IconProps> } = {
    react: SiReact,
    "express.js": SiExpress,
    postgres: SiPostgresql,
    aws: SiAmazonwebservices,
    javascript: SiJavascript,
    typescript: SiTypescript,
    java: FaJava,
    sql: PiFileSql,
    python: SiPython,
    "next.js": SiNextdotjs,
    angular: SiAngular,
    solidjs: SiSolid,
    "spring boot": SiSpring,
    tailwindcss: SiTailwindcss,
    git: SiGithub,
    jest: SiJest,
    postman: SiPostman,
    jira: SiJira,
}
