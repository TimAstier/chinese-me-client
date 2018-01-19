import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CharacterCalligraphy as CharacterCalligraphyComponent } from '../../components';
import s from '../../rootSelectors';
import { Character } from '../../models';
import * as content from '../../components/Book/calligraphy';

class CharacterCalligraphy extends Component {
  render() {
    return (
      <CharacterCalligraphyComponent
        content={content[this.props.character.calligraphyHash]}
        character={this.props.character.simpChar}
        videoUrl={this.props.character.calligraphyVideo}
      />
    );
  }
}

CharacterCalligraphy.propTypes = {
  character: propTypes.instanceOf(Character).isRequired
};

const mapStateToProps = state => ({
  character: s.getCurrentCharacter(state)
});

export default connect(
  mapStateToProps
)(CharacterCalligraphy);
