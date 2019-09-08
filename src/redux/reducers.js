import * as types from './types';

const initialState = {
  authenticated: false,
  userLoading: false,
  user: null,
  loginError: null,
};

export default function userReducer(state = initialState, action) {
  console.log('userReducer ', action);
  switch (action.type) {
    case types.SET_AUTHENTICATED:
      return { ...state, authenticated: true };
    case types.SET_UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case types.SET_USER:
      return { ...state, user: action.user };
    case types.LOADING_USER:
      return { ...state, userLoading: action.loading };
    case types.LOG_IN_FAILED:
      return { ...state, loginError: action.error };
    case types.CLEAR_LOG_IN_ERROR:
      return { ...state, loginError: null };
    default:
      return state;
  }
}
