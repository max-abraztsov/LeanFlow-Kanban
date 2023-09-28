import React, {FC} from "react"
import "./Project.scss"

interface ProjectProps{
    project: string;
    description: string;
}

const Project: FC<ProjectProps> = ({project, description}) => {
    return (
        <div className="project">
            <h2 className="project__title">{project}</h2>
            <p className="project__description">{description}</p>
        </div>
    )
};

export default Project;