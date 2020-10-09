import React from "react";
import PropTypes from "prop-types";
import { AiOutlineHeart } from "react-icons/ai";
import cls from "./dashboard.module.scss";

function Post({ author, text, likes, date }) {
  return (
    <div className={cls.post}>
      <a href={`/user/${author.id}`} className={cls.author}>
        <img
          src={author.picture}
          alt=""
          className={cls.authorImg}
        />
        <h5 className={cls.authorName}>{author.username}</h5>
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
