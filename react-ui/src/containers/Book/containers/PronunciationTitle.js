import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bookComponents as c } from '../../../components';
import * as models from '../../../models';
import s from '../../../rootSelectors';

class PronunciationTitle extends Component {
  render() {
    return (
      <c.PronunciationTitle
        pronunciationId={this.props.pronunciation ? this.props.pronunciation.id : ''}
        title={this.props.pronunciation ? this.props.pronunciation.title : ''}
        letter={this.props.letter}
      />
    );
  }
}

PronunciationTitle.propTypes = {
  pronunciationId: propTypes.number.isRequired,
  pronunciation: propTypes.instanceOf(models.Pronunciation),
  letter: propTypes.string
};

const mapStateToProps = (state, ownProps) => ({
  pronunciation: s.entities.getPronunciations(state).get(String(ownProps.pronunciationId))
});

export default connect(
  mapStateToProps
)(PronunciationTitle);
