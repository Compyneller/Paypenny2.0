import React from "react";
import First from "../Components/UKPageComponents/FirstCardSection/First";
import Second from "../Components/UKPageComponents/SecondCardSection/Second";
import UKHero from "../Components/UKPageComponents/UKHero/UKHero";
import video from "../Assets/Untitled (1).mp4";

const PaypennyUK = () => {
  const heading =
    "Send, Receive, Trade & Store INR(D) worldwide with Paypenny.";
  return (
    <div>
      <UKHero video={video} heading={heading} />
      <First />
      <Second />
    </div>
  );
};

export default PaypennyUK;
