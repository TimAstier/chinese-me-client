/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { EpisodeScreen, Introduction } from '../.';
import { Provider } from '../../utils/testComponents';

// Introduction.propTypes = {
//   objectives: propTypes.array.isRequired
// };

const mockProps = {
  exit: () => {}
};

const objectives = [
  'How to introduce yourself more formally',
  'How to "spell" in Chinese',
  '来 lai2, to come'
];

storiesOf('Introduction', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('audio_playing', () =>
    <EpisodeScreen skip {...mockProps} >
      <Introduction objectives={objectives} />
    </EpisodeScreen>
  )
  .add('audio_finished', () =>
  <EpisodeScreen skip next {...mockProps} >
    <Introduction objectives={objectives} />
  </EpisodeScreen>
  );
