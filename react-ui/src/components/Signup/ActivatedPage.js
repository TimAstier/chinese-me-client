import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Logo } from '../.';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainMessage = styled.div`
height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10px;
`;

const Text = styled.div`
  font-family: 'Open Sans';
  font-size: 25px;
  color: #454545;
`;

const Button = styled.button`
  width: 440px;
  height: 80px;
  background-color: #4990e2;
  font-family: 'Open Sans';
	font-size: 25px;
	text-align: center;
	color: #ffffff;
  margin-top: 10px;
  outline: 0;
  border: 0;
`;

class ActivatedPage extends Component {

  render() {
    return (
      <Wrapper>
        <Logo />
        <MainMessage>
          <Text>Your account has been successfully activated.</Text>
        </MainMessage>
        <Button onClick={() => this.props.router.push('/login')}>Log in</Button>
      </Wrapper>
    );
  }
}

ActivatedPage.propTypes = {
  router: propTypes.object.isRequired
};

export default ActivatedPage;
