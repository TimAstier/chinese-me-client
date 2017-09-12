/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Bold, Clickable, Link as LinkComponent, ScrollableAppWrapper }
  from './.';
import { TestWrapper } from '../../utils/testComponents';
import { Link } from 'react-router';

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
  <LinkComponent>Custom link text</LinkComponent>
  )
  .add('Link with react-router Link', () =>
  <LinkComponent><Link>react-router Link</Link></LinkComponent>
  )
  .add('ScrollableAppWrapper', () =>
  <ScrollableAppWrapper>
    <TestWrapper>Scrollable!</TestWrapper>
  </ScrollableAppWrapper>
  );
