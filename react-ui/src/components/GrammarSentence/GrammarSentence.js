import React, { Component, PropTypes } from 'react';

class GrammarSentence extends Component {

  render() {
    return (
      <div className="grammar-sentence">
        <div className="chinese">{this.props.chinese}</div>
        <div className="translation">{this.props.translation}</div>
        <div className="rawtranslation">{this.props.rawtranslation}</div>
      </div>
    );
  }
}

GrammarSentence.propTypes = {
  chinese: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  rawtranslation: PropTypes.string.isRequired
};

export default GrammarSentence;
