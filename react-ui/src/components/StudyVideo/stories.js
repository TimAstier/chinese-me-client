/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { EpisodeScreen, StudyVideo } from '../.';
import { Provider } from '../../utils/testComponents';

// StudyVideo.propTypes = {
//   videoUrl: propTypes.string.isRequired
// };

storiesOf('StudyVideo', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('with videoUrl', () =>
    <EpisodeScreen exit={() => {}}>
      <StudyVideo
        videoUrl="https://s3.eu-west-2.amazonaws.com/chineseme/sampleVideo.mp4"
      />
    </EpisodeScreen>
  )
  .add('without videoUrl', () =>
    <EpisodeScreen exit={() => {}}>
      <StudyVideo
        videoUrl=""
      />
    </EpisodeScreen>
  );
