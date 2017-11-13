import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookContainers as c } from '../../containers';
import { getGrammarLetter } from '../../utils/bookContent';
import * as models from '../../models';
import styled from 'styled-components';
import { bookComponents } from '../.';

const Placeholder = styled.p`
  color: red;
`;

class ContentHOC extends Component {

  _lessonTitle = () => {
    return (
      <c.LessonTitle
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
        <c.GrammarTitle
          letter={getGrammarLetter(count)}
          title={title}
        />
      );
    };
  }

  _character = characters => {
    return (number, options = { practice: false }) => {
      if (characters.length === 0) {
        return <Placeholder>{'{CHARACTER PLACEHOLDER}'}</Placeholder>;
      }
      if (!characters[number]) {
        return <Placeholder>{`{CHARACTERS #${number} NOT FOUND}`}</Placeholder>;
      }
      return (
        <c.Character
          characterId={characters[number]}
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
          <c.Character
            key={characters[i]}
            characterId={characters[i]}
            options={{ practice: false }}
          />
        );
      });
      return (
        <div>
          <br/>
          <bookComponents.PartTitle>New characters</bookComponents.PartTitle>
          {array}
        </div>
      );
    };
  };

  _examplesDumper = examples => {
    let count = -1;
    return options => {
      count++;
      if (count >= examples.length) {
        return <Placeholder>{`{EXAMPLE #${count + 1} PLACEHOLDER}`}</Placeholder>;
      }
      return (
        <c.Example
          episodeNumber={this.props.episode.number}
          exampleId={examples[count]}
          options={options}
        />
      );
    };
  };

  _dialogsDumper = dialogs => {
    let count = -1;
    return () => {
      count++;
      if (count >= dialogs.length) {
        return <Placeholder>{'{DIALOG PLACEHOLDER}'}</Placeholder>;
      }
      return (
        <div>
          <br/>
          <c.PartTitle
            linkUrl={`/study/${this.props.episode.id}/dialog/${dialogs[count].id}/listen`}
          >
            {dialogs[count].chineseTitle ?
              `会话：${dialogs[count].chineseTitle}`
                : <Placeholder>{'{MISSING CHINESE_TITLE}'}</Placeholder>}
          </c.PartTitle>
          <p>{dialogs[count].translations[0] && dialogs[count].translations[0].intro}</p>
          {this.renderDialog(dialogs[count], 'chinese')}
          { dialogs[count].translations[0] && dialogs[count].translations[0].titleTranslation ?
            <c.PartTitle>{`Dialog：${dialogs[count].translations[0].titleTranslation}`}</c.PartTitle>
            : <c.PartTitle><Placeholder>{'{MISSING TRANSLATION_TITLE}'}</Placeholder></c.PartTitle>
          }
          {this.renderDialog(dialogs[count], 'translation')}
        </div>
      );
    };
  }

  _renderDialog = (dialog, type) => {
    const sentenceType = type === 'chinese' ? 'chinese' : 'translation';
    const name = type === 'chinese' ? 'chineseName' : 'name';
    const array = [];
    let text = '';
    dialog.statements.forEach((statement, i) => {
      text = '';
      statement.sentences.forEach(sentence => {
        if (sentenceType === 'chinese') {
          text = text + ' ' + sentence.chinese;
        } else {
          if (sentence.translations[0]) {
            text = text + ' ' + sentence.translations[0].translation;
          } else {
            text = undefined;
          }
        }
      });
      array.push(
        <c.Statement
          key={i}
          type={type}
          text={text}
          name={statement.avatar[name]}
        />
      );
    });
    return array;
  }

  _reviewDumper = () => {
    return (
      <c.PartTitle linkUrl={`/study/${this.props.episode.id}/title/4`}>
        Review
      </c.PartTitle>
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
        newCharacters={this._newCharactersDumper(characters)}
        example={this._examplesDumper(examples)}
        dialog={this._dialogsDumper(dialogs)}
        review={this._reviewDumper}
        grammarTitle={this._grammarTitle()}
        pageNumber={this._pageNumberDumper()}
        character={this._character(characters)}
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
