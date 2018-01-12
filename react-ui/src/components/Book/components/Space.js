import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: ${props => props.width + 'px'};
`;

class Space extends Component {
  render() {
    return (
      <Wrapper width={this.props.width}/>
    );
  }
}

Space.propTypes = {
  width: propTypes.number.isRequired
};

export default Space;
