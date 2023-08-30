import React, { useContext, useState } from "react";

import "../style/component-style/postIt.scss";
import { ContentContext } from "../context/ContentContext";

function PostIt({ title, content, bgColor }) {
  const { setShowContent } = useContext(ContentContext);

  return (
    <div
      className="postIt-container"
      style={{ backgroundColor: bgColor }}
      // onClick={setShowContent("Edit")}
    >
      <div className="postIt-title">{title}</div>
      <div className="postIt-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default PostIt;
