import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 104px;
  max-width: 900px;
  display: flex;
  text-align: center;
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
      <Wrapper fontSize={this.props.fontSize} >
        {this.props.children}
      </Wrapper>
    );
  }
}

QuestionWrapper.propTypes = {
  children: propTypes.node.isRequired,
  fontSize: propTypes.number
};

export default QuestionWrapper;
