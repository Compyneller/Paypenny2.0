import React, { useState } from "react";
import { Link } from "react-router-dom";
import interact from "../../Assets/Interac_Brand.png";
import earn from "../../Assets/Earn-logo.gif";
import logo from "../../Assets/Logo-01.png";
import eu from "../../Assets/download.png";
import uk from "../../Assets/uk.png";
import canada from "../../Assets/oie_vR2XglQK4nD4.png";
import "./NavBar.scss";

const NavBar = () => {
  const [euflag, setEuflag] = useState(false);
  const [ukFlag, setUkFlag] = useState(false);
  const [canadaFlag, setCanadaFlag] = useState(true);
  const [navBarActive, setNavBarActive] = useState(false);
  const [removeEarn, setRemoveEarn] = useState(true);
  return (
    <nav className="NavBarContainer">
      <div className="container">
        <div className="NavContentContainer">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div
            className={!navBarActive ? "navSideLogo" : "navSideLogoActive"}
            style={{ width: `${removeEarn ? "50%" : "28%"}` }}
          >
            <a
              style={{ display: `${removeEarn ? "block" : "none"}` }}
              target="_blank"
              href="https://www.interac.ca/en/content/life/three-reasons-to-set-up-interac-e-transfer-autodeposit-today/"
            >
              <img src={interact} alt="" />
            </a>
            <Link
              to="/earns"
              style={{ display: `${removeEarn ? "block" : "none"}` }}
              onClick={() => setNavBarActive(false)}
            >
              <img src={earn} alt="" />
            </Link>
            <Link to="/">
              <img
                style={{ objectFit: "cover" }}
                src={canada}
                className={!canadaFlag ? "deactivate" : null}
                alt=""
                onClick={() => {
                  setEuflag(false);
                  setCanadaFlag(true);
                  setUkFlag(false);
                  setRemoveEarn(true);
                  setNavBarActive(false);
                }}
              />
            </Link>
            <Link
              to="/uk"
              onClick={() => {
                setEuflag(false);
                setCanadaFlag(false);
                setUkFlag(true);
                setRemoveEarn(false);
                setNavBarActive(false);
              }}
            >
              <img src={uk} alt="" className={!ukFlag ? "deactivate" : null} />
            </Link>
            <Link to="/eu">
              <img
                src={eu}
                style={{ objectFit: "cover" }}
                alt=""
                className={!euflag ? "deactivate" : null}
                onClick={() => {
                  setEuflag(true);
                  setCanadaFlag(false);
                  setUkFlag(false);
                  setRemoveEarn(false);
                  setNavBarActive(false);
                }}
              />
            </Link>
          </div>
          <div
            className="hamburgermenu"
            onClick={() => setNavBarActive(!navBarActive)}
          >
            {!navBarActive ? (
              <i className="fa-solid fa-bars" />
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
