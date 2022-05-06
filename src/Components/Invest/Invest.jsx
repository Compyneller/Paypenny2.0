import React from "react";
import "./Invest.scss";
import image from "../../Assets/Manage money.gif";

const Invest = () => {
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

            <div className="Calculator">
              Amount : <input type="tel" placeholder="Amount" />
              Duration :{" "}
              <select name="" id="">
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
                <option value="">13</option>
                <option value="">14</option>
                <option value="">15</option>
                <option value="">17</option>
                <option value="">25</option>
              </select>
              ROI(Per Annum) : <div className="boxx">100</div>
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
