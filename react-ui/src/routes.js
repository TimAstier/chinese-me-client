import React from 'react';
import { Route } from 'react-router';
// import { Route, IndexRoute } from 'react-router';
// import requireAuth from './utils/requireAuth';
import { App } from './containers';

// How to redirect from action creators:
// import { browserHistory } from 'react-router';
// browserHistory.push('/URL');

export default (
  <Route path="/" component={App}>
  </Route>
);
