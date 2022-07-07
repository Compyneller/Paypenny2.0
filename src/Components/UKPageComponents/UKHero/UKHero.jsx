import React from "react";
// import NavBar from "../../NavBar/NavBar";
const UKHero = ({ video, heading }) => {
  return (
    <div className="EarnHeroMainContainer">
      <div className="EarnForeground">
        <video muted autoPlay loop className="EarnBanner" src={video} alt="" />
      </div>

      <div className="container">
        <h1>{heading}</h1>
        <h4>
          Just Download the Paypenny app, Get your KYC done in under a minute
          and Send Crypto to your loved ones worldwide!
        </h4>
      </div>
    </div>
  );
};

export default UKHero;
