import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import styled from 'styled-components';
import { MapSidebar, MapContent } from '../../components';
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

class FeedbackModal extends Component {
  render() {
    const { open, handleClose, episodes, currentEpisodeId } = this.props;
    return (
      <Modal
        open={open}
        handleClose={handleClose}
        size="large"
        closeIcon="close"
      >
        <Wrapper>
          <MapSidebar
            episodes={episodes}
            currentEpisodeId={currentEpisodeId}
          />
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

FeedbackModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  currentEpisodeId: propTypes.number,
  episodes: propTypes.arrayOf(propTypes.instanceOf(models.Episode)).isRequired,
  characters: propTypes.arrayOf(propTypes.instanceOf(models.Character)),
  grammars: propTypes.arrayOf(propTypes.instanceOf(models.Grammar)),
  dialogs: propTypes.arrayOf(propTypes.instanceOf(models.Dialog))
};

export default FeedbackModal;
