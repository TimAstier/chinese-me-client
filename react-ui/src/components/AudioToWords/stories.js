/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { fromJS, List, OrderedMap } from 'immutable';
import { EpisodeScreen, AudioToWords } from '../.';
import * as models from '../../models';
import { Provider } from '../../utils/testComponents';

// AudioToWords.propTypes = {
//   audioToText: propTypes.instanceOf(models.AudioToWords).isRequired,
//   words: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
//   currentBoxIndex: propTypes.number.isRequired,
//   results: propTypes.instanceOf(List).isRequired,
//   status: propTypes.oneOf(['question', 'finished']).isRequired,
//   userAnswer: propTypes.string.isRequired
// };

// Mock entities sent by server
const entities = {
  1: {
    id: 1,
    order: 1,
    chinese: '你好',
    pinyin: 'ni3hao3'
  },
  2: {
    id: 2,
    order: 2,
    chinese: '我',
    pinyin: 'wo3'
  },
  3: {
    id: 3,
    order: 3,
    chinese: '想',
    pinyin: 'xiang3'
  },
  4: {
    id: 4,
    order: 4,
    chinese: '学',
    pinyin: 'xue2'
  },
  5: {
    id: 5,
    order: 5,
    chinese: '中文',
    pinyin: 'zhong1wen2'
  }
};

// Mock conversion from setEntities
let wordsMap = new OrderedMap();
wordsMap = wordsMap
  .merge(fromJS(entities).map(word => new models.Word(word)));

const audioToText = new models.AudioToWords({
  id: 1,
  words: [1, 2, 3, 4, 5],
  episodeId: 1,
  order: 1,
  audioUrl: ''
});

const resultsA = List();

const resultsB = List(fromJS([{
  success: true,
  userAnswer: 'ni3hao3'
}]));

const resultsC = List(fromJS([{
  success: true,
  userAnswer: 'ni3hao3'
}, {
  success: false,
  userAnswer: 'wo1'
}]));

const resultsD = List(fromJS([{
  success: true,
  userAnswer: 'ni3hao3'
}, {
  success: true,
  userAnswer: 'wo3'
}, {
  success: true,
  userAnswer: 'xiang3'
}, {
  success: true,
  userAnswer: 'xue2'
}, {
  success: true,
  userAnswer: 'zhong1wen2'
}]));

const resultsE = List(fromJS([{
  success: true,
  userAnswer: 'ni3hao3'
}, {
  success: true,
  userAnswer: 'wo3'
}, {
  success: false,
  userAnswer: 'xiang2'
}, {
  success: true,
  userAnswer: 'xue2'
}, {
  success: true,
  userAnswer: 'zhong1wen2'
}]));

storiesOf('AudioToWords', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('question: init', () =>
    <EpisodeScreen exit={() => {}}>
      <AudioToWords
        audioToText={audioToText}
        words={wordsMap}
        currentBoxIndex={0}
        results={resultsA}
        status={'question'}
        userAnswer={''}
      />
    </EpisodeScreen>
  )
  .add('question: userAnswer', () =>
    <EpisodeScreen exit={() => {}}>
      <AudioToWords
        audioToText={audioToText}
        words={wordsMap}
        currentBoxIndex={0}
        results={resultsA}
        status={'question'}
        userAnswer={'wo1'}
      />
    </EpisodeScreen>
  )
  .add('question: success', () =>
    <EpisodeScreen exit={() => {}}>
      <AudioToWords
        audioToText={audioToText}
        words={wordsMap}
        currentBoxIndex={1}
        results={resultsB}
        status={'question'}
        userAnswer={''}
      />
    </EpisodeScreen>
  )
  .add('question: fail', () =>
    <EpisodeScreen exit={() => {}}>
      <AudioToWords
        audioToText={audioToText}
        words={wordsMap}
        currentBoxIndex={2}
        results={resultsC}
        status={'question'}
        userAnswer={''}
      />
    </EpisodeScreen>
  )
  .add('finished: all_success', () =>
    <EpisodeScreen exit={() => {}}>
      <AudioToWords
        audioToText={audioToText}
        words={wordsMap}
        currentBoxIndex={4}
        results={resultsD}
        status={'finished'}
        userAnswer={''}
      />
    </EpisodeScreen>
  )
  .add('finished: fail', () =>
    <EpisodeScreen exit={() => {}}>
      <AudioToWords
        audioToText={audioToText}
        words={wordsMap}
        currentBoxIndex={4}
        results={resultsE}
        status={'finished'}
        userAnswer={''}
      />
    </EpisodeScreen>
  );
