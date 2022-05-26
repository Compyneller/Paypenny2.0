import React from "react";
import First from "../Components/UKPageComponents/FirstCardSection/First";
import Second from "../Components/UKPageComponents/SecondCardSection/Second";
import UKHero from "../Components/UKPageComponents/UKHero/UKHero";
import video from "../Assets/futuristic-ui-hud-head-up-display-analytic-screen-2021-11-01-09-02-14-utc.mp4";

const PaypennyEU = () => {
  return (
    <div>
      <UKHero video={video} />
      <div className="WalletMainContainer">
        <div className="container">
          <h1>Benefits Of Investing With Earn Wallet</h1>
          <div className="row">
            <div className="box w-100" style={{ minHeight: "15vh" }}>
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/purse-front-view--v2.gif"
                  alt=""
                  style={{ width: "10%" }}
                />
                <h5>Super Wallet</h5>
                <p>
                  Paypenny present’s Super wallet where you can add as low as £1
                  and as high as £50,000 as many times as you want in a single
                  day!
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="box w-100" style={{ minHeight: "15vh" }}>
              <div className="content">
                <img
                  style={{ width: "10%" }}
                  src="https://img.icons8.com/ios/2x/bank-card-front-side--v2.gif"
                  alt=""
                />
                <h5>Transaction Fees</h5>
                <p>
                  Say Goodbye to the high transaction fee as Paypenny incurs
                  zero fees with no hidden charges or additional charges on your
                  transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Second />
    </div>
  );
};

export default PaypennyEU;
