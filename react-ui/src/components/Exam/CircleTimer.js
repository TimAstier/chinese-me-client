import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Circle } from 'react-progressbar.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60px;
  height: 60px;
`;

const InnerWrapper = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
`;

const Text = styled.div`
  z-index: 10;
  font-family: 'Open Sans';
	font-size: 18px;
	text-align: center;
	color: ${props => props.timeLeft <= 0.125 ? '#f65859' : '#7f8c94'};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

class CircleTimer extends Component {
  render() {
    const options = {
      strokeWidth: 5, // Unit is percentage of SVG canvas' size.
      color: this.props.timeLeft <= 0.125 ? '#fd5f64' : '#55b6ff',
      trailColor: '#F2F7FA',
      trailWidth: 5
    };
    // From react-progressbar-js doc:
    // Make sure that your container has same aspect ratio as the SVG canvas
    // See: https://github.com/kimmobrunfeldt/react-progressbar.js/tree/master#api
    const containerStyle = {
      width: '60px',
      height: '60px',
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'scaleX(-1)' // Flip the element to get 'timeLeft' animation
    };
    return (
      <Wrapper>
        <InnerWrapper>
          <Circle
            progress={this.props.timeLeft}
            options={options}
            initialAnimate={false}
            containerStyle={containerStyle}
            containerClassName={'.progressbar'}
          />
          <Text
            timeLeft={this.props.timeLeft}
          >
            {this.props.timeLabel}
          </Text>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

CircleTimer.propTypes = {
  timeLeft: propTypes.number.isRequired,
  timeLabel: propTypes.string.isRequired
};

export default CircleTimer;
