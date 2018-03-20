import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
// import { Link as LinkComponent } from '../../Shared';
// import { Link } from 'react-router';
import { Bookrow } from './.';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

const titles = {
  objective: 'WHAT YOU WILL LEARN',
  characters: 'CHARACTERS',
  patterns: 'PATTERNS',
  dialog: 'DIALOGUE',
  dialogs: 'DIALOGUES',
  dialog_zh: '会话',
  pronunciation: 'PRONUNCIATION',
  culture: 'CULTURE & SOCIETY',
  words: 'WORDS & EXPRESSIONS',
  review: 'EXERCISES',
  exam: 'EXAM'
};

const H2 = styled.h2`
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
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
    if (this.props.name === 'dialog_zh') {
      return '32px';
    }
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

  _marginTop() {
    if (this.props.noMargin) {
      return undefined;
    }
    return this.props.type === 'secondary' || this.props.type === 'tertiary'
      ? 10
      : 60;
  }

  _fontFamily() {
    if (this.props.name === 'dialog_zh') {
      return 'Kai';
    }
    return 'Calibri';
  }

  render() {
    return (
      <Bookrow
        center={!this.props.type}
        buttonOptions={this.props.buttonOptions}
        marginTop={this._marginTop()}
        noPrint={this.props.noPrint}
      >
        <Element name={this.props.anchor}>
          <H2 fontSize={this._fontSize()} color={this._color()} fontFamily={this._fontFamily()}>
            { this.props.name ? titles[this.props.name] : this.props.children }
          </H2>
        </Element>
      </Bookrow>
    );
  }
}

PartTitle.propTypes = {
  name: propTypes.oneOf([
    'objective',
    'characters',
    'patterns',
    'dialog',
    'dialogs',
    'dialog_zh',
    'pronunciation',
    'culture',
    'words',
    'review',
    'exam'
  ]),
  children: propTypes.oneOfType([propTypes.string, propTypes.object]),
  type: propTypes.oneOf(['secondary', 'tertiary']),
  buttonOptions: propTypes.object,
  anchor: propTypes.string,
  noMargin: propTypes.bool,
  noPrint: propTypes.bool
  // linkUrl: propTypes.string
};

export default PartTitle;
