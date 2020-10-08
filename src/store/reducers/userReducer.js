import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../actions/userActions";

const initialState = {
  isAuth: null,
};

const user = createReducer(initialState, {
  [actions.authSuccess]: (state) => ({ ...state, isAuth: true }),
  [actions.authFailed]: (state) => ({ ...state, isAuth: false }),
});

export default user;
