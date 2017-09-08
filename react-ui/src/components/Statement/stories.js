/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Statement } from '../.';
import Sentence from '../../models/Sentence';
import { Provider } from '../../utils/testComponents';

// Statement.propTypes = {
//   sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
//   currentSentenceIndex: propTypes.number.isRequired,
//   isAudioPlaying: propTypes.bool.isRequired,
//   displayControls: propTypes.bool.isRequired,
//   dialogMode: propTypes.string.isRequired
//   read: propTypes.bool.isRequired,
//   stopSentence: propTypes.func.isRequired,
//   switchSentence: propTypes.func.isRequired,
//   playSentence: propTypes.func.isRequired,
// };

const singleSentence = [
  new Sentence({
    chinese: '我叫马文。',
    english: 'My name is Marvin.'
  })
];

const twoSentences = [
  new Sentence({
    chinese: '我叫马文。',
    english: 'My name is Marvin.'
  }), new Sentence({
    chinese: '您贵姓？',
    english: 'What\'s your name?'
  })
];

const threeSentences = [
  new Sentence({
    chinese: '我叫马文。',
    english: 'My name is Marvin.'
  }), new Sentence({
    chinese: '我是美国人。',
    english: 'I am American'
  }), new Sentence({
    chinese: '您贵姓？',
    english: 'What\'s your name?'
  })
];

// Mock dispatch functions
const mockProps = {
  playSentence: () => {},
  switchSentence: () => {},
  stopSentence: () => {},
  isAudioPlaying: false
};

storiesOf('Statement', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('singleSentence', () =>
    <Statement
      sentences={singleSentence}
      currentSentenceIndex={0}
      displayControls
      read={false}
      dialogMode={'listen'}
      { ...mockProps }
    />
  )
  .add('twoSentences: active[0]', () =>
    <Statement
      sentences={twoSentences}
      currentSentenceIndex={0}
      displayControls
      read={false}
      dialogMode={'listen'}
      { ...mockProps }
    />
  )
  .add('twoSentences: active[1]', () =>
    <Statement
      sentences={twoSentences}
      currentSentenceIndex={1}
      displayControls
      read={false}
      dialogMode={'listen'}
      { ...mockProps }
    />
  )
  .add('threeSentences: active[0]', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={0}
      displayControls
      read={false}
      dialogMode={'listen'}
      { ...mockProps }
    />
  )
  .add('threeSentences: active[1]', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={1}
      displayControls
      read={false}
      dialogMode={'listen'}
      { ...mockProps }
    />
  )
  .add('threeSentences: active[2]', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={2}
      displayControls
      read={false}
      dialogMode={'listen'}
      { ...mockProps }
    />
  )
  .add('displayControls: false', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={2}
      displayControls={false}
      read={false}
      dialogMode={'listen'}
      { ...mockProps }
    />
  )
  .add('read: true', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={2}
      displayControls={false}
      read
      dialogMode={'listen'}
      { ...mockProps }
    />
  )
  .add('mode: explore', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={2}
      displayControls
      read={false}
      dialogMode={'explore'}
      { ...mockProps }
    />
  );
