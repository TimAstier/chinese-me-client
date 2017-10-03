import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 20px;
  height: 320px;
  border-radius: 10px;
  background-color: #f2f7fa;
  box-shadow: inset 0 1px 8px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Score = styled.div`
  width: 20px;
  height: ${props => props.height ? `${props.height}px` : '0px'};
  border-radius: 10px;
  background-image: linear-gradient(
    to top,
    ${props => props.colorA},
    ${props => props.colorB}
    )
  }
  box-shadow: ${props => props.abovePass ?
    '0 2px 8px 0 #91ca49'
    : '0 2px 8px 0 #55b6ff'
  }
`;

class ExamProgressbar extends Component {

  render() {
    return (
      <Wrapper>
        <Score
          height={this.props.score / this.props.scoreMax * 320}
          abovePass={this.props.score >= 7}
          colorA={this.props.score >= 7 ? '#9fdb53' : '#8edcff'}
          colorB={this.props.score >= 7 ? '#91ca49' : '#55b6ff'}
        />
      </Wrapper>
    );
  }
}

ExamProgressbar.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired
};

export default ExamProgressbar;
