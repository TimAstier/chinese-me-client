import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import pinyinize from 'pinyinize';
import { bookContainers as C } from '../../../containers';
import { Char, Pinyin, Bookrow, Chinese } from './.';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

const Wrapper = styled.div`
  display: flex;
`;

const CharWrapper = styled.div`
  width: 90px;
`;

const PinyinWrapper = styled.div`
  width: 110px;
`;

const LinksWrapper = styled.div`
  width: 150px;
  display: flex;
`;

const MeaningWrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex: wrap;
  text-align: justify;
  margin-left: 10px;
  margin-top: 10px;
`;

class CharacterDetails extends Component {
  render() {
    return (
      <Bookrow
        buttonOptions={
          this.props.audio ? {
            type: 'audio',
            data: {
              url: pinyinNumberToAudioUrl(this.props.pinyinNumber),
              text: this.props.simpChar
            }
          }
            : undefined
        }
      >
        <Wrapper>
          <CharWrapper>
            <Char><Element name={this.props.anchor}>{this.props.simpChar}</Element></Char>
          </CharWrapper>
          <LinksWrapper>
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
              this.props.calligraphyHash && !this.props.hideLinks === true &&
                <C.BookButton
                  buttonOptions={{
                    type: 'calligraphy',
                    data: {
                      elementId: this.props.id
                    }
                  }}
                />
            }
            {
              this.props.etymologyHash && !this.props.hideLinks === true &&
                <C.BookButton
                  buttonOptions={{
                    type: 'etymology',
                    data: {
                      elementId: this.props.id
                    }
                  }}
                />
            }
          </LinksWrapper>
          {
            !this.props.hidePinyin === true &&
              <PinyinWrapper>
                <Pinyin>{pinyinize(this.props.pinyinNumber)}</Pinyin>
              </PinyinWrapper>
          }
          {
            !this.props.hideMeaning === true &&
              <MeaningWrapper>
                <span>
                  <i>{this.props.meaning}</i>
                  {
                    this.props.radical &&
                      <span>
                        &nbsp;(Radical: <Chinese>{this.props.radical}</Chinese>)
                      </span>
                  }
                  {
                    this.props.phonetic &&
                      <span>
                        &nbsp;(Phonetic: <Chinese>{this.props.phonetic}</Chinese>)
                      </span>
                  }
                </span>
              </MeaningWrapper>
          }
        </Wrapper>
      </Bookrow>
    );
  }
}

CharacterDetails.propTypes = {
  pinyinNumber: propTypes.string,
  simpChar: propTypes.string,
  meaning: propTypes.string,
  id: propTypes.number,
  calligraphyHash: propTypes.string,
  etymologyHash: propTypes.string,
  hidePinyin: propTypes.bool,
  hideMeaning: propTypes.bool,
  hideLinks: propTypes.bool,
  audio: propTypes.bool,
  anchor: propTypes.string,
  radical: propTypes.string,
  phonetic: propTypes.string
};

export default CharacterDetails;
