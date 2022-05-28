import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/zachary-kadolph-IFSvUMApzsI-unsplash.jpg";
import "./SaveMoney.scss";
const SaveMoney = () => {
  return (
    <div className="SaveMoneyMainContainer">
      <img src={image} alt="" />
      <div className="container">
        <h1>Save money to buy your future!</h1>
        <h5>Don't just take our word for it ...</h5>
        <h5>Earn Wallet Guide</h5>
        <p>
          Want to learn more about the Earn Wallet Process? You will get all the
          additional information in this guide. Check out & start you journey
          now!
        </p>
        <Link
          className="cta"
          to="/processflow"
          onClick={() => window.scroll(0, 0)}
        >
          Earn Wallet Process
        </Link>
        <br />

        <h5>Round the clock Customer Support Help</h5>
        <p>
          We are avaiable 24/7. Feel free to connect with our team for any
          queries or issues. They will be happy to assist you.
        </p>
        <Link
          className="cta"
          to="/contactus"
          onClick={() => window.scroll(0, 0)}
        >
          Customer Support Help
        </Link>
      </div>
    </div>
  );
};

export default SaveMoney;
