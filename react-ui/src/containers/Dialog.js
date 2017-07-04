import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { Dialog as DialogComponent, EpisodeScreen } from '../components';
import { actions } from '../redux/entities';
import dialogData from '../test/data/dialog';

class Dialog extends Component {
  componentWillMount() {
    // TODO: Store currentEpisode in the store
    return this.props.fetchDialog('/episode/4/dialogs');
  }

  render() {
    return (
      <EpisodeScreen
        stepsOptions={dialogData.stepsOptions}
        screenLabel={'Dialog - Explore'}
      >
        <DialogComponent
          personalities= {dialogData.personalities}
          sentences={dialogData.sentences}
          currentSentence={0}
          animatedAvatar={0}
        />
      </EpisodeScreen>
    );
  }
}

Dialog.propTypes = {
  fetchDialog: propTypes.func.isRequired
};

export default connect(null, { fetchDialog: actions.fetch })(Dialog);
