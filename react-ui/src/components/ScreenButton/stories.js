/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ScreenButton } from '../../containers';
import Provider from '../../utils/Provider';

// ScreenButton.propTypes = {
//   text: propTypes.string.isRequired,
//   primary: propTypes.bool,
//   disabled: propTypes.bool,
//   action: propTypes.oneOf(['next', 'skip', 'closeModal', 'checkAnswer']),
//   next: propTypes.func.isRequired,
//   skip: propTypes.func.isRequired,
//   handleCloseModal: propTypes.func.isRequired,
//   checkAnswer: propTypes.func.isRequired,
//   onClick: propTypes.func
// };

storiesOf('ScreenButton', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('primary', () =>
    <ScreenButton
      text="Next"
      primary
      action="next"
    />
  )
  .add('secondary', () =>
    <ScreenButton
      text="Skip"
      action="skip"
    />
  )
  .add('action: "next"', () =>
    <ScreenButton
      text="Skip"
      action="next"
    />
  )
  .add('primary, disabled', () =>
    <ScreenButton
      text="Next"
      primary
      disabled
    />
  )
  .add('secondary, disabled', () =>
    <ScreenButton
      text="Skip"
      disabled
    />
  );
