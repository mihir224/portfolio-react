import React,{useState} from "react";
import './Sidebar.scss';
import {motion} from 'framer-motion';

function Sidebar(){
    const links=["Home","Projects","Work","Resume","Coding & Socials"]
    const [open,setOpen]=useState(false);
    
    const variants={
        open:{
            clipPath:"circle(1000px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20
            }
        },
        close:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.2,
                type:"spring",
                stiffness:400,
                damping:40
            }
        }
    }
    
    const linkVariants={
        open:{
            opacity:1,
            transition:{staggerChildren:0.15,delayChildren:0.3}
        },
        close:{
            opacity:0
        }
    }

    return (
        <motion.div id='sb' animate={open?"open":"close"}>
            <motion.div id='links' variants={variants} >
                <motion.ul id ='nav-list' variants={linkVariants} >   
                    <h2>Quick Nav</h2> 
                    {links.map((link,idx)=>(
                        <motion.li key={idx} variants={linkVariants} whileHover={{scale:1.1}} whileTap={{scale:0.9}}><a href={`#${link}`}>{link}</a></motion.li>
                    ))}
                </motion.ul>
            </motion.div>
            <div>
                <button id='dd-btn' type='button' onClick={()=>setOpen((prev)=>!prev)}><motion.img animate={open?{rotate:"180deg"}:{rotate:"0deg"}} whileHover={{scale:1.2}} transition={{duration:0.3}} src="/dd.png" height='40' width='40' alt="dd-icon"></motion.img></button>
            </div>
        </motion.div>
    )
}

export default Sidebar;