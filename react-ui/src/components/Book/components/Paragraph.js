import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Bookrow } from './.';
import styled from 'styled-components';

const Text = styled.div`
  width: 100%;
  font-size: 21px;
  font-family: 'Cambria';
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;
  color: ${props => props.color ? props.color : 'black'}
`;

class Paragraph extends Component {
  render() {
    return (
      <Bookrow buttonOptions={this.props.buttonOptions}>
        <Text color={this.props.color}>
          {this.props.children}
        </Text>
      </Bookrow>
    );
  }
}

Paragraph.propTypes = {
  children: propTypes.node.isRequired,
  buttonOptions: propTypes.object,
  color: propTypes.string
};

export default Paragraph;
