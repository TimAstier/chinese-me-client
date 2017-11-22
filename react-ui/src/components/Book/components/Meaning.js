import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Cambria';
  font-size: 21px;
  font-style: italic;
  color: #454545;
  margin-left: 10px;
  margin-top: 10px;
`;

class Meaning extends Component {

  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

Meaning.propTypes = {
  children: propTypes.string.isRequired
};

export default Meaning;