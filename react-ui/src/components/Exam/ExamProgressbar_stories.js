/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExamProgressbar } from '../.';

// ExamProgressbar.propTypes = {
//   score: propTypes.number.isRequired,
//   scoreMax: propTypes.number.isRequired
// };

storiesOf('ExamProgressbar', module)
  .add('0/10', () =>
    <ExamProgressbar
      score={0}
      scoreMax={10}
    />
  )
  .add('2/10', () =>
    <ExamProgressbar
      score={2}
      scoreMax={10}
    />
  )
  .add('7/10', () =>
    <ExamProgressbar
      score={7}
      scoreMax={10}
    />
  )
  .add('10/10', () =>
    <ExamProgressbar
      score={10}
      scoreMax={10}
    />
  );
