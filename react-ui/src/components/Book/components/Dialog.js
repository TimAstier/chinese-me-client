import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookContainers as C } from '../../../containers';
import { bookComponents as c } from '../../.';
import { Bookrow } from './.';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

class Dialog extends Component {
  _buttonOptions() {
    const { sentenceType } = this.props;
    if (sentenceType === 'translation' || sentenceType === 'pinyin') {
      return undefined;
    }
    return {
      type: 'dialog',
      data: { elementId: this.props.dialogId },
      top: true
    };
  }

  _renderTitle() {
    if (!this.props.title) {
      return null;
    }
    return (
      <c.PartTitle type="secondary">
        {this.props.title}
      </c.PartTitle>
    );
  }

  _renderIntro() {
    if (!this.props.intro) {
      return null;
    }
    return (
      <c.P>
        <i>
          {this.props.intro}
        </i>
      </c.P>
    );
  }

  _renderSpecialIntro() {
    const { specialIntro } = this.props;
    return specialIntro ? specialIntro() : null;
  }

  _shouldDisplayHeader() {
    if (!(this.props.sentenceType === 'chinese' || this.props.sentenceType === 'chineseWithTranslation')) {
      return false;
    }
    if (this.props.hideHeader === true) {
      return false;
    }
    return true;
  }

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
      <div>
        <Element name={`dialog-${this.props.dialogId}`}/>
        { this._shouldDisplayHeader() && this._renderTitle() }
        { this._shouldDisplayHeader() && this._renderSpecialIntro() }
        { this._shouldDisplayHeader() && this._renderIntro() }
        <Bookrow
          flexDirection={'column'}
          buttonOptions={this._buttonOptions()}
        >
          {array}
        </Bookrow>
      </div>
    );
  }
}

Dialog.propTypes = {
  statements: propTypes.arrayOf(propTypes.number),
  displayNames: propTypes.bool.isRequired,
  sentenceType: propTypes.string.isRequired,
  dialogId: propTypes.number.isRequired,
  title: propTypes.string,
  intro: propTypes.string,
  hideHeader: propTypes.bool,
  specialIntro: propTypes.func
};

export default Dialog;
