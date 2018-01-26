import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  color: #55b6ff;
  a {
    color: inherit;
  }
`;

class Link extends Component {
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

Link.propTypes = {
  children: propTypes.node.isRequired
};

export default Link;
