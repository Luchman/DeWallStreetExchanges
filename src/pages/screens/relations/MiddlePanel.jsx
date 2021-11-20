import React, { useState } from "react";

import "../../../styles/relations.modules.css";

import datas from "../../../data/threads.json";

import {
  ActiveUpArrow,
  ActiveDownArrow,
  NormalDownArrow,
  NormalUpArrow,
  dots,
  pot1,
  plus,
  bookmarked,
  save,
  bluedot,
  trash,
  share,
  edit,
  x,
  btnplus,
} from "../../../assets/index";

function MiddlePanel() {
  const [isDisplay, setisDisplay] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [stuffDisplay, setStuffDisplay] = useState(false);
  const [reaction, setReaction] = useState({ liked: false, disliked: false });

  //BOX-CONTAINER

  const renderBoxes = datas.map((data) => (
    <div className="box">
      {/*LEFT-SECTION*/}

      <div className="like-section">
        <div className="like-box">
          <img
            src={!reaction.liked ? NormalUpArrow : ActiveDownArrow}
            onClick={() => setReaction({ liked: true, disliked: false })}
            style={{ cursor: "pointer" }}
            alt="arrowup"
          />
          {data.likes}k
          <img
            style={{ marginBottom: "-2.5vh", cursor: "pointer" }}
            src={!reaction.disliked ? NormalDownArrow : ActiveUpArrow}
            onClick={() => setReaction({ liked: false, disliked: true })}
            alt="arrowup"
          />
        </div>

        {/*POP-UP TOOLS*/}

        <div className="share-box">
          <div className={stuffDisplay ? "stuff-box" : "stuff-box-none"}>
            <div className="mini-stuff">
              <img src={edit} alt="edit" /> &nbsp;
              <text style={{ fontFamily: "Gilroy-Bold" }}>edit</text>post
            </div>
            <div className="mini-stuff">
              <img src={share} alt="share" />
              &nbsp;
              <text style={{ fontFamily: "Gilroy-Bold" }}>share</text>post
            </div>
            <div className="mini-stuff">
              <img src={trash} alt="trash" />
              &nbsp;
              <text style={{ fontFamily: "Gilroy-Bold" }}>delete</text>post
            </div>
          </div>
          <img
            src={stuffDisplay ? x : dots}
            onClick={() => setStuffDisplay(!stuffDisplay)}
            style={{ cursor: "pointer" }}
            alt="dots"
          />
        </div>
      </div>

      {/*INFO-CONTAINER*/}

      <div className="content-section">
        <label className="topic">{data.topic}</label>
        <label className="content">{data.content}</label>

        <div className="info">
          
          {/*AUTHOR-SECTION*/}

          <div className="seperator">
            <text className="info-text">posted by</text>
            <img
              src={pot1}
              height="30px"
              width="30px"
              style={{ borderRadius: "50px" }}
              alt="profile"
            />
            &nbsp;
            <text className="info-text2">{data.author}</text>
            <img src={bluedot} style={{ marginRight: "5px" }} alt="blue-dot" />
            <text className="info-text">12 hr ago</text>
          </div>
          <div className="seperator-1">
            <button
              className="blueButton"
              style={{ visibility: isDisplay ? "hidden" : "visible" }}
              onClick={() => setisDisplay(!isDisplay)}
            >
              <img src={plus} alt="plus" />
              <text className="btn-text">add your response</text>
            </button>
            <button className="blueButton" onClick={()=>{
              setBookmark(!bookmark)
            }}>
              <img src={bookmark ? bookmarked:save} alt="save" />
            </button>
          </div>
        </div>

        {/*COMMENT-SECTION*/}

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
  return (
    <div className="central-panel">
      {/*NEW-THREAD-SECTION*/}
      <div className="new-thread-bar">
        <text>Add a new thread</text>
        <div className="button">
          <img src={btnplus} alt="add" />
        </div>
      </div>
      {renderBoxes}
    </div>
  );
}

export default MiddlePanel;
