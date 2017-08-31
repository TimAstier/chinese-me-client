import React from 'react';
import { Route } from 'react-router';
// import { IndexRoute } from 'react-router';
import requireAuth from './utils/requireAuth';
import * as containers from './containers';
import * as components from './components';

// How to redirect by dispatching actions:
// import { push } from 'react-router-redux';

// push(endpoint); <- In a component's method
// yield put(push('/dialog/' + action.payload.episodeId)); <- in a saga

// How to push directly from a component:
// import { browserHistory } from 'react-router'
// browserHistory.push('/select')

/* ----- */
// Study routes:
// /study/:episodeId/[element]/:elementId/[mode]

// Study flow:
// Hit URL -> Component Render -> trigger saga -> next -> push next URL
/* ----- */

// TODO: use ReviewScreen and ExamScreen containers
export default (
  <Route path="/" component={containers.App}>
    <Route path="signup" component={containers.SignupPage} />
    <Route path="signup/activated" component={components.ActivatedPage} />
    <Route path="signup/activate/:activationToken" component={containers.SignupActivate} />
    <Route path="email_sent" component={components.EmailSentPage} />
    <Route path="login" component={containers.LoginPage} />
    <Route path="select" component={requireAuth(containers.SelectEpisode)} />
    <Route path="study/:episodeId" component={requireAuth(containers.EpisodeScreen)}>
      <Route path="title/:partNumber" component={requireAuth(containers.Title)} />
      <Route path="character/:characterId/pinyin" component={requireAuth(containers.CharacterPinyin)} />
      <Route path="character/:characterId/etymology" component={requireAuth(containers.CharacterEtymology)} />
      <Route path="character/:characterId/writing" component={requireAuth(containers.CharacterWriting)} />
      <Route path="grammar/:grammarId/explanation" component={requireAuth(containers.GrammarExplanation)} />
      <Route path="dialog/:dialogId/listen" component={requireAuth(containers.Dialog)} />
      <Route path="dialog/:dialogId/explore" component={requireAuth(containers.Dialog)} />
      <Route path="dialog/:dialogId/roleplay" component={requireAuth(containers.Dialog)} />
      <Route path="multipleChoice/:id" component={requireAuth(containers.MultipleChoice)} />
      <Route path="audioToText/:id" component={requireAuth(containers.AudioToText)} />
    </Route>
  </Route>
);
