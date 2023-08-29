import React from "react";

import "../style/global.scss";

import "../style/page-style/home.scss";
import CorkBoard from "../components/corkBoard";

function Home() {
  return (
    <div id="home-container">
      <div className="left">Home</div>
      <div className="right">
        <div className="title">
          <h1>Sticky business</h1>
        </div>
        <div className="content">
          <CorkBoard />
        </div>
      </div>
    </div>
  );
}

export default Home;
