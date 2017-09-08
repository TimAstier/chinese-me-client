/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ScreenWrapper } from '../.';
import { PlaceholderFixedWidth, PlaceholderFullWidth }
  from '../../utils/testComponents';

// ScreenWrapper.propTypes = {
//   children: propTypes.node
// };

storiesOf('ScreenWrapper', module)
  .add('no children', () =>
  <ScreenWrapper />
  )
  .add('PlaceholderFixedWidth', () =>
  <ScreenWrapper>
    <PlaceholderFixedWidth />
  </ScreenWrapper>
  )
  .add('PlaceholderFullWidth', () =>
  <ScreenWrapper>
    <PlaceholderFullWidth />
  </ScreenWrapper>
  );
