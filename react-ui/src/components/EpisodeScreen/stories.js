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

const progressBarOptions = {
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
  .add('progressBar', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      progressBarOptions={progressBarOptions}
    />
  )
  .add('screenLabel', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      screenLabel={'Dialog - Explore'}
    />
  )
  .add('stepsOptions', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      stepsOptions={stepsOptions}
    />
  )
  .add('with everything', () =>
    <EpisodeScreen
      {...dispatchFunctions}
      next
      skip
      progressBarOptions={progressBarOptions}
      stepsOptions={stepsOptions}
    />
  );
