import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import * as models from '../../../models';
import { default as s } from '../../../rootSelectors';
import { getGrammarSentenceCode } from '../../../utils/bookContent';
import insertVariables from '../../../utils/insertVariables';

class Example extends Component {

  render() {
    return (
      <c.Example
        basic={this.props.options.basic}
        big={this.props.options.big}
        audio={this.props.options.audio}
        code={getGrammarSentenceCode(this.props.episodeNumber, this.props.example.number + 1)}
        chinese={insertVariables(this.props.example.chinese, this.props.settings)}
        pinyin={this.props.example.pinyin}
        translation={this.props.example.translation}
        literalTranslation={this.props.example.literalTranslation}
        audioUrl={this.props.example.audioUrl}
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
    big: propTypes.bool,
    audio: propTypes.bool
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
