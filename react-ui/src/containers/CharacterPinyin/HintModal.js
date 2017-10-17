import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import selectors from '../../rootSelectors';
import { HintModal as HintModalComponent } from '../../components';

class HintModal extends Component {

  render() {
    return (
      <HintModalComponent
        open={this.props.openHintModal}
        title={this.props.hints.title}
        message={this.props.hints.message}
      />
    );
  }
}

HintModal.propTypes = {
  hints: propTypes.shape({
    title: propTypes.string,
    message: propTypes.string
  }).isRequired,
  openHintModal: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  hints: selectors.getCharacterPinyinHints(state),
  openHintModal: selectors.getOpenHintModal(state)
});

export default connect(
  mapStateToProps
)(HintModal);
