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

export default (
  <Route path="/" component={containers.App} >
    <Route path="signup" component={containers.SignupPage} />
    <Route path="signup/activated" component={components.ActivatedPage} />
    <Route path="signup/activate/:activationToken" component={containers.SignupActivate} />
    <Route path="signup/email_sent" component={components.EmailSentPage} />
    <Route path="login" component={containers.LoginPage} />
    <Route path="study" component={containers.Study} >
      <IndexRoute component={containers.SelectEpisode} />
      <Route path="account" component={requireAuth(containers.Account)} />
      <Route path="store" component={requireAuth(containers.Store)} />
      <Route path="about" component={components.About} />
      <Route path="help" component={components.Help} />
      <Route path="privacy-policy" component={components.Privacy} />
      <Route path="terms-of-service" component={components.Terms} />
      <Route path="philosophy" component={components.Philosophy} />
      <Route path="season/:seasonNumber/episode/:episodeNumber" component={containers.Book} />
      <Route path=":episodeId" component={containers.EpisodeHOC} >
        <Route path="character/:characterId/pinyin" component={containers.CharacterPinyin} />
        <Route path="character/:characterId/animation" component={containers.CharacterAnimation} />
        <Route path="character/:characterId/stroke" component={containers.CharacterStroke} />
        <Route path="character/:characterId/etymology" component={containers.CharacterEtymology} />
        <Route path="character/:characterId/calligraphy" component={containers.CharacterCalligraphy} />
        <Route path="dialog/:dialogId/watch" component={containers.Dialog} />
        <Route path="dialog/:dialogId/explore" component={containers.Dialog} />
        <Route path="dialog/:dialogId/roleplay" component={containers.Dialog} />
        <Route path="video/:videoId" component={containers.Video} />
        <Route path="practice/:practiceId" component={containers.Practice}/>
        <Route path="review" component={containers.Review}/>
        <Route path="exam" component={containers.Exam} />
        <Route path="result" component={containers.ExamResult} />
      </Route>
    </Route>
  </Route>
);
