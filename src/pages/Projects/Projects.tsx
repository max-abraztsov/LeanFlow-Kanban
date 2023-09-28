import React, {FC, useState} from "react"
import "./Projects.scss"
import AddProjectButton from "../../components/UI/AddProjectButton/AddProjectButton";
import Project from "../../components/Project/Project";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import Description from "../../components/UI/Description/Description";
import CompleteButton from "../../components/UI/CompleteButton/CompleteButton";
import CancelButton from "../../components/UI/CancelButton.tsx/CancelButton";
import storage from "../../api/api";


const Projects: FC = () => {
    const [modalActive, setModalActive] = useState(false);
    const [newProjectData, setNewProjectData] = useState({
        id: Date.now(),
        project__name: "",
        project__description: "",
        tasks: [],
    });

    const cancelAdding = () => {
        setModalActive(false);
        setNewProjectData({ id: Date.now(), project__name: "", project__description: "", tasks: [],});
    }

    const completeAdding = () => {
        storage.push(newProjectData);
        cancelAdding();
        console.log(storage);
    }

    return (
        <div className="wrapper">
            <section className="projects">
                <div className="projects__head">
                    <h1 className="projects__title">Projects</h1>
                    <AddProjectButton setActive={setModalActive}/>
                </div>
                <div className="projects__block">
                    {storage.map( project => 
                        <Project
                            key={`${project.id}${project.project__name}`}
                            project={project.project__name}
                            description={project.project__description}
                        ></Project>
                    )}
                </div>
            </section>
            <Modal active={modalActive} setActive={setModalActive}>
                <Input
                    placeholder={"Enter a name of project"}
                    value={newProjectData.project__name}
                    getValue={(value) => setNewProjectData({ ...newProjectData, project__name: value })} 
                />
                <Description
                    placeholder="Enter your description"
                    value={newProjectData.project__description}
                    getValue={(value) => setNewProjectData({ ...newProjectData, project__description: value })} 
                />
                <div className="buttons">
                    <CompleteButton completeActive={completeAdding}></CompleteButton>
                    <CancelButton cancelActive={cancelAdding}></CancelButton>
                </div>
            </Modal>
        </div>
        
    )
};

export default Projects;