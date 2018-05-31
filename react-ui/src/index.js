import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware }
  from 'react-router';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Map } from 'immutable';
import { createTracker } from 'redux-segment';
import Raven from 'raven-js';
import createRavenMiddleware from 'raven-for-redux';

import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { actions as authActions } from './redux/auth';

import routes from './routes';
import rootSaga from './rootSaga';

const initialState = Map();

/* if we want to add category and name property to Page Loaded events */
// const customMapper = {
//   skipDefaultMapping: true,
//   mapper: pathnameToPageNameMapper
// };
// const tracker = createTracker(customMapper);

// Raven (Sentry) is only configured for production
Raven.config(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SENTRY_DSN : null, {
// Raven.config(process.env.REACT_APP_SENTRY_DSN, {
  environment: process.env.NODE_ENV
}).install();
const tracker = createTracker(); // Create redux-segment tracker

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    // Note: Make sure to include the tracker after thunk or promise middleware
    // so that it sees actual actions.
    applyMiddleware(
      createRavenMiddleware(Raven),
      sagaMiddleware,
      tracker,
      routerMiddleware(browserHistory)
    )
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
  store.dispatch(authActions.setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

// Fix touch event issue on iOS devices
// See https://github.com/Semantic-Org/Semantic-UI-React/pull/1833#issuecomment-313713611
if ('ontouchstart' in document.documentElement) {
  document.body.style.cursor = 'pointer';
}

render(
  <Provider store={store}>
    <Router
      history={history}
      render={applyRouterMiddleware(useScroll())}
    >
      {routes}
    </Router>
  </Provider>, document.getElementById('app')
);
