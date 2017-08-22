import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { EpisodeScreen as EpisodeScreenComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as studyActions } from '../../redux/study';
import selectors from '../../rootSelectors';

class EpisodeScreen extends Component {

  componentWillMount() {
    return this.props.initScreen(this.props.location.pathname);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     console.log('changed!');
  //   }
  // }

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
    if (!this.props.initialized) {
      return (
        <EpisodeScreenComponent
          exit={this.props.exit}
        />
      );
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
  exit: propTypes.func.isRequired,
  playAudio: propTypes.bool,
  location: propTypes.object.isRequired,
  charactersNavParams: propTypes.object,
  dialogsNavParams: propTypes.object,
  initScreen: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    next: selectors.getNextButton(state),
    skip: selectors.getSkipButton(state),
    playAudio: selectors.getPlayAudioButton(state),
    charactersNavParams: selectors.getCharactersNavParams(state),
    dialogsNavParams: selectors.getDialogsNavParams(state),
    initialized: selectors.getInitialized(state)
  };
};

export default connect(
  mapStateToProps,
  {
    exit: sagaActions.exit,
    initScreen: studyActions.initScreen
  }
)(EpisodeScreen);
