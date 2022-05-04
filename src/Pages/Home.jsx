import React from "react";
import Ambassador from "../Components/Ambassador/Ambassador";
import Benefits from "../Components/Benfits/Benefits";
import CreateAccount from "../Components/CreateAccount/CreateAccount";
import HeroArea from "../Components/HeroArea/HeroArea";
import NavBar from "../Components/NavBar/NavBar";
import Qr from "../Components/Qr/Qr";
import Section1 from "../Components/Section1/Section1";
import Section2 from "../Components/Section2/Section2";
import Why from "../Components/Why/Why";

const Home = () => {
  return (
    <>
      <HeroArea />
      <Section1 />
      <CreateAccount />
      <Benefits />
      <Why />
      <Section2 />
      <Qr />
      <Ambassador />
    </>
  );
};

export default Home;
