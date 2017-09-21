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
    if (this.props.characters.length !== 0) {
      const characterBoxes = this.props.characters.map((c, i) => {
        return (
          <CharacterBox
            key={i}
            char={c.simpChar}
            completed={c.userCharacters.length !== 0}
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/character/' + c.id + '/pinyin'
            )}
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
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/dialog/' + d.id + '/listen'
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
          <MapGrammarItem
            key={i}
            title={g.translations[0].title}
            completed={g.userGrammars.length !== 0 ? true : undefined}
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/grammar/' + g.id + '/explanation'
            )}
          />
        );
      });
      return <ContentItemsWrapper>{grammarItems}</ContentItemsWrapper>;
    }
    return null;
  }

  render() {
    const { episode, mapCharactersCompletedCount,
      mapGrammarsCompletedCount, mapDialogsCompletedCount } = this.props;
    if (!episode) {
      // TODO: return a message for empty screen
      return null;
    }
    return (
      <Wrapper>
        <TitleWrapper>
          <EpisodeNumber>
            {`Episode ${episode.number}:`}
          </EpisodeNumber>
          <EpisodeTitle>
            {episode.title}
          </EpisodeTitle>
        </TitleWrapper>
        <ContentWrapper>
          {episode.characters.length !== 0 &&
            <ChapterHeader
              name="Characters"
              completedElements={mapCharactersCompletedCount}
              totalElements={episode.characters.length}
              onClick={() => this.props.mapLinkClick(
                '/study/' + this.props.episode.id + '/title/1'
              )}
            />
          }
          {this.renderCharacterBoxes()}
          {episode.grammars.length !== 0 &&
            <ChapterHeader
              name="Grammar"
              completedElements={mapGrammarsCompletedCount}
              totalElements={episode.grammars.length}
              onClick={() => this.props.mapLinkClick(
                '/study/' + this.props.episode.id + '/title/2'
              )}
            />
          }
          {this.renderGrammarItems()}
          {episode.dialogs.length !== 0 &&
            <ChapterHeader
              name="Dialog"
              completedElements={mapDialogsCompletedCount}
              totalElements={episode.dialogs.length}
              onClick={() => this.props.mapLinkClick(
                '/study/' + this.props.episode.id + '/title/3'
              )}
            />
          }
          {this.renderDialogItems()}
          <ChapterHeader
            name="Review"
            completed={this.props.episode.get('review')}
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/title/4'
            )}
          />
          <Space />
          <ChapterHeader
            name="Final Exam"
            completed={false}
            onClick={() => this.props.mapLinkClick(
              '/study/' + this.props.episode.id + '/title/5'
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
  episode: propTypes.instanceOf(models.Episode),
  mapLinkClick: propTypes.func.isRequired,
  mapCharactersCompletedCount: propTypes.number.isRequired,
  mapDialogsCompletedCount: propTypes.number.isRequired,
  mapGrammarsCompletedCount: propTypes.number.isRequired
};

export default MapContent;
