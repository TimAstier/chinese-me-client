import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen, IntroductionWrapper } from '../.';
import objectives from '../../test/data/objectives';

storiesOf('IntroductionWrapper', module)
  .add('audio_playing', () => {
    return (
      <EpisodeScreen skip >
        <IntroductionWrapper objectives={objectives} />
      </EpisodeScreen>
    );
  })
  .add('audio_finished', () => {
    return (
      <EpisodeScreen skip next >
        <IntroductionWrapper objectives={objectives} />
      </EpisodeScreen>
    );
  });
