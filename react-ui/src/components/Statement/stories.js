/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Statement } from '../.';
import Sentence from '../../models/Sentence';
import Word from '../../models/Word';
import { Provider } from '../../utils/testComponents';

// Statement.propTypes = {
//   sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
//   words: propTypes.arrayOf(propTypes.instanceOf(models.Word)).isRequired,
//   currentSentenceIndex: propTypes.number.isRequired,
//   isAudioPlaying: propTypes.bool.isRequired,
//   displayControls: propTypes.bool.isRequired,
//   dialogMode: propTypes.string.isRequired
//   read: propTypes.bool.isRequired,
//   stopSentence: propTypes.func.isRequired,
//   switchSentence: propTypes.func.isRequired,
//   playSentence: propTypes.func.isRequired,
// };

const words = [
  new Word({
    id: 1,
    chinese: '是'
  }),
  new Word({
    id: 2,
    chinese: '姓'
  })
];

const words2 = [
  new Word({
    id: 1,
    chinese: '我'
  }),
  new Word({
    id: 2,
    chinese: '美'
  }),
  new Word({
    id: 3,
    chinese: '美国'
  })
];

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
      words={words}
      currentSentenceIndex={0}
      displayControls
      read={false}
      dialogMode={'watch'}
      { ...mockProps }
    />
  )
  .add('twoSentences: active[0]', () =>
    <Statement
      sentences={twoSentences}
      words={words}
      currentSentenceIndex={0}
      displayControls
      read={false}
      dialogMode={'watch'}
      { ...mockProps }
    />
  )
  .add('twoSentences: active[1]', () =>
    <Statement
      sentences={twoSentences}
      words={words}
      currentSentenceIndex={1}
      displayControls
      read={false}
      dialogMode={'watch'}
      { ...mockProps }
    />
  )
  .add('threeSentences: active[0]', () =>
    <Statement
      sentences={threeSentences}
      words={words}
      currentSentenceIndex={0}
      displayControls
      read={false}
      dialogMode={'watch'}
      { ...mockProps }
    />
  )
  .add('threeSentences: active[1]', () =>
    <Statement
      sentences={threeSentences}
      words={words}
      currentSentenceIndex={1}
      displayControls
      read={false}
      dialogMode={'watch'}
      { ...mockProps }
    />
  )
  .add('threeSentences: active[2]', () =>
    <Statement
      sentences={threeSentences}
      words={words}
      currentSentenceIndex={2}
      displayControls
      read={false}
      dialogMode={'watch'}
      { ...mockProps }
    />
  )
  .add('displayControls: false', () =>
    <Statement
      sentences={threeSentences}
      words={words}
      currentSentenceIndex={2}
      displayControls={false}
      read={false}
      dialogMode={'watch'}
      { ...mockProps }
    />
  )
  .add('read: true', () =>
    <Statement
      sentences={threeSentences}
      words={words}
      currentSentenceIndex={2}
      displayControls={false}
      read
      dialogMode={'watch'}
      { ...mockProps }
    />
  )
  .add('mode: explore', () =>
    <Statement
      sentences={threeSentences}
      words={words2}
      currentSentenceIndex={1}
      displayControls
      read={false}
      dialogMode={'explore'}
      { ...mockProps }
    />
  );
