import React, { useState } from "react";
import "./Hero.scss";
import NavBar from "../NavBar/NavBar";
import video from "../../Assets/473287184.mp4";

const HeroArea = () => {
  const [scale, setScale] = useState(1);
  const scaleVideo = () => {
    const scaleValue = `1.${window.scrollY}`;
    setScale(scaleValue);
  };
  window.addEventListener("scroll", scaleVideo);
  console.log(scale);
  return (
    <div className="HeroMainContainer">
      <video muted autoPlay loop src={video} />
      <div className="HeroNavBar">
        <NavBar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <h1>
              Buy, Sell, Send, Receive, Store, Stake Trade INR(D) worldwide
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
