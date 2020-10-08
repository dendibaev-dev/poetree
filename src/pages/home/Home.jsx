import React from "react";
import { useDispatch } from "react-redux";
import { FaBookOpen, FaGoogle, FaGithub } from "react-icons/fa";

import cls from "./home.module.scss";

import { sign } from "@/store/actions/userActions";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <section className={cls.home}>
        <div className={cls.content}>
          <FaBookOpen className={cls.img} />
          <h1 className={cls.title}>Poetree</h1>
          <p className={cls.description}>
            Это система, которая позволяет пользователям отправлять текстовые
            заметки размером до 280 символов с помощью веб-интерфейса
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
        </div>
        <footer className={cls.footer}>
          <a
            href="https://dendibaev.uz"
            className={cls.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Автор: Дендибаев Арман
          </a>
          <a
            href="https://github.com/dendibaev-dev/poetree"
            className={cls.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Проект Github
          </a>
        </footer>
      </section>
    </>
  );
}
