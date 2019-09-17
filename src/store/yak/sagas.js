import { call, put, take, fork, all } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from '../../api/yak';

function* addYak() {
  while (true) {
    const { payload: yak } = yield take(actions.addYak.REQUESTED);
    try {
      const yakRef = yield call(api.add, yak);
      yield put(
        actions.addYak.actions.addYakSucceeded({ ...yak, id: yakRef.id })
      );
    } catch (error) {
      yield put(actions.addYak.actions.addYakFailed(error));
    }
  }
}

function* removeYak() {
  while (true) {
    const { payload: yak } = yield take(actions.removeYak.REQUESTED);
    try {
      yield call(api.remove, yak);
      yield put(actions.removeYak.actions.removeYakSucceeded(yak));
    } catch (error) {
      yield put(actions.removeYak.actions.removeYakFailed(error));
    }
  }
}

function* fetchYaks() {
  while (true) {
    yield take(actions.fetchYaks.REQUESTED);
    try {
      const snapshot = yield call(api.fetch);
      const yaks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      yield put(actions.fetchYaks.actions.fetchYaksSucceeded(yaks));
    } catch (error) {
      yield put(actions.fetchYaks.actions.fetchYaksFailed(error));
    }
  }
}

export default function* yakSaga() {
  yield all([fork(fetchYaks), fork(addYak), fork(removeYak)]);
}
