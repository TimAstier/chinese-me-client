import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../../models';
import { bookComponents as c } from '../../../components';
import { default as s } from '../../../rootSelectors';

class Sentence extends Component {

  render() {
    const { sentence, sentenceType, settings } = this.props;
    if (!sentence) {
      return null;
    }
    return (
      <c.Sentence
        sentence={sentence}
        sentenceType={sentenceType}
        settings={settings}
      />
    );
  }
}

Sentence.propTypes = {
  sentenceId: propTypes.number.isRequired,
  sentence: propTypes.instanceOf(models.Sentence),
  sentenceType: propTypes.string.isRequired,
  settings: propTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  sentence: s.entities.getSentences(state).get(String(ownProps.sentenceId)),
  settings: s.getAugmentedSettings(state)
});

export default connect(
  mapStateToProps
)(Sentence);
