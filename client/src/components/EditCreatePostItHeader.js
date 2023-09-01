import React, { useContext } from "react";

import { BsArrowLeftCircle } from "react-icons/bs";
import { ContentContext } from "../context/ContentContext";

import "../style/component-style/editCreatePostItHeader.scss";

function EditCreatePostItHeader() {
  const { showCorkBoard, setEditingPostIt } = useContext(ContentContext);
  return (
    <div className="header">
      <div className="left">
        <div
          className="icon"
          onClick={() => {
            showCorkBoard();
            setEditingPostIt({});
          }}
        >
          <BsArrowLeftCircle />
        </div>
      </div>
      <div className="right">Edit Post it</div>
    </div>
  );
}

export default EditCreatePostItHeader;
