/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

addDecorator(centered);

function loadStories() {
  require('../src/components/Avatar/stories');
  require('../src/components/EpisodeCard/stories');
  require('../src/components/EpisodeScreen/stories');
  require('../src/components/NavDot/stories');
  require('../src/components/ProgressBar/stories');
  require('../src/components/ScreenButton/stories');
  require('../src/components/Statement/stories');
  require('../src/components/StepsBar/stories');
}

configure(loadStories, module);
