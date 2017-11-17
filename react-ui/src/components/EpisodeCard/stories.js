import React from 'react';
import { storiesOf } from '@storybook/react';
import { EpisodeCard } from '../../containers';
import Episode from '../../models/Episode';
import { Provider } from '../../utils/testComponents';

// EpisodeCard.propTypes = {
//   episode: propTypes.instanceOf(Episode).isRequired,
//   startEpisode: propTypes.func.isRequired
// };

const mockProps = {
  startEpisode: () => {}
};

const episodeA = new Episode({
  id: 1,
  // number: 3,
  // title: '',
  // imageUrl: '',
  // review: null,
  // score: null
});

const episodeB = new Episode({
  id: 1,
  number: 1,
  title: '我叫马文',
  imageUrl: 'https://s3.eu-west-2.amazonaws.com/chineseme/Episode+Images/S01E01_img.png',
  // review: null,
  // score: null
});

const episodeC = new Episode({
  id: 1,
  number: 1,
  title: '我叫马文',
  imageUrl: 'https://s3.eu-west-2.amazonaws.com/chineseme/Episode+Images/S01E01_img.png',
  // review: null,
  // score: null
});

const episodeD = new Episode({
  id: 1,
  number: 1,
  title: '我叫马文',
  imageUrl: 'https://s3.eu-west-2.amazonaws.com/chineseme/Episode+Images/S01E01_img.png',
  // review: null,
  score: 7
});

const episodeE = new Episode({
  id: 1,
  number: 1,
  title: '我叫马文',
  // imageUrl: ''
  // review: null,
  // score: 7
});

storiesOf('EpisodeCard', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('empty',
    () => <EpisodeCard episode={episodeA} {...mockProps}/>)
  .add('new',
    () => <EpisodeCard episode={episodeC} {...mockProps}/>)
  .add('with score',
    () => <EpisodeCard episode={episodeD} {...mockProps}/>)
  .add('missing imageUrl',
    () => <EpisodeCard episode={episodeE} {...mockProps}/>);
