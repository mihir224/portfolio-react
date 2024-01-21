import React,{useState} from 'react';
import './Introduction.scss';
import {motion} from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';

function Introduction(){
    const [animationComplete,setAnimationComplete]=useState(false);
    const [more,setMore]=useState(false);
    const variants={
        visible:{
            opacity:1,
            transition:{staggerChildren:0.5}
        },
        hidden:{opacity:0}
        
    }
    const items=["Software Engineer","Problem Solver","Web Enthusiast"];
    const handleAnimationComplete=()=>{
        setAnimationComplete(true);
    }
    return (
        <div id='intro-div'>
            <Sidebar/>
            <div id='intro-wrapper'>
            <motion.h1
                id='intro-h1'
                initial={{opacity:0,y:50}} 
                animate={{opacity:1,y:0}} 
                transition={{duration:1}}
                onAnimationComplete={handleAnimationComplete}
               
                >
                Hey there... I'm <span id='name' >Mihir Saini</span>
            </motion.h1>
            <motion.ul id='abt-list'  animate={animationComplete?"visible":"hidden"} variants={variants} >
                {items.map((item)=>(
                    <motion.li variants={variants} key={item} whileTap={{scale:0.9}} whileHover={{scale:1.05}}>{item}</motion.li>
                ))}
            </motion.ul>
            {/* <h2 style={{display:more?"inline":"none"}}>Find out more about me below</h2> */}
            </div>
        </div>
    )
}

export default Introduction;