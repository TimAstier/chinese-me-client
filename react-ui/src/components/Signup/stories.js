import React from 'react';
import { storiesOf } from '@storybook/react';

import { SignupPage, EmailSentPage } from '../.';
import Provider from '../../utils/Provider';

storiesOf('SignupPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () => {
    return (
      <SignupPage
        onSubmit={()=>{}}
      />
    );
  });

storiesOf('EmailSentPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () => {
    return (
      <EmailSentPage />
    );
  });
