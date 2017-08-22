import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar, ModeButton } from '../.';
import { Statement } from '../../containers';
import * as models from '../../models';
import iconPrevious from '../../images/iconPrevious.svg';
import iconNext from '../../images/iconNext.svg';

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

const StatementWrapper = styled.div`
  min-height: 310px;
  display: flex;
  justify-content: center;
`;

const PersonalitiesWrapper = styled.div`
  min-height: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftChevronWrapper = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightChevronWrapper = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ChevronWrapper = styled.button`
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background-color: #cdd6db;
  :hover {
    background-color: #b2babf;
  }
  :active {
    background-color: #454545;
  }
  cursor: pointer;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Dialog extends Component {

  renderAvatars() {
    const avatarComponents = [];
    this.props.avatars.forEach(avatar => {
      return avatarComponents.push(
        <Avatar
          key={avatar.id}
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
        <StatementWrapper>
          <LeftChevronWrapper>
            {dialogMode === 'explore' && currentStatementIndex > 0 &&
              <ChevronWrapper
                onClick={() => previousStatement()}
              >
                <img src={iconPrevious} alt="previous statement" />
              </ChevronWrapper>
            }
          </LeftChevronWrapper>
          <Statement
            sentences={sentences}
            currentSentenceIndex={currentSentenceIndex}
            dialogMode={dialogMode}
          />
          <RightChevronWrapper>
            {dialogMode === 'explore' && currentStatementIndex < statementsCount - 1 &&
              <ChevronWrapper
                onClick={() => nextStatement()}
              >
                <img src={iconNext} alt="next statement" />
              </ChevronWrapper>
            }
          </RightChevronWrapper>
        </StatementWrapper>
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
