import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, HomePage, LoginPage, SignupPage } from './containers';
// import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    {/* <Route path="/app" component={requireAuth(MainScreen)} />*/}
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
  </Route>
);
