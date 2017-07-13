import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal as ModalComponent } from '../../components';

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
  open: propTypes.bool.isRequired
};

export default Modal;
