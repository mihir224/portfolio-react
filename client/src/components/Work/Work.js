import React from "react";
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import work from './Work.json';


import './Work.scss';

function Work(){
    const elementStyling={ 
        background: '#030637', 
        color: '#fff', 
        border:'none',
        margin:0,
        padding:'20px',
        textAlign:'justify'
    } 
    const iconStyling={ 
        background: 'white', 
        color: '#000000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center' 
    }
    return(
        <div id='work-div'>
            <VerticalTimeline className="timeline" lineColor="#030637">
            {work.map((workItem,idx)=>(
                <VerticalTimelineElement 
                key={idx}
                className="vertical-timeline-element--work"
                contentStyle={elementStyling}
                date={workItem.date}
                iconStyle={iconStyling}
                icon={<img src={workItem.logo} alt='ev.png' style={{height:'60%',width:'60%'}}></img>}
            >
                <h3 className="vertical-timeline-element-title">{workItem.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{workItem.company}</h4>
                <p>
                {workItem.roleDesc}
                </p>
            </VerticalTimelineElement>
            ))}
            
        
            </VerticalTimeline>
        </div>
    )
}

export default Work;