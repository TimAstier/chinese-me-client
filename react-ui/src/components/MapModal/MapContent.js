import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import * as models from '../../models';
import { ChapterHeader, CharacterBox, MapItem }
  from '../.';
import { ScreenButton } from '../.';
import handWithPen from '../../images/handWithPen.png';
import examIcon from '../../images/examIcon.png';


const Wrapper = styled.div`
  flex-grow: 1;
  height: 610px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  display: flex;
  height: 85px;
`;

const BottomWrapper = styled.div`
  display: flex;
  height: 85px;
  align-items: center;
  justify-content: space-around;
`;

const TitleWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const EpisodeNumber = styled.div`
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: 900;
  color: #454545;
`;

const EpisodeTitle = styled.div`
  font-family: Kai;
  font-size: 30px;
  font-weight: 900;
  color: #454545;
  margin-left: 20px;
`;

const ContentWrapper = styled.div`
  height: 525px;
  overflow-y: auto;
`;

const CharactersWrapper = styled.div`
  display: flex;
  padding: 8px 23px;
  flex-wrap: wrap;
`;

const ContentItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;

class MapContent extends Component {

  renderCharacterBoxes() {
    if (this.props.characters.length !== 0) {
      const characterBoxes = this.props.characters.map((c, i) => {
        return (
          <CharacterBox
            key={i}
            char={c.simpChar}
            completed={c.userCharacters.length !== 0}
            // onClick={() => console.log('click on character!')}
          />
        );
      });
      return <CharactersWrapper>{characterBoxes}</CharactersWrapper>;
    }
    return null;
  }

  renderDialogItems() {
    if (this.props.dialogs.length !== 0) {
      const dialogItems = this.props.dialogs.map((d, i) => {
        return (
          <MapItem
            key={i}
            title={d.chineseTitle}
            // completed={d.userDialogs.length !== 0 ? true : undefined}
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/dialog/' + d.id + '/explore'
            )}
          />
        );
      });
      return <ContentItemsWrapper>{dialogItems}</ContentItemsWrapper>;
    }
    return null;
  }

  renderGrammarItems() {
    if (this.props.grammars.length !== 0) {
      const grammarItems = this.props.grammars.map((g, i) => {
        return (
          <MapItem
            key={i}
            title={g.translations[0].title}
            // completed={g.userGrammars.length !== 0 ? true : undefined}
            // onClick={() => console.log('click on grammar!')}
          />
        );
      });
      return <ContentItemsWrapper>{grammarItems}</ContentItemsWrapper>;
    }
    return null;
  }

  render() {
    const { episode, focusedSeasonNumber, characters, grammars, dialogs,
      practices } = this.props;
    if (!episode) {
      // TODO: return a message for empty screen
      return null;
    }
    return (
      <Wrapper>
        <TopWrapper>
          <TitleWrapper>
            <EpisodeNumber>
              {
                (focusedSeasonNumber !== 0 ? 'Episode ' : 'Lesson ')
                + episode.number + ':'
              }
            </EpisodeNumber>
            <EpisodeTitle>
              {episode.title}
            </EpisodeTitle>
          </TitleWrapper>
        </TopWrapper>
        <ContentWrapper>
          {
            characters !== 0 &&
              <ChapterHeader
                name="NEW CHARACTERS"
                // completedElements={mapCharactersCompletedCount}
                // totalElements={characters.length}
              />
          }
          { this.renderCharacterBoxes() }
          {
            grammars.length !== 0 &&
              <ChapterHeader
                name="PATTERNS"
                // completedElements={mapGrammarsCompletedCount}
                // totalElements={grammars.length}
              />
          }
          { this.renderGrammarItems() }
          {
            dialogs.length !== 0 &&
              <ChapterHeader
                name="DIALOGS"
                // completedElements={mapDialogsCompletedCount}
                // totalElements={dialogs.length}
              />
          }
          { this.renderDialogItems() }
        </ContentWrapper>
        <BottomWrapper>
          <ScreenButton
            text="Study"
            primary
            onClick={() => this.props.mapLinkClick(
              `/study/season/${focusedSeasonNumber}/episode/${episode.number}`
            )}
          />
          {
            practices[0] &&
              <ScreenButton
                text="Review"
                secondary
                icon={handWithPen}
                onClick={() => this.props.mapLinkClick(
                  '/study/' + this.props.episode.id + '/practice/' + practices[0].id
                )}
              />
          }
          <ScreenButton
            text="Exam"
            secondary
            icon={examIcon}
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/exam'
            )}
          />
        </BottomWrapper>
      </Wrapper>
    );
  }
}

MapContent.propTypes = {
  characters: propTypes.array.isRequired,
  grammars: propTypes.array.isRequired,
  dialogs: propTypes.array.isRequired,
  practices: propTypes.array.isRequired,
  focusedSeasonNumber: propTypes.number,
  episode: propTypes.instanceOf(models.Episode),
  mapLinkClick: propTypes.func.isRequired,
  // mapCharactersCompletedCount: propTypes.number.isRequired,
  // mapDialogsCompletedCount: propTypes.number.isRequired,
  // mapGrammarsCompletedCount: propTypes.number.isRequired
};

export default MapContent;
