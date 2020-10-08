import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import cls from "./header.module.scss";

export default function Header() {
  const userImg = useSelector(({ user }) => user.picture);

  return (
    <header className={cls.header}>
      <Link to="/" className={cls.logo}>
        <FaBookOpen className={cls.logoImg} />
        Poetree.uz
      </Link>
      <Link to="/profile" className={cls.user}>
        <img src={userImg} className={cls.userImg} alt="" />
      </Link>
    </header>
  );
}
