import React, { useState, createContext } from "react";

export const ContentContext = createContext();
export const ContentContextProvider = (props) => {
  const [showContent, setShowContent] = useState("CorkBoard");
  const [editingPostIt, setEditingPostIt] = useState();


  function showCorkBoard() {
    setShowContent("CorkBoard");
  }
  function showEditPostIt(id) {
    setShowContent("Edit");
  }
  function showCreatePostIt() {
    setShowContent("Create");
  }

  return (
    <ContentContext.Provider
      value={{
        showCorkBoard,
        showEditPostIt,
        showCreatePostIt,
        showContent,
        editingPostIt,
        setEditingPostIt,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};
