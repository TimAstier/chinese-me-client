import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenButton } from '../.';
import LabelWrapper from './LabelWrapper';

const ButtonsWrapper = styled.div`
  min-height: 110px;
  flex-grow: 1;
  margin-top: 25px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`;

class ClosedQuestion extends Component {
  render() {
    return (
      <div>
        <LabelWrapper>
          {this.props.label}
        </LabelWrapper>
        <ButtonsWrapper>
          <ScreenButton
            text={this.props.choiceA}
            onClick={this.props.onClick}
            data={this.props.choiceA}
          />
          <ScreenButton
            text={this.props.choiceB}
            onClick={this.props.onClick}
            data={this.props.choiceB}
          />
        </ButtonsWrapper>
      </div>
    );
  }
}

ClosedQuestion.propTypes = {
  label: propTypes.string.isRequired,
  choiceA: propTypes.string.isRequired,
  choiceB: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default ClosedQuestion;
