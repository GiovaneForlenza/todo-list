import React, { useContext } from "react";

import "../style/component-style/editPostIt.scss";

import { BsArrowLeftCircle } from "react-icons/bs";
import { ContentContext } from "../context/ContentContext";
import FormLine from "./formElements/FormLine";

function EditPostIt() {
  const { showCorkBoard, editingPostIt, setEditingPostIt } =
    useContext(ContentContext);

  function handleSubmit(e) {
    e.preventDefault();
    alert(editingPostIt.bgColor);
  }

  return (
    <div id="editPostIt-container">
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
      <div className="editPostIt-content">
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormLine
            labelTitle={"Title"}
            inputType={"input"}
            inputText={editingPostIt.title}
            editingPostIt={editingPostIt}
            setEditingPostIt={setEditingPostIt}
            whatsEditing={"title"}
          />
          <FormLine
            labelTitle={"Content"}
            inputType={"textarea"}
            inputText={editingPostIt.content}
            editingPostIt={editingPostIt}
            setEditingPostIt={setEditingPostIt}
            whatsEditing={"content"}
          />
          <FormLine
            labelTitle={"Color"}
            inputType={"input"}
            inputText={editingPostIt.bgColor}
            editingPostIt={editingPostIt}
            setEditingPostIt={setEditingPostIt}
            whatsEditing={"bgColor"}
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
