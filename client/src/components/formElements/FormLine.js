import React from "react";

function FormLine({ labelTitle, inputType, inputText }) {
  return (
    <div className="line">
      <div className="left">
        <label htmlFor="">{labelTitle}</label>
      </div>
      <div className="right">
        {inputType === "input" ? (
          <input type="text" name="" id="" value={inputText} />
        ) : inputType === "textarea" ? (
          <textarea value={inputText} rows="8" cols="40" />
        ) : null}
      </div>
    </div>
  );
}

export default FormLine;
