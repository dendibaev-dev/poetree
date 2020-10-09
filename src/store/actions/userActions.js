import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// ***CHECK USER IS AUTH***
export const authed = createAsyncThunk("user/check-auth", (_, { dispatch }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const id = user.providerData[0].uid;

      firebase
        .firestore()
        .collection("users")
        .doc(id)
        .get()
        .then((doc) =>
          doc.exists
            ? dispatch(authSuccess(doc.data()))
            : dispatch(authFailed())
        )
        .catch(() => dispatch(authFailed()));
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
    .then((result) => {
      const user = {
        id: result.additionalUserInfo.profile.id,
        username: result.additionalUserInfo.profile.name,
        picture: result.additionalUserInfo.profile.picture,
        email: result.additionalUserInfo.profile.email,
        posts: 0,
      }

      if(result.additionalUserInfo.isNewUser) {
        firebase
        .firestore().collection("users").doc(user.id).set({...user}).then(() => console.log("success")).catch(() => console.log("failed to write users"));
      }

      return dispatch(authSuccess(user))
    })
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
