import React from "react";
import ProjectCard from "./ProjectCard";
import './Projects.scss';

function Projects(){
    return (
        <div id='projects-div'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
        
    )
}

export default Projects;