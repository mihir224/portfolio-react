import React,{useRef, useState} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Tilt } from "react-tilt";

import './Contact.scss'
function Contact(){
    const formRef=useRef();
    const [error,setError]=useState(null);

    const links = [
        { id: '1', icon: <GitHubIcon />, label: 'GitHub', url: 'https://github.com/mihir224', username:'mihir224' },
        { id: '2', icon: <img src='/leetcode.png' height='24' width='24' />, label: 'LeetCode', url: 'https://leetcode.com/mihir224',username:'mihir224' },
        { id: '3', icon: <LinkedInIcon />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mihir-saini-3680a481/',username:'mihir-saini-3680a481' },
        { id: '4', icon: <InstagramIcon />, label: 'Instagram', url: 'https://instagram.com/mihir224',username:'mihir224' },
      ];
       
      const frameworks = [
        { website: "https://reactjs.org/", path: "/react.png" },
        { website: "https://www.java.com/", path: "/java.png" },
        { website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", path: "/js.png" },
        { website: "https://redux.js.org/", path: "/redux.png" },
        { website: "https://www.typescriptlang.org/", path: "/ts.svg" },
        { website: "https://nextjs.org/", path: "/next.png" },
        { website: "https://www.mongodb.com/", path: "/mongo.png" },
        { website: "https://nodejs.org/", path: "/node.png" },
        { website: "https://expressjs.com/", path: "/express.png" },
        { website: "https://getbootstrap.com/", path: "/bootstrap.png" },
        { website: "https://www.docker.com/", path: "/docker.png" },
        { website: "https://firebase.google.com/", path: "/fb.png" }
      ];

      const defaultOptions = {
        reverse:        false, 
        max:            45,    
        perspective:    500, 
        scale:          1.1,    
        speed:          1000,   
        transition:     true,   
        axis:           null,   
        reset:          true,    
        easing:         "cubic-bezier(.03,.98,.52,.99)",  
    }
    const customStyling={
        zIndex:500,
        height: '10vh', 
        width: '10vh', 
        padding:'10px',
        borderRadius:'50px',
        boxShadow:'0px 0px 5px #EEF5FF',
        color:'black',
        cursor:'pointer', 
        backgroundColor:'#EEF5FF',
        backgroundRepeat: 'no-repeat',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    }
      const linkVariants={
        visible:{
            opacity:1,
            transition:{staggerChildren:0.4}
        },
        hidden:{
            opacity:0
        }
      }
      
      const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
            setError(false);
            console.log(result.text);
      }, (error) => {
            setError(true);
            console.log(error.text);
      });
      }
    return (
        <div id='contact-div'>
            <div id='contact-details'>
                <div id='phone-container'>
                    <motion.img 
                    src='/phone.png' 
                    alt='phone-icon.png' 
                    animate={{rotate:'-360deg',transition:{duration:5,repeat:Infinity,repeatType:'mirror'}}}
                    ></motion.img>
                    <h2>Contact Me</h2>
                </div>
                <form id='contact-form' ref={formRef} onSubmit={sendEmail}>
                    <input id='Name' type='name' name='name' placeholder="Enter Name" required/>
                    <input id='email' type='email' name='email' placeholder="Enter Email" required/>
                    <textarea  rows="5" cols="80" name="message" placeholder="Description" required></textarea>
                    <button type='submit'>Send</button>
                    {error===false&&<span>Message sent successfully.</span>}
                    {error===true&&<span>An error occured.</span>}
                </form>
            </div>
            <div id='details-div'>
                {frameworks.map((fr,idx)=>(
                     <Tilt key='idx' options={defaultOptions} style={customStyling}>
                        <a href={fr.website} target="_blank"><img id='fr-img' src={fr.path}></img></a>
                    </Tilt>
                ))}
            </div>
            <motion.div id='profile-links' 
                variants={linkVariants} 
                initial='hidden'
                whileInView='visible'>
                    {links.map((link,idx)=>(
                        <motion.div key={idx} id='github' 
                        className='profile' 
                        variants={linkVariants} >
                            <h3>{link.icon} {link.label}</h3>
                            <a href={link.url} target="_blank">@{link.username}</a>
                        </motion.div>
                    ))}
                </motion.div>
        </div>
    )
}

export default Contact;