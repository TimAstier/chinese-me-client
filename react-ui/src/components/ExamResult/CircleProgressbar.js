import React, { Component } from 'react';
import propTypes from 'prop-types';
// react-progress-bar is a fork from original react-progressbar project
// which seems abandonned and not compatible with react 16
// see https://github.com/kimmobrunfeldt/react-progressbar.js/pull/26
import { Circle } from 'react-progress-bar.js';
import styled from 'styled-components';
import { ExamResultScoreLabel } from '../.';
import { MINIMUM_SCORE_TO_PASS } from '../../constants/exam';

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`;

const Text = styled.div`
  z-index: 10;
	color: ${props => props.timeLeft <= 0.125 ? '#f65859' : '#7f8c94'};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
`;

class CircleProgressbar extends Component {
  render() {
    const options = {
      strokeWidth: 10,
      easing: 'easeInOut',
      duration: 1500,
      color: this.props.score >= MINIMUM_SCORE_TO_PASS ? '#91ca49' : '#55b6ff',
      trailColor: '#eaf2f6',
      trailWidth: 10,
      svgStyle: null
    };
    // From react-progressbar-js doc:
    // Make sure that your container has same aspect ratio as the SVG canvas
    // See: https://github.com/kimmobrunfeldt/react-progressbar.js/tree/master#api
    const containerStyle = {
      width: '200px',
      height: '200px',
      position: 'absolute',
      top: 0,
      left: 0,
    };
    return (
      <Wrapper>
        <Circle
          progress={this.props.score / this.props.scoreMax}
          options={options}
          initialAnimate
          containerStyle={containerStyle}
          containerClassName={'.progressbar'}
        />
        <Text>
          <ExamResultScoreLabel
            score={this.props.score}
            scoreMax={this.props.scoreMax}
          />
        </Text>
      </Wrapper>
    );
  }
}

CircleProgressbar.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired
};

export default CircleProgressbar;
