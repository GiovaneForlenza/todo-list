import React from "react";

import PostIt from "./postIt";

import "../style/component-style/corkBoard.scss";

function CorkBoard() {
  return (
    <div id="corkBoard-container">
      <PostIt
        title="This is the title"
        content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!"
        bgColor="#d5f1fb"
      />
      <PostIt
        title="This is the title"
        content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!"
        bgColor="#b6e280"
      />
      <PostIt
        title="This is the title"
        content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!"
        bgColor="#94c1bf"
      />
      <PostIt
        title="This is the title"
        content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!"
        bgColor="#f6a88d"
      />
      <PostIt
        title="This is the title"
        content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!"
        bgColor="#94c1bf"
      />
      <PostIt
        title="This is the title"
        content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!"
        bgColor="#d5f1fb"
      />
      <PostIt
        title="This is the title"
        content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!"
        bgColor="#d5f1fb"
      />
    </div>
  );
}

export default CorkBoard;
