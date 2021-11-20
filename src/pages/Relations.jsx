import React from "react";

import "../styles/relations.modules.css";

import MiddlePanel from "./screens/relations/MiddlePanel.jsx";

import LeftPanel from "./screens/relations/LeftPanel.jsx";

import RightPanel from "./screens/relations/RightPanel.jsx";


function Relations() {
  return (
    <div className="parent">
      <LeftPanel />
      <MiddlePanel/>
      <RightPanel />
    </div>
  );
}

export default Relations;
