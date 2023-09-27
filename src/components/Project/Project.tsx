import React, {FC} from "react"
import "./Project.scss"

interface ProjectProps{
    project: string;
}

const Project: FC<ProjectProps> = ({project}) => {
    return (
        <div className="project">
            <h2 className="project__title">{project}</h2>
        </div>
    )
};

export default Project;