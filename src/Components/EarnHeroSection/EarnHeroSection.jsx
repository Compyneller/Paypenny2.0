import React from "react";
import banner from "../../Assets/introBusinessEtEconomySansText_1591434698.mp4";

import NavBar from "../NavBar/NavBar";
import "./EarnHeroSectio.scss";
const EarnHeroSection = () => {
  return (
    <div className="EarnHeroMainContainer">
      <div className="EarnForeground">
        <video muted autoPlay loop className="EarnBanner" src={banner} alt="" />
      </div>

      <div className="container">
        <h1>Maximize your money and transform it into a treasure!</h1>
        <p>
          An exciting opportunity to earn massive interest on your savings. Grow
          your money by a hassle-free process with Earn Wallet.
          <span style={{ fontSize: "12px", marginLeft: "10px" }}>
            (Services applicable only for Canada)
          </span>
        </p>
      </div>
    </div>
  );
};

export default EarnHeroSection;
