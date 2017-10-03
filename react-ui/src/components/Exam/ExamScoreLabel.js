import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background-color: #f2f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
	font-family: 'Open Sans';
	font-size: 20px;
	color: #b2babf;
`;

const BlackSpan = styled.span`
  color: #454545;
`;

class ExamScoreLabel extends Component {

  render() {
    return (
      <Wrapper>
        <div>
          <BlackSpan>{this.props.score}</BlackSpan>
          <span>/{this.props.scoreMax}</span>
        </div>
      </Wrapper>
    );
  }
}

ExamScoreLabel.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired
};

export default ExamScoreLabel;
