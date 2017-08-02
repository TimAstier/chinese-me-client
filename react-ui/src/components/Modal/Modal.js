import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal as SemanticModal } from 'semantic-ui-react';

class Modal extends Component {
  // handleOpen = (e) => this.setState({
  //   modalOpen: true,
  // })
  //
  // handleClose = (e) => this.setState({
  //   modalOpen: false,
  // })

  render() {
    return (
      <SemanticModal
        open={this.props.open}
        size={this.props.size}
        onClose={this.props.handleClose}
        basic
      >
        { this.props.children }
      </SemanticModal>
    );
  }
}

Modal.propTypes = {
  size: propTypes.oneOf(['small', 'large', 'fullscreen']).isRequired,
  open: propTypes.bool.isRequired,
  children: propTypes.node,
  handleClose: propTypes.func.isRequired
};

export default Modal;
