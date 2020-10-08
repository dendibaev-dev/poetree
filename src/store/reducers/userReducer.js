import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../actions/userActions";

const initialState = {
  isAuth: null,
};

const user = createReducer(initialState, {
  [actions.authSuccess]: (state, action) => ({
    ...state,
    isAuth: true,
    ...action.payload,
  }),
  [actions.authFailed]: (state) => ({ ...state, isAuth: false }),
  [actions.signOut]: (state) => ({ ...state, isAuth: false }),
});

export default user;
