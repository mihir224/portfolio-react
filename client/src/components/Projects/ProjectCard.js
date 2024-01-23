import React from "react";
import {Tilt} from 'react-tilt';
import './Projects.scss';

function ProjectCard(){
    const defaultOptions = {
        reverse:        true, 
        max:            20,    
        perspective:    1000, 
        scale:          1.1,    
        speed:          1000,   
        transition:     true,   
        axis:           null,   
        reset:          true,    
        easing:         "cubic-bezier(.03,.98,.52,.99)",  
    }
    const customStyling={
        zIndex:500,
        height: 'auto', 
        width: 350, 
        background:'#EEF5FF',
        borderRadius:'10px',
        boxShadow:'0px 0px 4px white',
        color:'black',
        cursor:'pointer'
        
    }
    return (
        <Tilt  options={defaultOptions} style={customStyling}>
            <div id='card-body'>
                <h2>
                    Sample Title
                </h2>
                <img src='/cz.png' height='200' >
                </img>
                <p>
                A chat web application powered by Socket.IO, designed to provide real-time messaging capabilities for users. Provides
                functionality to join and text in multiple rooms simultaneously, with chats being stored in a NoSQL DB and access only
                to authenticated users
                </p>
                <a id='project-link' href='https://github.com/'>See More</a>
            </div>
        </Tilt>
    )
}

export default ProjectCard;