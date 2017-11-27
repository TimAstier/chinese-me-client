import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import * as models from '../../../models';
import { default as s } from '../../../rootSelectors';

class Word extends Component {

  render() {
    return <c.Word word={this.props.word} />;
  }
}

Word.propTypes = {
  wordId: propTypes.number.isRequired,
  word: propTypes.instanceOf(models.Word)
};

const mapStateToProps = (state, ownProps) => ({
  word: s.entities.getWords(state).get(String(ownProps.wordId))
});

export default connect(
  mapStateToProps
)(Word);
