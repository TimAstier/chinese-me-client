/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ScreenButton } from '../../containers';
import { Provider } from '../../utils/testComponents';

// ScreenButton.propTypes = {
//   text: propTypes.string.isRequired,
//   primary: propTypes.bool,
//   disabled: propTypes.bool,
//   action: propTypes.oneOf(['next', 'closeModal', 'checkAnswer']),
//   next: propTypes.func.isRequired,
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
      action="next"
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
