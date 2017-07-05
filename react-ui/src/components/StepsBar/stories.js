import React from 'react';
import { storiesOf } from '@storybook/react';

import { StepsBar } from '../.';

storiesOf('StepsBar', module)
  .add('0/3', () =>
    <StepsBar currentStep={0} totalSteps={3} />
  )
  .add('3/5', () =>
    <StepsBar currentStep={2} totalSteps={5} />
  )
  .add('5/5', () =>
    <StepsBar currentStep={4} totalSteps={5} />
  );
