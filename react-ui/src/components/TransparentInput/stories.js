import React from 'react';
import { storiesOf } from '@storybook/react';

import { TransparentInput } from '../.';
import Provider from '../../utils/Provider';

storiesOf('TransparentInput', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () => {
    return (
      <TransparentInput
        name="Email"
      />
    );
  });
