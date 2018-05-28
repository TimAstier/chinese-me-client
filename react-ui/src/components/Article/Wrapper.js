import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
  h1 {
    font-size: 34px;
    font-style: bold;
    font-family: 'Cambria';
    color: #C0504D;
    text-align: center;
  },
  h2 {
    font-size: 28px;
    font-style: bold;
    font-family: 'Cambria';
    margin-bottom: 30px;
    text-align: center;
  },
  h3 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 32px;
    font-style: bold;
    font-family: 'Cambria';
    color: black;
    text-align: center;
  },
  h4 {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 24px;
    font-style: bold;
    font-family: 'Cambria';
    color: black;
    text-align: left;
  },
`;

class Wrapper extends Component {
  render() {
    return (
      <Article>
        { this.props.children }
      </Article>
    );
  }
}

Wrapper.propTypes = {
  children: propTypes.array.isRequired
};

export default Wrapper;
