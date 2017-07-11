import React from 'react';
import { Route } from 'react-router';
// import { IndexRoute } from 'react-router';
// import requireAuth from './utils/requireAuth';
import { App, SelectEpisode, StudyDialog, Title } from './containers';

// How to redirect by dispatching actions:
// import { push } from 'react-router-redux';

// push(endpoint); <- In a component's method
// yield put(push('/dialog/' + action.payload.episodeId)); <- in a saga
export default (
  <Route path="/" component={App}>
    <Route path="select" component={SelectEpisode} />
    <Route path="dialog" component={StudyDialog} />
    <Route path="title" component={Title} />
  </Route>
);
