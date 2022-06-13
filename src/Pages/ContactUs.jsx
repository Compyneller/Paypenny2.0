import React from "react";
import { Link } from "react-router-dom";
import "./TC.scss";

const ContactUs = () => {
  return (
    <div className="tcMainContainer">
      <div className="container d-flex">
        <Link to="/">
          <img
            className="w-50 my-auto"
            src="https://img.icons8.com/ios-glyphs/2x/home-page--v2.gif"
            alt=""
            style={{ filter: "invert(1)", mixBlendMode: "screen" }}
          />
        </Link>
        <h1 className="my-auto">Contact Us</h1>
      </div>
      <br />
      <div
        className="ContactUsContainer container"
        style={{ borderRadius: "10px" }}
      >
        <h3 className="text-center">Send INR(D) Worldwide with Paypenny</h3>
        <br />
        <div className="row">
          <div className="col-12 col-lg-6">
            <div class="card shadow" style={{ height: "100%" }}>
              <div class="card-body">
                <h4>Canada</h4>
                <br />
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/building.png"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <p>
                      <strong>Company Name :</strong> Trackon Canada Private
                      Limited t/as Paypenny
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/address.png"
                      // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <p>
                      <strong>Address :</strong> 4440 5 ST NW, Edmonton,
                      Alberta, T6T 0Z9, Canada
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/email-open.png"
                      // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <p>
                      <strong>Email-ID :</strong>{" "}
                      <a href="mailto:help@paypenny.io">help@paypenny.io</a>{" "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/apple-phone.png"
                      // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <p>
                      <strong>Phone Number :</strong> +1(416)323-3112
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/whatsapp.png"
                      // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <p>
                      <strong>WhatsApp :</strong> +1(825)733-0200
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card shadow" style={{ height: "100%" }}>
              <div className="card-body">
                <h4>UK</h4>
                <br />
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/building.png"
                      // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <p>
                      <strong>Company Name :</strong> Trackon Canada Private
                      Limited
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/address.png"
                      // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <p>
                      <strong>Address :</strong> Maygrove Estates, Park Royal
                      Station, 1 Hanger Lane, London W5 3EL UK
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/edit-user-male.png"
                      // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <div className="d-flex">
                      <p>
                        <strong>Registration Number :</strong> 13791797
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-lg-1">
                    <img
                      src="https://img.icons8.com/nolan/2x/apple-phone.png"
                      // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                    <div className="d-flex">
                      <p>
                        {" "}
                        <strong>Phone Number :</strong> +441926350995
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default ContactUs;
