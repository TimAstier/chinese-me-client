/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Character } from '../../models';
import { EpisodeScreen, CharacterStroke } from '../.';
import { Provider } from '../../utils/testComponents';

// CharacterStroke.propTypes = {
// };

storiesOf('CharacterStroke', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('test', () =>
    <EpisodeScreen exit={() => {}}>
      <CharacterStroke
        simpChar="馘"
      />
    </EpisodeScreen>
  );
