import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { EpisodeScreen as EpisodeScreenComponent } from '../../components';
import { actions } from '../../sagas/actions';
import selectors from '../../rootSelectors';

class EpisodeScreen extends Component {
  mapOptionsToScreenType(screenType) {
    switch (screenType) {
      case 'characterPinyin': return this.props.charactersNavParams;
      case 'dialog': return this.props.dialogsNavParams;
      default: return undefined;
    }
  }

  render() {
    const screenType = this.props.location.pathname.split('/')[2];
    const typesWithMenu = ['characterPinyin', 'dialog'];
    let elementsNavParams = undefined;
    if (typesWithMenu.indexOf(screenType) !== -1) {
      elementsNavParams = this.mapOptionsToScreenType(screenType);
    }
    return (
      <EpisodeScreenComponent
        { ...this.props }
        elementsNavParams={elementsNavParams}
      />
    );
  }
}

EpisodeScreen.propTypes = {
  next: propTypes.bool,
  skip: propTypes.bool,
  elementsNavParams: propTypes.object,
  screenLabel: propTypes.string,
  children: propTypes.object,
  askQuestion: propTypes.func.isRequired,
  displayEpisodeOverview: propTypes.func.isRequired,
  exit: propTypes.func.isRequired,
  playAudio: propTypes.bool,
  location: propTypes.object.isRequired,
  charactersNavParams: propTypes.object.isRequired,
  dialogsNavParams: propTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    next: selectors.getNextButton(state),
    skip: selectors.getSkipButton(state),
    playAudio: selectors.getPlayAudioButton(state),
    charactersNavParams: selectors.getCharactersNavParams(state),
    dialogsNavParams: selectors.getDialogsNavParams(state)
  };
};

export default connect(
  mapStateToProps,
  {
    askQuestion: actions.askQuestion,
    displayEpisodeOverview: actions.displayEpisodeOverview,
    exit: actions.exit
  }
)(EpisodeScreen);
