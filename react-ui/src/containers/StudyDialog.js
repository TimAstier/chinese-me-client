import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { Dialog, EpisodeScreen } from '../components';
import { actions as entitiesActions } from '../redux/entities';
import { actions as studyActions } from '../redux/study';

const sentences = [
  {
    chinese: '你好！',
    l1: 'Hi!',
    personality: 2,
    mood: 'happy',
    audio: 'sentence_2.mp3'
  }, {
    chinese: '你会说中文吗？',
    l1: 'Can you speak Chinese?',
    personality: 2,
    mood: 'surprised',
    audio: 'sentence_3.mp3'
  }];

const personalities = [{
  name: 'boy',
  mood: 'blink',
  id: 1
}, {
  name: 'girl',
  mood: 'happy',
  id: 2
}];

const stepsOptions = {
  currentStep: 1,
  totalSteps: 3
};

class StudyDialog extends Component {
  componentWillMount() {
    // TODO: Store currentEpisode in the store
    this.props.set('currentEpisode', 4);
    this.props.set('currentDialog', 1);
    this.props.set('currentStatement', 1);
    this.props.set('currentSentence', 1);
    return this.props.fetch('/episode/4/dialogs');
  }

  render() {
    return (
      <EpisodeScreen
        stepsOptions={stepsOptions}
        screenLabel={'Dialog - Explore'}
      >
        <Dialog
          personalities= {personalities}
          sentences={sentences}
          currentSentence={0}
          animatedAvatar={0}
        />
      </EpisodeScreen>
    );
  }
}

StudyDialog.propTypes = {
  fetch: propTypes.func.isRequired,
  set: propTypes.func.isRequired
};

export default connect(
  null,
  {
    fetch: entitiesActions.fetch,
    set: studyActions.set
  }
)(StudyDialog);
