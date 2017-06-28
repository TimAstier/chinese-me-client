import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar } from '../.';

storiesOf('Avatar', module)
  .add('static', () =>
    <Avatar image={'boyBlink'} />
  )
  .add('animated', () =>
    <Avatar image={'boyBlink'} animated />
  );
