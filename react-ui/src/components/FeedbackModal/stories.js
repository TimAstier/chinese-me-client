import React from 'react';
import { storiesOf } from '@storybook/react';

import { FeedbackModal } from '../.';
import Provider from '../../utils/Provider';


storiesOf('FeedbackModal', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('writing', () => {
    return (
      <FeedbackModal
        open
        handleClose={()=>{}}
        status="writing"
        onSubmit={()=>{}}
      />
    );
  })
  .add('sending', () => {
    return (
      <FeedbackModal
        open
        handleClose={()=>{}}
        status="sending"
        onSubmit={()=>{}}
      />
    );
  })
  .add('sent', () => {
    return (
      <FeedbackModal
        open
        handleClose={()=>{}}
        status="sent"
        onSubmit={()=>{}}
      />
    );
  });
