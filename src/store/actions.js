import * as types from './actionTypes';

export const loginRequested = (email, password) => ({
  type: types.LOGIN_REQUESTED,
  email,
  password,
});
export const loginFailed = (error) => ({ type: types.LOGIN_FAILED, error });
export const signupRequested = (email, password) => ({
  type: types.SIGNUP_REQUESTED,
  email,
  password,
});
export const signupFailed = (error) => ({ type: types.SIGNUP_FAILED, error });
export const logoutRequested = () => ({
  type: types.LOGOUT_REQUESTED,
});
export const userLoading = () => ({ type: types.USER_LOADING });
export const setUser = (user) => ({ type: types.SET_USER, user });
