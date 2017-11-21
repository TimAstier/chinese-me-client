import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as models from '../../../models';
import pinyinize from 'pinyinize';
import { bookContainers as C } from '../../../containers';
import { Char, Pinyin, Meaning, Bookrow } from './.';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';

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
        <Char>{this.props.character.simpChar}</Char>
        {
          !this.props.hidePinyin === true &&
            <Pinyin>{pinyinize(this.props.character.pinyinNumber)}</Pinyin>
        }
        {
          !this.props.hideMeaning === true &&
            <Meaning>{this.props.character.meaning}</Meaning>
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
  audio: propTypes.bool
};

export default CharacterDetails;
