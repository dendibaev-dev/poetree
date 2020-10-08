import React from "react";
import { useDispatch } from "react-redux";
import { FaBookOpen, FaGoogle, FaGithub } from "react-icons/fa";

import cls from "./home.module.scss";

import { sign } from "@/store/actions/userActions";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <section className={cls.home}>
      <FaBookOpen className={cls.img} />
      <h1 className={cls.title}>Poetree</h1>
      <p className={cls.description}>
        Это место, где люди публикуют свои стихи
      </p>
      <div className={cls.buttons}>
        <button
          className={cls.btn}
          signtype="google"
          onClick={() => dispatch(sign("google"))}
        >
          <FaGoogle className={cls.btnIcon} />
          Войти с помощью Google
        </button>
        <button
          className={cls.btn}
          signtype="github"
          onClick={() => dispatch(sign("github"))}
        >
          <FaGithub className={cls.btnIcon} />
          Войти с помощью GitHub
        </button>
      </div>
    </section>
  );
}
