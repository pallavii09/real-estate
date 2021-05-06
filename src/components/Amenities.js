import React, { Component } from "react";
import './style.css';

function Amenities(props) {
    return(
<div class="flex-container client-section">


<div class="item">
      <img src="/assets/img/Cafeteria.png" />
      <h4>Cafeteria</h4>
</div>
<div class="item">
      <img src="/assets/img/Dining Room.png" />
      <h4>Dining Room</h4></div>
<div class="item">
      <img src="/assets/img/entrance Lobby.png" />
      <h4>Entrance Lobby</h4></div>  
<div class="item">
      <img src="/assets/img/Kids Activity Room.png" />
      <h4>Kids Activity Room</h4></div>
<div class="item">
      <img src="/assets/img/Landscape Garden.png" />
      <h4>Landscape Garden</h4></div>
<div class="item">
      <img src="/assets/img/weightlifter.png" />
      <h4>Gymnasium</h4></div>  
</div>

);

}
export default  Amenities;