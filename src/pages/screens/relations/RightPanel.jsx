import React from "react";

import companies from "../../../data/companies.json";

import newsdatas from "../../../data/dewsnews.json";

import { bullet,trade,arrow} from "../../../assets/index";

function RightPanel() {
  const renderCompanies = (
    <div className="company-info">
      {companies.map((data) => (
        <div className="company-info-card">
          <label>{data.name} </label>
          <div className="framed">
            <div className="value">
              <label style={{ color: "#678EFF" }}>{data.value}</label>
            </div>
            <div className="change">
              <label style={{ color: "#00C696" }}>{data.change}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDewsNews = (
    <div className="news-feed">
      {newsdatas.map((data) => (
        <div className="news-card">
          <div className="news-label">
            <img
              src={bullet}
              width="10px"
              height="10px"
              style={{ marginRight: "5px" }}
              alt="bullets"
            />
            {data.content}
          </div>
          <div className="news-content">
            <text>{data.time}</text>
            <text>{data.views}</text>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="right-panel">
    <div className="black-box">
          <div className="left-box">
            <text className="small-text1">
              APPLE INC.&nbsp;&nbsp;&nbsp;
              <img src={arrow} alt="up" />
            </text>
            <text className="small-text">31,722.25 509.80 (1.63%)</text>
          </div>
          <div className="right-box">
            <text className="small-text1">MICROSOFT</text>
            <text className="small-text">27,081.71 509.80 (-0.28%)</text>
          </div>
          </div>
      {renderCompanies}
      <div className="market-chart">
          <img className="image" src={trade} alt="trade" />
        </div>
      {renderDewsNews}
    </div>
    
  );
}

export default RightPanel;
