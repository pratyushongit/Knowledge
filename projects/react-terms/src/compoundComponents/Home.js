import React from "react";
import Post from "./components/Post";
import Toggle from "./components/Toggle";

const Home = () => {
  return (
    <div>
      <Post
        post={{
          id: 1,
          title: "Hello Word",
          content: "This is the first post.",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <Post.Title />
        <Post.Content />
        <Post.Name />
        <Post.Buttons />
      </Post>
      <br />
      <Toggle>
        <Toggle.Button />
        <Toggle.On>It is ON</Toggle.On>
        <Toggle.Off>It is OFF</Toggle.Off>
      </Toggle>
    </div>
  );
};

export default Home;
