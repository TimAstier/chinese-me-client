import React from 'react';
import { storiesOf } from '@storybook/react';

import { Logo } from '../.';

storiesOf('Logo', module)
  .add('partNumber & title', () => {
    return (
      <Logo />
    );
  });
