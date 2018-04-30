import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookContainers as C } from '../../containers';
import { getTitleLetter } from '../../utils/bookContent';
import * as models from '../../models';
import styled from 'styled-components';
import Img from '../Shared/Img';
import { ScreenButton } from '../.';

const Placeholder = styled.p`
  color: red;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
`;

class ContentHOC extends Component {
  _lessonTitle = () => {
    return (
      <C.LessonTitle
        seasonNumber={this.props.season.number}
        episode={this.props.episode}
      />
    );
  }

  _grammarTitle = grammars => {
    let count = 0;
    return () => {
      count++;
      if (!grammars[count - 1]) {
        return <Placeholder>{`{GRAMMAR TITLE #${count} PLACEHOLDER}`}</Placeholder>;
      }
      return (
        <C.GrammarTitle
          letter={grammars.length > 1 ? getTitleLetter(count) : undefined}
          grammarId={grammars[count - 1]}
        />
      );
    };
  }

  _pronunciationTitle = pronunciations => {
    let count = 0;
    return () => {
      count++;
      if (!pronunciations[count - 1]) {
        return <Placeholder>{`{PRONUNCIATION TITLE #${count} PLACEHOLDER}`}</Placeholder>;
      }
      return (
        <C.PronunciationTitle
          letter={pronunciations.length > 1 ? getTitleLetter(count) : undefined}
          pronunciationId={pronunciations[count - 1]}
        />
      );
    };
  }

  _image = images => {
    let count = - 1;
    return (options = {}) => {
      count ++;
      if (!images[count]) {
        return <Placeholder>{`IMAGE #${count + 1} PLACEHOLDER`}</Placeholder>;
      }
      return (
        <Img
          name={images[count]}
          maxWidth={options.maxWidth}
          caption={options.caption}
          alt={options.caption ? options.caption : ''}
        />
      );
    };
  }

  _character = characters => {
    return (number, options) => {
      if (number > characters.length) {
        return <Placeholder>{'{CHARACTER PLACEHOLDER}'}</Placeholder>;
      }
      if (!characters[number - 1]) {
        return <Placeholder>{`{CHARACTERS #${number} NOT FOUND}`}</Placeholder>;
      }
      return (
        <C.Character
          characterId={characters[number - 1]}
          options={options}
        />
      );
    };
  }

  _example = examples => {
    return (number, options) => {
      if (number > examples.length) {
        return <Placeholder>{`{EXAMPLE #${number} PLACEHOLDER}`}</Placeholder>;
      }
      if (!examples[number - 1]) {
        return <Placeholder>{`{EXAMPLE #${number} NOT FOUND}`}</Placeholder>;
      }
      return (
        <C.Example
          episodeNumber={this.props.episode.number}
          exampleId={examples[number - 1]}
          options={options}
        />
      );
    };
  };

  _dialog = dialogs => {
    return (number, options) => {
      if (number > dialogs.length) {
        return <Placeholder>{`{DIALOG #${number} PLACEHOLDER}`}</Placeholder>;
      }
      if (!dialogs[number - 1]) {
        return <Placeholder>{`{DIALOG #${number} NOT FOUND}`}</Placeholder>;
      }
      return (
        <C.Dialog
          dialogId={dialogs[number - 1]}
          options={options}
        />
      );
    };
  }

  _newCharactersDumper = characters => {
    return () => {
      if (characters.length === 0) {
        return <Placeholder>{'{NEW_CHARACTERS PLACEHOLDER}'}</Placeholder>;
      }
      const array = [];
      characters.forEach((character, i) => {
        array.push(
          <C.Character
            key={characters[i]}
            characterId={characters[i]}
            options={{ mode: 'details' }}
            anchor={`character-${characters[i]}`}
          />
        );
      });
      return array;
    };
  };

  _newWordsDumper = words => {
    return () => {
      if (words.length === 0) {
        return <Placeholder>{'{NEW_WORDS PLACEHOLDER}'}</Placeholder>;
      }
      const array = [];
      words.forEach((word, i) => {
        array.push(
          <C.Word
            key={words[i]}
            wordId={words[i]}
          />
        );
      });
      return array;
    };
  };

  _pageNumberDumper = () => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  };

  render() {
    const { examples, dialogs, characters, grammars, practices, words,
      pronunciations } = this.props.episode;
    const Content = this.props.content;
    return (
      <div>
        <Content
          lessonTitle={this._lessonTitle.bind(this)}
          character={this._character(characters)}
          example={this._example(examples)}
          dialog={this._dialog(dialogs)}
          newCharacters={this._newCharactersDumper(characters)}
          newWords={this._newWordsDumper(words)}
          grammarTitle={this._grammarTitle(grammars)}
          pronunciationTitle={this._pronunciationTitle(pronunciations)}
          pageNumber={this._pageNumberDumper()}
          characterIds={characters}
          practiceIds={practices.map(p => p.id)}
          image={this._image(this.props.images)}
        />
        { this.props.nextEpisode &&
          <ButtonWrapper>
            <a href={`/study/season/${this.props.season.number}/episode/${this.props.nextEpisode.number}`}>
              <ScreenButton
                primary
                text="Next episode"
                width={150}
              />
            </a>
          </ButtonWrapper>
        }
      </div>
    );
  }
}

ContentHOC.propTypes = {
  content: propTypes.func.isRequired,
  season: propTypes.instanceOf(models.Season),
  episode: propTypes.instanceOf(models.Episode),
  nextEpisode: propTypes.instanceOf(models.Episode),
  images: propTypes.array.isRequired
};

export default ContentHOC;
