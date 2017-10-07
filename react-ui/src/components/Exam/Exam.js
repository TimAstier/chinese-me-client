import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ExamScoreLabel, ExamProgressbar, Star } from '../.';
import { CircleTimer } from '../../containers';
import { MultipleChoice, AudioToText } from '../../containers';

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

class Exam extends Component {

  mapTypeToContainer(type) {
    switch (type) {
      case 'multipleChoice': return <MultipleChoice/>;
      case 'audioToText': return <AudioToText/>;
      default:
        console.log('Unkown exercise type'); // eslint-disable-line no-console
        return null;
    }
  }

  render() {
    const container =
      this.mapTypeToContainer(this.props.currentExercise.get('type'));
    console.log(this.props.currentExercise.get('type'))
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
          {this.props.initialized && container}
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
