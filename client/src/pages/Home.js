import React from "react";
import corkBoard from "../components/corkBoard";

import "../style/page-style/home.css";

function Home() {
  return (
    <div id="home-container">
      <div className="left">Home</div>
      <div className="right">
        <div className="title">
          <h1>Sticky business</h1>
        </div>
        <div className="content">
          <corkBoard />
          asdasd
        </div>
      </div>
    </div>
  );
}

export default Home;
