/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExamScoreLabel } from '../.';

// ExamScoreLabel.propTypes = {
//   score: propTypes.number.isRequired,
//   scoreMax: propTypes.number.isRequired
// };

storiesOf('ExamScoreLabel', module)
  .add('0/10', () =>
    <ExamScoreLabel
      score={0}
      scoreMax={10}
    />
  )
  .add('10/10', () =>
    <ExamScoreLabel
      score={10}
      scoreMax={10}
    />
  );
