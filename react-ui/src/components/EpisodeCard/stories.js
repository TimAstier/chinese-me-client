import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeCard } from '../.';
import Episode from '../../models/Episode';

// Mock dispatchProp
const startEpisode = id => id;

const episodeA = new Episode({
  number: 1,
  title: '你好',
  status: 'locked',
  score: 0
});

const episodeB = new Episode({
  number: 3,
  title: '你好',
  status: 'new',
  score: 0
});

const episodeC = new Episode({
  number: 1,
  title: '你好',
  status: 'passed',
  score: 1
});

const episodeD = new Episode({
  number: 1,
  title: '你好',
  status: 'passed',
  score: 2
});

const episodeE = new Episode({
  number: 1,
  title: '你好',
  status: 'passed',
  score: 3
});

storiesOf('EpisodeCard', module)
  .add('locked', () => <EpisodeCard episode={episodeA} startEpisode={startEpisode}/>)
  .add('new', () => <EpisodeCard episode={episodeB} startEpisode={startEpisode}/>)
  .add('passed: score(1)', () => <EpisodeCard episode={episodeC} startEpisode={startEpisode}/>)
  .add('passed: score(2)', () => <EpisodeCard episode={episodeD} startEpisode={startEpisode}/>)
  .add('passed: score(3)', () => <EpisodeCard episode={episodeE} startEpisode={startEpisode}/>);
