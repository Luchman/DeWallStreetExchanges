import React, { useState } from "react";

import  "../../../styles/screens/relations/leftpanel.modules.css"


import Button from "../../../components/Button";

import {
  img,
  img2,
  img3,
  img4,
  pot1,
  pot2,
  home,
  saved,
  your,
} from "../../../assets/index";

function LeftPanel() {
  const [clicked, setClicked] = useState({
    home: false,
    yourthread: false,
    savedthread: false,
  });

  return (
    <div className="left-panel">
      <div className="thread-widget">
        <div
          className={clicked.home ? "card-hover" : "card" }
          onClick={() =>
            setClicked({
              ...clicked,
              home: true,
              yourthread: false,
              savedthread: false,
            })
          }
        >
          <img
            src={clicked.home ? img : home}
            style={{ marginRight: "5px" }}
            alt="home"
          />
          home
        </div>
        <div
          className={clicked.yourthread ? "card-hover" : "card"}
          onClick={() =>
            setClicked({
              ...clicked,
              home: false,
              yourthread: true,
              savedthread: false,
            })
          }
        >
          <img
            src={clicked.yourthread ? your : img2}
            style={{ marginRight: "5px" }}
            alt="boxicon"
          />
          <b style={{ fontFamily: "Gilroy-Bold" }}>your</b>threads
        </div>
        <div
          className={clicked.savedthread ? "card-hover" : "card"}
          onClick={() =>
            setClicked({
              ...clicked,
              home: false,
              yourthread: false,
              savedthread: true,
            })
          }
        >
          <img
            src={clicked.savedthread ? saved : img3}
            style={{ marginRight: "5px" }}
            alt="savelisticon"
          />
          <b>saved</b>
          threads
        </div>
      </div>
      <div className="document-margin">
        <div className="document">
          <img
            src={img4}
            width="226px"
            height="226px"
            style={{ marginTop: "-20vh" }}
            alt="whitepaper"
          />
          <text
            style={{
              color: " #599DFF;",
              fontFamily: "Gilroy-Medium",
            }}
          >
            <b>Whitepaper</b> is updated
          </text>
          <Button color="rgba(89, 157, 255, 1)">
            <b style={{ fontFamily: "Gilroy-Bold" }}>read</b> now
          </Button>
        </div>
      </div>
      <div className="top-investors">
        <label className="label-info">Top Investors</label>
        <div className="investor-card">
          <img
            src={pot1}
            height="32px"
            width="32px"
            style={{ borderRadius: "50px" }}
            alt="profile"
          />
          <label>&nbsp;&nbsp;Darrell Steward</label>
        </div>
        <div className="investor-card">
          <img
            src={pot2}
            height="32px"
            width="32px"
            style={{ borderRadius: "50px" }}
            alt="profile"
          />
          <label>&nbsp;&nbsp;Devon Lane</label>
        </div>
        <div className="investor-card">
          <img
            src={pot1}
            height="32px"
            width="32px"
            style={{ borderRadius: "50px" }}
            alt="profile"
          />
          <label>&nbsp;&nbsp;Marvin McKinney</label>
        </div>
        <div className="investor-card">
          <img
            src={pot2}
            height="32px"
            width="32px"
            style={{ borderRadius: "50px" }}
            alt="profile"
          />
          <label>&nbsp;&nbsp;Arlene McCoy</label>
        </div>

        <div className="investor-card">
          <img
            src={pot2}
            height="32px"
            width="32px"
            style={{ borderRadius: "50px" }}
            alt="profile"
          />
          <label>&nbsp;&nbsp;Cody Fisher</label>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
