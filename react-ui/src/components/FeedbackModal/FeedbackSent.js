import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScreenButton } from '../../containers';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  color: #454545;
`;

const SentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4 0 0;
`;

const SentMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  font-family: 'Open Sans';
	font-size: 23px;
	font-weight: 600;
	line-height: 1.52;
	text-align: center;
	color: #454545;
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
          <Icon name="mail" size="massive" color="teal" />
        </SentImage>
        <SentMessage>
          <div>Thanks for your message!</div>
          <div>We will do our best to answer you shortly.</div>
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
