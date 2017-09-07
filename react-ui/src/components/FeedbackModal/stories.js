/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { FeedbackModal } from '../.';
import Provider from '../../utils/Provider';

// FeedbackModal.propTypes = {
//   open: propTypes.bool.isRequired,
//   status: propTypes.oneOf(['writing', 'sending', 'sent']).isRequired,
//   handleClose: propTypes.func.isRequired,
//   onSubmit: propTypes.func.isRequired,
// };

const mockProps = {
  handleClose: () => {},
  onSubmit: () => {}
};

storiesOf('FeedbackModal', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('writing', () =>
    <FeedbackModal
      open
      status="writing"
      {...mockProps}
    />
  )
  .add('sending', () =>
    <FeedbackModal
      open
      status="sending"
      {...mockProps}
    />
  )
  .add('sent', () =>
    <FeedbackModal
      open
      status="sent"
      {...mockProps}
    />
  );
