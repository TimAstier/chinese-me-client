import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ExamResult as ExamResultComponent } from '../../components';
import selectors from '../../rootSelectors';

class ExamResult extends Component {

  render() {
    return (
      <ExamResultComponent { ...this.props } />
    );
  }
}

ExamResult.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired
};

const mapStateToProps = state => ({
  score: selectors.getExamScore(state),
  scoreMax: selectors.getExamScoreMax(state)
});

export default connect(
  mapStateToProps
)(ExamResult);
