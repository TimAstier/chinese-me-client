import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as models from '../../../models';
import pinyinize from 'pinyinize';
import { Char, Pinyin, Meaning, Bookrow } from './.';
import isEmpty from 'lodash/isEmpty';

class Word extends Component {

  render() {
    return (
      <Bookrow>
        <Char>{this.props.word.chinese}</Char>
        <Pinyin>{pinyinize(this.props.word.pinyin)}</Pinyin>
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
