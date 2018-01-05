import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import iconSmallCorrect from '../../../../images/iconSmallCorrect.svg';
import iconSmallWrong from '../../../../images/iconSmallWrong.svg';
import { Word } from '../../../../models';
import pinyinize from 'pinyinize';

const Wrapper = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CorrectAnswerWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 16px;
  color: #7f8c94;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5px;
`;

const ChineseWrapper = styled.div`
  font-family: 'STKaitiSC';
  font-size: 35px;
  font-weight: bold;
  color: #000000;
  height: 41px;
  padding-top: 10px;
`;

const SuccessIconWrapper = styled.div`
  height: 19px;
`;

const UserAnswerWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 16px;
  text-align: center;
  color: #f65859;
  height: 16px;
`;


class WordBoxResult extends Component {

  render() {
    return (
      <Wrapper>
        <CorrectAnswerWrapper>
          {this.props.success ?
            pinyinize(this.props.word.pinyin)
            : this.props.word.pinyin
          }
        </CorrectAnswerWrapper>
        <ChineseWrapper>
          {this.props.word.chinese}
        </ChineseWrapper>
        <SuccessIconWrapper>
          {this.props.success ?
            <img src={iconSmallCorrect} alt="icon-correct" />
            : <img src={iconSmallWrong} alt="icon-wrong" />
          }
        </SuccessIconWrapper>
        <UserAnswerWrapper>
          {!this.props.success && this.props.userAnswer}
        </UserAnswerWrapper>
      </Wrapper>
    );
  }
}

WordBoxResult.propTypes = {
  word: propTypes.instanceOf(Word).isRequired,
  success: propTypes.bool.isRequired,
  userAnswer: propTypes.string.isRequired
};

export default WordBoxResult;
