import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as models from '../../../models';
import pinyinize from 'pinyinize';
import { Char, Pinyin, Meaning, Bookrow } from './.';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';

const CharWrapper = styled.div`
  width: 150px;
`;

const PinyinWrapper = styled.div`
  width: 200px;
`;

class Word extends Component {
  render() {
    return (
      <Bookrow>
        <CharWrapper>
          <Char>{this.props.word.chinese}</Char>
        </CharWrapper>
        <PinyinWrapper>
          <Pinyin>{pinyinize(this.props.word.pinyin)}</Pinyin>
        </PinyinWrapper>
        {
          !isEmpty(this.props.word.meanings) &&
            <Meaning>
              {this.props.word.meanings.reduce((a, b) => a + '; ' + b)}
            </Meaning>
        }
      </Bookrow>
    );
  }
}

Word.propTypes = {
  word: propTypes.instanceOf(models.Word).isRequired
};

export default Word;
