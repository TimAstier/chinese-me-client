/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '../.';
import { PlaceholderFixedWidth, PlaceholderFullWidth }
  from '../../utils/testComponents';

// Modal.propTypes = {
//   size: propTypes.oneOf(['small', 'large', 'fullscreen']).isRequired,
//   open: propTypes.bool.isRequired,
//   children: propTypes.node,
//   basic: propTypes.bool,
//   closeIcon: propTypes.oneOf(['close', undefined])
//   handleClose: propTypes.func.isRequired,
// };

const mockProps = {
  handleClose: ()=>{}
};

storiesOf('Modal', module)
  .add('size: small', () =>
    <Modal
      size="small"
      open
      {...mockProps}
    >
      Small
    </Modal>
  )
  .add('size: large', () =>
    <Modal
      size="large"
      open
      {...mockProps}
    >
      Large
    </Modal>
  )
  .add('size: fullscreen', () =>
    <Modal
      size="fullscreen"
      open
      {...mockProps}
    >
      Fullscreen
    </Modal>
  )
  .add('content: fixed width', () =>
    <Modal
      size="small"
      open
      {...mockProps}
    >
      <PlaceholderFixedWidth />
    </Modal>
  )
  .add('content: width 100%', () =>
    <Modal
      size="small"
      open
      {...mockProps}
    >
      <PlaceholderFullWidth />
    </Modal>
  )
  .add('open: false', () =>
    <Modal
      size="small"
      open={false}
      {...mockProps}
    >
      <PlaceholderFixedWidth />
    </Modal>
  )
  .add('basic', () =>
    <Modal
      size="small"
      open
      basic
      {...mockProps}
    >
      <PlaceholderFixedWidth />
    </Modal>
  )
  .add('handleClose', () =>
    <Modal
      size="small"
      open
      handleClose={() => console.log('handleClose!')}
    >
      <PlaceholderFixedWidth />
    </Modal>
  )
  .add('closeIcon', () =>
    <Modal
      size="small"
      open
      handleClose={() => console.log('handleClose!')}
      closeIcon="close"
    >
      <PlaceholderFixedWidth />
    </Modal>
  );
