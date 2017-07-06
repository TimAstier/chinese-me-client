import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Statement as StatementComponent } from '../components';

import { actions } from '../redux/study';

class Statement extends Component {

  render() {
    return (
      <StatementComponent {...this.props} />
    );
  }
}

Statement.propTypes = {
  sentences: propTypes.array.isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  nextSentence: propTypes.func.isRequired,
  previousSentence: propTypes.func.isRequired,
  playSentence: propTypes.func.isRequired
};

export default connect(
  null,
  {
    nextSentence: actions.nextSentence,
    previousSentence: actions.previousSentence,
    playSentence: actions.playSentence
  }
)(Statement);
