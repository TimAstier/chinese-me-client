import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen, Title } from '../.';

storiesOf('Title', module)
  .add('with props', () => {
    return (
      <EpisodeScreen>
        <Title partNumber={2} title={'Grammar'} />
      </EpisodeScreen>
    );
  });
