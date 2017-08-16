import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScreenButton } from '../../containers';
import styled from 'styled-components';
import iconThanksForMessage from '../../images/iconThanksForMessage.png';

const Wrapper = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  color: #454545;
`;

const SentImage = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 4 0 0;
  img {
    width: 284px;
  }
`;

const SentMessage = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 70px;
  font-family: 'Open Sans';
	font-size: 20px;
	font-weight: 600;
	line-height: 1.52;
	text-align: center;
	color: #b2babf;
  flex: 3 0 0;
`;

const ModalControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2 0 0;
`;

class FeedbackSent extends Component {

  render() {
    return (
      <Wrapper>
        <SentImage>
          <img src={iconThanksForMessage} alt="thank you" />
        </SentImage>
        <SentMessage>
          <div>We will do our best to answer your message shortly.</div>
        </SentMessage>
        <ModalControls>
          <ScreenButton
            primary
            text="Continue"
            onClick={this.props.handleClose}
          />
        </ModalControls>
      </Wrapper>
    );
  }
}

FeedbackSent.propTypes = {
  handleClose: propTypes.func.isRequired
};

export default FeedbackSent;
