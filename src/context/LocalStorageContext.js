import React, { useState, createContext } from "react";

export const LocalStorageContext = createContext();

export const LOCAL_STORAGE_KEYS = { activePostIts: "activePostIts" };

export const LocalStorageContextProvider = (props) => {
  function getItemsFromList(list) {
    return JSON.parse(localStorage.getItem(list));
  }
  return (
    <LocalStorageContext.Provider value={{ getItemsFromList }}>
      {props.children}
    </LocalStorageContext.Provider>
  );
};
