import { call, put, take, fork, all } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import * as api from '../../api/auth';

function* login() {
  while (true) {
    const { email, password } = yield take(types.LOGIN_REQUESTED);
    yield put(actions.userLoading());
    try {
      yield call(api.login, email, password);
    } catch (error) {
      yield put(actions.loginFailed(error));
    }
  }
}

function* signup() {
  while (true) {
    const { email, password } = yield take(types.SIGNUP_REQUESTED);
    yield put(actions.userLoading());
    try {
      yield call(api.signup, email, password);
    } catch (error) {
      yield put(actions.signupFailed(error));
    }
  }
}

function* logout() {
  while (true) {
    yield take(types.LOGOUT_REQUESTED);
    yield call(api.logout);
  }
}

export default function* authSaga() {
  yield all([fork(login), fork(signup), fork(logout)]);
}
