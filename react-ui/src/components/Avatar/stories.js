/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '../.';
import { Avatar as AvatarModel } from '../../models';

// Avatar.propTypes = {
//   avatar: propTypes.instanceOf(models.Avatar),
//   chosen: propTypes.bool
// };

const avatar1 = new AvatarModel({
  happyImage: 'https://s3.eu-west-2.amazonaws.com/chineseme/personalities/liyu_head.png',
  isTalking: false,
  name: 'Marvin',
  mood: 'happy'
});

const avatar2 = new AvatarModel({
  blinkImage: 'https://s3.eu-west-2.amazonaws.com/chineseme/personalities/marvin_head.png',
  isTalking: true,
  name: 'Marvin',
  mood: 'blink'
});

const avatar3 = new AvatarModel({
  // blinkImage: '',
  isTalking: false,
  name: 'Liyu',
  mood: 'blink'
});

const avatar4 = new AvatarModel({
  // blinkImage: '',
  isTalking: true,
  name: 'Liyu',
  mood: 'blink'
});

storiesOf('Avatar', module)
  .add('isTalking: false', () =>
    <Avatar
      avatar={avatar1}
    />
  )
  .add('diameter: 120', () =>
    <Avatar
      avatar={avatar1}
      diameter={120}
    />
  )
  .add('isTalking: true', () =>
    <Avatar
      avatar={avatar2}
    />
  )
  .add('chosen', () =>
    <Avatar
      avatar={avatar1}
      chosen
    />
  )
  .add('missing image', () =>
    <Avatar
      avatar={avatar3}
    />
  )
  .add('missing image && isTalking', () =>
    <Avatar
      avatar={avatar4}
    />
  )
  .add('missing image && chosen', () =>
    <Avatar
      avatar={avatar3}
      chosen
    />
  );
