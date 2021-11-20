import React from "react";

// import Dropdown from "../../../assets/Imagejs/Dropdown.js";
// import Search from "../../../assets/Imagejs/Search.js";

import { Dropdown, Search } from "../../../assets/Imagejs";

function Productexchanges() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="left_panel">
        {/* <div className="input_box">
          <input type="search" alt="search" placeholder="searchassets." style={{borderStyle:"none",top:"10px",width:"300px"}}/>
          </div> */}
        <div className="input_box">
          <input
            className="input_field"
            type="search"
            placeholder="searchassets."
          />
          <Search />
        </div>
        <div className="industries">
          <span style={{ width: "180px" }}> Industries </span>
          <Dropdown />
        </div>
        <div className="Markets">
          <span style={{ width: "180px" }}> Markets </span>
          <Dropdown />
        </div>
      </div>
      <div>
        <div className="center_panel">
          <span className="introducing">INTRODUCING</span>
          <span className="newproduct"> A BRAND NEW PRODUCT. </span>
        </div>
        <div className="Defluencer">
          <span> Defluencer logo here</span>
        </div>
      </div>
      <div className="right_panel">
        <span className="Trending_gainers">
          <b>Trending</b>gainers
        </span>
        <div className="Today">
          <span>Today</span>
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default Productexchanges;
