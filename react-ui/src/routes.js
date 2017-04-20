import React from 'react';
import { Route, IndexRoute } from 'react-router';
import requireAuth from './utils/requireAuth';
import { App, HomePage, LoginPage, SignupPage,
  StudyScreen } from './containers';
import { Character, Dialog, Grammar, NotFound } from './components';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="study" component={requireAuth(StudyScreen)}>
      <Route path="character" component={Character} />
      <Route path="dialog" component={Dialog} />
      <Route path="grammar" component={Grammar} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
