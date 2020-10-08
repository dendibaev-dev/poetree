import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";

export const authed = createAsyncThunk("user/check-auth", (_, { dispatch }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(authSuccess());
    } else {
      dispatch(authFailed());
    }
  });
});

export const authSuccess = createAction("user/auth/success");
export const authFailed = createAction("user/auth/failed");
