import React,{useRef} from "react";
import './Parallax.scss';
import {motion,useScroll,useTransform} from 'framer-motion';

function Parallax({type}){
    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const ytext=useTransform(scrollYProgress,[0,1],["0%","405%"]);
    const ybg=useTransform(scrollYProgress,[0,1],["0%","70%"]);
    const pxbg=useTransform(scrollYProgress,[0,1],["0%","80%"]);
    const nxbg=useTransform(scrollYProgress,[0,1],["0","-80%"]);
    const rain=useTransform(scrollYProgress,[0,1],["0%","40%"]);

    const starStyling={
        position:'absolute',
        backgroundImage: `url('/stars.png')`,
        height: '100%',
        width: '100%',
        x:nxbg
    }

    const rainStyling={
        position:'absolute',
        backgroundImage: `url('/rain.png')`,
        backgroundSize:'100% 50%',
        backgroundRepeat:'no-repeat',
        height: '100%',
        width: '100%',
        y:rain,
        zIndex:5
    }
    
    return(
        <div id='parallax' ref={ref}>
            <motion.h1 style={{y:ytext}}>
                {type==='1'&&'Projects'}
                {type==='2'&&'Work'}
                {type==='3'&&'Coding + Socials'}
            </motion.h1>
            {type==='1'&&<motion.div id='stars' style={starStyling}></motion.div>}
            {type==='3'&&<motion.div id='stars' style={rainStyling}></motion.div>}
            <motion.div id='clouds' style={{x:pxbg}}>
                <img src='/clouds.png'></img>
                <img src='/clouds.png'></img>
            </motion.div>
            <motion.div id='moon' style={{y:ybg}}>
                {(type==='1'||type==='3')&&<img src='/moon.png'></img>}
                {type==='2'&&<img src='/sun.png' ></img>}
            </motion.div>
            <div id='mountains'>
                {type==='1'&&<img src='/mountains.png'></img>}
                {type==='2'&&<img src='/beach.png'></img>}
                {type==='3'&&<img src='/road.png' ></img>}
            </div>
        </div>
    );
}

export default Parallax;