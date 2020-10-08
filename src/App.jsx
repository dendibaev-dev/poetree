import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authed } from "@/store/actions/userActions";
import Routes from "@/pages/routes.js";

export default function App() {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(authed());
  }, [stableDispatch]);

  return <Routes />;
}
