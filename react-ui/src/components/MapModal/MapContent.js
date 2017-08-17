import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import * as models from '../../models';
import { ChapterHeader, CharacterBox, MapDialogItem, MapGrammarItem }
  from '../.';

const Wrapper = styled.div`
  flex-grow: 1;
  height: 610px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  height: 85px;
  padding-top: 15px;
  display: flex;
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
    if (this.props.characters) {
      return this.props.characters.map((c, i) => {
        return (
          <CharacterBox
            key={i}
            char={c.simpChar}
            completed={c.completed}
          />
        );
      });
    }
    return null;
  }

  renderDialogItems() {
    if (this.props.dialogs) {
      return this.props.dialogs.map((d, i) => {
        return (
          <MapDialogItem
            key={i}
            title={d.title}
            completed={d.completed ? true : undefined}
          />
        );
      });
    }
    return null;
  }

  renderGrammarItems() {
    if (this.props.grammars) {
      return this.props.grammars.map((g, i) => {
        return (
          <MapGrammarItem
            key={i}
            title={g.title}
            completed={g.completed ? true : undefined}
          />
        );
      });
    }
    return null;
  }

  render() {
    // TODO: Link headers to actual data
    // TODO: Link Characters to actual data
    return (
      <Wrapper>
        <TitleWrapper>
          <EpisodeNumber>Episode 5:</EpisodeNumber>
          <EpisodeTitle>你是谁？</EpisodeTitle>
        </TitleWrapper>
        <ContentWrapper>
          <ChapterHeader
            name="Characters"
            completedElements={3}
            totalElements={8}
          />
          <CharactersWrapper>
            {this.renderCharacterBoxes()}
          </CharactersWrapper>
          <ChapterHeader
            name="Grammar"
            completed
            completedElements={2}
            totalElements={2}
          />
          <ContentItemsWrapper>
            {this.renderGrammarItems()}
          </ContentItemsWrapper>
          <ChapterHeader
            name="Dialog"
            completedElements={0}
            totalElements={1}
          />
          <ContentItemsWrapper>
            {this.renderDialogItems()}
          </ContentItemsWrapper>
          <ChapterHeader
            name="Practice"
            completed
          />
          <Space />
          <ChapterHeader
            name="Final Exam"
          />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

MapContent.propTypes = {
  characters: propTypes.arrayOf(propTypes.instanceOf(models.Character)),
  grammars: propTypes.arrayOf(propTypes.instanceOf(models.Grammar)),
  dialogs: propTypes.arrayOf(propTypes.instanceOf(models.Dialog))
};

export default MapContent;
