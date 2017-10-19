/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { QuestionModal } from '../.';
import { Provider } from '../../utils/testComponents';

// QuestionModal.propTypes = {
//   open: propTypes.bool.isRequired,
//   type: propTypes.string.isRequired,
//   onClick: propTypes.func.isRequired
// };

const mockProps = {
  handleClose: () => {},
  onSubmit: () => {}
};

storiesOf('QuestionModal', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('test', () =>
    <QuestionModal
      open
      type="closedQuestion"
      {...mockProps}
    />
  );
