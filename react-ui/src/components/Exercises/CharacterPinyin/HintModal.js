import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal, ScreenButton } from '../../containers';
import styled from 'styled-components';

const ModalContent = styled.div`
  text-align: center;
  background-color: white;
  color: #454545;
  height: 260px;
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
	font-family: 'Open Sans';
  font-weight: 600;
	font-size: 30px;
	color: #454545;
`;

const ModalMessage = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
	font-size: 25px;
	color: #454545;
  line-height: 1.3;
  padding: 0px 15px;
`;

const ModalControls = styled.div`
  flex: 2 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class HintModal extends Component {

  render() {
    return (
      <Modal open={this.props.open} size="small">
        <ModalContent>
          <ModalTitle>{this.props.title}</ModalTitle>
          <ModalMessage>{this.props.message}</ModalMessage>
          <ModalControls>
            <ScreenButton
              primary
              text="Try again"
              action={'closeHintModal'}
            />
          </ModalControls>
        </ModalContent>
      </Modal>
    );
  }
}

HintModal.propTypes = {
  open: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  message: propTypes.string.isRequired
};

export default HintModal;
