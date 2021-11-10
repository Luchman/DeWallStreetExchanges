import React from "react";
import "../styles/home.modules.css";
import icon from "../assets/logo.png";
import coin from "../assets/coin.png";

function Home() {

  function clickHandler(){
    console.log("clicked")
  }
  return (
    <div>
      <div className="background">
        <img className="icon" src={icon} alt="icon" />
        <div className="frame">
          <text className="text1">MANIFESTING THE FIRST </text>
          <text className="text4">FOR&nbsp;CRYPTO&nbsp;COMMUNITIES</text>
          <text className="text3">conglomerate</text>

          <text className="text2"></text>
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
          <button className="buttonclass" onClick={clickHandler}>
            
              <b>stake</b>&nbsp;now.
          
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
