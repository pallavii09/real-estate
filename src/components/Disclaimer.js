import React from 'react';
import './style.css';

function Disclaimer(props) {
    return(
        <div class="Disclaimer row">        
        <div class="column Disclaimer-Col">
            <h2>{props.heading}</h2>
            <p>{props.description} </p>
            <p>{props.description1}</p>
        </div>

        </div>
    );

}
export default Disclaimer;