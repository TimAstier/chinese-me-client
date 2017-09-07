import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../utils/Provider';

import { EpisodeCard } from '../../containers';
import Episode from '../../models/Episode';

// Mock dispatchProp
const startEpisode = id => id;

const episodeA = new Episode({
  id: 1,
  // number: 3,
  // title: '',
  // imageUrl: '',
  // locked: null,
  // review: null,
  // score: null
});

const episodeB = new Episode({
  id: 1,
  number: 1,
  title: '我叫马文',
  imageUrl: 'https://s3.eu-west-2.amazonaws.com/chineseme/Episode+Images/S01E01_img.png',
  locked: true
  // review: null,
  // score: null
});

const episodeC = new Episode({
  id: 1,
  number: 1,
  title: '我叫马文',
  imageUrl: 'https://s3.eu-west-2.amazonaws.com/chineseme/Episode+Images/S01E01_img.png',
  locked: false
  // review: null,
  // score: null
});

const episodeD = new Episode({
  id: 1,
  number: 1,
  title: '我叫马文',
  imageUrl: 'https://s3.eu-west-2.amazonaws.com/chineseme/Episode+Images/S01E01_img.png',
  locked: false,
  // review: null,
  score: 7
});

const episodeE = new Episode({
  id: 1,
  number: 1,
  title: '我叫马文',
  // imageUrl: ''
  locked: false,
  // review: null,
  // score: 7
});

storiesOf('EpisodeCard', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('empty',
    () => <EpisodeCard episode={episodeA} startEpisode={startEpisode}/>)
  .add('locked',
    () => <EpisodeCard episode={episodeB} startEpisode={startEpisode}/>)
  .add('new',
    () => <EpisodeCard episode={episodeC} startEpisode={startEpisode}/>)
  .add('with score',
    () => <EpisodeCard episode={episodeD} startEpisode={startEpisode}/>)
  .add('missing imageUrl',
    () => <EpisodeCard episode={episodeE} startEpisode={startEpisode}/>);
