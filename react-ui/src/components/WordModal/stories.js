/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { WordModal } from '../.';
import Word from '../../models/Word';
// import { Provider } from '../../utils/testComponents';

// QuestionModal.propTypes = {
// };

const word1 = new Word({
  id: 1,
  chinese: '是',
  pinyin: 'shi4',
  meanings: ['to be']
});

const word2 = new Word({
  id: 2,
  chinese: '中',
  pinyin: 'zhong1',
  meanings: [
    'middle',
    'the center of a place',
    'the place right at the same distance',
    'the furthest point from the border of a circle',
    'maybe I will find another paraphrase to finally',
    'one more and it should be OK!'
  ]
});

const word3 = new Word({
  id: 2,
  chinese: '中',
  pinyin: 'zhong1',
  meanings: [
    'middle',
    'the center of a place',
    'the place right at the same distance between the sides of n object',
    'the furthest point from the border of a circle that is comprised within that mentionned circle',
    'maybe I will find another paraphrase to finally tes overflow-y',
    'one more and it should be OK!'
  ]
});

const mockProps = {
  handleClose: () => {},
  onSubmit: () => {}
};

storiesOf('WordModal', module)
  // .addDecorator(story => <Provider story={story()} />)
  .add('one meaning', () =>
    <WordModal
      open
      {...mockProps}
      word={word1}
    />
  )
  .add('a LOT of meanings', () =>
    <WordModal
      open
      {...mockProps}
      word={word2}
    />
  )
  .add('meanings with multiple lines', () =>
    <WordModal
      open
      {...mockProps}
      word={word3}
    />
  );
