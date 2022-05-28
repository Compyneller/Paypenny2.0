import React from "react";
// import NavBar from "../../NavBar/NavBar";
const UKHero = ({ video }) => {
  return (
    <div className="EarnHeroMainContainer">
      <div className="EarnForeground">
        <video muted autoPlay loop className="EarnBanner" src={video} alt="" />
      </div>

      <div className="container">
        <h1>Maximize your money and transform it into a treasure!</h1>
        <p>
          An exciting opportunity to earn massive interest on your savings. Grow
          your money by a hassle-free process with Earn Wallet.
        </p>
      </div>
    </div>
  );
};

export default UKHero;