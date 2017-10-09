/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { CircleProgressbar } from '../.';

// CircleProgressbar.propTypes = {
// };

storiesOf('CircleProgressbar', module)
  .add('5/10', () =>
    <CircleProgressbar
      score={5}
      scoreMax={10}
    />
  )
  .add('7/10', () =>
    <CircleProgressbar
      score={7}
      scoreMax={10}
    />
  );
