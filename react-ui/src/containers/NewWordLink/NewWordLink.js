import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Word } from '../../models';
import { NewWordLink as NewWordLinkComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';

class NewWordLink extends Component {
  render() {
    return (
      <NewWordLinkComponent {...this.props} />
    );
  }
}

NewWordLink.propTypes = {
  simpChar: propTypes.string.isRequired,
  words: propTypes.arrayOf(propTypes.instanceOf(Word)).isRequired,
  newWordLinkClicked: propTypes.func.isRequired
};

export default connect(
  null,
  {
    newWordLinkClicked: sagaActions.newWordLinkClicked
  }
)(NewWordLink);
