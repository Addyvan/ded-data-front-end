import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
  ERROR,
  CLEAR_ERROR
} from "./types";

// Single sign on actions
export const loginAction = user => ({ type: LOGIN_ACTION, user });
export const logoutAction = () => ({ type: LOGOUT_ACTION });
export const errorAction = error => ({ type: ERROR, error });
export const clearErrorAction = () => ({ type: CLEAR_ERROR });