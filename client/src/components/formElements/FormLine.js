import React from "react";

import "../../style/component-style/form.scss";

function FormLine({
  labelTitle,
  inputType,
  inputText,
  editingPostIt,
  setEditingPostIt,
  whatsEditing,
}) {
  function handleEdit(e) {
    whatsEditing === "title"
      ? setEditingPostIt({ title: e.target.getValue })
      : whatsEditing === "content"
      ? setEditingPostIt({ content: e.target.getValue })
      : setEditingPostIt({ bgColor: e.target.getValue });
  }
  return (
    <div className="line boxShadow">
      <label htmlFor="">{labelTitle}</label>
      {inputType === "input" ? (
        <input
          type="text"
          name=""
          id=""
          value={inputText}
          onChange={(e) => handleEdit(e)}
        />
      ) : inputType === "textarea" ? (
        <textarea value={inputText} rows="6" cols="40" onChange={(e) => {}} />
      ) : null}
    </div>
    // </div>
  );
}

export default FormLine;
