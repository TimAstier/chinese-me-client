import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
`;

const Label = styled.span`
  font-size: 20px;
  font-family: 'Calibri';
`;

const Title = styled.span`
  font-size: 30px;
  font-family: 'STKaitiSC';
`;

class LessonTitle extends Component {

  render() {
    return (
        <H1>
          <Label>{this.props.label}</Label>
          <br/>
          <Title>{this.props.title}</Title>
        </H1>
    );
  }
}

LessonTitle.propTypes = {
  label: propTypes.string.isRequired,
  title: propTypes.string.isRequired
};

export default LessonTitle;
