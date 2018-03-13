import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { CircleProgressbar, Star } from '../.';
import { MINIMUM_SCORE_TO_PASS, TWO_STARS_THRESHOLD, THREE_STARS_THRESHOLD,
  NUMBER_OF_EXERCISES_IN_EXAM } from '../../constants/exam';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 35px;
  font-weight: 600;
  color: #454545;
  text-align: center;
  line-height: 1.2;
  width: 95%;
`;

const CommentWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  line-height: 1.2;
  color: #7f8c94;
  height: 80px;
  text-align: center;
  margin-top: 20px;
`;

const ProgressbarWrapper = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StarsWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Stars = styled.div`
  height: 32;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class ExamResult extends Component {
  renderHeaderText() {
    if (this.props.score < MINIMUM_SCORE_TO_PASS) {
      return 'Nice try. Practice makes perfect!';
    }
    return 'You successfully passed this test!';
  }

  renderCommentText() {
    if (this.props.score < MINIMUM_SCORE_TO_PASS) {
      return (
        <p>
          You need a minimum score of {MINIMUM_SCORE_TO_PASS}/{NUMBER_OF_EXERCISES_IN_EXAM} to pass this test.
          <br/>
          You can redo this test any time whenever you feel ready.
        </p>
      );
    }
    return (
      <p>
        You can redo this test any time to try to get a better score.
        <br/>
        <br/>
      </p>
    );
  }

  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          {this.renderHeaderText()}
        </HeaderWrapper>
        <CommentWrapper>
          {this.renderCommentText()}
        </CommentWrapper>
        <ProgressbarWrapper>
          <CircleProgressbar
            score={this.props.score}
            scoreMax={this.props.scoreMax}
          />
        </ProgressbarWrapper>
        <StarsWrapper>
          <Stars>
            <Star filled={this.props.score >= MINIMUM_SCORE_TO_PASS} big />
            <Star filled={this.props.score >= TWO_STARS_THRESHOLD} big />
            <Star filled={this.props.score >= THREE_STARS_THRESHOLD} big />
          </Stars>
        </StarsWrapper>
      </Wrapper>
    );
  }
}

ExamResult.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired
};

export default ExamResult;
