import React, { useState, createContext } from "react";

export const PostItContext = createContext();
export const PostItContextProvider = (props) => {
  const [postItList, setPostItList] = useState([
    {
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#faecb7",
    },
    {
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#ffa6c2",
    },
    {
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#f6a88d",
    },
    {
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#94c1bf",
    },
    {
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#d5f1fb",
    },
    {
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#faecb7",
    },
  ]);

  return (
    <PostItContext.Provider value={{ postItList }}>
      {props.children}
    </PostItContext.Provider>
  );
};
