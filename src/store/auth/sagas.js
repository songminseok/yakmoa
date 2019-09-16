import { call, put, takeLatest, take, fork, all } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import * as firebase from 'firebase/app';
import * as api from '../../api/auth';

function* login(action) {
  // while (true) {
  const { email, password } = yield take(types.LOGIN_REQUESTED);
  yield put(actions.userLoading());
  try {
    const user = yield call(api.login, email, password);
  } catch (error) {
    yield put(actions.loginFailed(error));
  }
  // }
}

function* signup(action) {
  // while (true) {
  const { email, password } = yield take(types.SIGNUP_REQUESTED);
  yield put(actions.userLoading());
  try {
    const user = yield call(api.signup, email, password);
    yield put(actions.setUser(user));
  } catch (error) {
    yield put(actions.signupFailed(error));
  }
  // }
}

function* logout(action) {
  // while (true) {
  yield take(types.LOGOUT_REQUESTED);
  yield call(api.logout);
}

export default function* mySaga() {
  yield all([fork(login), fork(signup), fork(logout)]);
}
