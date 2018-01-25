import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import dialogIcon from '../../../images/dialogIcon.svg';
import brushIcon from '../../../images/brushIcon.svg';
import exerciseIcon from '../../../images/exerciseIcon.svg';
import storyIcon from '../../../images/storyIcon.svg';
import strokeIcon from '../../../images/strokeIcon.svg';
import examIcon from '../../../images/examIcon.svg';
import squareLogo from '../../../images/squareLogo.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 35px;
	height: 35px;
  :hover {
    background-color: #F2F7FA;
  }
  cursor: pointer;
`;

const Img = styled.img`
  max-width:80%;
  max-height:80%;
`;

class BookButton extends Component {
  _image = () => {
    switch (this.props.type) {
      case 'calligraphy': return brushIcon;
      case 'dialog': return dialogIcon;
      case 'etymology': return storyIcon;
      case 'stroke': return strokeIcon;
      case 'askUserSettings': return squareLogo;
      case 'practice': return exerciseIcon;
      case 'exam': return examIcon;
      default: return console.log('Unknown bookButton type');
    }
  }

  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
        <Img src={this._image()} />
      </Wrapper>
    );
  }
}

BookButton.propTypes = {
  onClick: propTypes.func.isRequired,
  type: propTypes.oneOf([
    'calligraphy',
    'dialog',
    'etymology',
    'stroke',
    'practice',
    'exam',
    'askUserSettings'
  ]).isRequired
};

export default BookButton;
