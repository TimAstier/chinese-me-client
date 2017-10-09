/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Star } from '../.';

// Star.propTypes = {
//   filed: propTypes.bool
// };

storiesOf('Star', module)
  .add('filled', () => <Star filled />)
  .add('filled: false', () => <Star filled={false} />)
  .add('filled, big', () => <Star filled big/>)
  .add('filled: false, big', () => <Star filled={false} big/>);
