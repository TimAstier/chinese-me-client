import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar } from '../.';
import { Avatar as AvatarModel } from '../../models';

const avatar1 = new AvatarModel({
  happyImage: 'https://s3.eu-west-2.amazonaws.com/chineseme/liyu_happy.png',
  isTalking: false,
  name: 'Liyu',
  mood: 'happy'
});

const avatar2 = new AvatarModel({
  blinkImage: 'https://s3.eu-west-2.amazonaws.com/chineseme/liyu_blink.png',
  isTalking: true,
  name: 'Liyu',
  mood: 'blink'
});

storiesOf('Avatar', module)
  .add('isTalking: false', () =>
    <Avatar avatar={avatar1} />
  )
  .add('isTalking: true', () =>
    <Avatar avatar={avatar2} />
  )
  .add('chosen: true', () =>
    <Avatar avatar={avatar1} chosen/>
  );
