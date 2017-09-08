/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Bold, Clickable, Link, ScrollableAppWrapper } from './.';
import { TestWrapper } from '../../utils/testComponents';

// Bold.propTypes = {
//   children: propTypes.node.isRequired
// };

// Clickable.propTypes = {
//   children: propTypes.node.isRequired
// };

// Link.propTypes = {
//   children: propTypes.node.isRequired
// };

// ScrollableAppWrapper.propTypes = {
//   children: propTypes.node.isRequired
// };

storiesOf('Shared', module)
  .add('Bold', () =>
  <Bold>Bold</Bold>
  )
  .add('Clickable', () =>
  <Clickable>Clickable</Clickable>
  )
  .add('Link', () =>
  <Link>Link</Link>
  )
  .add('ScrollableAppWrapper', () =>
  <ScrollableAppWrapper>
    <TestWrapper>Scrollable!</TestWrapper>
  </ScrollableAppWrapper>
  );
