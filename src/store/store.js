import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import reducer from './reducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
);

export default store;

// then run the saga
sagaMiddleware.run(mySaga);
