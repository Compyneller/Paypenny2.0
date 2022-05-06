import React from "react";
import { Link } from "react-router-dom";
import interact from "../../Assets/Interac_Brand.png";
import earn from "../../Assets/Earn-logo.gif";

const NavBar = () => {
  return (
    <nav style={{ minHeight: "10vh", width: "100%" }}>
      <div className="container">
        <div className=" d-flex w-100 align-items-center justify-content-between">
          <img src="https://paypenny.io/media/logo.gif" alt="" />
          <div className="navSideLogo ">
            <a
              target="_blank"
              href="https://www.interac.ca/en/content/life/three-reasons-to-set-up-interac-e-transfer-autodeposit-today/"
            >
              <img src={interact} alt="" />
            </a>
            <Link to="/earn">
              <img src={earn} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
