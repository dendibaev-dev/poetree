import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./profile.module.scss";

import { signOut } from "@/store/actions/userActions";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

  return (
    <section className={cls.profile}>
      <img src={user.picture} className={cls.img} alt="" />
      <h2 className={cls.username}>{user.username}</h2>
      <p className={cls.id}>{user.id}</p>
      <p className={cls.posts}>У вас {user.posts} постов</p>
      <button className={cls.signOutBtn} onClick={() => dispatch(signOut())}>
        Выйти с аккаунта
      </button>
    </section>
  );
}
