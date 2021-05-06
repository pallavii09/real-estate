import React from 'react';
import IMAGES from './Image';
import './style.css';
//import house from '../house.jpg';



function HomeBanner(props) {
  const bgcontainer = {
    position: "relative",
  }
  const textbox = {
    position: "absolute",
  bottom: "32%",
  right: "0%",
  left: "0",
  backgroundColor: "rgb(48 71 170 / 81%)",
  color: "white",
  padding: "20px 0 40px 40px",
  width: "40%",
  margin: "0 auto",
  }

    return(
      <div className="App" style={bgcontainer}>
        <img src={IMAGES.BANNER} alt='house'  height={props.height} width={props.width} />
      </div> 
    );
  }
  export default HomeBanner;
