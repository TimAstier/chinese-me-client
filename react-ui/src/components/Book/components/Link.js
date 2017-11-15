import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  color: #55b6ff;
  cursor: pointer;
`;

class Link extends Component {

  render() {
    return (
      <Wrapper
        onClick={this.props.handleClick}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

Link.propTypes = {
  children: propTypes.node.isRequired,
  handleClick: propTypes.func
};

export default Link;
