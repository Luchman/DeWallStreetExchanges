import React, { useState } from "react";

import  "../../../styles/screens/relations/centralpanel.modules.css"

import datas from "../../../data/threads.json";

import Text from "../../../components/Text";

import {
  ActiveUpArrow,
  ActiveDownArrow,
  NormalDownArrow,
  NormalUpArrow,
  dots,
  pot1,
  pot2,
  plus,
  bookmarked,
  save,
  bluedot,
  trash,
  share,
  edit,
  x,
  btnplus,
} from "../../../assets/icons/index";

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
          <div
            className={stuffDisplay ? "stuff-box" : "stuff-box-none"}
            onClick={() => setStuffDisplay(!stuffDisplay)}
          >
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
        <Text component="text" variant="heading" style={{margin:"2vh 0vw"}}>{data.topic}</Text>
        <Text  variant="content" style={{lineHeight:"20px"}} >{data.content}</Text>

        <div className={isDisplay? "info-comment" : "info"}>
          {/*AUTHOR-SECTION*/}

          <div className="seperator">
            <Text component="text" variant="content" style={{fontSize:"12px", color:"#646464"}}>posted by &nbsp;</Text>
            <img
              src={data.author.includes("per") ? pot1:pot2}
              height="30px"
              width="30px"
              style={{ borderRadius: "50px" }}
              alt="profile"
            />
            &nbsp;
            <text className="info-text2">{data.author}</text>
            <img src={bluedot} style={{ marginRight: "5px" }} alt="blue-dot" />

            <Text component="text" variant="content" style={{fontSize:"12px", color:"#646464"}}>12 hr ago</Text>
          </div>
          <div className="seperator-1">
            <button
              className="blueButton"
              style={{ visibility: isDisplay ? "hidden" : "visible" }}
              onClick={() => setisDisplay(!isDisplay)}
            >
              <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
              <img src={plus} height="20px" width="20px" alt="plus" />&nbsp;
              <Text component="text" variant="content" style={{color:"#001343"}}>add your response</Text>
              </div>
            </button>
            <button
              className="blueButton"
              onClick={() => {
                setBookmark(!bookmark);
              }}
            >
              <img src={bookmark ? bookmarked : save} alt="save" />
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
