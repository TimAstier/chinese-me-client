import React from 'react';
import { Route, IndexRoute } from 'react-router';
import requireAuth from './utils/requireAuth';
import { App, HomePage, LoginPage, SignupPage,
  StudyScreen, ResourceScreen, Char, Dialog, Grammar } from './containers';
import { NotFound, LessonCompleted } from './components';

// How to redirect from action creators:
// import { browserHistory } from 'react-router';
// browserHistory.push('/URL');

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="resource" component={ResourceScreen}>
      <Route path="char/:id" component={Char} />
      <Route path="dialog/:id" component={Dialog} />
      <Route path="grammar/:id" component={Grammar} />
    </Route>
    <Route path="study/:lessonId" component={requireAuth(StudyScreen)}>
      <Route path="char/:id" component={Char} />
      <Route path="dialog/:id" component={Dialog} />
      <Route path="grammar/:id" component={Grammar} />
      <Route path="completed" component={LessonCompleted} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
