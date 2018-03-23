import React, { Component } from 'react';
import styled from 'styled-components';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  margin-top: 20px;
  font-family: 'Open Sans';
  font-size: 35px;
  font-weight: 600;
  color: #454545;
`;

class PracticeResult extends Component {
  _avatar() {
    const funnyFaces = [
      assetEndpointToUrl('/personalities/biaoqing/marvin_question.png'),
      assetEndpointToUrl('/personalities/biaoqing/yuguo_happy.png'),
      assetEndpointToUrl('/personalities/biaoqing/liyu_surprised.png'),
      assetEndpointToUrl('/personalities/biaoqing/meixin_surprised.png')
    ];
    return funnyFaces[Math.floor(Math.random() * funnyFaces.length)];
  }

  _message() {
    const messages = [
      'Good job!',
      'Well done!',
      'Great. Never stop learning!',
      'You\'re doing well!'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  render() {
    return (
      <Wrapper>
        <img
          src={this._avatar()}
          alt=""
          width="175"
          height="175"
        />
        <Header><i>{ this._message() }</i></Header>
      </Wrapper>
    );
  }
}

PracticeResult.propTypes = {};

export default PracticeResult;
