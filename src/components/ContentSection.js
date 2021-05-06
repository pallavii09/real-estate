import React from 'react';
import './style.css';

function ContentSection(props) {
    return(
        <div class="Content row">        
        <div class="column Content">
            <h2>{props.heading}</h2>
            <p>{props.description} </p>
            <button>Know More</button>
        </div>

        </div>
    );

}
export default ContentSection;