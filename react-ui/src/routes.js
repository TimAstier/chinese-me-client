import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, HomePage, LoginPage, SignupPage,
  GrammarScreen } from './containers';
// import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    {/* Children of 'App' */}
    <IndexRoute component={HomePage} />
    {/* <Route path="/app" component={requireAuth(MainScreen)} />*/}
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/grammar/:id" component={GrammarScreen}/>
  </Route>
);
