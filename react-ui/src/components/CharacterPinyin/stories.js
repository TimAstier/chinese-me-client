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

const handleChange = () => {};

const character = new Character({
  id: 1,
  simpChar: '我',
  pinyinNumber: 'wo3'
});

const progressMenuOptions = {
  type: 'character',
  currentElement: 1,
  totalElements: 4
};

storiesOf('CharacterPinyin', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('status: "question"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressMenuOptions={progressMenuOptions}
      skip
    >
      <CharacterPinyin
        character={character}
        status={'question'}
        attemptsLeft={2}
        openModal={false}
        userAnswer=""
        handleChange={handleChange}
      />
    </EpisodeScreen>
  )
  .add('attemptsLeft: 2', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressMenuOptions={progressMenuOptions}
      skip
    >
      <CharacterPinyin
        character={character}
        status={'question'}
        attemptsLeft={2}
        openModal
        userAnswer=""
        handleChange={handleChange}
      />
    </EpisodeScreen>
  )
  .add('attemptsLeft: 1', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressMenuOptions={progressMenuOptions}
      skip
    >
      <CharacterPinyin
        character={character}
        status={'question'}
        attemptsLeft={1}
        openModal
        userAnswer=""
        handleChange={handleChange}
      />
    </EpisodeScreen>
  )
  .add('status: "wrong"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressMenuOptions={progressMenuOptions}
      skip
      next
    >
      <CharacterPinyin
        character={character}
        status={'wrong'}
        attemptsLeft={1}
        openModal={false}
        userAnswer=""
        handleChange={handleChange}
      />
    </EpisodeScreen>
  )
  .add('status: "correct"', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressMenuOptions={progressMenuOptions}
      skip
      next
    >
      <CharacterPinyin
        character={character}
        status={'correct'}
        attemptsLeft={2}
        openModal={false}
        userAnswer=""
        handleChange={handleChange}
      />
    </EpisodeScreen>
  );
