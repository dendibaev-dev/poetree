import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";

// ***CHECK USER IS AUTH***
export const authed = createAsyncThunk("user/check-auth", (_, { dispatch }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(authSuccess({ ...user.providerData[0] }));
    } else {
      dispatch(authFailed());
    }
  });
});

// ***SIGN IN/UP USER***
export const sign = createAsyncThunk("user/sign", (signType, { dispatch }) => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  const providerGithub = new firebase.auth.GithubAuthProvider();

  firebase
    .auth()
    .signInWithPopup(signType === "google" ? providerGoogle : providerGithub)
    .then((result) => dispatch(authSuccess({ ...result.user.providerData[0] })))
    .catch((error) => {
      alert(error.message);
      return dispatch(authFailed());
    });
});

export const authSuccess = createAction("user/auth/success", (user) => ({
  payload: { ...user },
}));
export const authFailed = createAction("user/auth/failed");

// ***SIGN OUT***
export const signOut = createAction("user/sign-out", () => {
  firebase.auth().signOut();
  return { payload: "success" };
});
