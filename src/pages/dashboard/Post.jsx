import React from "react";
import PropTypes from "prop-types";
import { AiOutlineHeart } from "react-icons/ai";
import cls from "./dashboard.module.scss";

function Post({ author, text, likes, date }) {
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
      <p className={cls.text}>{text}</p>
      <div className={cls.panel}>
        <div className={cls.like}>
          <AiOutlineHeart className={cls.likeIcon} />
          {likes ? likes : ""} Понравилось
        </div>
        <div className={cls.time}>{date}</div>
      </div>
    </div>
  );
}

Post.propType = {
  author: PropTypes.string,
  text: PropTypes.string,
  likes: PropTypes.number,
  date: PropTypes.string,
};

export default Post;
