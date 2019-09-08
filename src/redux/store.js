import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import loginSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export default store;

sagaMiddleware.run(loginSaga);
