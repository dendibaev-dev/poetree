import { createReducer } from "@reduxjs/toolkit";
import { test } from "../actions/uiActions";

const initialState = {
  test: null,
};

const ui = createReducer(initialState, {
  [test]: (state) => state,
});

export default ui;
