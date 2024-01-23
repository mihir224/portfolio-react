import React,{useRef} from "react";
import './Parallax.scss';
import {motion,useScroll,useTransform} from 'framer-motion';

function Parallax(){
    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const ytext=useTransform(scrollYProgress,[0,1],["0%","335%"]);
    const ybg=useTransform(scrollYProgress,[0,1],["0%","70%"]);
    const pxbg=useTransform(scrollYProgress,[0,1],["0%","50%"]);
    const nxbg=useTransform(scrollYProgress,[0,1],["0","-80%"]);

    return(
        <div id='parallax' ref={ref}>
            <motion.h1 style={{y:ytext}}>Projects</motion.h1>
            <motion.div id='stars' style={{x:nxbg}}></motion.div>
            <motion.div id='clouds' style={{x:pxbg}}>
                <img src='/clouds.png'></img>
                <img src='/clouds.png'></img>
            </motion.div>
            <motion.div id='moon' style={{y:ybg}}>
                <img src='/moon.png'></img>
            </motion.div>
            <div id='mountains'>
                <img src='/mountains.png'></img>
            </div>
        </div>
    );
}

export default Parallax;