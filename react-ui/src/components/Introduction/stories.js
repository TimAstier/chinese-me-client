import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen, Introduction } from '../.';
import objectives from '../../test/data/objectives';

storiesOf('Introduction', module)
  .add('audio_playing', () => {
    return (
      <EpisodeScreen skip >
        <Introduction objectives={objectives} />
      </EpisodeScreen>
    );
  })
  .add('audio_finished', () => {
    return (
      <EpisodeScreen skip next >
        <Introduction objectives={objectives} />
      </EpisodeScreen>
    );
  });
