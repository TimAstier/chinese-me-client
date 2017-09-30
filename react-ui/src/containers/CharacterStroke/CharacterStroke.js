import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CharacterStroke as CharacterStrokeComponent } from '../../components';
import { Character } from '../../models';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class CharacterStroke extends Component {

  render() {
    return (
      <CharacterStrokeComponent
        simpChar={this.props.character.simpChar}
        strokeAnimationFinished={this.props.strokeAnimationFinished}
      />
    );
  }
}

CharacterStroke.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  strokeAnimationFinished: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  character: selectors.getCurrentCharacter(state)
});

export default connect(
  mapStateToProps,
  {
    strokeAnimationFinished: sagaActions.strokeAnimationFinished
  }
)(CharacterStroke);
