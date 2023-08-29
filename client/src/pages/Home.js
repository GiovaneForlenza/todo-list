import React from "react";

import "../style/global.scss";

import "../style/page-style/home.scss";
import CorkBoard from "../components/corkBoard";
import SideBar from "../components/sideBar";
function Home() {
  return (
    <div id="home-container">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">
        <div className="title">Sticky business</div>
        <div className="content">
          <CorkBoard />
        </div>
      </div>
    </div>
  );
}

export default Home;
