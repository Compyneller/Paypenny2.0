import React from "react";
import "./Withdrawals.scss";
import image from "../../Assets/Business Plan.gif";

const Withdrawals = () => {
  return (
    <div className="WithdrawalsContainer">
      <div className="container">
        <h1>Earn on Premature Withdrawals</h1>
        <h5>
          You can also withdraw the money prematurely and you will still earn
          interest @ 10 % per annum.
        </h5>
        <h5>Minimum deposit period is only 10 days .</h5>
        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <div className="my-auto">
              <h5>Amount at Maturity</h5>
              <p>Let us take the duration of the maturity as 45 days.</p>
              <table className="table text-light m-auto w-100">
                <tbody>
                  <tr>
                    <td>Invested Amount </td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>Interest For 45 Days @ 13% </td>
                    <td>16.03</td>
                  </tr>
                  <tr>
                    <td>Amount </td>
                    <td>1016.03</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <br />

              <h5>Premature Withdrawal</h5>
              <p>
                You withdrawal on the 44th day (one day before maturity period)
              </p>
              <table className="table text-light m-auto w-100">
                <tbody>
                  <tr>
                    <td>Invested Amount </td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>Interest For 44 Days @ 10% </td>
                    <td>12.05</td>
                  </tr>
                  <tr>
                    <td>Amount </td>
                    <td>1012.05</td>
                  </tr>
                </tbody>
              </table>
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

export default Withdrawals;
