import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import pinyinize from 'pinyinize';
import { bookContainers as C } from '../../../containers';
import { Char, Pinyin, Meaning, Bookrow } from './.';
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
          </LinksWrapper>
          {
            !this.props.hidePinyin === true &&
              <PinyinWrapper>
                <Pinyin>{pinyinize(this.props.pinyinNumber)}</Pinyin>
              </PinyinWrapper>
          }
          {
            !this.props.hideMeaning === true &&
              <div>
                <Meaning>{this.props.meaning}</Meaning>
              </div>
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
  writingUrl: propTypes.string,
  etymologyUrl: propTypes.string,
  hidePinyin: propTypes.bool,
  hideMeaning: propTypes.bool,
  hideLinks: propTypes.bool,
  audio: propTypes.bool,
  anchor: propTypes.string
};

export default CharacterDetails;
