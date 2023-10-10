import React, { useState, useContext, useEffect } from "react";

import PostIt from "./PostIt";

import "../style/component-style/corkBoard.scss";
import {
  LOCAL_STORAGE_KEYS,
  LocalStorageContext,
} from "../context/LocalStorageContext";

function CorkBoard() {
  const { getItemsFromList } = useContext(LocalStorageContext);

  return (
    <div id="corkBoard-container">
      {getItemsFromList(LOCAL_STORAGE_KEYS.activePostIts).map((postIt) => {
        return <PostIt postIt={postIt} />;
      })}
    </div>
  );
}

export default CorkBoard;
