import React from "react";
import "../styles/home.modules.css";
import icon from "../assets/logo.png";
import coin from "../assets/coin.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="background">
        <img className="icon" src={icon} alt="icon" />
        <div className="frame">
          <text className="text1">MANIFESTING THE FIRST</text>
          <text className="text4">F O R C R Y P T O C O M M U N I T I E S</text>
          <text className="text3">conglomerate</text>
          <text className="text2">UNIVERSAL</text>

        </div>
        <div className="frame2">
          <img className="coin" src={coin} alt="coin" />
          <div className="group">
            <text className="label">
              stake <b>dé</b>
            </text>
            <text className="label2">
              and earn promising returns from our products, services and
              ventures as dividends .
            </text>
          </div>
          <button className="buttonclass"> <Link to='/Navigation' style={{textDecoration:"none"}}><text style={{lineHeight:"21px"}}><strong>Stake</strong> now.</text></Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
