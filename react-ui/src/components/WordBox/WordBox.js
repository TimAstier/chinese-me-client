import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Word } from '../../models';

const TextInput = styled.input`
  width: 100px;
  margin: 0 5px;
  height: 50px;
  border-radius: 10px;
  background-color: ${props => props.disabled ? '#f2f7fa' : '#ffffff'};
  box-shadow: 0 0 8px 0 rgba(85, 182, 255, 0.6);
  border: solid 2px #cdd6db;
  font-family: 'Open Sans';
  font-size: 20px;
  text-align: center;
  color: #454545;
  -webkit-appearance: none;
  outline: none;
  :focus {
     border: solid 2px #55b6ff;
  }
`;

class WordBox extends Component {

  renderPlaceholder() {
    return ' _ '.repeat(this.props.word.chinese.length);
  }

  render() {
    const focusInputField = input => {
      return input && input.focus();
    };
    return (
      <TextInput
        type="text"
        placeholder={this.renderPlaceholder()}
        value={this.props.index !== this.props.currentBoxIndex ? '' : this.props.userAnswer}
        onChange={this.props.handleChange}
        disabled={this.props.disabled}
        innerRef={this.props.openFeedbackModal ?
          undefined
          : focusInputField
        }
      />
    );
  }
}

WordBox.propTypes = {
  disabled: propTypes.bool,
  openFeedbackModal: propTypes.bool.isRequired,
  currentBoxIndex: propTypes.number.isRequired,
  userAnswer: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  handleChange: propTypes.func.isRequired,
  word: propTypes.instanceOf(Word).isRequired
};

export default WordBox;
