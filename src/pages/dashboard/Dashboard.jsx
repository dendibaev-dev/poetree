import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./dashboard.module.scss";

import { signOut } from "@/store/actions/userActions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const displayName = useSelector(({ user }) => user.displayName);

  return (
    <section className={cls.dashboard}>
      <h2>Hello {displayName}</h2>
      <button onClick={() => dispatch(signOut())}>Sign out</button>
    </section>
  );
}
