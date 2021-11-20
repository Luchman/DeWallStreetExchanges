import React from "react";
import logo from "../assets/coin.png";
import logo1 from "../assets/dewall.svg";
import arrow from "../assets/Vector.png";
import Text from "../components/Text";
import Img from "../components/Img";

import "../styles/footer.modules.css";

function Footer() {
  function clickHandler() {
    console.log("clicked");
  }
  return (
    <div className="background1">
      <Img variant="coin" src={logo} alt="logo" />
      <Img variant="dewallstreet" src={logo1} alt="logo2" />
      <div className="para">
        <Text varient="default">
          The first universal securities and deriviatives exchanges for
          decentralized crypto communities for cross border transactions and
          distributed intercontinental wealth portfolios.
        </Text>
        <text className="mini-button" onClick={clickHandler}>
          get <b>started</b>.
          <Img variant="miniarrow" src={arrow} alt="proceed" />
        </text>
      </div>
    </div>
  );
}

export default Footer;
