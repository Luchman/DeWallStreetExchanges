import React from "react";
import NavData from "../data/navdata.json";
import Coin from "../assets/Imagejs/Coin.js";
import Dewallstreet from "../assets/Imagejs/Dewallstreet.js";
import mappin from "../assets/map-pin.png";
import arrow from "../assets/arrow.png";
import { useState } from "react";
import { useHistory } from "react-router";
import "../styles/screens/home/tab.modules.css";

function Navigation() {
  const history = useHistory();

  const [state, setState] = useState({ clicked: false, name: "option" });
  function clickHandler() {
    setState({
      clicked: !state.clicked,
      name: state.clicked ? "option" : "optionclickholder",
    });
  }

  const renderData = NavData.map((Data) => (
    <text
      className="link"
      onClick={() => {
        history.push(Data.to);
      }}
    >
      {Data.title}
    </text>
  ));

  return (
    <div className="Menu_bg">
      <div className="Logonav">
        <div
          onClick={() => {
            history.push("/");
          }}
        >
          <Coin />
        </div>
        <div>
          <div
            className="dewallstreettxt"
            onClick={() => {
              history.push("/Navigation");
            }}
          >
            <Dewallstreet />
          </div>
          <div className="exchangestxt">exchanges.</div>
        </div>
      </div>
      <div className="holder">
        <div className="dropdown" onClick={clickHandler}>
          <img src={mappin} height="20px" width="20px" alt="map-pin" />
          &nbsp; Universal &nbsp;
          <img src={arrow} height="20px" width="20px" alt="arrow" />
        </div>
        <div className="dropdownDown">
          <div className={state.name}>
            <div className="optionclicked" onClick={clickHandler}>
              Universal
            </div>
            <div className="optionclicked" onClick={clickHandler}>
              India
            </div>
            <div className="optionclicked" onClick={clickHandler}>
              Somalia
            </div>
            <div className="optionclicked" onClick={clickHandler}>
              Iraq
            </div>
          </div>
        </div>
      </div>
      <div className="links">{renderData}</div>
    </div>
  );
}

export default Navigation;
