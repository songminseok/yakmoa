import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import yakSaga from './yak/sagas';
import authReducer from './auth';
import yakReducer from './yak';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// combine reducers
const reducer = combineReducers({ auth: authReducer, yak: yakReducer });
// mount it on the Store
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
);

export default store;

function* rootSaga() {
  yield all([fork(authSaga), fork(yakSaga)]);
}
// then run the saga
sagaMiddleware.run(rootSaga);
