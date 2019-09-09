import * as types from './actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: '',
};

export default function(state = initialState, action) {
  console.log('reducer - ', action);
  switch (action.type) {
    case types.LOGIN_REQUESTED:
      return { ...state, loading: true, error: '' };
    case types.LOGIN_FAILED:
      return { user: null, loading: false, error: action.error };
    case types.SIGNUP_REQUESTED:
      return { ...state, loading: true, error: '' };
    case types.SIGNUP_FAILED:
      return { user: null, loading: false, error: action.error };
    case types.USER_LOADING:
      return { ...state, loading: true };
    case types.SET_USER:
      return { user: action.user, loading: false, error: action.error };
    default:
      return state;
  }
}
