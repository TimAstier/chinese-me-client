import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeCard } from '../.';

storiesOf('EpisodeCard', module)
  .add('locked', () =>
    <EpisodeCard number={3} title="你是谁？" status="locked" score={0} />
  )
  .add('new', () =>
    <EpisodeCard number={2} title="我学中文" status="new" score={0} />
  )
  .add('passed: score(0)', () =>
    <EpisodeCard number={1} title="你好" status="passed" score={0} />
  )
  .add('passed: score(1)', () =>
    <EpisodeCard number={1} title="你好" status="passed" score={1} />
  )
  .add('passed: score(2)', () =>
    <EpisodeCard number={1} title="你好" status="passed" score={2} />
  )
  .add('passed: score(3)', () =>
    <EpisodeCard number={1} title="你好" status="passed" score={3} />
  );
