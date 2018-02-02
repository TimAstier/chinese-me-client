import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { WordBox as WordBoxComponent } from '../../../../components';
import s from '../../../../rootSelectors';
import { actions as exerciseActions } from '../../../../redux/exercise';
import { Word } from '../../../../models';

class WordBox extends Component {
  handleChange(event) {
    return this.props.setUserAnswer(event.target.value);
  }

  render() {
    return (
      <WordBoxComponent
        { ...this.props }
        handleChange={this.handleChange.bind(this)}
        disabled={this.props.index !== this.props.currentBoxIndex}
      />
    );
  }
}

WordBox.propTypes = {
  openFeedbackModal: propTypes.bool.isRequired,
  currentBoxIndex: propTypes.number.isRequired,
  userAnswer: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  setUserAnswer: propTypes.func.isRequired,
  word: propTypes.instanceOf(Word).isRequired
};

const mapStateToProps = state => ({
  openFeedbackModal: s.ui.getOpenFeedbackModal(state)
});

export default connect(
  mapStateToProps,
  {
    setUserAnswer: exerciseActions.setUserAnswer
  }
)(WordBox);
