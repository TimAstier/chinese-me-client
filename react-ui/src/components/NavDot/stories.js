import React from 'react';
import { storiesOf } from '@storybook/react';

import { NavDot } from '../.';

storiesOf('NavDot', module)
  .add('completed', () =>
    <NavDot completed />
  ).add('not completed', () =>
    <NavDot />
  );
