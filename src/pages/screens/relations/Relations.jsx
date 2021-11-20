import React from "react";

import "../../../styles/screens/relations/relations.modules.css";

import MiddlePanel from "./MiddlePanel.jsx";

import LeftPanel from "./LeftPanel.jsx";

import RightPanel from "./RightPanel.jsx";

function Relations() {
  return (
    <div className="parent">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
}

export default Relations;
