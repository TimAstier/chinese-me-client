import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen, TitleWrapper } from '../.';

storiesOf('TitleWrapper', module)
  .add('with props', () => {
    return (
      <EpisodeScreen>
        <TitleWrapper partNumber={2} title={'Grammar'} />
      </EpisodeScreen>
    );
  });
