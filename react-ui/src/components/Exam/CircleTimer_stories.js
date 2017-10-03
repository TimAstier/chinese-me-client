/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { CircleTimer } from '../.';

// CircleTimer.propTypes = {
//   progress: propTypes.number.isRequired,
//   time: propTypes.string.isRequired
// };

storiesOf('CircleTimer', module)
  .add('timeLeft: 100%', () =>
    <CircleTimer
      timeLeft={1}
      timeLabel={'5:00'}
    />
  )
  .add('timeLeft: 40%', () =>
    <CircleTimer
      timeLeft={0.4}
      timeLabel={'2:00'}
    />
  )
  .add('timeLeft: 12.5%', () =>
    <CircleTimer
      timeLeft={0.125}
      timeLabel={'0:36'}
    />
  )
  .add('timeLeft: 0%', () =>
    <CircleTimer
      timeLeft={0}
      timeLabel={'0:00'}
    />
  );
