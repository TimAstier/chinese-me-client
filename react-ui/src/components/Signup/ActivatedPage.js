import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { OnboardingScreen } from '../.';
import iconSucceed from '../../images/iconSucceed.svg';

const ImageWrapper = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const MainMessage = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Open Sans';
	font-size: 20px;
	font-weight: 300;
	line-height: 1.5;
	color: #000000;
`;

const ButtonWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const Button = styled.button`
  width: 350px;
  height: 60px;
  border-radius: 10px;
  background-color: #55b6ff;
  box-shadow: 0 5px 18px 0 rgba(85, 182, 255, 0.5);
  font-family: 'Open Sans';
	font-size: 20px;
	text-align: center;
	color: #ffffff;
  outline: 0;
  border: 0;
`;

class ActivatedPage extends Component {

  render() {
    return (
      <OnboardingScreen>
        <ImageWrapper>
          <img src={iconSucceed} alt="success" />
        </ImageWrapper>
        <MainMessage>
          Your account has been successfully activated.
        </MainMessage>
        <ButtonWrapper>
          <Button onClick={() => this.props.router.push('/login')}>
            Start learning Chinese
          </Button>
        </ButtonWrapper>
      </OnboardingScreen>
    );
  }
}

ActivatedPage.propTypes = {
  router: propTypes.object.isRequired
};

export default ActivatedPage;
