import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CharacterAnimation as CharacterAnimationComponent } from '../../components';
import { Character } from '../../models';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class CharacterAnimation extends Component {

  render() {
    if (this.props.animationId === '') {
      return null;
    }
    return (
      <CharacterAnimationComponent
        character={this.props.character}
        strokeAnimationFinished={this.props.strokeAnimationFinished}
        animationId={this.props.animationId}
      />
    );
  }
}

CharacterAnimation.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  strokeAnimationFinished: propTypes.func.isRequired,
  animationId: propTypes.string
};

const mapStateToProps = state => ({
  character: s.getCurrentCharacter(state),
  animationId: s.hanzi.getAnimationId(state)
});

export default connect(
  mapStateToProps,
  {
    strokeAnimationFinished: sagaActions.strokeAnimationFinished
  }
)(CharacterAnimation);
