import React, { useState } from "react";
import "./Invest.scss";
import image from "../../Assets/Manage money.gif";

const Invest = () => {
  const [amount, setAmount] = useState(100);
  const [duration, setDuration] = useState(10);
  const [roi, setRoi] = useState(10);
  const [answer, setAnswer] = useState("100");
  console.log(roi);
  console.log(duration);
  const Calculator = () => {
    const interest = (((amount * roi) / 100) * duration) / 365;
    const total = interest;
    setAnswer(parseInt(total) + parseInt(amount));
  };

  return (
    <div className="InvestMainContainer">
      <div className="container">
        <h1>Invest smarter with Earn Wallet</h1>
        <h5>
          Deposit your money with us to earn up to 25% interest per annum in
          CAD.
        </h5>
        <h5>
          Get the industry’s best return on investment, that too by investing
          for as low as 10 days .
        </h5>
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column">
            <table className="table text-light m-auto w-75">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Duration</th>
                  <th scope="col">ROI (per annum)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 days </td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>15 days </td>
                  <td>11%</td>
                </tr>
                <tr>
                  <td>30 days </td>
                  <td>12%</td>
                </tr>
                <tr>
                  <td>45 days </td>
                  <td>13%</td>
                </tr>
                <tr>
                  <td>60 days </td>
                  <td>14%</td>
                </tr>
                <tr>
                  <td>90 days </td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>180 days </td>
                  <td>17%</td>
                </tr>
                <tr>
                  <td>365 days </td>
                  <td>25%</td>
                </tr>
              </tbody>
            </table>
            <br />
            <div className="row">
              <div className="col-4">
                <p className="m-auto">Amount</p>
                <input
                  style={{
                    background: "none",
                    border: "1px solid white",
                    color: "white",
                    borderRadius: "50px",
                  }}
                  className="w-100 p-3"
                  type="tel"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="col-4">
                <p className="m-auto">Duration</p>
                <select
                  style={{
                    background: "none",
                    border: "1px solid white",
                    color: "white",
                    borderRadius: "50px",
                  }}
                  className="w-100 p-3"
                  name=""
                  value={duration}
                  id=""
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option className="text-dark" value={10}>
                    10 days
                  </option>
                  <option className="text-dark" value={15}>
                    15 days
                  </option>
                  <option className="text-dark" value={30}>
                    30 days
                  </option>
                  <option className="text-dark" value={45}>
                    45 days
                  </option>
                  <option className="text-dark" value={60}>
                    60 days
                  </option>
                  <option className="text-dark" value={90}>
                    90 days
                  </option>
                  <option className="text-dark" value={180}>
                    180 days
                  </option>
                  <option className="text-dark" value={365}>
                    365 days
                  </option>
                </select>
              </div>
              <div className="col-4">
                <p className="m-auto">Rate of Interest</p>
                <input
                  style={{
                    background: "none",
                    border: "1px solid white",
                    color: "white",
                    borderRadius: "50px",
                  }}
                  className="w-100 p-3"
                  type="tel"
                  placeholder="Rate of interest"
                  value={roi}
                  onChange={(e) => setRoi(e.target.value)}
                />
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-6">
                <button
                  className="w-100 p-3"
                  style={{ borderRadius: "50px" }}
                  onClick={() => Calculator()}
                >
                  Maturity Amount
                </button>
              </div>
              <div className="col-6">
                <div
                  className=" w-100 p-3"
                  style={{
                    background: "none",
                    border: "1px solid white",
                    color: "white",
                    borderRadius: "50px",
                  }}
                >
                  <h5 className="m-auto">{answer}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <img src={image} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
