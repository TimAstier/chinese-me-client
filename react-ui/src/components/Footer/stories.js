/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../.';
import { TestWrapper } from '../../utils/testComponents';

storiesOf('Footer', module)
  .add('static', () =>
  <TestWrapper>
    <Footer />
  </TestWrapper>
  );
