/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Statement } from '../.';
import Provider from '../../utils/Provider';
import Sentence from '../../models/Sentence';

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
const dispatchFunctions = {
  nextSentence: () => {},
  previousSentence: () => {},
  playSentence: () => {},
  stopSentence: id => id
};

storiesOf('Statement', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('isAudioPlaying: true', () =>
    <Statement
      sentences={[]}
      currentSentenceIndex={0}
      isAudioPlaying
      { ...dispatchFunctions }
      displayControls
    />
  )
  .add('singleSentence', () =>
    <Statement
      sentences={singleSentence}
      currentSentenceIndex={0}
      isAudioPlaying={false}
      { ...dispatchFunctions }
      displayControls
    />
  )
  .add('twoSentences: active[0]', () =>
    <Statement
      sentences={twoSentences}
      currentSentenceIndex={0}
      { ...dispatchFunctions }
      isAudioPlaying={false}
      displayControls
    />
  )
  .add('twoSentences: active[1]', () =>
    <Statement
      sentences={twoSentences}
      currentSentenceIndex={1}
      { ...dispatchFunctions }
      isAudioPlaying={false}
      displayControls
    />
  )
  .add('threeSentences: active[0]', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={0}
      { ...dispatchFunctions }
      isAudioPlaying={false}
      displayControls
    />
  )
  .add('threeSentences: active[1]', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={1}
      { ...dispatchFunctions }
      isAudioPlaying={false}
      displayControls
    />
  )
  .add('threeSentences: active[2]', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={2}
      { ...dispatchFunctions }
      isAudioPlaying={false}
      displayControls
    />
  ).add('displayControls: false', () =>
    <Statement
      sentences={threeSentences}
      currentSentenceIndex={2}
      { ...dispatchFunctions }
      isAudioPlaying={false}
      displayControls={false}
    />
  );
