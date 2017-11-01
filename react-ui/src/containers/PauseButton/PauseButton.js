import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { actions as sagaActions } from '../../sagas/actions';
import { PauseButton as PauseButtonComponent } from '../../components';
import s from '../../rootSelectors';

class PauseButton extends Component {
  constructor() {
    super();
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEnterKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEnterKeyPress);
  }

  handleEnterKeyPress(event) {
    if (event.keyCode === 32) {
      return this.props.pause();
    }
    return null;
  }

  render() {
    return (
      <PauseButtonComponent
        onClick={() => this.props.pause()}
        paused={this.props.paused}
      />
    );
  }
}

PauseButton.propTypes = {
  pause: propTypes.func.isRequired,
  paused: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  paused: s.study.getPaused(state)
});

export default connect(
  mapStateToProps,
  {
    pause: sagaActions.pause
  }
)(PauseButton);
