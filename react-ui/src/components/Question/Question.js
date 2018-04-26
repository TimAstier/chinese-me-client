import React, { Component } from 'react';
import propTypes from 'prop-types';
import { questionTypes } from '../../containers';
import { QuestionTypeException } from '../../exceptions';
import { Spinner } from '../.';
import styled from 'styled-components';
import squareLogo from '../../images/squareLogo.png';

const Wrapper = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
`;

const LogoWrapper = styled.div`
  height: 40px;
`;

const TitleWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #4F81BD;
  font-family: 'Calibri';
`;

const Text = styled.div`
  width: 90%;
  font-size: 21px;
  font-family: 'Cambria';
  line-height: 1.5;
`;

class Question extends Component {
  _renderSpinner() {
    return (
      <Wrapper>
        <Spinner
          delay
        />
      </Wrapper>
    );
  }

  _renderForm() {
    if (this.props.saving) {
      return this._renderSpinner();
    }
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

  _renderResult() {
    return (
      <this.props.result
        userSettings={this.props.userSettings}
      />
    );
  }

  render() {
    const status = this.props.status;
    return (
      <Wrapper>
        <LogoWrapper>
          <img src={squareLogo} alt="logo" width={50} height={50} />
        </LogoWrapper>
        <TitleWrapper>
          <Title>{this.props.title}</Title>
        </TitleWrapper>
        { status === 'input' && <Text>{this.props.questionIntro}</Text>}
        { this.props.initialized && this.props.setting && this.props.questionType && status === 'input' && this._renderForm() }
        { status === 'result' && this._renderResult() }
      </Wrapper>
    );
  }
}

Question.propTypes = {
  setting: propTypes.string.isRequired,
  questionType: propTypes.string.isRequired,
  initialized: propTypes.bool.isRequired,
  saving: propTypes.bool.isRequired,
  userSettings: propTypes.object.isRequired,
  result: propTypes.func,
  title: propTypes.string,
  questionIntro: propTypes.string,
  status: propTypes.string.isRequired
};

export default Question;
