import React, { useContext } from "react";

import "../style/global.scss";
import "../style/page-style/home.scss";

import CorkBoard from "../components/corkBoard";
import SideBar from "../components/sideBar";
import { ContentContext } from "../context/ContentContext";

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
          {showContent === "CorkBoard" ? <CorkBoard /> : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
