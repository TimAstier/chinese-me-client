import React, { Component } from 'react';
import propTypes from 'prop-types';
import { questionTypes } from '../../containers';
import { QuestionTypeException } from '../../exceptions';
import { Spinner } from '../../components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

class Question extends Component {
  renderContent() {
    switch (this.props.questionType) {
      case 'closedQuestion':
        return (
          <questionTypes.ClosedQuestion
            setting={this.props.setting}
          />
        );
      case 'selectQuestion':
        return (
          <questionTypes.SelectQuestion
            setting={this.props.setting}
          />
        );
      case 'openQuestion':
      case 'date':
        return (
          <questionTypes.OpenQuestion
            setting={this.props.setting}
            date={this.props.questionType === 'date'}
          />
        );
      default:
        throw new QuestionTypeException(this.props.questionType);
    }
  }
  render() {
    if (this.props.saving) {
      return (
        <Wrapper>
          <Spinner
            delay
          />
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        { this.props.initialized && this.props.setting && this.props.questionType && this.renderContent() }
      </Wrapper>
    );
  }
}

Question.propTypes = {
  setting: propTypes.string.isRequired,
  questionType: propTypes.string.isRequired,
  initialized: propTypes.bool.isRequired,
  saving: propTypes.bool.isRequired
};

export default Question;
