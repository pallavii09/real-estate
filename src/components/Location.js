import React, { Component } from "react";
import './style.css';

function Location(props) {
    return(
<div class="flex-container Location-section">

<div class="Location-row"><h2>Location</h2>


<div class="item">
      <h3>5<span>Min</span></h3>
      <h4>Western Express Highway</h4>
</div>
<div class="item">
      <h3>9<span>Min</span></h3>
      <h4>Bandra Railway Station</h4>
</div>
<div class="item">
      <h3>20<span>Min</span></h3>
      <h4>Podar International School</h4>
</div>
<div class="item">
      <h3>12<span>Min</span></h3>
      <h4>Lilavati Hospital</h4>
</div>
<div class="item">
      <h3>10<span>Min</span></h3>
      <h4>Bandra Vorli Sea Link</h4>
</div>
</div>
</div>
);

}
export default  Location;