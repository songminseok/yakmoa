import { all, call, put, take, fork } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import { signIn, signOut } from '../api/auth';

export function* login(action) {
  while (true) {
    const { email, password } = yield take(types.LOG_IN_REQUESTED);
    yield put(actions.clearLoginError());
    yield put(actions.loadingUser(true));
    try {
      const user = yield call(signIn, email, password);
      yield put(actions.loadingUser(false));
      yield put(actions.setUser(user));
    } catch (error) {
      yield put(actions.loadingUser(false));
      yield put(actions.logInFailed(error));
    }
  }
}

export function* logOut(action) {
  while (true) {
    yield take(types.LOG_OUT);
    yield call(signOut);
    yield put(actions.setUser(null));
  }
}

export default function* watcher() {
  yield all([fork(login), fork(logOut)]);
}
