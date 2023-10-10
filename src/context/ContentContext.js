import React, { useState, createContext } from "react";

export const ContentContext = createContext();
export const ContentContextProvider = (props) => {
  const [showContent, setShowContent] = useState("CorkBoard");
  const [editingPostIt, setEditingPostIt] = useState();
  const [isEditingPostIt, setIsEditingPostIt] = useState(false);

  function showCorkBoard() {
    setShowContent("CorkBoard");
    setIsEditingPostIt(false);
  }
  function showEditPostIt(id) {
    setShowContent("Edit");
    setIsEditingPostIt(true);
  }
  function showCreatePostIt() {
    setShowContent("Create");
    setIsEditingPostIt(false);
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
        isEditingPostIt,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};
