import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import * as models from '../../models';
import { ChapterHeader, CharacterBox, MapItem }
  from '../.';
import { ScreenButton } from '../.';
import exerciseIcon from '../../images/exerciseIcon.svg';
import examIcon from '../../images/examIcon.svg';
import { getTitleLetter } from '../../utils/bookContent';
import isEmpty from 'lodash/isEmpty';


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

const Title = styled.div`
  padding-top: 15px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: 900;
  color: #454545;
`;

const ContentWrapper = styled.div`
  height: 525px;
  overflow-y: auto;
  ${''/* Always display the scrollbar  */}
  ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
  };
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  };
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
    const { episode, focusedSeasonNumber } = this.props;
    if (this.props.characters.length !== 0) {
      const characterBoxes = this.props.characters.map((c, i) => {
        return (
          <CharacterBox
            key={i}
            char={c.simpChar}
            completed={c.userCharacters.length !== 0}
            onClick={() => this.props.handleMapLinkClick(
              `/course/season/${focusedSeasonNumber}/episode/${episode.number}#character-${c.id}`
            )}
          />
        );
      });
      return <CharactersWrapper>{characterBoxes}</CharactersWrapper>;
    }
    return null;
  }

  renderDialogItems() {
    const { episode, focusedSeasonNumber } = this.props;
    if (this.props.dialogs.length !== 0) {
      const dialogItems = this.props.dialogs.map((d, i) => {
        if (isEmpty(d.translations)) {
          return null;
        }
        if (!d.translations[0].titleTranslation) {
          return null;
        }
        return (
          <MapItem
            key={i}
            title={d.translations[0].titleTranslation}
            // completed={d.userDialogs.length !== 0 ? true : undefined}
            onClick={() => this.props.handleMapLinkClick(
              `/course/season/${focusedSeasonNumber}/episode/${episode.number}#dialog-${d.id}`
            )}
          />
        );
      });
      return <ContentItemsWrapper>{dialogItems}</ContentItemsWrapper>;
    }
    return null;
  }

  renderGrammarItems() {
    const { episode, focusedSeasonNumber } = this.props;
    if (this.props.grammars.length !== 0) {
      const grammarItems = this.props.grammars.map((g, i) => {
        const title = this.props.grammars.length > 1 ?
          getTitleLetter(i + 1) + '. ' + g.translations[0].title
          : g.translations[0].title;
        return (
          <MapItem
            key={i}
            title={title}
            // completed={g.userGrammars.length !== 0 ? true : undefined}
            onClick={() => this.props.handleMapLinkClick(
              `/course/season/${focusedSeasonNumber}/episode/${episode.number}#grammar-${g.id}`
            )}
          />
        );
      });
      return (<ContentItemsWrapper>{grammarItems}</ContentItemsWrapper>);
    }
    return null;
  }

  renderPronunciationItems() {
    const { episode, focusedSeasonNumber } = this.props;
    if (this.props.pronunciations.length !== 0) {
      const pronunciationItems = this.props.pronunciations.map((p, i) => {
        const title = this.props.pronunciations.length > 1 ?
          getTitleLetter(i + 1) + '. ' + p.translations[0].title
          : p.translations[0].title;
        return (
          <MapItem
            key={i}
            title={title}
            // completed={p.userGrammars.length !== 0 ? true : undefined}
            onClick={() => this.props.handleMapLinkClick(
              `/course/season/${focusedSeasonNumber}/episode/${episode.number}#pronunciation-${p.id}`
            )}
          />
        );
      });
      return <ContentItemsWrapper>{pronunciationItems}</ContentItemsWrapper>;
    }
    return null;
  }

  render() {
    const { episode, focusedSeasonNumber, characters, grammars, dialogs,
      pronunciations } = this.props;
    if (!episode) {
      // TODO: return a message for empty screen
      return null;
    }
    return (
      <Wrapper>
        <TopWrapper>
          <Title>
            { episode.number + '. ' + episode.title }
          </Title>
        </TopWrapper>
        <ContentWrapper>
          {
            pronunciations.length !== 0 &&
              <ChapterHeader
                name="PRONUNCIATION"
                // completedElements={mapGrammarsCompletedCount}
                // totalElements={grammars.length}
              />
          }
          { this.renderPronunciationItems() }
          {
            characters !== 0 &&
              <ChapterHeader
                name="CHARACTERS"
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
                name="DIALOGUES"
                // completedElements={mapDialogsCompletedCount}
                // totalElements={dialogs.length}
              />
          }
          { this.renderDialogItems() }
        </ContentWrapper>
        <BottomWrapper>
          <ScreenButton
            text="Study"
            primary={!this.props.episode.locked}
            onClick={() => this.props.handleMapLinkClick(
              `/course/season/${focusedSeasonNumber}/episode/${episode.number}`
            )}
          />
          {
            <ScreenButton
              text="Exercises"
              secondary
              icon={exerciseIcon}
              onClick={() => this.props.handleMapLinkClick(
                `/course/season/${focusedSeasonNumber}/episode/${episode.number}#review`
              )}
            />
          }
          <ScreenButton
            text="Exam"
            secondary
            icon={examIcon}
            onClick={() => this.props.handleMapLinkClick(
              `/course/season/${focusedSeasonNumber}/episode/${episode.number}#exam`
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
  pronunciations: propTypes.array.isRequired,
  dialogs: propTypes.array.isRequired,
  focusedSeasonNumber: propTypes.number,
  episode: propTypes.instanceOf(models.Episode),
  handleMapLinkClick: propTypes.func.isRequired,
  // mapCharactersCompletedCount: propTypes.number.isRequired,
  // mapDialogsCompletedCount: propTypes.number.isRequired,
  // mapGrammarsCompletedCount: propTypes.number.isRequired
};

export default MapContent;
