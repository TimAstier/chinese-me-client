import React from 'react';
import { Route, IndexRoute } from 'react-router';
import requireAuth from './utils/requireAuth';
import { App, HomePage, LoginPage, SignupPage,
  StudyScreen, ResourceScreen } from './containers';
import { Character, Dialog, Grammar, NotFound } from './components';

// How to redirect from action creators:
// import { browserHistory } from 'react-router';
// browserHistory.push('/URL');

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="resource" component={ResourceScreen}>
      <Route path="char/:id" component={Character} />
      <Route path="dialog/:id" component={Dialog} />
      <Route path="grammar/:id" component={Grammar} />
    </Route>
    <Route path="study" component={requireAuth(StudyScreen)}>
      <Route path="char" component={Character} />
      <Route path="dialog" component={Dialog} />
      <Route path="grammar" component={Grammar} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
