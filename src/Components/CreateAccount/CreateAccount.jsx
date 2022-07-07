import React from "react";
import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="CreateAccountMainContainer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="midCard">
              <img src="https://img.icons8.com/ios/2x/user--v2.gif" alt="" />
              <h5>Create your account</h5>
              <p>
                Register online, enter your personal details for ID
                verification. Make sure what you enter matches exactly with your
                identification documents.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="midCard">
              <img
                src="https://img.icons8.com/ios/2x/mind-map--v2.gif"
                alt=""
              />
              <h5>Choose method</h5>
              <p>
                We’ll show you the exchange rate and you Select the Method to
                add the Crypto to your wallet.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="midCard">
              <img src="https://img.icons8.com/ios/2x/file--v2.gif" alt="" />
              <h5>Input receiver details</h5>
              <p>Tell us the details of the person receiving the Crypto.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="midCard">
              <img
                src="https://img.icons8.com/ios/2x/message-read.gif"
                alt=""
              />
              <h5>Confirm and send</h5>
              <p>
                Verify and cross check everything is correct and send your
                Crypto. That’s it. We’ll take care of the rest and tell you when
                Crypto is transferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
