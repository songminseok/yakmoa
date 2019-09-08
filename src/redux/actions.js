import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_USER,
} from './types';

/** 액션 생성 함수들 */
export const setAuthenticated = () => ({ type: SET_AUTHENTICATED });
export const setUnAuthenticated = () => ({ type: SET_UNAUTHENTICATED });
export const setUser = (user) => ({ type: SET_USER, user });
export const loadingUser = (loading) => ({ type: LOADING_USER, loading });
