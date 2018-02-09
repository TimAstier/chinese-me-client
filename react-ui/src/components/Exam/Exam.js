import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ExamScoreLabel, ExamProgressbar, Star } from '../.';
import { CircleTimer } from '../../containers';
import mapTypeToContainers from '../../helpers/mapTypeToContainers';
import { MINIMUM_SCORE_TO_PASS, TWO_STARS_THRESHOLD, THREE_STARS_THRESHOLD }
  from '../../constants/exam';

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
  flex-direction: column;
  align-items: center;
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

const InnerWrapper = styled.div`
  max-height: 500px;
`;

class Exam extends Component {
  render() {
    const Container =
      mapTypeToContainers(this.props.currentExercise.get('type'));
    return (
      <Wrapper>
        <LeftWrapper>
          <StarWrapper>
            <Star filled={this.props.score >= MINIMUM_SCORE_TO_PASS} />
            <Star filled={this.props.score >= TWO_STARS_THRESHOLD} />
            <Star filled={this.props.score >= THREE_STARS_THRESHOLD} />
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
          <InnerWrapper>
            {this.props.initialized && <Container hideLabel />}
          </InnerWrapper>
        </MiddleWrapper>
        <RightWrapper />
      </Wrapper>
    );
  }
}

Exam.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired,
  currentExercise: propTypes.node.isRequired,
  initialized: propTypes.bool.isRequired
};

export default Exam;
