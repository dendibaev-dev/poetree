import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineUser,
} from "react-icons/ai";
import cls from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={cls.footer}>
      <NavLink
        to="/"
        exact={true}
        className={cls.link}
        activeClassName={cls.linkActive}
      >
        <AiOutlineHome className={cls.linkIcon} />
      </NavLink>
      <NavLink to="/add" className={cls.link} activeClassName={cls.linkActive}>
        <AiOutlinePlusCircle className={cls.linkIcon} />
      </NavLink>
      <NavLink
        to="/profile"
        className={cls.link}
        activeClassName={cls.linkActive}
      >
        <AiOutlineUser className={cls.linkIcon} />
      </NavLink>
    </footer>
  );
}
