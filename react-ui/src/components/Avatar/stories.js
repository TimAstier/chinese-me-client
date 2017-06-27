import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar } from '../.';

// Import assets
import testImage from '../../images/test_image.jpeg';

storiesOf('Avatar', module)
  .add('static', () =>
    <Avatar image={testImage} />
  )
  .add('animated', () =>
    <Avatar image={testImage} animated />
  );
