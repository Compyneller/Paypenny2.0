import React from "react";
import First from "../Components/UKPageComponents/FirstCardSection/First";
import Second from "../Components/UKPageComponents/SecondCardSection/Second";
import UKHero from "../Components/UKPageComponents/UKHero/UKHero";
import video from "../Assets/futuristic-ui-hud-head-up-display-analytic-screen-2021-11-01-09-02-14-utc.mp4";

const PaypennyEU = () => {
  const heading =
    "Send, Receive, Trade & Store Crypto worldwide with Paypenny. ";

  return (
    <div>
      <UKHero video={video} heading={heading} />
      <div className="WalletMainContainer">
        <div className="container">
          <h1>What makes us stand out in the market?</h1>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box">
                <div className="content">
                  <img
                    src="https://img.icons8.com/ios/2x/purse-front-view--v2.gif"
                    alt=""
                  />
                  <h5>Super Wallet</h5>
                  <br />
                  <p>
                    Paypenny present’s Super wallet where you can add as low as
                    €1 and as high as €50,000 as many times as you want in a
                    single day!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box ">
                <div className="content">
                  <img
                    src="https://img.icons8.com/ios/2x/bank-card-front-side--v2.gif"
                    alt=""
                  />
                  <h5>No Transaction Fees</h5>
                  <br />
                  <p>
                    Say Goodbye to the high transaction fee as Paypenny incurs
                    zero fees with no hidden charges or additional charges on
                    your transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box">
                <div className="content">
                  <img
                    src="https://img.icons8.com/pastel-glyph/2x/trust--v2.gif"
                    alt=""
                  />
                  <h5>Highest Exchange Rates Guaranteed</h5>
                  <p>
                    Paypenny provides you with the highest exchange interest
                    rates in the industry. Send Crypto worldwide with the
                    flexible exchange rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <Second />
    </div>
  );
};

export default PaypennyEU;
