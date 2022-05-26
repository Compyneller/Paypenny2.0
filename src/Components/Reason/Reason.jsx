import React from "react";
import "./Reason.scss";
import image from "../../Assets/toppng.com-five-star-rating-623x124.png";

const Reason = () => {
  return (
    <div className="ReasonMainContainer">
      <div className="container">
        <h1>Reason why people choose Earn Wallet</h1>
        <h5>See the latest reviews by our customers and believe yourself!</h5>
        <br />
        <br />
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="blockCard">
              <img src={image} alt="" />
              <p>
                I save money every week from my expenses and invest it into the
                Earn Wallet by Paypenny app. I get amazing returns on my money
                without paying any additional charges. I found this to be a
                great deal to grow your savings.
              </p>

              <h5>- Shivansh Devgan</h5>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="blockCard">
              <img src={image} alt="" />
              <p>
                I am very happy with the interest rate provided on an
                investment. I deposited my 2000 CAD for 60 days and got 2046.03
                CAD. I trust Earn Wallet and invest my money for the long term
                to get the benefits.
              </p>
              <h5>- Manjeet Singh</h5>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="blockCard">
              <img src={image} alt="" />
              <p>
                Most trustable and easy feature to grow your money. I have been
                using Paypenny for over a year and the Earn Wallet feature is
                extraordinary. Best interest rate, easy to use, best customer
                support & you can even withdraw your money before maturity. I
                love Earn Wallet.
              </p>
              <h5>- Prabhjeet Kaur</h5>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-12 col-lg-6  ">
            <div className="reasonRow2">
              <div className="blockCard ">
                <img src={image} alt="" />
                <p>
                  I have been using Earn Wallet regularly. In the beginning, it
                  didn't give me a vibe check so I invested a small amount just
                  for 10 days then after 10 days I got my money back with 10%
                  interest. Awesome! Now, I regularly use the Paypenny app.
                </p>
                <h5>- Vansh Chaddha</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="reasonRow3">
              <div className="blockCard">
                <img src={image} alt="" />
                <p>
                  My friends recommended Earn Wallet. A simply great feature to
                  grow your CAD. I like customer support the most. They easily
                  explained the whole process on call. Trustable & giving best
                  interest on savings. All of my friends & I use Earn Wallet.
                </p>
                <h5>- Noah Willson</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
