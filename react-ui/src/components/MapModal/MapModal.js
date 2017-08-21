import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import styled from 'styled-components';
import { MapSidebar, MapContent } from '../../containers';
import * as models from '../../models';

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
          <MapContent
            characters={this.props.characters}
            dialogs={this.props.dialogs}
            grammars={this.props.grammars}
          />
        </Wrapper>
      </Modal>
    );
  }
}

MapModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  characters: propTypes.arrayOf(propTypes.instanceOf(models.Character)),
  grammars: propTypes.arrayOf(propTypes.instanceOf(models.Grammar)),
  dialogs: propTypes.arrayOf(propTypes.instanceOf(models.Dialog))
};

export default MapModal;
