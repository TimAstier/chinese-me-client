import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from 'immutable';

import { SelectEpisode } from '../.';

// Import test data
import episodes from '../../test/data/episodes';

storiesOf('SelectEpisode', module)
  .add('without episodes', () =>
    <SelectEpisode episodes={List()} title={'Season 1'} />
  )
  .add('with episodes', () =>
    <SelectEpisode episodes={episodes} title={'Season 1'} />
  );
