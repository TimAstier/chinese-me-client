import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../../models';
import { bookComponents as c } from '../../../components';
import { default as s } from '../../../rootSelectors';

class Sentence extends Component {

  _name() {
    const { avatar, sentenceType } = this.props;
    if (sentenceType === 'chinese') {
      return avatar ? avatar.get('chineseName') : '';
    }
    return avatar ? avatar.get('name') : '';
  }

  render() {
    const { sentence, sentenceType, displayNames } = this.props;
    if (!sentence) {
      return null;
    }
    return (
      <c.Sentence
        sentence={sentence}
        sentenceType={sentenceType}
        displayNames={displayNames}
        name={this._name()}
      />
    );
  }
}

Sentence.propTypes = {
  sentenceId: propTypes.number.isRequired,
  avatarId: propTypes.number.isRequired,
  sentence: propTypes.instanceOf(models.Sentence),
  avatar: propTypes.instanceOf(models.Avatar),
  sentenceType: propTypes.string.isRequired,
  displayNames: propTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  sentence: s.entities.getSentences(state).get(String(ownProps.sentenceId)),
  avatar: s.entities.getAvatars(state).get(String(ownProps.avatarId))
});

export default connect(
  mapStateToProps
)(Sentence);
