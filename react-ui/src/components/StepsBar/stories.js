import React from 'react';
import { storiesOf } from '@storybook/react';

import { StepsBar } from '../../containers';
import Provider from '../../utils/Provider';

storiesOf('StepsBar', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('1/3', () =>
    <StepsBar currentStep={0} stepIds={[2, 6, 4]} />
  )
  .add('3/5', () =>
    <StepsBar currentStep={2} stepIds={[2, 6, 4, 1, 8]} />
  )
  .add('5/5', () =>
    <StepsBar currentStep={4} stepIds={[2, 6, 4, 1, 8]} />
  );
