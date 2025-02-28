import React from "react"
import { IconProps } from "../types"
import { stackIconMap } from "../data/techStackData"

const DynamicIconRenderer: React.FC<{ iconName: string; props?: IconProps }> = ({ iconName, props = {} }) => {
    const IconComponent = stackIconMap[iconName.toLowerCase()]

    if (!IconComponent) {
        return <div>Icon not found</div>
    }

    // Render the icon with the passed props
    return <IconComponent {...props} />
}

export default DynamicIconRenderer
