import React, { useState } from "react";
import "./Hero.scss";
import NavBar from "../NavBar/NavBar";
import video from "../../Assets/Untitled.mp4";

const HeroArea = () => {
  const [scale, setScale] = useState(1);
  const scaleVideo = () => {
    const scaleValue = `1.${window.scrollY}`;
    setScale(scaleValue);
  };
  window.addEventListener("scroll", scaleVideo);
  return (
    <div className="HeroMainContainer">
      <video className="HeroVideo" muted autoPlay loop src={video} />

      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <h1>SEND MONEY TO INDIA</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
