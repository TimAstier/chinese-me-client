import React from 'react';
import { storiesOf } from '@storybook/react';

import { Statement } from '../.';

// Import test data
import statementsData from '../../test/data/statements';

storiesOf('Statement', module)
  .add('singleSentence', () =>
    <Statement sentences={statementsData.singleSentence} currentSentence={0} />
  )
  .add('twoSentences: active[0]', () =>
    <Statement sentences={statementsData.twoSentences} currentSentence={0} />
  )
  .add('twoSentences: active[1]', () =>
    <Statement sentences={statementsData.twoSentences} currentSentence={1} />
  )
  .add('threeSentences: active[0]', () =>
    <Statement sentences={statementsData.threeSentences} currentSentence={0} />
  )
  .add('threeSentences: active[1]', () =>
    <Statement sentences={statementsData.threeSentences} currentSentence={1} />
  )
  .add('threeSentences: active[2]', () =>
    <Statement sentences={statementsData.threeSentences} currentSentence={2} />
  );
