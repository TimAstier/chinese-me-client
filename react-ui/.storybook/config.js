/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

addDecorator(centered);

function loadStories() {
  require('../src/components/Avatar/stories');
  require('../src/components/CharacterPinyin/stories');
  require('../src/components/Dialog/stories');
  require('../src/components/ElementsNav/stories');
  require('../src/components/EpisodeCard/stories');
  require('../src/components/EpisodeScreen/stories');
  require('../src/components/FeedbackModal/stories');
  require('../src/components/Introduction/stories');
  require('../src/components/MapModal/stories');
  require('../src/components/PlayAudioButton/stories');
  require('../src/components/ScreenButton/stories');
  require('../src/components/SelectEpisode/stories');
  require('../src/components/Signup/stories');
  require('../src/components/Statement/stories');
  require('../src/components/Title/stories');
}

configure(loadStories, module);
