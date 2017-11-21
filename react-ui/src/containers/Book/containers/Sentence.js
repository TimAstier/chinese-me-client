import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../../models';
import { bookComponents as c } from '../../../components';
import { default as s } from '../../../rootSelectors';

class Sentence extends Component {

  render() {
    const { sentence, sentenceType } = this.props;
    if (!sentence) {
      return null;
    }
    return (
      <c.Sentence
        sentence={sentence}
        sentenceType={sentenceType}
      />
    );
  }
}

Sentence.propTypes = {
  sentenceId: propTypes.number.isRequired,
  sentence: propTypes.instanceOf(models.Sentence),
  sentenceType: propTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  sentence: s.entities.getSentences(state).get(String(ownProps.sentenceId))
});

export default connect(
  mapStateToProps
)(Sentence);
