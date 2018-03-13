import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-height: 104px;
  height: ${ props => props.fixedHeight ? '104px' : undefined };
  padding-top: 5%;
  padding-bottom: 2%;
  max-width: 900px;
  width: 95%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  font-family: 'STKaitiSC';
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '30px'};
  font-weight: bold;
  line-height: 1.2;
  color: #454545;
`;

class QuestionWrapper extends Component {
  render() {
    return (
      <Wrapper fontSize={this.props.fontSize} fixedHeight={this.props.fixedHeight}>
        {this.props.children}
      </Wrapper>
    );
  }
}

QuestionWrapper.propTypes = {
  children: propTypes.node.isRequired,
  fontSize: propTypes.number,
  fixedHeight: propTypes.bool
};

export default QuestionWrapper;
