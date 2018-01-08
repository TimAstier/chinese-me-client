import React, { Component } from 'react';
import propTypes from 'prop-types';
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
              url: pinyinNumberToAudioUrl(this.propspinyinNumber),
              text: this.props.simpChar
            }
          }
          : undefined
        }
      >
        <Char><Element name={this.props.anchor}>{this.props.simpChar}</Element></Char>
        {
          !this.props.hidePinyin === true &&
            <Pinyin>{pinyinize(this.props.pinyinNumber)}</Pinyin>
        }
        {
          !this.props.hideMeaning === true &&
            <Meaning>{this.props.meaning}</Meaning>
        }
        {
          !this.props.hideLinks === true &&
            <C.BookButton
              buttonOptions={{
                type: 'stroke',
                data: {
                  elementId: this.props.id
                }
              }}
            />
        }
        {
          this.props.writingUrl && !this.props.hideLinks === true &&
            <C.BookButton
              buttonOptions={{
                type: 'writing',
                data: {
                  elementId: this.props.id
                }
              }}
            />
        }
        {
          this.props.etymologyUrl && !this.props.hideLinks === true &&
            <C.BookButton
              buttonOptions={{
                type: 'story',
                data: {
                  elementId: this.props.id
                }
              }}
            />
        }
      </Bookrow>
    );
  }
}

CharacterDetails.propTypes = {
  pinyinNumber: propTypes.string,
  simpChar: propTypes.string,
  meaning: propTypes.string,
  id: propTypes.number,
  writingUrl: propTypes.string,
  etymologyUrl: propTypes.string,
  hidePinyin: propTypes.bool,
  hideMeaning: propTypes.bool,
  hideLinks: propTypes.bool,
  audio: propTypes.bool,
  anchor: propTypes.string
};

export default CharacterDetails;
