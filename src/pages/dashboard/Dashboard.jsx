import React from "react";
import Post from "./Post";
import cls from "./dashboard.module.scss";

export default function Dashboard() {
  return (
    <section className={cls.dashboard}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
}
