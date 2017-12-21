import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import dialogIcon from '../../../images/dialogIcon.png';
import brushIcon from '../../../images/brushIcon.png';
import handWithPen from '../../../images/handWithPen.png';
import storyIcon from '../../../images/storyIcon.png';
import strokeIcon from '../../../images/strokeIcon.png';
import examIcon from '../../../images/examIcon.png';

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
      case 'writing': return brushIcon;
      case 'dialog': return dialogIcon;
      case 'story': return storyIcon;
      case 'stroke': return strokeIcon;
      case 'askUserSettings':
      case 'practice': return handWithPen;
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
    'writing',
    'dialog',
    'story',
    'stroke',
    'practice',
    'exam',
    'askUserSettings'
  ]).isRequired
};

export default BookButton;
