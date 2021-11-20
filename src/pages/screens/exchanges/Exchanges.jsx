import React from "react";
// import Settings from '../../../assets/Imagejs/Settings.js';
// import Inbox from '../../../assets/Imagejs/Inbox.js';
// import Anchor from '../../../assets/Imagejs/Anchor.js';
// import Togellipse from '../../../assets/Imagejs/Togellipse.js';
// import Togrect from '../../../assets/Imagejs/Togrect.js';

import { Anchor, Inbox, Togellipse, Togrect, Settings} from "../../../assets/Imagejs";

import { useHistory } from "react-router-dom";

function Exchanges() {
  const history = useHistory();

  return (
    <div className="menu_buttons">
      <div className="main_content">
        <div>
          <span> securities </span>
        </div>
        <div>
          <div className="Togrect">
            <Togrect />
          </div>
          <div className="Togellipse">
            <Togellipse />
          </div>
        </div>
        <div>
          <span>deriviatives</span>
        </div>
        <div>
          {" "}
          <button
            className="exchange"
            onClick={() => {
              history.push("/");
            }}
          >
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
              <Settings />
              <b style={{ fontFamily: "Gilroy-Bold" }}>service</b>exchange.
            </div>{" "}
          </button>
        </div>
        <div>
          {" "}
          <button
            className="exchange"
            onClick={() => {
              history.push("/Exchanges/Productexchange");
            }}
          >
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
              <Inbox />
              <b style={{ fontFamily: "Gilroy-Bold" }}>product</b>exchange.
            </div>{" "}
          </button>
        </div>
        <div>
          {" "}
          <button
            className="exchange"
            onClick={() => {
              history.push("/");
            }}
          >
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
              <Anchor /> <b style={{ fontFamily: "Gilroy-Bold" }}>venture</b>
              exchange.
            </div>
          </button>
        </div>
        <div>
          {" "}
          <button
            className="exchange"
            onClick={() => {
              history.push("/");
            }}
          >
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
              <Anchor /> <b style={{ fontFamily: "Gilroy-Bold" }}>asset</b>
              exchange.
            </div>
          </button>
        </div>
        <div>
          {" "}
          <button
            className="exchange"
            onClick={() => {
              history.push("/");
            }}
          >
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
              <Anchor /> <b style={{ fontFamily: "Gilroy-Bold" }}>venture</b>
              exchange.
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Exchanges;
