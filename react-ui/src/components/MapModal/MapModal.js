import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import styled from 'styled-components';
import { MapSidebar, MapContent } from '../../containers';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 640px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

class MapModal extends Component {
  render() {
    const { open, handleClose } = this.props;
    return (
      <Modal
        open={open}
        handleClose={handleClose}
        size="large"
        closeIcon="close"
      >
        <Wrapper>
          <MapSidebar />
          <MapContent />
        </Wrapper>
      </Modal>
    );
  }
}

MapModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired
};

export default MapModal;
