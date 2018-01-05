/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChoiceBox } from '../.';

// ChoiceBox.propTypes = {
//   label: propTypes.string.isRequired,
//   focused: propTypes.bool,
//   disabled: propTypes.bool,
//   wrong: propTypes.bool,
//   correct: propTypes.bool
//   onClick: propTypes.func.isRequired,
// };

storiesOf('ChoiceBox', module)
  .add('Label & onClick', () =>
    <ChoiceBox
      label="选择"
      focused={false}
      disabled={false}
      wrong={false}
      correct={false}
      onClick={() => console.log('clicked!')}
    />
  )
  .add('focused', () =>
    <ChoiceBox
      label="选择"
      focused
      disabled={false}
      wrong={false}
      correct={false}
      onClick={() => console.log('clicked!')}
    />
  )
  .add('disabled', () =>
    <ChoiceBox
      label="选择"
      focused={false}
      disabled
      wrong={false}
      correct={false}
      onClick={() => console.log('clicked!')}
    />
  )
  .add('wrong', () =>
    <ChoiceBox
      label="选择"
      focused
      disabled={false}
      wrong
      correct={false}
      onClick={() => console.log('clicked!')}
    />
  )
  .add('correct', () =>
    <ChoiceBox
      label="选择"
      focused={false}
      disabled={false}
      wrong={false}
      correct
      onClick={() => console.log('clicked!')}
    />
  );
