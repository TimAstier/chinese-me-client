/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { VideoPlayer } from '../.';

// VideoPlayer.propTypes = {
//   width: propTypes.number.isRequired,
//   height: propTypes.number.isRequired,
//   autoPlay: propTypes.bool,
//   src: propTypes.string.isRequired,
//   videoEnded: propTypes.func.isRequired
// };

storiesOf('VideoPlayer', module)
  .add('required props', () =>
    <VideoPlayer
      width={676}
      height={380}
      src="https://s3.eu-west-2.amazonaws.com/chineseme/sampleVideo.mp4"
      videoEnded={()=>{}}
    />
  )
  .add('autoPlay', () =>
    <VideoPlayer
      width={676}
      height={380}
      src="https://s3.eu-west-2.amazonaws.com/chineseme/sampleVideo.mp4"
      autoPlay
      videoEnded={()=>{}}
    />
  )
  .add('onEnded: log', () =>
    <VideoPlayer
      width={676}
      height={380}
      src="https://s3.eu-west-2.amazonaws.com/chineseme/sampleVideo.mp4"
      videoEnded={()=>console.log('video finished!')}
    />
  );
