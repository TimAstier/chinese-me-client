import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ExamScoreLabel, ExamProgressbar, Star, MultipleChoice } from '../.';
import { CircleTimer } from '../../containers';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
`;

const LeftWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightWrapper = styled.div`
  width: 150px;
`;

const MiddleWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-top: -30px;
`;

const StarWrapper = styled.div`
  width: 58px;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

const ScoreLabelWrapper = styled.div`
  margin-top: 5px;
`;

const ProgressbarWrapper = styled.div`
  margin-top: 5px;
`;

class Exam extends Component {

  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <StarWrapper>
            <Star filled={this.props.score >= 7} />
            <Star filled={this.props.score >= 8} />
            <Star filled={this.props.score >= 9} />
          </StarWrapper>
          <ScoreLabelWrapper>
            <ExamScoreLabel
              score={this.props.score}
              scoreMax={this.props.scoreMax}
            />
          </ScoreLabelWrapper>
          <ProgressbarWrapper>
            <ExamProgressbar
              score={this.props.score}
              scoreMax={this.props.scoreMax}
            />
          </ProgressbarWrapper>
        </LeftWrapper>
        <MiddleWrapper>
          <CircleTimer />
        </MiddleWrapper>
        <RightWrapper />
      </Wrapper>
    );
  }
}

Exam.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired
};

export default Exam;
