/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { WordBoxResult } from '../.';
import { Word } from '../../models';

// WordBoxResult.propTypes = {
//   word: propTypes.instanceOf(Word).isRequired,
//   success: propTypes.bool.isRequired,
//   userAnswer: propTypes.string.isRequired
// };

const word1 = new Word({
  id: null,
  chinese: '柴',
  pinyin: 'chai2'
});

const word2 = new Word({
  id: null,
  chinese: '五百三十九',
  pinyin: 'chai2'
});

storiesOf('WordBoxResult', module)
  .add('success: true', () =>
    <WordBoxResult
      success
      userAnswer={'chai2'}
      word={word1}
    />
  )
  .add('success: false', () =>
    <WordBoxResult
      success={false}
      userAnswer={'zhong1'}
      word={word1}
    />
  )
  .add('long word', () =>
    <WordBoxResult
      success={false}
      userAnswer={'zhong1'}
      word={word2}
    />
  );
