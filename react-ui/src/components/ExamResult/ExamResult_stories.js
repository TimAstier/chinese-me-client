/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { EpisodeScreen, ExamResult } from '../.';
import { Provider } from '../../utils/testComponents';

// ExamResult.propTypes = {
// };

// Mock dispatch functions
const mockProps = {
  exit: () => {}
};

storiesOf('ExamResult', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('5/10', () =>
    <EpisodeScreen {...mockProps} >
      <ExamResult
        score={5}
        scoreMax={10}
      />
    </EpisodeScreen>
  )
  .add('7/10', () =>
    <EpisodeScreen {...mockProps} >
      <ExamResult
        score={7}
        scoreMax={10}
      />
    </EpisodeScreen>
  );
