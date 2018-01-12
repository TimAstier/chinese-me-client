import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
// import { Link as LinkComponent } from '../../Shared';
// import { Link } from 'react-router';
import { Bookrow } from './.';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

const titles = {
  characters: 'CHARACTERS',
  patterns: 'PATTERNS',
  dialog: 'DIALOG',
  dialogs: 'DIALOGS',
  pronunciation: 'PRONUNCIATION',
  culture: 'CULTURE & SOCIETY',
  words: 'WORDS & EXPRESSIONS',
  review: 'EXERCISES',
  exam: 'EXAM'
};

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
        marginTop={this.props.type === 'secondary' || this.props.type === 'tertiary' ? 10 : 60}
      >
        <Element name={this.props.anchor}>
          <H2 fontSize={this._fontSize()} color={this._color()}>
            { this.props.name ? titles[this.props.name] : this.props.children }
          </H2>
        </Element>
      </Bookrow>
    );
  }
}

PartTitle.propTypes = {
  name: propTypes.oneOf([
    'characters',
    'patterns',
    'dialog',
    'dialogs',
    'pronunciation',
    'culture',
    'words',
    'review',
    'exam'
  ]),
  children: propTypes.oneOfType([propTypes.string, propTypes.object]),
  type: propTypes.oneOf(['secondary', 'tertiary']),
  buttonOptions: propTypes.object,
  anchor: propTypes.string
  // linkUrl: propTypes.string
};

export default PartTitle;
