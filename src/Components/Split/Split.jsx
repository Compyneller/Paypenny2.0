import React from "react";
import "./Split.scss";
import image from "../../Assets/Paid idea.gif";

const Split = () => {
  return (
    <div className="SplitMainContainer">
      <div className="container">
        <h1>Split your lump-sum amount</h1>
        <h5>
          You can split your lump-sum amount into different deposits & invest
          your money with the flexibility of choosing a separate time period for
          each investment in one go.
        </h5>
        <h5>
          By multiple investment you can fulfill your financial goals easily!
        </h5>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={image} className="w-100" alt="" />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column">
            <div className="my-auto">
              <h5>Let us split 1000 CAD into three investments-</h5>
              <table className="table text-light m-auto w-100">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Holding (split Amount) </th>
                    <th scope="col">Time period </th>
                    <th scope="col">Rate of Interest (%)</th>
                    <th scope="col">Maturity Amount</th>
                    <th scope="col">Investment Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>500</td>
                    <td>90</td>
                    <td>15</td>
                    <td>518.49 </td>
                    <td>Re-Investment</td>
                  </tr>
                  <tr>
                    <td>300 </td>
                    <td>180</td>
                    <td>17</td>
                    <td>325.15 </td>
                    <td>Prom Party</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>365</td>
                    <td>25</td>
                    <td>250.00 </td>
                    <td>Sister's Birthday</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Split;
