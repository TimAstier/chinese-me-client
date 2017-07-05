import React from 'react';
import { storiesOf } from '@storybook/react';

import { EpisodeScreen, Dialog } from '../.';
import dialogData from '../../test/data/dialog';

storiesOf('Dialog', module)
  .add('first sentence', () => {
    return (
      <EpisodeScreen
        stepsOptions={dialogData.stepsOptions}
        screenLabel={'Dialog - Explore'}
      >
        <Dialog
          personalities= {[dialogData.personalities]}
          sentences={[dialogData.sentences]}
          currentSentence={0}
          animatedAvatar={0}
        />
      </EpisodeScreen>
    );
  })
  .add('second sentence', () => {
    return (
      <EpisodeScreen
        stepsOptions={dialogData.stepsOptions}
        screenLabel={'Dialog - Explore'}
      >
        <Dialog
          personalities= {dialogData.personalities}
          sentences={dialogData.sentences}
          currentSentence={1}
          animatedAvatar={0}
        />
      </EpisodeScreen>
    );
  })
  .add('personality_1 speaking', () => {
    return (
      <EpisodeScreen
        stepsOptions={dialogData.stepsOptions}
        screenLabel={'Dialog - Explore'}
      >
        <Dialog
          personalities= {dialogData.personalities}
          sentences={dialogData.sentences}
          currentSentence={0}
          animatedAvatar={1}
        />
      </EpisodeScreen>
    );
  })
  .add('personality_2 speaking', () => {
    return (
      <EpisodeScreen
        stepsOptions={dialogData.stepsOptions}
        screenLabel={'Dialog - Explore'}
      >
        <Dialog
          personalities= {dialogData.personalities}
          sentences={dialogData.sentences}
          currentSentence={0}
          animatedAvatar={2}
        />
      </EpisodeScreen>
    );
  });
