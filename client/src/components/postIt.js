import React from "react";

import "../style/component-style/postIt.scss";

function postIt({ title, content, bgColor }) {
  return (
    <div className="postIt-container" style={{ backgroundColor: bgColor }}>
      <div className="postIt-title">{title}</div>
      <div className="postIt-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default postIt;
