/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { PlayAudioButton } from '../../components';
import Provider from '../../utils/Provider';

// PlayAudioButton.propTypes = {
//   onClick: propTypes.func.isRequired,
//   isPlaying: propTypes.bool
// };

const mockProps = {
  onClick: () => {}
};

storiesOf('PlayAudioButton', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('isPlaying: false', () =>
    <PlayAudioButton
      {...mockProps}
    />
  )
  .add('isPlaying: true', () =>
    <PlayAudioButton
      isPlaying
      {...mockProps}
    />
  );
