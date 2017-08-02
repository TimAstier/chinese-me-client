import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Modal as ModalComponent } from '../../components';
import { actions } from '../../redux/ui';

class Modal extends Component {

  render() {
    return (
      <ModalComponent
        size={'small'}
        { ...this.props }
      />
    );
  }
}

Modal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired
};

export default connect(
  null,
  {
    handleClose: () => actions.set('openModal', false)
  }
)(Modal);
