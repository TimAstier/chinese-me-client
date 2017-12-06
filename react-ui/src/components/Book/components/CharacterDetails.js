import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as models from '../../../models';
import pinyinize from 'pinyinize';
import { bookContainers as C } from '../../../containers';
import { Char, Pinyin, Meaning, Bookrow } from './.';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

class CharacterDetails extends Component {

  render() {
    return (
      <Bookrow
        buttonOptions={
          this.props.audio ?
          {
            type: 'audio',
            data: {
              url: pinyinNumberToAudioUrl(this.props.character.pinyinNumber),
              text: this.props.character.simpChar
            }
          }
          : undefined
        }
      >
        <Char><Element name={this.props.anchor}>{this.props.character.simpChar}</Element></Char>
        {
            !this.props.hidePinyin === true &&
              <Pinyin>{pinyinize(this.props.character.pinyinNumber)}</Pinyin>
        }
        {
            !this.props.hideMeaning === true &&
              <Meaning>{this.props.character.meaning}</Meaning>
        }
        {
            !this.props.hideLinks === true &&
              <C.BookButton
                buttonOptions={{
                  type: 'stroke',
                  data: {
                    elementId: this.props.character.id
                  }
                }}
              />
        }
        {
            this.props.character.writingUrl && !this.props.hideLinks === true &&
              <C.BookButton
                buttonOptions={{
                  type: 'writing',
                  data: {
                    elementId: this.props.character.id
                  }
                }}
              />
        }
        {
            this.props.character.etymologyUrl && !this.props.hideLinks === true &&
              <C.BookButton
                buttonOptions={{
                  type: 'story',
                  data: {
                    elementId: this.props.character.id
                  }
                }}
              />
        }
      </Bookrow>
    );
  }
}

CharacterDetails.propTypes = {
  character: propTypes.instanceOf(models.Character).isRequired,
  hidePinyin: propTypes.bool,
  hideMeaning: propTypes.bool,
  hideLinks: propTypes.bool,
  audio: propTypes.bool,
  anchor: propTypes.string
};

export default CharacterDetails;
