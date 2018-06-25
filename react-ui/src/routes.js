import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
// import { IndexRoute } from 'react-router';
import requireAuth from './utils/requireAuth';
import * as containers from './containers';
import * as components from './components';

// How to redirect by dispatching actions:

// PUSH

// In a component:
// import { push } from 'react-router-redux';
// this.props.push(endpoint); (push needs to be in mapActionsToProps)

// In a saga:
// yield put(push('/dialog/' + action.payload.episodeId)); <- in a saga

// REPLACE

// In a component:
// import { replace } from 'react-router-redux';
// this.props.replace(endpoint); (replace needs to be in mapActionsToProps)

// In a saga:
// yield put(replace('/dialog/' + action.payload.episodeId)); <- in a saga

export default (
  <div>
    <Route path="/" component={ containers.App } >
      <IndexRoute component={ components.HomePage } />
      <Route path="404" component={ components.My404Component } />
      <Route path="signup" component={ containers.SignupPage } />
      <Route path="signup/activated" component={ components.ActivatedPage } />
      <Route path="signup/activate/:activationToken" component={ containers.SignupActivate } />
      <Route path="signup/email_sent" component={ components.EmailSentPage } />
      <Route path="login" component={ containers.LoginPage } />
      <Route path="about" component={ components.About } />
      <Route path="help" component={ components.Help } />
      <Route path="chinese-grammar" component={ components.ChineseGrammar } />
      <Route path="privacy-policy" component={ components.Privacy } />
      <Route path="terms-of-service" component={ components.Terms } />
      <Route path="philosophy" component={ components.Philosophy } />
      <Route path="account" component={ requireAuth(containers.Account) } />
      <Route path="course" component={ containers.Study } >
        <IndexRoute component={ containers.Course } />
        <Route path="season/:seasonNumber" component={ containers.SelectEpisode } />
        <Route path="season/:seasonNumber/episode/:episodeNumber" component={ containers.Book } />
        <Route path=":episodeId" component={ containers.EpisodeHOC } >
          <Route path="character/:characterId/pinyin" component={ containers.CharacterPinyin } />
          <Route path="character/:characterId/animation" component={ containers.CharacterAnimation } />
          <Route path="character/:characterId/stroke" component={ containers.CharacterStroke } />
          <Route path="character/:characterId/etymology" component={ containers.CharacterEtymology } />
          <Route path="character/:characterId/calligraphy" component={ containers.CharacterCalligraphy } />
          <Route path="dialog/:dialogId/watch" component={ containers.Dialog } />
          <Route path="dialog/:dialogId/explore" component={ containers.Dialog } />
          <Route path="dialog/:dialogId/roleplay" component={ containers.Dialog } />
          <Route path="video/:videoId" component={ containers.Video } />
          <Route path="practice/:practiceId" component={ containers.Practice } />
          <Route path="review" component={ containers.Review } />
          <Route path="exam" component={ containers.Exam } />
          <Route path="result" component={ containers.ExamResult } />
          <Route path="question" component={ requireAuth(containers.Question) } />
        </Route>
      </Route>
      <Route path="blog" component={ components.Blog } />
      <Route path="blog/:slug" component={ containers.Article } />
    </Route>
    <Redirect from="*" to="/404" />
  </div>
);
