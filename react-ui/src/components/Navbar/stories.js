/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Study } from '../../containers';
import TestWrapper from '../../utils/TestWrapper';
import Provider from '../../utils/Provider';

// Navbar.propTypes = {
//   askQuestion: propTypes.func.isRequired,
//   openMapModal: propTypes.func.isRequired
// };

storiesOf('Navbar', module)
.addDecorator(story => <Provider story={story()} />)
  .add('static', () =>
  <TestWrapper>
    <Study />
  </TestWrapper>
  );
