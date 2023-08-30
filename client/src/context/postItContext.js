import React, { useState, createContext } from "react";

export const PostItContext = createContext();
export const PostItContextProvider = (props) => {
  const [postItList, setPostItList] = useState([
    {
      id: 1,
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#faecb7",
    },
    {
      id: 2,
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#ffa6c2",
    },
    {
      id: 3,
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#f6a88d",
    },
    {
      id: 4,
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#94c1bf",
    },
    {
      id: 5,
      title: "This is the title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae est aperiam? Eos iusto dolores ipsum eaque provident aperiam, consectetur culpa animi. Quos exercitationem odio sint maiores placeat eligendi molestias!",
      bgColor: "#d5f1fb",
    },
    {
      id: 6,
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