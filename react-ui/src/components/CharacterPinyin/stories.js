/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Character } from '../../models';
import { EpisodeScreen, CharacterPinyin } from '../.';
import Provider from '../../utils/Provider';

// Mock dispatch functions
const dispatchFunctions = {
  askQuestion: () => {},
  displayEpisodeOverview: () => {},
  exit: () => {}
};

const character = new Character({
  id: 1,
  chinese: '我',
  pinyin: 'wo3'
});

const progressBarOptions = {
  type: 'character',
  currentElement: 1,
  totalElements: 4
};

storiesOf('CharacterPinyin', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('status: "question"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
      skip
      playAudio
    >
      <CharacterPinyin
        character={character}
        status={'question'}
        attempts={2}
        openModal={false}
      />
    </EpisodeScreen>
  )
  .add('attempts: 2', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
      skip
      playAudio
    >
      <CharacterPinyin
        character={character}
        status={'mistake'}
        attempts={2}
        openModal
      />
    </EpisodeScreen>
  )
  .add('attempts: 1', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
      skip
      playAudio
    >
      <CharacterPinyin
        character={character}
        status={'mistake'}
        attempts={1}
        openModal
      />
    </EpisodeScreen>
  )
  .add('status: "wrong"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
      skip
      next
      playAudio
    >
      <CharacterPinyin
        character={character}
        status={'wrong'}
        attempts={1}
        openModal={false}
      />
    </EpisodeScreen>
  )
  .add('status: "correct"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
      skip
      next
      playAudio
    >
      <CharacterPinyin
        character={character}
        status={'correct'}
        attempts={2}
        openModal={false}
      />
    </EpisodeScreen>
  );
