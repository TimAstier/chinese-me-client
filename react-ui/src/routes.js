import React from 'react';
import { Route, IndexRoute } from 'react-router';
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
    <Route path="signup/email_sent" component={components.EmailSentPage} />
    <Route path="login" component={containers.LoginPage} />
    <Route path="study" component={containers.Study}>
      <IndexRoute component={containers.SelectEpisode} />
      <Route path="season/:seasonNumber/lesson/:lessonNumber" component={containers.Lesson} />
      <Route path=":episodeId" component={requireAuth(containers.EpisodeScreen)}>
        <Route path="title/:partNumber" component={containers.Title} />
        <Route path="character/:characterId/pinyin" component={containers.CharacterPinyin} />
        <Route path="character/:characterId/etymology" component={containers.CharacterEtymology} />
        <Route path="character/:characterId/writing" component={containers.CharacterWriting} />
        <Route path="grammar/:grammarId/explanation" component={containers.GrammarExplanation} />
        <Route path="dialog/:dialogId/listen" component={containers.Dialog} />
        <Route path="dialog/:dialogId/explore" component={containers.Dialog} />
        <Route path="dialog/:dialogId/roleplay" component={containers.Dialog} />
        <Route path="multipleChoice/:id" component={containers.MultipleChoice} />
        <Route path="audioToText/:id" component={containers.AudioToText} />
      </Route>
    </Route>
  </Route>
);
