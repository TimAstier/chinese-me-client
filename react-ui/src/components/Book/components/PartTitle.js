import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
// import { Link as LinkComponent } from '../../Shared';
// import { Link } from 'react-router';
import { Bookrow } from './.';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

const H2 = styled.h2`
  font-size: ${props => props.fontSize};
  font-family: 'Calibri';
  color: ${props => props.color};
`;

class PartTitle extends Component {

  // _renderWithLink() {
  //   return (
  //     <LinkComponent>
  //       <Link to={this.props.linkUrl}>
  //         {this.props.children}
  //       </Link>
  //     </LinkComponent>
  //   );
  // }

  _fontSize() {
    switch (this.props.type) {
      case 'secondary': return '24px';
      case 'tertiary': return '22px';
      default: return '24px';
    }
  }

  _color() {
    switch (this.props.type) {
      case 'secondary': return '#4F81BD';
      case 'tertiary': return '#C0504D';
      default: return '#CD3C44';
    }
  }

  render() {
    return (
      <Bookrow
        center={!this.props.type}
        buttonOptions={this.props.buttonOptions}
      >
        <Element name={this.props.anchor}>
          <H2 fontSize={this._fontSize()} color={this._color()}>
            { this.props.children }
          </H2>
        </Element>
      </Bookrow>
    );
  }
}

PartTitle.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired,
  type: propTypes.oneOf(['secondary', 'tertiary']),
  buttonOptions: propTypes.object,
  anchor: propTypes.string
  // linkUrl: propTypes.string
};

export default PartTitle;
