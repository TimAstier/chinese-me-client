/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { NavDot } from '../.';

storiesOf('NavDot', module)
  .add('completed: true', () =>
    <NavDot
      id={1}
      switchStatement={() => {}}
      completed
      clickable
    />
  ).add('completed: false', () =>
    <NavDot
      id={1}
      switchStatement={() => {}}
      clickable
    />
  )
  .add('clickable: false', () =>
    <NavDot
      id={1}
      switchStatement={() => {}}
      clickable={false}
    />
  );
