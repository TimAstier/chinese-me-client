import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ExamResult as ExamResultComponent } from '../../components';
import s from '../../rootSelectors';

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
  score: s.exam.getScore(state),
  scoreMax: s.exam.getScoreMax(state)
});

export default connect(
  mapStateToProps
)(ExamResult);
