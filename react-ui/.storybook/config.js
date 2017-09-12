/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

addDecorator(centered);

function loadStories() {
  require('../src/components/AudioToText/stories');
  require('../src/components/Avatar/stories');
  require('../src/components/CharacterPinyin/stories');
  require('../src/components/ChoiceBox/stories');
  require('../src/components/CircleTimer/stories');
  require('../src/components/Dialog/stories');
  require('../src/components/ElementsNav/stories');
  require('../src/components/EpisodeCard/stories');
  require('../src/components/EpisodeScreen/stories');
  require('../src/components/FeedbackModal/stories');
  require('../src/components/Footer/stories');
  require('../src/components/Footer/stories');
  require('../src/components/Login/stories');
  require('../src/components/MapModal/stories');
  require('../src/components/Modal/stories');
  require('../src/components/MultipleChoice/stories');
  require('../src/components/Navbar/stories');
  require('../src/components/OnboardingScreen/stories');
  require('../src/components/PlayAudioButton/stories');
  require('../src/components/Progressbar/stories');
  require('../src/components/ScreenButton/stories');
  require('../src/components/ScreenWrapper/stories');
  require('../src/components/SelectEpisode/stories');
  require('../src/components/Shared/stories');
  require('../src/components/Signup/stories');
  require('../src/components/Statement/stories');
  require('../src/components/StudyVideo/stories');
  require('../src/components/Title/stories');
  require('../src/components/TransparentInput/stories');
  require('../src/components/VideoPlayer/stories');
  require('../src/components/WordBox/stories');
  require('../src/components/WordBoxResult/stories');
}

configure(loadStories, module);
