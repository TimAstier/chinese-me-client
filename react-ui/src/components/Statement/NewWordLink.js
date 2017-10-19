import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  cursor: pointer;
  color: #55b6ff;
`;

class NewWordLink extends Component {

  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
        {this.props.simpChar}
      </Wrapper>
    );
  }
}

NewWordLink.propTypes = {
  simpChar: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default NewWordLink;
