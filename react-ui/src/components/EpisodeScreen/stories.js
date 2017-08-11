/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen } from '../.';
import Provider from '../../utils/Provider';

// Mock dispatch functions
const dispatchFunctions = {
  askQuestion: () => {},
  displayEpisodeOverview: () => {},
  exit: () => {}
};

const stepsOptions = {
  currentStep: 1,
  stepIds: [4, 5, 9, 10]
};

const progressMenuOptions = {
  type: 'character',
  currentElement: 2,
  totalElements: 4
};

storiesOf('EpisodeScreen', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () =>
    <EpisodeScreen
      {...dispatchFunctions}
    />
  )
  .add('next', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      next
    />
  )
  .add('skip', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      skip
    />
  )
  .add('skip & next', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      skip
      next
    />
  )
  .add('playAudio', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      playAudio
    />
  )
  .add('progressMenu', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressMenuOptions={progressMenuOptions}
    />
  )
  .add('screenLabel', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      screenLabel={'Dialog - Explore'}
    />
  )
  .add('progress', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressMenuOptions={progressMenuOptions}
    />
  )
  .add('title', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      screenLabel={'Dialog - Explore'}
    />
  );
