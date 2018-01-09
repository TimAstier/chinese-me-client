import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import * as models from '../../../models';
import { default as s } from '../../../rootSelectors';
import { CharacterModeException } from '../../../exceptions';

class Character extends Component {
  _renderBox() {
    return <c.Character simpChar={this.props.character.simpChar} />;
  }

  _renderPractice() {
    return (
      <c.CharacterPractice
        simpChar={this.props.character.simpChar}
        characterId={this.props.characterId}
        writingUrl={this.props.character.writingUrl}
      />
    );
  }

  _renderDetails() {
    return (
      <c.CharacterDetails
        pinyinNumber={this.props.character.pinyinNumber}
        simpChar={this.props.character.simpChar}
        meaning={this.props.character.meaning}
        id={this.props.character.id}
        writingUrl={this.props.character.writingUrl}
        etymologyUrl={this.props.character.etymologyUrl}
        hidePinyin={this.props.options ? this.props.options.hidePinyin : undefined}
        hideMeaning={this.props.options ? this.props.options.hideMeaning : undefined}
        hideLinks={this.props.options ? this.props.options.hideLinks : undefined}
        audio={this.props.options ? this.props.options.audio : undefined}
        anchor={this.props.anchor}
      />
    );
  }

  render() {
    if (!this.props.options) {
      throw new Error('Missing options for Character component');
    }
    const mode = this.props.options.mode === undefined ?
      'box' : this.props.options.mode;
    switch (mode) {
      case 'practice': return this._renderPractice();
      case 'details': return this._renderDetails();
      case 'box': return this._renderBox();
      default: throw new CharacterModeException(mode);
    }
  }
}

Character.propTypes = {
  characterId: propTypes.number.isRequired,
  character: propTypes.instanceOf(models.Character),
  options: propTypes.shape({
    mode: propTypes.oneOf(['practice', 'details', 'box']),
    hidePinyin: propTypes.bool,
    hideMeaning: propTypes.bool,
    hideLinks: propTypes.bool,
    audio: propTypes.bool
  }),
  anchor: propTypes.string
};

const mapStateToProps = (state, ownProps) => ({
  character: s.entities.getCharacters(state).get(String(ownProps.characterId))
});

export default connect(
  mapStateToProps
)(Character);
