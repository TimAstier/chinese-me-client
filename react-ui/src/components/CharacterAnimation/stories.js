/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Character } from '../../models';
import { EpisodeScreen, CharacterAnimation } from '../.';
import { Provider } from '../../utils/testComponents';

// CharacterAnimation.propTypes = {
// };

storiesOf('CharacterAnimation', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('test', () =>
    <EpisodeScreen exit={() => {}}>
      <CharacterAnimation
        simpChar="馘"
      />
    </EpisodeScreen>
  );
