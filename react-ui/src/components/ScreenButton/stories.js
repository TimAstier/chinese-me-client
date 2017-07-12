/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { ScreenButton } from '../../containers';
import Provider from '../../utils/Provider';

storiesOf('ScreenButton', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('primary', () =>
    <ScreenButton
      text="Next"
      primary
    />
  )
  .add('secondary', () =>
    <ScreenButton
      text="Skip"
    />
  )
  .add('action: "next"', () =>
    <ScreenButton
      text="Skip"
      action="next"
    />
  )
  .add('primary, disabled', () =>
    <ScreenButton
      text="Next"
      primary
      disabled
    />
  )
  .add('secondary, disabled', () =>
    <ScreenButton
      text="Skip"
      disabled
    />
  );
