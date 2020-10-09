import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/firestore";

export const fetchPosts = createAsyncThunk("posts/fetch", (_, { dispatch }) => {
  firebase
    .firestore()
    .collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dispatch(fetchPostsSuccess({ ...doc.data(), id: doc.id }));
      });
    })
    .catch(() => dispatch(fetchPostsFailed()));
});

export const fetchPostsSuccess = createAction(
  "posts/fetch/success",
  (post) => ({ payload: post })
);
export const fetchPostsFailed = createAction("posts/fetch/failed");

export const sendPost = createAsyncThunk("posts/new-post", async (data, {dispatch}) => {
  try {
    await firebase
    .firestore()
    .collection("posts")
    .add(data);
  // return dispatch(authSuccess(user));
  return ""
  } catch(e){
    console.log("failed failed ")
  }
})