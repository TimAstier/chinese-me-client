import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Map } from 'immutable';

import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './redux/auth';

import routes from './routes';
import rootSaga from './rootSaga';

const initialState = Map();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware(browserHistory))
  )
);

// Start all Sagas at once
const rootTask = sagaMiddleware.run(rootSaga);
rootTask.done.catch(err => {
  // TODO: find a way to make on error in a saga
  // avoid terminating all the other sagas
  // Seee: https://github.com/redux-saga/redux-saga/pull/644
  console.log('Error in Sagas', err); // eslint-disable-line no-console
});

// Create an enhanced history that syncs navigation events with the store
// Pass a selector for use with https://github.com/gajus/redux-immutable
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  }
});

// Set jwtToken in every request's header AND
// Log in returning users automatically
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Redirect from="/" to="/study" />
      {routes}
    </Router>
  </Provider>, document.getElementById('app')
);
