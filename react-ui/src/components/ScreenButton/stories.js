import React from 'react';
import { storiesOf } from '@storybook/react';

import { ScreenButton } from '../.';

storiesOf('ScreenButton', module)
  .add('primary', () =>
    <ScreenButton text="Next" primary />
  ).add('secondary', () =>
    <ScreenButton text="Skip" />
  );
