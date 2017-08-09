import React from 'react';
import { Route } from 'react-router';
// import { IndexRoute } from 'react-router';
import requireAuth from './utils/requireAuth';
import { App, SelectEpisode, StudyCharacterPinyin,
  StudyDialog, Title, SignupPage, LoginPage, SignupActivate } from './containers';
import { EmailSentPage, ActivatedPage } from './components';

// How to redirect by dispatching actions:
// import { push } from 'react-router-redux';

// push(endpoint); <- In a component's method
// yield put(push('/dialog/' + action.payload.episodeId)); <- in a saga

// How to push directly from a component:
// this.props.router.push('/login')

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={SignupPage} />
    <Route path="signup/activated" component={ActivatedPage} />
    <Route path="signup/activate/:activationToken" component={SignupActivate} />
    <Route path="email_sent" component={EmailSentPage} />
    <Route path="login" component={LoginPage} />
    <Route path="select" component={requireAuth(SelectEpisode)} />
    <Route path="study/dialog" component={requireAuth(StudyDialog)} />
    <Route path="title" component={requireAuth(Title)} />
    <Route path="study/character/pinyin" component={requireAuth(StudyCharacterPinyin)} />
  </Route>
);
