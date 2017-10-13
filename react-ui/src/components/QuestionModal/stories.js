/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { QuestionModal } from '../.';
import { Provider } from '../../utils/testComponents';

// QuestionModal.propTypes = {
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
