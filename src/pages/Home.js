import React from "react";
import styles from "../styles/home.modules.css";
import icon from "../assets/logo2.png";
import coin from "../assets/coin.png";

function Home() {
  return (
    <div>
      <div className="background">
        <img className="icon" src={icon} alt="icon" />
        <div className="frame">
          <text className="text1">MANIFESTING THE FIRST</text>
          <text className="text2">UNIVERSAL</text>
          <text className="text3">conglomerate</text>
          <text className="text4">F O R C R Y P T O C O M M U N I T I E S</text>
        </div>
        <div className="frame2">
          <img className="coin" src={coin} alt="coin" />
          <div className="hox">
            <text className="label">
              stake <b>dé</b>
            </text>
            <text className="label2">
              and earn promising returns from our products, services and
              ventures as dividends .
            </text>
          </div>
          <button className="boxey"> <b>Stake</b> now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
