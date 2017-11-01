import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Review as ReviewComponent } from '../../components';
import s from '../../rootSelectors';

class Review extends Component {
  render() {
    if (this.props.currentExercise) {
      return (
        <ReviewComponent
          currentExercise={this.props.currentExercise}
          initialized={this.props.initialized}
        />
      );
    }
    return null;
  }
}

Review.propTypes = {
  currentExercise: propTypes.object,
  initialized: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  currentExercise: s.review.getCurrentExercise(state),
  initialized: s.review.getInitialized(state)
});

export default connect(
  mapStateToProps
)(Review);
