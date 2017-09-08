/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { SignupPage, EmailSentPage, ActivatedPage } from '../.';
import { Provider } from '../../utils/testComponents';

// Page.propTypes = {
//   onSubmit: propTypes.func.isRequired
// };

// ActivatedPage.propTypes = {
//   router: propTypes.object.isRequired
// };

storiesOf('SignupPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () =>
    <SignupPage
      onSubmit={()=>{}}
    />
  );

storiesOf('EmailSentPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('static', () =>
    <EmailSentPage />
  );

storiesOf('ActivatedPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () =>
    <ActivatedPage
      router={{ push: ()=>{} }}
    />
  );
