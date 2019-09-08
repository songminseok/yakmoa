import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_USER,
  LOG_IN_REQUESTED,
  LOG_IN_FAILED,
  CLEAR_LOG_IN_ERROR,
  LOG_OUT,
  SIGN_UP,
} from './types';

/** 액션 생성 함수들 */
export const setAuthenticated = () => ({ type: SET_AUTHENTICATED });
export const setUnAuthenticated = () => ({ type: SET_UNAUTHENTICATED });
export const setUser = (user) => ({ type: SET_USER, user });
export const loadingUser = (loading) => ({ type: LOADING_USER, loading });
export const logInRequest = (email, password) => ({
  type: LOG_IN_REQUESTED,
  email,
  password,
});
export const logInFailed = (error) => ({ type: LOG_IN_FAILED, error });
export const clearLoginError = () => ({ type: CLEAR_LOG_IN_ERROR });
export const logOut = () => ({ type: LOG_OUT });
export const signUp = (email, password) => ({ type: SIGN_UP, email, password });
