import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Bookrow } from './.';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 21px;
  font-family: 'Cambria';
  text-align: justify;
  text-justify: inter-word;
  line-height: normal;
`;

class Paragraph extends Component {

  render() {
    return (
      <Bookrow>
        <Text>
          {this.props.children}
        </Text>
      </Bookrow>
    );
  }
}

Paragraph.propTypes = {
  children: propTypes.node.isRequired
};

export default Paragraph;
