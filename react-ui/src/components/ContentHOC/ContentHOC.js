import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookContainers as C } from '../../containers';
import { getGrammarLetter } from '../../utils/bookContent';
import * as models from '../../models';
import styled from 'styled-components';
import { bookComponents as c} from '../.';

const Placeholder = styled.p`
  color: red;
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

  _grammarTitle = () => {
    let count = 0;
    return title => {
      count++;
      return (
        <C.GrammarTitle
          letter={getGrammarLetter(count)}
          title={title}
        />
      );
    };
  }

  _character = characters => {
    return (number, options) => {
      if (characters.length === 0) {
        return <Placeholder>{'{CHARACTER PLACEHOLDER}'}</Placeholder>;
      }
      if (!characters[number]) {
        return <Placeholder>{`{CHARACTERS #${number + 1} NOT FOUND}`}</Placeholder>;
      }
      return (
        <C.Character
          characterId={characters[number]}
          options={options}
        />
      );
    };
  }

  _example = examples => {
    return (number, options) => {
      if (number >= examples.length) {
        return <Placeholder>{'{EXAMPLE PLACEHOLDER}'}</Placeholder>;
      }
      if (!examples[number]) {
        return <Placeholder>{`{EXAMPLE #${number + 1} NOT FOUND}`}</Placeholder>;
      }
      return (
        <C.Example
          episodeNumber={this.props.episode.number}
          exampleId={examples[number]}
          options={options}
        />
      );
    };
  };

  _dialog = dialogs => {
    return (number, options) => {
      if (number >= dialogs.length) {
        return <Placeholder>{'{DIALOG PLACEHOLDER}'}</Placeholder>;
      }
      if (!dialogs[number]) {
        return <Placeholder>{`{DIALOG #${number + 1} NOT FOUND}`}</Placeholder>;
      }
      return (
        <C.Dialog
          dialogId={dialogs[number]}
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
          />
        );
      });
      return <c.Bookrow flexDirection={'column'}>{array}</c.Bookrow>;
    };
  };

  _reviewDumper = () => {
    return (
      <C.PartTitle linkUrl={`/study/${this.props.episode.id}/title/4`}>
        Review
      </C.PartTitle>
    );
  }

  _pageNumberDumper = () => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  };

  render() {
    const { examples, dialogs, characters } = this.props.episode;
    const Content = this.props.content;
    return (
      <Content
        lessonTitle={this._lessonTitle.bind(this)}
        character={this._character(characters)}
        example={this._example(examples)}
        dialog={this._dialog(dialogs)}
        newCharacters={this._newCharactersDumper(characters)}
        grammarTitle={this._grammarTitle()}
        pageNumber={this._pageNumberDumper()}
        review={this._reviewDumper}
      />
    );
  }
}

ContentHOC.propTypes = {
  content: propTypes.func.isRequired,
  season: propTypes.instanceOf(models.Season),
  episode: propTypes.instanceOf(models.Episode),
};

export default ContentHOC;
