import React from 'react';
import './style.css';

function About(props) {
    return(
        <div class="abt row">
        
        <div class="column aboutContent">
            <h2>{props.heading}</h2>
            <span>{props.span}</span>
            <p>{props.description} </p>
            <button>Know More</button>
        </div>
        <div class="column aboutBox"  >       
            <img src={props.src} height={props.height} width={props.width}/>
        </div>
        
        </div>
    );

}
export default About;