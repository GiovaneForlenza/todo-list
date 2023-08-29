import React, { useState, useContext } from "react";

import PostIt from "./postIt";

import "../style/component-style/corkBoard.scss";
import { PostItContext } from "../context/postItContext";

function CorkBoard() {
  const { postItList } = useContext(PostItContext);
  return (
    <div id="corkBoard-container">
      {postItList.map((postIt) => {
        return (
          <PostIt
            title={postIt.title}
            content={postIt.content}
            bgColor={postIt.bgColor}
          />
        );
      })}     
    </div>
  );
}

export default CorkBoard;
