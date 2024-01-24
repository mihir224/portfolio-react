import React from "react";
import ProjectCard from "./ProjectCard";
import './Projects.scss';
import projects from './Project.json';

function Projects(){
    return (
        <div id='projects-div'>
            {projects.map((project,idx)=>(
                 <ProjectCard key={idx} project={project}/>
                 ))}
        </div>
        
    )
}

export default Projects;