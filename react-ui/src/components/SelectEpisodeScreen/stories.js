import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from 'immutable';

import { SelectEpisodeScreen } from '../.';

// Import test data
import episodes from '../../test/data/episodes';

storiesOf('SelectEpisodeScreen', module)
  .add('without episodes', () =>
    <SelectEpisodeScreen episodes={List()} title={'Season 1'} />
  )
  .add('with episodes', () =>
    <SelectEpisodeScreen episodes={episodes} title={'Season 1'} />
  );
