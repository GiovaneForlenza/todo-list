import React, { useContext } from "react";

import "../style/component-style/editPostIt.scss";

import { BsArrowLeftCircle } from "react-icons/bs";
import { ContentContext } from "../context/ContentContext";
import FormLine from "./formElements/FormLine";

function EditPostIt() {
  const { showCorkBoard, editingPostIt } = useContext(ContentContext);
  return (
    <div id="editPostIt-container">
      <div className="header">
        <div className="left">
          <div
            className="icon"
            onClick={() => {
              showCorkBoard();
            }}
          >
            <BsArrowLeftCircle />
          </div>
        </div>
        <div className="right">Edit Post it</div>
      </div>
      <div className="editPostIt-content">
        <form action="">
          <FormLine
            labelTitle={"Title"}
            inputType={"input"}
            inputText={editingPostIt.title}
          />
          <FormLine
            labelTitle={"Content"}
            inputType={"textarea"}
            inputText={editingPostIt.content}
          />
          <FormLine
            labelTitle={"Color"}
            inputType={"input"}
            inputText={editingPostIt.bgColor}
          />
          <div className="line">
            <input type="submit" value="Save Changes" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostIt;
