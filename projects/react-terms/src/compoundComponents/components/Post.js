import { createContext, useContext } from "react";

const PostContext = createContext();

const usePostValue = () => {
  const context = useContext(PostContext);

  if (!context)
    throw new Error("usePostValue cannot be used outside Post component");
  return context;
};

const Post = ({ children, post }) => {
  return (
    <PostContext.Provider value={{ post }}>
      <div>{children}</div>
    </PostContext.Provider>
  );
};

Post.Title = function PostTitle() {
  const { post } = usePostValue();
  return <h2>{post.title}</h2>;
};

Post.Content = function PostContent() {
  const { post } = usePostValue();
  return <p>{post.content}</p>;
};

Post.Name = function PostName() {
  const { post } = usePostValue();
  return <p>{post.user.name}</p>;
};

Post.Buttons = function PostButtons() {
  return (
    <div>
      <button>Read more</button>
      <button>Comments</button>
    </div>
  );
};

export default Post;
