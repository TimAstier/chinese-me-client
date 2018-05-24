import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar, ModeButton, StatementWrapper } from '../.';
import { ChoseRole } from '../../containers';
import * as models from '../../models';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModeMenu = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const PersonalitiesWrapper = styled.div`
  min-height: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogWrapper = styled.div`
  width: 100%;
`;

class Dialog extends Component {
  // TODO: use containers and components instead of renderMethods
  renderModeMenu() {
    const { currentEpisodeId, currentDialogId, dialogMode, dialogLinkClick }
      = this.props;
    const baseUrl = `/course/${currentEpisodeId}/dialog/${currentDialogId}`;
    return (
      <ModeMenu>
        <ModeButton
          active={dialogMode === 'watch'}
          label="Listen"
          onClick={() => dialogLinkClick(baseUrl + '/watch')}
        />
        <ModeButton
          active={dialogMode === 'explore'}
          label="Explore"
          onClick={() => dialogLinkClick(baseUrl + '/explore')}
        />
        <ModeButton
          active={dialogMode === 'roleplay' || dialogMode === 'choserole'}
          label="Role-play"
          onClick={() => dialogLinkClick(baseUrl + '/roleplay')}
        />
      </ModeMenu>
    );
  }

  renderAvatars() {
    const avatarComponents = [];
    this.props.avatars.forEach((avatar, i) => {
      return avatarComponents.push(
        <Avatar
          key={i}
          avatar={avatar}
          chosen={avatar.id === this.props.chosenAvatarId ? true : undefined}
        />
      );
    });
    return avatarComponents;
  }

  renderDialog() {
    const { sentences, currentSentenceIndex, currentStatementIndex,
      statementsCount, nextStatement, previousStatement, dialogMode }
      = this.props;
    return (
      <DialogWrapper>
        <StatementWrapper
          dialogMode={dialogMode}
          sentences={sentences}
          statementsCount={statementsCount}
          currentStatementIndex={currentStatementIndex}
          currentSentenceIndex={currentSentenceIndex}
          nextStatement={nextStatement}
          previousStatement={previousStatement}
        />
        <PersonalitiesWrapper>
          {this.renderAvatars()}
        </PersonalitiesWrapper>
      </DialogWrapper>
    );
  }

  render() {
    return (
      <Wrapper>
        {this.renderModeMenu()}
        {
          this.props.dialogMode !== 'choserole'
          ? this.renderDialog()
            : <ChoseRole/>
        }
      </Wrapper>
    );
  }
}

Dialog.propTypes = {
  sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
  avatars: propTypes.arrayOf(propTypes.instanceOf(models.Avatar)).isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  chosenAvatarId: propTypes.number.isRequired,
  dialogMode: propTypes.string.isRequired,
  dialogLinkClick: propTypes.func.isRequired,
  currentEpisodeId: propTypes.string.isRequired,
  currentDialogId: propTypes.string.isRequired,
  previousStatement: propTypes.func.isRequired,
  nextStatement: propTypes.func.isRequired,
  statementsCount: propTypes.number.isRequired,
  currentStatementIndex: propTypes.number.isRequired
};

export default Dialog;
