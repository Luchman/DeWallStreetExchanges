import React, { useState } from "react";
import "../../../styles/screens/home/tab.modules.css";

import Datas from "../../../data/data.json";


// import arrow from "../../../assets/arrow.png";
// import mappin from "../../../assets/map-pin.png";

import countries from "../../../data/dropdowndata.json";


import {arrow,mappin} from "../../../assets/images/"

function Tab() {
  const [state, setState] = useState({ clicked: false, name: "option" });
  function clickHandler() {
    setState({
      clicked: !state.clicked,
      name: state.clicked ? "option" : "optionclickholder",
    });
  }

  const renderData = Datas.map((data) => (
    <text className="link">{data.name}</text>
  ));

  const renderCountries = countries.map((country) => (
    <div className="optionclicked" onClick={clickHandler}>
      {country.country}
    </div>
  ));

  return (
    <div className="tab">
      <div className="holder">
        <div className="dropdown" onClick={clickHandler}>
          <img src={mappin} height="20px" width="20px" alt="map-pin" />
          &nbsp; Universal &nbsp;
          <img src={arrow} height="20px" width="20px" alt="arrow" />
        </div>
        <div className="dropdownDown">
          <div className={state.name}>{renderCountries}</div>
        </div>
      </div>
      <div className="links">{renderData}</div>
    </div>
  );
}

export default Tab;
