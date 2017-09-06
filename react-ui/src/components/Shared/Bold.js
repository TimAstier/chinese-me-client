import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  font-weight: 600;
`;

class Bold extends Component {

  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

Bold.propTypes = {
  children: propTypes.node.isRequired
};

export default Bold;
