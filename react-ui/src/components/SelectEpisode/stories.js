import React from 'react';
import { storiesOf } from '@storybook/react';

import { SelectEpisode } from '../.';
import EpisodeMap from '../../models/EpisodeMap';

// Import test data
import episodes from '../../test/data/episodes';

storiesOf('SelectEpisode', module)
  .add('without episodes', () =>
    <SelectEpisode episodes={new EpisodeMap()} title={'Season 1'} />
  )
  .add('with episodes', () =>
    <SelectEpisode episodes={episodes} title={'Season 1'} />
  );
