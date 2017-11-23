import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import * as models from '../../models';
import { ChapterHeader, CharacterBox, MapDialogItem, MapGrammarItem }
  from '../.';
import { ScreenButton } from '../.';


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

const TitleWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  flex-grow: 1;
`;

const EpisodeNumber = styled.div`
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: 900;
  color: #454545;
`;

const EpisodeTitle = styled.div`
  font-family: 'STKaitiSC';
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

const Space = styled.div`
  height: 20px;
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
            onClick={() => console.log('click on character!')}
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
          <MapDialogItem
            key={i}
            title={d.chineseTitle}
            completed={d.userDialogs.length !== 0 ? true : undefined}
            onClick={() => console.log('click on dialog!')}
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
          <MapGrammarItem
            key={i}
            title={g.translations[0].title}
            completed={g.userGrammars.length !== 0 ? true : undefined}
            onClick={() => console.log('click on grammar!')}
          />
        );
      });
      return <ContentItemsWrapper>{grammarItems}</ContentItemsWrapper>;
    }
    return null;
  }

  render() {
    const { episode, mapCharactersCompletedCount,
      mapGrammarsCompletedCount, mapDialogsCompletedCount,
      focusedSeasonNumber, characters, grammars, dialogs } = this.props;
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
          <ScreenButton
            text="Study"
            primary
            onClick={() => this.props.mapLinkClick(
              `/study/season/${focusedSeasonNumber}/episode/${episode.number}`
            )}
          />
        </TopWrapper>
        <ContentWrapper>
          {
            characters !== 0 &&
              <ChapterHeader
                name="Characters"
                completedElements={mapCharactersCompletedCount}
                totalElements={characters.length}
              />
          }
          { this.renderCharacterBoxes() }
          {
            grammars.length !== 0 &&
              <ChapterHeader
                name="Patterns"
                completedElements={mapGrammarsCompletedCount}
                totalElements={grammars.length}
              />
          }
          { this.renderGrammarItems() }
          {
            dialogs.length !== 0 &&
              <ChapterHeader
                name="Dialog"
                completedElements={mapDialogsCompletedCount}
                totalElements={dialogs.length}
              />
          }
          { this.renderDialogItems() }
          <ChapterHeader
            name="Review"
            completed={this.props.episode.get('review')}
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/review'
            )}
          />
          <Space />
          <ChapterHeader
            name="Exam"
            completed={false}
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/exam'
            )}
          />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

MapContent.propTypes = {
  characters: propTypes.array.isRequired,
  grammars: propTypes.array.isRequired,
  dialogs: propTypes.array.isRequired,
  focusedSeasonNumber: propTypes.number,
  episode: propTypes.instanceOf(models.Episode),
  mapLinkClick: propTypes.func.isRequired,
  mapCharactersCompletedCount: propTypes.number.isRequired,
  mapDialogsCompletedCount: propTypes.number.isRequired,
  mapGrammarsCompletedCount: propTypes.number.isRequired
};

export default MapContent;
