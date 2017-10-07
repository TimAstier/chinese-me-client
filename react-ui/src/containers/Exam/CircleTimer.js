import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CircleTimer as CircleTimerComponent } from '../../components';
import selectors from '../../rootSelectors';

class CircleTimer extends Component {

  render() {
    return (
      <CircleTimerComponent
        timeLeft={this.props.timeLeft}
        timeLabel={this.props.timeLabel}
      />
    );
  }
}

CircleTimer.propTypes = {
  timeLeft: propTypes.number.isRequired,
  timeLabel: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  timeLeft: selectors.getTimerTimeLeft(state),
  timeLabel: selectors.getTimerTimeLabel(state)
});

export default connect(
  mapStateToProps
)(CircleTimer);
