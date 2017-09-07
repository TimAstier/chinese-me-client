/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { EpisodeScreen, Title } from '../.';
import Provider from '../../utils/Provider';

// Title.propTypes = {
//   partNumber: propTypes.number.isRequired
// };

// Mock dispatch functions
const mockProps = {
  exit: () => {}
};

storiesOf('Title', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Part 1', () =>
    <EpisodeScreen {...mockProps} >
      <Title partNumber={1} />
    </EpisodeScreen>
  )
  .add('Part 2', () =>
    <EpisodeScreen {...mockProps} >
      <Title partNumber={2} />
    </EpisodeScreen>
  )
  .add('Part 3', () =>
    <EpisodeScreen {...mockProps} >
      <Title partNumber={3} />
    </EpisodeScreen>
  )
  .add('Part 4', () =>
    <EpisodeScreen {...mockProps} >
      <Title partNumber={4} />
    </EpisodeScreen>
  )
  .add('Part 5', () =>
    <EpisodeScreen {...mockProps} >
      <Title partNumber={5} />
    </EpisodeScreen>
  );
