import React from "react";
import logo from "../assets/coin.png";
import logo1 from "../assets/logo1.png";
import styles from "../styles/footer.modules.css"

function Footer() {
  return (
    <div className="background1">
      <img className="icon" src={logo} />
      <img className="logo" src={logo1} />
      <div className="para">
        <p style={{ color: "white" }}>
          The first universal securities and deriviatives exchanges for
          decentralized crypto communities for cross border transactions and
          distributed intercontinental wealth portfolios.
        </p>
        <div style={{ color: "#599dff",cursor:"pointer" }}>get started. {">"}</div>
      </div>
    </div>
  );
}

export default Footer;