import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ReviewFilterControl as ReviewFilterControlComponent } from '../../components';
import { actions as reviewActions } from '../../redux/review';
import s from '../../rootSelectors';

class ReviewFilterControl extends Component {
  render() {
    return (
      <ReviewFilterControlComponent
        recommended={this.props.recommended}
        setRecommended={this.props.setRecommended}
      />
    );
  }
}

ReviewFilterControl.propTypes = {
  recommended: propTypes.bool.isRequired,
  setRecommended: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  recommended: s.review.getRecommended(state)
});

export default connect(
  mapStateToProps,
  {
    setRecommended: reviewActions.setRecommended
  }
)(ReviewFilterControl);
