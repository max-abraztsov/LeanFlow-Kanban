import React, {FC} from "react"
import "./Projects.scss"
import AddProjectButton from "../../components/UI/AddProjectButton/AddProjectButton";
import Project from "../../components/Project/Project";
import storage from "../../api/api";


const Projects: FC = () => {
    return (
        <div className="wrapper">
            <section className="projects">
                <div className="projects__head">
                    <h1 className="projects__title">Projects</h1>
                    <AddProjectButton />
                </div>
                <div className="projects__block">
                    {storage.map((project, index) => 
                        <Project
                            key={`${project.id}${project.project__name}`}
                            project={project.project__name}
                        ></Project>
                    )}
                </div>
            </section>
        </div>
    )
};

export default Projects;