import React from 'react';
import { Route } from 'react-router';
// import { IndexRoute } from 'react-router';
import requireAuth from './utils/requireAuth';
import { App, SelectEpisode, CharacterPinyin,
  Dialog, Title, SignupPage, LoginPage, SignupActivate,
  EpisodeScreen, CharacterEtymology, CharacterWriting, GrammarExplanation }
  from './containers';
import { EmailSentPage, ActivatedPage } from './components';

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

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={SignupPage} />
    <Route path="signup/activated" component={ActivatedPage} />
    <Route path="signup/activate/:activationToken" component={SignupActivate} />
    <Route path="email_sent" component={EmailSentPage} />
    <Route path="login" component={LoginPage} />
    <Route path="select" component={requireAuth(SelectEpisode)} />
    <Route path="study/:episodeId" component={requireAuth(EpisodeScreen)}>
      <Route path="title/:partNumber" component={requireAuth(Title)} />
      <Route path="character/:characterId/pinyin" component={requireAuth(CharacterPinyin)} />
      <Route path="character/:characterId/etymology" component={requireAuth(CharacterEtymology)} />
      <Route path="character/:characterId/writing" component={requireAuth(CharacterWriting)} />
      <Route path="grammar/:grammarId/explanation" component={requireAuth(GrammarExplanation)} />
      <Route path="dialog/:dialogId/listen" component={requireAuth(Dialog)} />
      <Route path="dialog/:dialogId/explore" component={requireAuth(Dialog)} />
      <Route path="dialog/:dialogId/roleplay" component={requireAuth(Dialog)} />
    </Route>
  </Route>
);
