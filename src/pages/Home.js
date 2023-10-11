import React, { useContext, useReducer } from "react";

import "../style/global.scss";
import "../style/page-style/home.scss";

import CorkBoard from "../components/CorkBoard";
import SideBar from "../components/SideBar";
import { ContentContext } from "../context/ContentContext";
import EditPostIt from "../components/EditPostIt";
import CreatePostIt from "../components/CreatePostIt";

function Home() {
  const { showContent } = useContext(ContentContext);

  return (
    <div id="home-container">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">
        <div className="title">Sticky Business</div>
        <div className="content">
          {showContent === "CorkBoard" ? (
            <CorkBoard />
          ) : showContent === "Edit" ? (
            <EditPostIt />
          ) : (
            <CreatePostIt />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
