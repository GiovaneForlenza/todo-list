import React, { useState, createContext } from "react";

export const ContentContext = createContext();
export const ContentContextProvider = (props) => {
  const [showContent, setShowContent] = useState("CorkBoard");

  return (
    <ContentContext.Provider value={{ showContent, setShowContent }}>
      {props.children}
    </ContentContext.Provider>
  );
};
