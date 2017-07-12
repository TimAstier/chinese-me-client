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
    >
      <CharacterPinyin
        character={character}
        status={'question'}
      />
    </EpisodeScreen>
  )
  .add('status: "typing"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
    >
      <CharacterPinyin
        character={character}
        status={'typing'}
      />
    </EpisodeScreen>
  )
  .add('status: "showAnswer"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
    >
      <CharacterPinyin
        character={character}
        status={'showAnswer'}
      />
    </EpisodeScreen>
  )
  .add('status: "correct"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
    >
      <CharacterPinyin
        character={character}
        status={'correct'}
      />
    </EpisodeScreen>
  );
