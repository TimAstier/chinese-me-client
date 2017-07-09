import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen, Introduction } from '../.';
import Provider from '../../utils/Provider';

const objectives = [
  'How to introduce yourself more formally',
  'How to "spell" in Chinese',
  '来 lai2, to come'
];

// Mock dispatch functions
const dispatchFunctions = {
  askQuestion: () => {},
  displayEpisodeOverview: () => {},
  exit: () => {}
};

storiesOf('Introduction', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('audio_playing', () => {
    return (
      <EpisodeScreen skip {...dispatchFunctions} >
        <Introduction objectives={objectives} />
      </EpisodeScreen>
    );
  })
  .add('audio_finished', () => {
    return (
      <EpisodeScreen skip next {...dispatchFunctions} >
        <Introduction objectives={objectives} />
      </EpisodeScreen>
    );
  });
