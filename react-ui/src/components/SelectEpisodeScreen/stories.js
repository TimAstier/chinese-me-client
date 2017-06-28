import React from 'react';
import { storiesOf } from '@storybook/react';

import { SelectEpisodeScreen } from '../.';

// Import test data
import episodes from '../../test/data/episodes';

storiesOf('SelectEpisodeScreen', module)
  .add('Season 1', () =>
    <SelectEpisodeScreen episodes={episodes} title={'Season 1'} />
  );
