import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { HanziAgainButton as HanziAgainButtonComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as hanziActions } from '../../redux/hanzi';

class HanziAgainButton extends Component {

  onClick() {
    this.props.setWatchAgain(true);
  }

  render() {
    return (
      <HanziAgainButtonComponent
        onClick={this.onClick.bind(this)}
        hidden={this.props.watchAgain}
      />
    );
  }
}

HanziAgainButton.propTypes = {
  watchAgain: propTypes.bool.isRequired,
  setWatchAgain: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  watchAgain: selectors.getHanziWatchAgain(state)
});

export default connect(
  mapStateToProps,
  {
    setWatchAgain: hanziActions.setWatchAgain
  }
)(HanziAgainButton);
