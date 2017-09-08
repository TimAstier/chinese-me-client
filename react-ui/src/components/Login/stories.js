/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoginPage } from '../.';
import { Provider } from '../../utils/testComponents';

// Page.propTypes = {
//   onSubmit: propTypes.func.isRequired
// };

storiesOf('LoginPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () =>
    <LoginPage
      onSubmit={()=>{}}
    />
  );
