/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

addDecorator(centered);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
