/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progressbar } from '../.';

// Progressbar.propTypes = {
//   completionPercentage: propTypes.number.isRequired
// };

storiesOf('Progressbar', module)
  .add('0%', () =>
    <Progressbar
      completionPercentage={0}
    />
  )
  .add('60%', () =>
    <Progressbar
      completionPercentage={60}
    />
  )
  .add('100%', () =>
    <Progressbar
      completionPercentage={100}
    />
  );
