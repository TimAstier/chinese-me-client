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
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/character/' + c.id + '/pinyin'
            )}
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
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/dialog/' + d.id + '/listen'
            )}
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
    // TODO: Display number of completed items and completed headers
    if (!this.props.episode) {
      // TODO: return a message for empty screen
      return null;
    }
    return (
      <Wrapper>
        <TitleWrapper>
          <EpisodeNumber>
            {`Episode ${this.props.episode.number}:`}
          </EpisodeNumber>
          <EpisodeTitle>
            {this.props.episode.title}
          </EpisodeTitle>
        </TitleWrapper>
        <ContentWrapper>
          <ChapterHeader
            name="Characters"
            completedElements={0}
            totalElements={this.props.episode.characters.length}
            completed={false}
          />
          <CharactersWrapper>
            {this.renderCharacterBoxes()}
          </CharactersWrapper>
          <ChapterHeader
            name="Grammar"
            completedElements={0}
            totalElements={this.props.episode.grammars.length}
            completed={false}
          />
          <ContentItemsWrapper>
            {this.renderGrammarItems()}
          </ContentItemsWrapper>
          <ChapterHeader
            name="Dialog"
            completedElements={0}
            totalElements={this.props.episode.dialogs.length}
            completed={false}
          />
          <ContentItemsWrapper>
            {this.renderDialogItems()}
          </ContentItemsWrapper>
          <ChapterHeader
            name="Practice"
            completed={false}
          />
          <Space />
          <ChapterHeader
            name="Final Exam"
            completed={false}
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
  episode: propTypes.instanceOf(models.Episode),
  mapLinkClick: propTypes.func.isRequired
};

export default MapContent;
