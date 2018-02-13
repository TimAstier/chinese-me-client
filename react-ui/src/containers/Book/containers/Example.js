import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import * as models from '../../../models';
import { default as s } from '../../../rootSelectors';
import { getGrammarSentenceCode } from '../../../utils/bookContent';
import insertVariables from '../../../utils/insertVariables';
import { audioUrls } from '../../../constants/urls';

class Example extends Component {
  _audioUrl() {
    if (this.props.example.chinese.indexOf('[') !== -1) {
      // contains a template variable so we need to use robotic voice instead
      return null; // there is no audio file
    }
    return `${audioUrls.examplesPath}/${this.props.episodeNumber}_${this.props.example.order}.mp3`;
  }

  render() {
    return (
      <c.Example
        basic={this.props.options.basic}
        audio={this.props.options.audio}
        code={getGrammarSentenceCode(this.props.episodeNumber, this.props.example.order)}
        chinese={insertVariables(this.props.example.chinese, this.props.settings)}
        pinyin={this.props.example.pinyin}
        translation={this.props.example.translation}
        literalTranslation={this.props.example.literalTranslation}
        audioUrl={this._audioUrl()}
        displayTranslation={this.props.options.displayTranslation}
      />
    );
  }
}

Example.propTypes = {
  exampleId: propTypes.number.isRequired,
  example: propTypes.instanceOf(models.Example),
  settings: propTypes.object.isRequired,
  options: propTypes.shape({
    basic: propTypes.bool,
    audio: propTypes.bool,
    displayTranslation: propTypes.bool
  }),
  episodeNumber: propTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  example: s.entities.getExamples(state).get(String(ownProps.exampleId)),
  settings: s.getAugmentedSettings(state)
});

export default connect(
  mapStateToProps
)(Example);
