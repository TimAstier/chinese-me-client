/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { EpisodeScreen } from '../.';
import { Provider, PlaceholderFixedWidth, PlaceholderFullWidth }
  from '../../utils/testComponents';

// EpisodeScreen.propTypes = {
//   next: propTypes.bool,
//   playAudio: propTypes.bool,
//   children: propTypes.object,
//   exit: propTypes.func.isRequired
// };

// Mock dispatch functions
const mockProps = {
  exit: () => {}
};

storiesOf('EpisodeScreen', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () =>
    <EpisodeScreen
      {...mockProps}
    />
  )
  .add('next', () =>
    <EpisodeScreen
      {...mockProps}
      next
    />
  )
  .add('playAudio', () =>
    <EpisodeScreen
      {...mockProps}
      playAudio
    />
  )
  .add('pause', () =>
    <EpisodeScreen
      {...mockProps}
      pause
    />
  )
  .add('PlaceholderFixedWidth', () =>
    <EpisodeScreen {...mockProps}>
      <PlaceholderFixedWidth />
    </EpisodeScreen>
  )
  .add('PlaceholderFullWidth', () =>
    <EpisodeScreen {...mockProps}>
      <PlaceholderFullWidth />
    </EpisodeScreen>
  );
