import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class Meaning extends Component {

  render() {
    const Wrapper = styled.div`
      margin-top: 15px;
      font-family: 'Open Sans';
      font-size: 25px;
      font-style: italic;
      color: #454545;
    `;
    return (
      <Wrapper>{this.props.text}</Wrapper>
    );
  }
}

Meaning.propTypes = {
  text: propTypes.string.isRequired
};

export default Meaning;
