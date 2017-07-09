import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen, Title } from '../.';
import Provider from '../../utils/Provider';

// Mock dispatch functions
const dispatchFunctions = {
  askQuestion: () => {},
  displayEpisodeOverview: () => {},
  exit: () => {}
};

storiesOf('Title', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('partNumber & title', () => {
    return (
      <EpisodeScreen {...dispatchFunctions} >
        <Title partNumber={2} title={'Grammar'} />
      </EpisodeScreen>
    );
  });
