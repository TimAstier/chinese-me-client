import React from 'react';
import { storiesOf } from '@storybook/react';

import { StepsBar } from '../.';

storiesOf('StepsBar', module)
  .add('with steps', () =>
    <StepsBar currentStep={3} totalSteps={11} />
  );
