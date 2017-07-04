import React from 'react';
import { Route } from 'react-router';
// import { IndexRoute } from 'react-router';
// import requireAuth from './utils/requireAuth';
import { App, SelectEpisode, StudyDialog } from './containers';

// How to redirect from action creators:
// import { browserHistory } from 'react-router';
// browserHistory.push('/URL');

export default (
  <Route path="/" component={App}>
    <Route path="select" component={SelectEpisode} />
    <Route path="dialog/:id" component={StudyDialog} />
  </Route>
);
