import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import cls from "./dashboard.module.scss";

import { fetchPosts } from "@/store/actions/postActions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const posts = useSelector(({ post }) => post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className={cls.dashboard}>
      {posts.length ? (
        posts.map((post, index) => <Post key={index} {...post} />)
      ) : (
        <h2 className={cls.empty}>Постов нету</h2>
      )}
    </section>
  );
}
