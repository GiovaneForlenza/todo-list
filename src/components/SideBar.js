import React, { useState, useContext } from "react";

import "../style/component-style/sideBar.scss";
import { ContentContext } from "../context/ContentContext";

function SideBar() {
  const { showCreatePostIt } = useContext(ContentContext);

  return (
    <div id="sideBar-container">
      <div id="sideBar-title">Menu</div>
      <div id="sideBar-content">
        <div
          className="button"
          onClick={() => {
            showCreatePostIt();
          }}
        >
          Create a new note
        </div>
      </div>
    </div>
  );
}

export default SideBar;
