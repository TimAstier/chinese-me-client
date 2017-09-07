/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Immutable, { fromJS } from 'immutable';
import { SelectEpisode } from '../.';
import Episode from '../../models/Episode';
import Provider from '../../utils/Provider';

// SelectEpisode.propTypes = {
//   episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
//   title: propTypes.string.isRequired
// };

const entities = [{
  id: 1,
  number: 1,
  title: '你好',
  status: 'passed',
  score: 3
}, {
  id: 2,
  number: 2,
  title: '你是哪国人？',
  status: 'passed',
  score: 2
}, {
  id: 3,
  number: 3,
  title: '你叫什么名字？',
  status: 'passed',
  score: 3
}, {
  id: 4,
  number: 4,
  title: '你家有几口人？',
  status: 'passed',
  score: 1
}, {
  id: 5,
  number: 5,
  title: '怎么可能？',
  status: 'passed',
  score: 2
}, {
  id: 6,
  number: 6,
  title: '一起吃饭吧',
  status: 'passed',
  score: 3
}, {
  id: 7,
  number: 7,
  title: '我喜欢学中文',
  status: 'passed',
  score: 2
}, {
  id: 8,
  number: 8,
  title: '他怎么不来呢？',
  status: 'passed',
  score: 3
}, {
  id: 9,
  number: 9,
  title: '我们明天做什么？',
  status: 'new',
  score: 0
}, {
  id: 10,
  number: 10,
  title: '你想吃什么？',
  status: 'locked',
  score: 0
}, {
  id: 11,
  number: 11,
  title: '这怎么可能？',
  status: 'locked',
  score: 0
}, {
  id: 12,
  number: 12,
  title: '奇怪的故事',
  status: 'locked',
  score: 0
}, {
  id: 13,
  number: 13,
  title: '没想到这么热',
  status: 'locked',
  score: 0
}, {
  id: 14,
  number: 14,
  title: '太有意思',
  status: 'locked',
  score: 0
}, {
  id: 15,
  number: 15,
  title: '什么意思',
  status: 'locked',
  score: 0
}, {
  id: 16,
  number: 16,
  title: '不是这个意思',
  status: 'locked',
  score: 0
}, {
  id: 17,
  number: 17,
  title: '我真不好意思',
  status: 'locked',
  score: 0
}, {
  id: 18,
  number: 18,
  title: '下次见吧',
  status: 'locked',
  score: 0
}, {
  id: 19,
  number: 19,
  title: '你太聪明！',
  status: 'locked',
  score: 0
}, {
  id: 20,
  number: 20,
  title: '活到老学到老',
  status: 'locked',
  score: 0
}];

const episodes = fromJS(entities)
  .map(episode => new Episode(episode))
  .toOrderedMap();

storiesOf('SelectEpisode', module)
  .addDecorator(story => <Provider story={story()}/>)
  .add('without episodes', () =>
    <SelectEpisode
      episodes={new Immutable.OrderedMap()}
      title={'Season 1'}
    />
  )
  .add('with episodes', () =>
    <SelectEpisode
      episodes={episodes}
      title={'Season 1'}
    />
  );
