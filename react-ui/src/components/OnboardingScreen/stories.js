/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { OnboardingScreen } from '../.';
import { PlaceholderFixedWidth, PlaceholderFullWidth }
  from '../../utils/testComponents';

// OnboardingScreen.propTypes = {
//   children: propTypes.node
// };

storiesOf('OnboardingScreen', module)
  .add('no children', () =>
  <OnboardingScreen />
  )
  .add('PlaceholderFixedWidth', () =>
  <OnboardingScreen>
    <PlaceholderFixedWidth />
  </OnboardingScreen>
  )
  .add('PlaceholderFullWidth', () =>
  <OnboardingScreen>
    <PlaceholderFullWidth />
  </OnboardingScreen>
  );
