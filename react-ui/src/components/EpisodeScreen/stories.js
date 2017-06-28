import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen } from '../.';

// Import test data
import episodeScreenData from '../../test/data/episodeScreen';

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
    <EpisodeScreen progressBarOptions={episodeScreenData.progressBarOptions} />
  )
  .add('with screenLabel', () =>
    <EpisodeScreen screenLabel={'Dialog - Explore'} />
  )
  .add('with steps', () =>
    <EpisodeScreen stepsOptions={episodeScreenData.stepsOptions} />
  )
  .add('with everything', () => {
    return (
      <EpisodeScreen
        next
        skip
        progressBarOptions={episodeScreenData.progressBarOptions}
        stepsOptions={episodeScreenData.stepsOptions}
      />
    );
  });
