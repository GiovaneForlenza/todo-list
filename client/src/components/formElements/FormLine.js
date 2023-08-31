import React from "react";

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
    <div className="line">
      <div className="left">
        <label htmlFor="">{labelTitle}</label>
      </div>
      <div className="right">
        {inputType === "input" ? (
          <input
            type="text"
            name=""
            id=""
            value={inputText}
            onChange={(e) => handleEdit(e)}
          />
        ) : inputType === "textarea" ? (
          <textarea value={inputText} rows="8" cols="40" onChange={(e) => {}} />
        ) : null}
      </div>
    </div>
  );
}

export default FormLine;
