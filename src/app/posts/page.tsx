"use client";
import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  body: string;
};

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () =>
    fetch("http://localhost:3001/posts", { method: "GET" })
      .then((response) => response.json())
      .then((res) => setPosts(res))
      .catch((error) => console.log(error))
      .finally(() => console.log("done"));

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post?.id}>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
