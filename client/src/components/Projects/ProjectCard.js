import React,{useEffect, useState} from "react";
import {Tilt} from 'react-tilt';
import './Projects.scss';
import {motion} from 'framer-motion';

function ProjectCard({project}){
    const [tap, setTap]=useState(false);
    const [isMobile, setIsMobile]=useState(false);

    useEffect(()=>{
        const checkMobile=window.matchMedia("(max-width: 400px)").matches;
        setIsMobile(checkMobile)
    },[])

    const defaultOptions = {
        reverse:        false, 
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
        height: isMobile?'40vh':'60vh', 
        width: isMobile?'35vh':'45vh', 
        padding:'10px',
        borderRadius:'10px',
        boxShadow:'0px 0px 5px #EEF5FF',
        color:'black',
        cursor:'pointer',
        background: `url(${project.imgUrl})`,  
        backgroundColor:'#EEF5FF',
        backgroundSize:'100% 42%',
        backgroundRepeat: 'no-repeat',
        display:'flex',
        alignItems:'flex-end',
    
        
    }
    const clampStyling={
        textAlign: "justify",
        opacity: "0.8",
        fontSize: "15px",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: tap?"initial":6,
        overflow: tap?"scroll":"hidden",
        textOverflow: "ellipsis",
        margin:0,
        padding:0,
        height:'52%',
    }
    
    const handleClick=()=>{
        setTap(!tap);
    }
    return (
        <Tilt className="project-card"  options={defaultOptions} style={customStyling}>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:'0.4',delay:(0.2*project.id)}}} id='card-body' onClick={handleClick}>
                <a id='title-link' href={project.live}>
                    <h2 >
                        {project.title}
                    </h2>
                </a>
                <p style={clampStyling}>
                {project.projectDesc}
                </p>
                <div>
                    <a id='live-link' href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
                    <a id='github-link' href={project.github} target="_blank" rel="noreferrer">Source Code</a>
                </div>
            </motion.div>
        </Tilt>
    )
}

export default ProjectCard;