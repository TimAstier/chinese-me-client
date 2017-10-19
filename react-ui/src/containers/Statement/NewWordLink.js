import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Word } from '../../models';
import { NewWordLink as NewWordLinkComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';

class NewWordLink extends Component {

  handleClick() {
    // TODO: 2 cases (one or more words)
    //this.props.setCurrentWordId(this.props.words[0].get('id'));
    // open modal
    return this.props.newWordLinkClicked(this.props.words[0].get('id'));
  }

  render() {
    return (
      <NewWordLinkComponent
        simpChar={this.props.simpChar}
        onClick={this.handleClick.bind(this)}
      />
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
