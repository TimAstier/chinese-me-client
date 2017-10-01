import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar, ModeButton, StatementWrapper } from '../.';
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

class Dialog extends Component {

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

  render() {
    const { sentences, currentSentenceIndex, currentEpisodeId, currentDialogId,
    currentStatementIndex, statementsCount, nextStatement, previousStatement,
    dialogMode, dialogLinkClick }
      = this.props;
    const baseUrl = `/study/${currentEpisodeId}/dialog/${currentDialogId}`;
    return (
      <Wrapper>
        <ModeMenu>
          <ModeButton
            active={dialogMode === 'listen'}
            label="Listen"
            onClick={() => dialogLinkClick(baseUrl + '/listen')}
          />
          <ModeButton
            active={dialogMode === 'explore'}
            label="Explore"
            onClick={() => dialogLinkClick(baseUrl + '/explore')}
          />
          <ModeButton
            active={dialogMode === 'roleplay'}
            label="Roleplay"
            onClick={() => dialogLinkClick(baseUrl + '/roleplay')}
          />
        </ModeMenu>
        <StatementWrapper
          dialogMode={dialogMode}
          sentences={sentences}
          currentSentenceIndex={currentSentenceIndex}
          currentStatementIndex={currentStatementIndex}
          statementsCount={statementsCount}
          nextStatement={nextStatement}
          previousStatement={previousStatement}
        />
        <PersonalitiesWrapper>
          {this.renderAvatars()}
        </PersonalitiesWrapper>
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
