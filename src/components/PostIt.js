import React, { useContext, useState } from "react";

import "../style/component-style/postIt.scss";
import { ContentContext } from "../context/ContentContext";

function PostIt({ postIt }) {
  const { showEditPostIt, setEditingPostIt } = useContext(ContentContext);

  function setPostItToEdit() {
    showEditPostIt();
    setEditingPostIt(postIt);
  }

  return (
    <div
      className="postIt-container"
      style={{ backgroundColor: postIt.bgColor }}
      onClick={() => setPostItToEdit()}
    >
      <div className="postIt-title">{postIt.title}</div>
      <div className="postIt-content">
        <p>{postIt.content}</p>
      </div>
    </div>
  );
}

export default PostIt;
