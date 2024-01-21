import React,{useState} from "react";
import './Sidebar.scss';
import {motion} from 'framer-motion';

function Sidebar(){
    const [open,setOpen]=useState(false);
    const variants={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
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
    const links=["Projects","Work","Resume","Coding & Socials"]
    return (
        <motion.div id='sb' animate={open?"open":"close"}>
            <motion.div id='links' variants={variants}>
                
                <ul id ='nav-list'>   
                    <h2>Quick Nav</h2> 
                    {links.map((link,idx)=>(
                        <li key={idx}><a href={`#${link}`}>{link}</a></li>
                    ))}
                </ul>
            </motion.div>
            <div>
                <button id='dd-btn' type='button' onClick={()=>setOpen((prev)=>!prev)}><img src="/dd.png" height='36' width='36'></img></button>
            </div>
        </motion.div>
    )
}

export default Sidebar;