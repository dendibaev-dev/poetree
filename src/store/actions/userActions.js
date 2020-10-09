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
            : dispatch(authFailed("user/fecth-auth doc FAILED"))
        )
        .catch(() => dispatch(authFailed("user/catch-auth doc FAILED")));
    } else {
      dispatch(authFailed("user/check-auth FAILED"));
    }
  });
});

// ***SIGN IN/UP USER***
export const sign = createAsyncThunk("user/sign", async (signType, { dispatch }) => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  const providerGithub = new firebase.auth.GithubAuthProvider();

  try {
    const result = await firebase
      .auth()
      .signInWithPopup(signType === "google" ? providerGoogle : providerGithub);
    const user = {
      id: result.additionalUserInfo.profile.id,
      username: result.additionalUserInfo.profile.name,
      picture: result.additionalUserInfo.profile.picture,
      email: result.additionalUserInfo.profile.email,
      posts: 0,
    };

    return result.additionalUserInfo.isNewUser ? dispatch(firstSign(user)) : dispatch(authSuccess(user));
  } catch (error) {
    alert(error.message);
    return dispatch(authFailed("user/sign user FAILED"));
  }
});

export const firstSign = createAsyncThunk("user/first-sign", async (user, {dispatch}) => {
  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(user.id)
      .set({ ...user });
    return dispatch(authSuccess(user));
  } catch (e) {
    return dispatch(authFailed("failed to write users"));
  }
})

export const authSuccess = createAction("user/auth/success", (user) => ({
  payload: { ...user },
}));
export const authFailed = createAction("user/auth/failed", (message) => {
  // alert(message)
  return ""
});

// ***SIGN OUT***
export const signOut = createAction("user/sign-out", () => {
  firebase.auth().signOut();
  return { payload: "success" };
});
