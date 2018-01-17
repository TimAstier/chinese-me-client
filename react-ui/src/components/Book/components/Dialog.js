import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookContainers as C } from '../../../containers';
import { Bookrow } from './.';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

class Dialog extends Component {
  render() {
    if (!this.props.statements) {
      return null;
    }
    const array = this.props.statements.map(id => {
      return (
        <C.Statement
          key={id}
          statementId={id}
          sentenceType={this.props.sentenceType}
          displayNames={this.props.displayNames}
        />
      );
    });
    return (
      <Bookrow
        flexDirection={'column'}
        buttonOptions={{
          type: 'dialog',
          data: { elementId: this.props.dialogId },
          top: true
        }}
      >
        {
          this.props.sentenceType !== 'translation' &&
            <Element name={`dialog-${this.props.dialogId}`}/>
        }
        {array}
      </Bookrow>
    );
  }
}

Dialog.propTypes = {
  statements: propTypes.arrayOf(propTypes.number),
  displayNames: propTypes.bool.isRequired,
  sentenceType: propTypes.string.isRequired,
  dialogId: propTypes.number.isRequired
};

export default Dialog;
