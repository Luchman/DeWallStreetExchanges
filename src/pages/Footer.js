import React from "react";
import logo from "../assets/coin.png";
import logo1 from "../assets/logo1.png";
import arrow from "../assets/Vector.png";

import "../styles/footer.modules.css";

function Footer() {
  function clickHandler() {
    console.log("clicked");
  }
  return (
    <div className="background1">
      <img className="footericon" src={logo} alt="logo" />
      <img className="footerlogo" src={logo1} alt="logo2" />
      <div className="para">
        <p style={{ color: "white" }}>
          The first universal securities and deriviatives exchanges for
          decentralized crypto communities for cross border transactions and
          distributed intercontinental wealth portfolios.
        </p>
        <text className="mini-button" onClick={clickHandler}>
          get <b>started</b>.
          <img className="mini-arrow" src={arrow} alt="proceed" />
        </text>
      </div>
    </div>
  );
}

export default Footer;
