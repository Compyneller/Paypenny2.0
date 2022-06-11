import React from "react";
import EarnHeroSection from "../Components/EarnHeroSection/EarnHeroSection";
import Invest from "../Components/Invest/Invest";
import Reason from "../Components/Reason/Reason";
import SaveMoney from "../Components/SaveMoney/SaveMoney";
import Split from "../Components/Split/Split";
import Wallet from "../Components/Wallet/Wallet";
import Withdrawals from "../Components/Withdrawals/Withdrawals";
import Qr from "../Components/Qr/Qr";

const Earn = () => {
  return (
    <div>
      <EarnHeroSection />
      <Invest />
      <Wallet />
      <Split />
      <Withdrawals />
      <Reason />
      <SaveMoney />
    </div>
  );
};

export default Earn;
