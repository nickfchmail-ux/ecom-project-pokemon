import { createContext, use, useContext, useEffect } from "react";

const PostsContext = createContext(null);

const posts = {
  name: "nick",
};

function PostsProvider({ children }) {
  useEffect(() => {}, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }

  return context;
}

export { PostsProvider, usePosts };
