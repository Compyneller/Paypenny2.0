import React from "react";
import First from "../Components/UKPageComponents/FirstCardSection/First";
import Second from "../Components/UKPageComponents/SecondCardSection/Second";
import UKHero from "../Components/UKPageComponents/UKHero/UKHero";
import video from "../Assets/Untitled (3).mp4";

const PaypennyUK = () => {
  return (
    <div>
      <UKHero video={video} />
      <First />
      <Second />
    </div>
  );
};

export default PaypennyUK;
