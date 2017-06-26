import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar, EpisodeCard, EpisodeScreen, ScreenButton,
  NavDot, Statement, ProgressBar, StepsBar } from '../components';
import testImage from '../images/test_image.jpeg';

storiesOf('EpisodeCard', module)
  .add('locked', () =>
    <EpisodeCard number={3} title="你是谁？" status="locked" score={0} />
  )
  .add('new', () =>
    <EpisodeCard number={2} title="我学中文" status="new" score={0} />
  )
  .add('passed: score(0)', () =>
    <EpisodeCard number={1} title="你好" status="passed" score={0} />
  )
  .add('passed: score(1)', () =>
    <EpisodeCard number={1} title="你好" status="passed" score={1} />
  )
  .add('passed: score(2)', () =>
    <EpisodeCard number={1} title="你好" status="passed" score={2} />
  )
  .add('passed: score(3)', () =>
    <EpisodeCard number={1} title="你好" status="passed" score={3} />
  );

storiesOf('ScreenButton', module)
  .add('primary', () =>
    <ScreenButton text="Next" primary />
  ).add('secondary', () =>
    <ScreenButton text="Skip" />
  );

storiesOf('NavDot', module)
  .add('completed', () =>
    <NavDot completed />
  ).add('not completed', () =>
    <NavDot />
  );

const singleSentence = [{
  chinese: '我叫马文。',
  l1: 'My name is Marvin.'
}];

const twoSentences = [{
  chinese: '我叫马文。',
  l1: 'My name is Marvin.'
}, {
  chinese: '您贵姓？',
  l1: 'What\'s your name?'
}];

const threeSentences = [{
  chinese: '我叫马文。',
  l1: 'My name is Marvin.'
}, {
  chinese: '我特别喜欢学中文。',
  l1: 'I really like to learn Chinese.'
}, {
  chinese: '我不会说瑞典文。',
  l1: 'I can\'t speak Swedish.'
}];

storiesOf('Statement', module)
  .add('singleSentence', () =>
    <Statement sentences={singleSentence} currentSentence={0} />
  )
  .add('twoSentences: active[0]', () =>
    <Statement sentences={twoSentences} currentSentence={0} />
  )
  .add('twoSentences: active[1]', () =>
    <Statement sentences={twoSentences} currentSentence={1} />
  )
  .add('threeSentences: active[0]', () =>
    <Statement sentences={threeSentences} currentSentence={0} />
  )
  .add('threeSentences: active[1]', () =>
    <Statement sentences={threeSentences} currentSentence={1} />
  )
  .add('threeSentences: active[2]', () =>
    <Statement sentences={threeSentences} currentSentence={2} />
  );

storiesOf('Avatar', module)
  .add('static', () =>
    <Avatar image={testImage} />
  )
  .add('animated', () =>
    <Avatar image={testImage} animated />
  );

storiesOf('ProgressBar', module)
  .add('twoElements: current_1', () =>
    <ProgressBar type="grammar" currentElement={1} totalElements={2} />
  )
  .add('twoElements: current_2', () =>
    <ProgressBar type="grammar" currentElement={2} totalElements={2} />
  )
  .add('threeElements: current_1', () =>
    <ProgressBar type="character" currentElement={1} totalElements={3} />
  )
  .add('threeElements: current_2', () =>
    <ProgressBar type="character" currentElement={2} totalElements={3} />
  )
  .add('threeElements: current_3', () =>
    <ProgressBar type="character" currentElement={3} totalElements={3} />
  );

storiesOf('StepsBar', module)
  .add('with steps', () =>
    <StepsBar currentStep={3} totalSteps={11} />
  );

const progressBarOptions = {
  type: 'character',
  currentElement: 2,
  totalElements: 4
};

const stepsOptions = {
  currentStep: 7,
  totalSteps: 20
};

storiesOf('EpisodeScreen', module)
  .add('empty', () =>
    <EpisodeScreen />
  )
  .add('with next', () =>
    <EpisodeScreen next />
  )
  .add('with skip', () =>
    <EpisodeScreen skip />
  )
  .add('with progressBar', () =>
    <EpisodeScreen progressBarOptions={progressBarOptions} />
  )
  .add('with steps', () =>
    <EpisodeScreen stepsOptions={stepsOptions} />
  )
  .add('with everything', () =>
    <EpisodeScreen
      next
      skip
      progressBarOptions={progressBarOptions}
      stepsOptions={stepsOptions}
    />
  );
