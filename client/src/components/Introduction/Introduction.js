import React,{useState} from 'react';
import './Introduction.scss';
import {motion} from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';

function Introduction(){
    const [animationComplete,setAnimationComplete]=useState(false);
    const variants={
        visible:{
            opacity:1,
            transition:{staggerChildren:0.5}
        },
        hidden:{opacity:0}
        
    }

    const items=[
        {
            title:"See Projects",
            section:"Projects"
        },
        {
            title:"Contact Me",
            section:"Coding & Socials"
        },
        {
            title:"Download Resume",
            section:"/resume.pdf"
        }
    ]
    const handleAnimationComplete=()=>{
        setAnimationComplete(true);
    }
    return (
        <div id='intro-div'>
            <Sidebar/>
            <div id='intro-wrapper'>
            <div id='img-container'>
                <motion.img 
                id='dp' 
                src='/photo-cropped.png' 
                alt='mihir.jpg' 
                initial={{y:500,opacity:0}} 
                animate={{y:0,opacity:1,
                transition:{duration:1.2}}}>
                </motion.img>
            </div>
            <div id='intro-txt'>
            <motion.h1
                id='name'
                initial={{opacity:0,y:50}} 
                animate={{opacity:1,y:0}} 
                transition={{duration:1}}
                >
                MIHIR SAINI
            </motion.h1>
            <motion.h1 
            id='desc'
            initial={{opacity:0,y:50}} 
            animate={{opacity:1,y:0}} 
            transition={{duration:1}}
            onAnimationComplete={handleAnimationComplete}
            >Software Developer & Web Enthusiast</motion.h1>
            <motion.div id='btn-div'  
            animate={animationComplete?"visible":"hidden"} 
            variants={variants} 
            
            >
                {items.map((item,idx)=>
                    {
                        if(idx===2){
                            return(
                                <motion.a
                                href={item.section}
                                variants={variants} 
                                key={item} 
                                whileTap={{scale:0.9}} 
                                whileHover={{background:'white',color:'black'}}
                                download={'Mihir Saini.pdf'}
                                >{item.title}</motion.a>
                            )
                        }
                        return(
                            <motion.a
                            href={`#${item.section}`}
                            variants={variants} 
                            key={item} 
                            whileTap={{scale:0.9}} 
                            whileHover={{background:'white',color:'black'}}
                            >{item.title}</motion.a>
                        )
                    }
                )}
            </motion.div>
            <motion.div 
            id='scroll-div'
            animate={{opacity:0,y:20,transition:{duration:1.5,repeat:Infinity}}}
            whileTap={{scale:1.2}}
            >
                <a id='scroll-btn' href='#Projects'>
                    <img 
                    src='/scrollDown.png' 
                    alt='scroll.jpg'
                    ></img>
                </a>
            </motion.div>
            </div>
            <div id='sliding-txt'>
                <motion.h1 initial={{x:0}}
            animate={{x:"-600%",transition:{duration:90,repeat:Infinity,repeatType:"mirror"}}}>CODING. WEB. FOOTBALL. MUSIC. PROBLEM SOLVING.</motion.h1>
            </div>
            </div>
        </div>
    )
}

export default Introduction;