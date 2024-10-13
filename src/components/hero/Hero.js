import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div id="hero-container">
      <div id="text">
        <div id="annoying">
          <h1>Khuvsgul Lake</h1>
        </div>
        <div>
          <h2>TRIP</h2>
        </div>
      </div>
      <div id="image-container">
        <img src="img1.png" alt="1"></img>
        <img src="img2.png" alt="2"></img>
        <img src="img3.png" alt="3"></img>
        <img src="img4.png" alt="4"></img>
      </div>
    </div>
  );
};
