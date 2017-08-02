import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { CharacterPinyin as CharacterPinyinComponent } from '../../components';

import { Character } from '../../models';
import selectors from '../../rootSelectors';
import { actions } from '../../redux/characterPinyin';

class CharacterPinyin extends Component {
  handleChange(event) {
    return this.props.setUserAnswer(event.target.value);
  }

  render() {
    return (
      <CharacterPinyinComponent
        handleChange={this.handleChange.bind(this)}
        { ...this.props }
      />
    );
  }
}

CharacterPinyin.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  status: propTypes.oneOf([
    'question',
    'wrong',
    'correct'
  ]).isRequired,
  attemptsLeft: propTypes.number.isRequired,
  openModal: propTypes.bool.isRequired,
  userAnswer: propTypes.string.isRequired,
  setUserAnswer: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  character: selectors.getCurrentCharacter(state),
  status: selectors.getCharacterPinyinStatus(state),
  attemptsLeft: selectors.getCharacterPinyinAttemptsLeft(state),
  openModal: selectors.getOpenModal(state),
  userAnswer: selectors.getCharacterPinyinUserAnswer(state)
});

const mapDispatchToProps = () => ({
  setUserAnswer: actions.setUserAnswer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CharacterPinyin);
