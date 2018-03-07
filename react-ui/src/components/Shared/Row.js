import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  page-break-inside: avoid;
  display: flex;
  @media print {
    display: ${props => props.noPrint ? 'none' : 'flex'};
  }
  margin-bottom: ${ props => props.marginBottom ?
    `${props.marginBottom}px` : undefined };
  margin-top: ${ props => props.marginTop ?
    `${props.marginTop}px` : undefined };
  line-height: ${ props => props.lineHeight ?
    `${props.lineHeight}px` : undefined };
`;

class Row extends Component {
  render() {
    return (
      <Wrapper
        marginBottom={this.props.marginBottom}
        marginTop={this.props.marginTop}
        lineHeight={this.props.lineHeight}
        noPrint={this.props.noPrint}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

Row.propTypes = {
  children: propTypes.node.isRequired,
  marginBottom: propTypes.number,
  marginTop: propTypes.number,
  lineHeight: propTypes.number,
  noPrint: propTypes.bool
};

export default Row;
