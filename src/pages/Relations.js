import React, { useState } from "react";

import "../styles/relations.modules.css";

import {
  img,
  img2,
  img3,
  img4,
  ActiveUpArrow,
  ActiveDownArrow,
  NormalDownArrow,
  NormalUpArrow,
  dots,
  arrow,
  pot1,
  pot2,
  bullet,
  plus,
  save,
  bluedot,
  home,
  saved,
  your,
  trade,
  trash,
  share,
  edit,
  x,
  btnplus
} from "../assets/index";

import Button from "../components/Button";

import datas from "../data/threads.json";

import newsdatas from "../data/dewsnews.json";

function Relations() {
  const [isDisplay, setisDisplay] = useState(false);
  const [clicked, setClicked] = useState({
    home: false,
    yourthread: false,
    savedthread: false,
  });
  const [stuffDisplay, setStuffDisplay] = useState(false);
  const [reaction, setReaction] = useState({ liked: false, disliked: false });

  const renderBoxes = datas.map((data) => (
    <div className="box">
      <div className="like-section">
        <div className="like-box">
          <img
            src={!reaction.liked ? NormalUpArrow : ActiveDownArrow}
            onClick={() => setReaction({ liked: true, disliked: false })}
            style={{ cursor: "pointer" }}
          />
          {data.likes}k
          <img
            style={{ marginBottom: "-2.5vh" }}
            src={!reaction.disliked ? NormalDownArrow : ActiveUpArrow}
            onClick={() => setReaction({ liked: false, disliked: true })}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="share-box">
          <div className={stuffDisplay ? "stuff-box" : "stuff-box-none"}>
            <div className="mini-stuff">
              <img src={edit} /> &nbsp;
              <text style={{ fontFamily: "Gilroy-Bold" }}>edit</text>post
            </div>
            <div className="mini-stuff">
              <img src={share} />
              &nbsp;
              <text style={{ fontFamily: "Gilroy-Bold" }}>share</text>post
            </div>
            <div className="mini-stuff">
              <img src={trash} />
              &nbsp;
              <text style={{ fontFamily: "Gilroy-Bold" }}>delete</text>post
            </div>
          </div>
          <img
            src={stuffDisplay ? x : dots}
            onClick={() => setStuffDisplay(!stuffDisplay)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="content-section">
        <label className="topic">{data.topic}</label>
        <label className="content">{data.content}</label>

        <div className="info">
          <div className="seperator">
            <text className="info-text">posted by</text>
            <img
              src={pot1}
              height="30px"
              width="30px"
              style={{ borderRadius: "50px" }}
            />
            &nbsp;
            <text className="info-text2">{data.author}</text>
            <img src={bluedot} style={{ marginRight: "5px" }} />
            <text className="info-text">12 hr ago</text>
          </div>
          <div className="seperator-1">
            <button
              className="blueButton"
              style={{ visibility: isDisplay ? "hidden" : "visible" }}
              onClick={() => setisDisplay(!isDisplay)}
            >
              <img src={plus} />
              <text className="btn-text">add your response</text>
            </button>
            <button className="blueButton">
              <img src={save} />
            </button>
          </div>
        </div>
        <div
          className="comment-section"
          style={{ display: isDisplay ? "flex" : "none" }}
        >
          <input
            className="input-comment"
            type="text"
            placeholder="Tell us what you feel about this as author"
          />
          <div className="postbox">Post</div>
        </div>
      </div>
    </div>
  ));

  const renderDewsNews = newsdatas.map((data) => (
    <div className="news-card">
      <div className="news-label">
        <img
          src={bullet}
          width="10px"
          height="10px"
          style={{ marginRight: "5px" }}
        />
        {data.content}
      </div>
      <div className="news-content">
        <text>{data.time}</text>
        <text>{data.views}</text>
      </div>
    </div>
  ));

  return (
    <div className="parent">
      <div className="left-panel">
        <div className="thread-widget">
          <div
            className={clicked.home ? "card-hover" : "card"}
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
              alt="homeicon"
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
            />
            <label>&nbsp;&nbsp;Darrell Steward</label>
          </div>
          <div className="investor-card">
            <img
              src={pot2}
              height="32px"
              width="32px"
              style={{ borderRadius: "50px" }}
            />
            <label>&nbsp;&nbsp;Devon Lane</label>
          </div>
          <div className="investor-card">
            <img
              src={pot1}
              height="32px"
              width="32px"
              style={{ borderRadius: "50px" }}
            />
            <label>&nbsp;&nbsp;Marvin McKinney</label>
          </div>
          <div className="investor-card">
            <img
              src={pot2}
              height="32px"
              width="32px"
              style={{ borderRadius: "50px" }}
            />
            <label>&nbsp;&nbsp;Arlene McCoy</label>
          </div>

          <div className="investor-card">
            <img
              src={pot2}
              height="32px"
              width="32px"
              style={{ borderRadius: "50px" }}
            />
            <label>&nbsp;&nbsp;Cody Fisher</label>
          </div>
        </div>
      </div>
      <div className="central-panel">
        <div className="new-thread-bar">
          <text>Add a new thread</text>
          <div className="button">
            <img src={btnplus}/>
          </div>
        </div>
        {renderBoxes}
      </div>
      <div className="right-panel">
        <div className="black-box">
          <div className="left-box">
            <text className="small-text1">
              APPLE INC.&nbsp;&nbsp;&nbsp;
              <img src={arrow} />
            </text>
            <text className="small-text">31,722.25 509.80 (1.63%)</text>
          </div>
          <div className="right-box">
            <text className="small-text1">MICROSOFT</text>
            <text className="small-text">27,081.71 509.80 (-0.28%)</text>
          </div>
        </div>
        <div className="market-chart">
          <img className="image" src={trade} />
        </div>
        <div className="company-info">
          <div className="company-info-card">
            <label>Barone LLC </label>
            <div className="framed">
              <div className="value">
                <label style={{ color: "#678EFF" }}>58,452</label>
              </div>
              <div className="change">
                <label style={{ color: "#00C696" }}>+0.158%</label>
              </div>
            </div>
          </div>

          <div className="company-info-card">
            <label> Abstergo Ltd.</label>
            <div className="framed">
              <div className="value">
                <label style={{ color: "#678EFF" }}>28,498</label>
              </div>
              <div className="change">
                <label style={{ color: "#00C696" }}>+0.358%</label>
              </div>
            </div>
          </div>

          <div className="company-info-card">
            <label>Acme Co. </label>
            <div className="framed">
              <div className="value">
                <label style={{ color: "#678EFF" }}>78,412</label>
              </div>
              <div className="change">
                <label style={{ color: "#FE2F2F" }}>-0.058%</label>
              </div>
            </div>
          </div>

          <div className="company-info-card">
            <label>Binford Ltd. </label>
            <div className="framed">
              <div className="value">
                <label style={{ color: "#678EFF" }}>15,228</label>
              </div>
              <div className="change">
                <label style={{ color: "#FE9F2F" }}>0.158%</label>
              </div>
            </div>
          </div>
        </div>
        <div className="news-feed">{renderDewsNews}</div>
      </div>
    </div>
  );
}

export default Relations;
