/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar as AvatarModel } from '../../models';
import Sentence from '../../models/Sentence';
import { EpisodeScreen, Dialog } from '../.';
import Provider from '../../utils/Provider';

// Mock dispatch functions
const dispatchFunctions = {
  askQuestion: () => {},
  displayEpisodeOverview: () => {},
  exit: () => {}
};

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

const stepsOptions = {
  currentStep: 1,
  stepIds: [4, 5, 9, 10],
  clickable: true
};

const avatar1 = new AvatarModel({
  id: 1,
  happyImage: 'https://s3.eu-west-2.amazonaws.com/chineseme/marvin_happy.png',
  isTalking: false,
  mood: 'happy'
});

const avatar1Talking = new AvatarModel({
  id: 1,
  happyImage: 'https://s3.eu-west-2.amazonaws.com/chineseme/marvin_happy.png',
  isTalking: true,
  mood: 'happy'
});

const avatar2 = new AvatarModel({
  id: 2,
  blinkImage: 'https://s3.eu-west-2.amazonaws.com/chineseme/liyu_blink.png',
  isTalking: false,
  mood: 'blink'
});

const avatar2Talking = new AvatarModel({
  id: 2,
  blinkImage: 'https://s3.eu-west-2.amazonaws.com/chineseme/liyu_blink.png',
  isTalking: true,
  mood: 'blink'
});

const avatars1 = [avatar1, avatar2];
const avatars2 = [avatar1Talking, avatar2];
const avatars3 = [avatar1, avatar2Talking];

storiesOf('Dialog', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('first sentence', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      stepsOptions={stepsOptions}
      screenLabel={'Dialog - Explore'}
    >
      <Dialog
        avatars= {avatars1}
        sentences={threeSentences}
        currentSentenceIndex={0}
        chosenAvatarId={0}
      />
    </EpisodeScreen>
  )
  .add('second sentence', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      stepsOptions={stepsOptions}
      screenLabel={'Dialog - Explore'}
    >
      <Dialog
        avatars= {avatars1}
        sentences={threeSentences}
        currentSentenceIndex={1}
        chosenAvatarId={0}
      />
    </EpisodeScreen>
  )
  .add('avatar_1 isTalking', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      stepsOptions={stepsOptions}
      screenLabel={'Dialog - Explore'}
    >
      <Dialog
        avatars= {avatars2}
        sentences={threeSentences}
        currentSentenceIndex={0}
        chosenAvatarId={0}
      />
    </EpisodeScreen>
  )
  .add('avatar_2 isTalking', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      stepsOptions={stepsOptions}
      screenLabel={'Dialog - Explore'}
    >
      <Dialog
        avatars= {avatars3}
        sentences={threeSentences}
        currentSentenceIndex={0}
        chosenAvatarId={0}
      />
    </EpisodeScreen>
  )
  .add('avatar_1 isChosen', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      stepsOptions={stepsOptions}
      screenLabel={'Dialog - Explore'}
    >
      <Dialog
        avatars= {avatars3}
        sentences={threeSentences}
        currentSentenceIndex={0}
        chosenAvatarId={1}
      />
    </EpisodeScreen>
  );
