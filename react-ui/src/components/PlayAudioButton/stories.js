/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { PlayAudioButton } from '../../containers';
import Provider from '../../utils/Provider';

storiesOf('PlayAudioButton', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () =>
    <PlayAudioButton />
  );
