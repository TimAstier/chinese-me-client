import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Hanzi as HanziComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as hanziActions } from '../../redux/hanzi';
import s from '../../rootSelectors';

class Hanzi extends Component {

  render() {
    return (
      <HanziComponent { ...this.props } />
    );
  }
}

Hanzi.propTypes = {
  char: propTypes.string.isRequired,
  mode: propTypes.oneOf(['static', 'animation', 'quiz']).isRequired,
  strokeAnimationFinished: propTypes.func.isRequired,
  onQuizComplete: propTypes.func,
  watchAgain: propTypes.bool.isRequired,
  setWatchAgain: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  watchAgain: s.hanzi.getWatchAgain(state)
});

export default connect(
  mapStateToProps,
  {
    strokeAnimationFinished: sagaActions.strokeAnimationFinished,
    setWatchAgain: hanziActions.setWatchAgain
  }
)(Hanzi);
