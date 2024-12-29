import { AboutButtonColors } from "../types"
import { Link } from "react-router-dom"

type AboutButtonProps = {
    color: AboutButtonColors
    text: string
    url: string
}

const getStyles = (color: string) => {
    switch (color) {
        case "DARK":
            return "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        case "LIGHT":
            return "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        default:
            return "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    }
}

const AboutButton = (props: AboutButtonProps) => {
    return (
        <>
            <Link to={props.url} target="_blank" rel="noopener noreferrer">
                <button type="button" className={getStyles(props.color)}>
                    {props.text}
                </button>
            </Link>
        </>
    )
}

export default AboutButton
