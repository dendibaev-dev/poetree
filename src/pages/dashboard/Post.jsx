import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import cls from "./dashboard.module.scss";

export default function Post() {
  return (
    <div className={cls.post}>
      <a href="/" className={cls.author}>
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14GjoL7I8ILs2ZyhGw5HoDJ6GPNBL4lkwC3wQu0lz"
          alt=""
          className={cls.authorImg}
        />
        <h5 className={cls.authorName}>Dendibaev Arman</h5>
      </a>
      <p className={cls.text}>
        By reading this tutorial, you'll learn how to end-to-end encrypt data in
        web applications using nothing but JavaScript and the Web Crypto API,
        which is a native browser API.
      </p>
      <div className={cls.panel}>
        <div className={cls.like}>
          <AiOutlineHeart className={cls.likeIcon} />
          Понравилось
        </div>
        <div className={cls.time}>08 окт</div>
      </div>
    </div>
  );
}
