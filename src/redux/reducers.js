import * as types from './types';

const initialState = {
  authenticated: false,
  userLoading: false,
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_AUTHENTICATED:
      return { ...state, authenticated: true };
    case types.SET_UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case types.SET_USER:
      return { ...state, user: action.user };
    case types.LOADING_USER:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
