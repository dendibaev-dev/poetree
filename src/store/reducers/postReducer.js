import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../actions/postActions";

const initialState = {
  posts: [],
};

const post = createReducer(initialState, {
  [actions.fetchPostsSuccess]: (state, action) => {
    const repeatedPost = state.posts.filter(
      (post) => post.id === action.payload.id
    );

    if (!repeatedPost.length) {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    } else {
      return state;
    }
  },
});

export default post;
