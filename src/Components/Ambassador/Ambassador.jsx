import React from "react";
import "./Ambassador.scss";
const Ambassador = () => {
  return (
    <div className="AmbassadorMainContainer">
      <div className="container mb-5">
        <h1>Become Our Brand Ambassador</h1>
        <h5>
          Are you a social media buzz? Become our ambassador and if you are
          lucky, you might be chosen for our campaigns soon and will get
          exclusive rewards!
        </h5>
        <a
          href="https://pdahfg0f1c8.typeform.com/to/hgqcre6X?typeform-source=paypenny.io"
          target="_blank"
        >
          Join the Program
        </a>
        <div className="row">
          <h3>Frequently Asked Questions</h3>
          <div className="col-12 col-lg-6">
            <h5>How can I top up my Paypenny account?</h5>
            <p className="w-75 mx-auto">
              You can top up your paypenny account through a bank wire transfer
              or Interac E- transfer.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <h5>Do I need to verify my account?</h5>
            <p className="w-75 mx-auto">
              As a fully regulated financial services business, we are required
              to verify the identity of all our customers. Where possible we
              attempt to speed up the process through electronic checks. Where
              this isn’t possible, we require proof of identification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
