import React from "react";
import logo from "../assets/coin.png";
import logo1 from "../assets/logo1.png";
import "../styles/footer.modules.css"

function Footer() {
  return (
    <div className="background1">
      <img className="footericon" src={logo}  alt="logo"/>
      <img className="footerlogo" src={logo1} alt="logo2"/>
      <div className="para">
        <p style={{ color: "white" }}>
          The first universal securities and deriviatives exchanges for
          decentralized crypto communities for cross border transactions and
          distributed intercontinental wealth portfolios.
        </p>
        <div className="mini-button">get started. {">"}</div>
      </div>
    </div>
  );
}

export default Footer;
