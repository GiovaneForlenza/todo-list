import React, {useContext} from "react";
import EditCreatePostItHeader from "./EditCreatePostItHeader";
import { ContentContext } from "../context/ContentContext";
import FormLine from "./formElements/FormLine";

function CreatePostIt() {
    const { editingPostIt, setEditingPostIt } = useContext(ContentContext);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div id="createPostIt-container">
      <EditCreatePostItHeader />
      <div id="createPostIt-content">
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormLine
            labelTitle={"Title"}
            inputType={"input"}
            editingPostIt={editingPostIt}
            setEditingPostIt={setEditingPostIt}
            whatsEditing={"title"}
          />
          <FormLine
            labelTitle={"Content"}
            inputType={"textarea"}
            editingPostIt={editingPostIt}
            setEditingPostIt={setEditingPostIt}
            whatsEditing={"content"}
          />
          <FormLine
            labelTitle={"Color"}
            inputType={"input"}
            editingPostIt={editingPostIt}
            setEditingPostIt={setEditingPostIt}
            whatsEditing={"bgColor"}
          />
          <div className="line boxShadow">
            <input type="submit" value="Save Changes" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostIt;
