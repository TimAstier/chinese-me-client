/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { WordBox } from '../.';
import { Word } from '../../models';

// WordBox.propTypes = {
//   disabled: propTypes.bool,
//   openFeedbackModal: propTypes.bool.isRequired,
//   userAnswer: propTypes.string.isRequired,
//   word: propTypes.instanceOf(Word).isRequired
//   currentBoxIndex: propTypes.number.isRequired,
//   index: propTypes.number.isRequired,
//   handleChange: propTypes.func.isRequired,
// };

const word = new Word({
  id: null,
  chinese: '柴',
  pinyin: 'chai2'
});

const mockProps = {
  index: 0,
  handleChange: ()=>{},
  currentBoxIndex: 0
};

storiesOf('WordBox', module)
  .add('with word only', () =>
    <WordBox
      disabled={false}
      openFeedbackModal={false}
      userAnswer={''}
      word={word}
      {...mockProps}
    />
  )
  .add('openFeedbackModal', () =>
    <WordBox
      disabled={false}
      openFeedbackModal
      userAnswer={''}
      word={word}
      {...mockProps}
    />
  )
  .add('disabled', () =>
    <WordBox
      disabled
      openFeedbackModal={false}
      userAnswer={''}
      word={word}
      {...mockProps}
    />
  )
  .add('userAnswer', () =>
    <WordBox
      disabled={false}
      openFeedbackModal={false}
      userAnswer={'chai2'}
      word={word}
      {...mockProps}
    />
  );
