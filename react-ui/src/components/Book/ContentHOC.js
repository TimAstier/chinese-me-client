import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as c from './components';
import { getGrammarSentenceCode, getGrammarLetter }
  from '../../utils/bookContent';
import * as models from '../../models';
import styled from 'styled-components';
import insertVariables from '../../utils/insertVariables';

const Placeholder = styled.p`
  color: red;
`;

class ContentHOC extends Component {

  lessonTitle = () => {
    return (
      <c.LessonTitle
        seasonNumber={this.props.season.number}
        episodeNumber={this.props.book.number}
        title={this.props.book.title}
      />
    );
  }

  grammarTitle = () => {
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

  character = characters => {
    return number => {
      if (characters.length === 0) {
        return <Placeholder>{'{CHARACTER PLACEHOLDER}'}</Placeholder>;
      }
      if (!characters[number]) {
        return <Placeholder>{`{CHARACTERS #${number} NOT FOUND}`}</Placeholder>;
      }
      return <c.Character simpChar={characters[number].simpChar}/>;
    };
  }

  characterPractice = characters => {
    return number => {
      if (characters.length === 0) {
        return <Placeholder>{'{CHARACTER_PRACTICE PLACEHOLDER}'}</Placeholder>;
      }
      if (!characters[number]) {
        return <Placeholder>{`{CHARACTERS #${number} NOT FOUND}`}</Placeholder>;
      }
      return <c.CharacterPractice simpChar={characters[number].simpChar}/>;
    };
  }

  newCharactersDumper = characters => {
    return () => {
      if (characters.length === 0) {
        return <Placeholder>{'{NEW_CHARACTERS PLACEHOLDER}'}</Placeholder>;
      }
      const array = [];
      characters.forEach((character, i) => {
        array.push(
          <c.Character
            key={i}
            simpChar={character.simpChar}
            pinyinNumber={character.pinyinNumber}
          />
        );
      });
      return (
        <div>
          <br/>
          <c.PartTitle>New characters</c.PartTitle>
          {array}
        </div>
      );
    };
  };

  examplesDumper = examples => {
    const { number } = this.props.book;
    let count = -1;
    return options => {
      const { basic, big } = options;
      count++;
      if (count >= examples.length) {
        return <Placeholder>{`{EXAMPLE #${count + 1} PLACEHOLDER}`}</Placeholder>;
      }
      const translation = examples[count].translations[0] ?
        examples[count].translations[0].translation
        : undefined;
      const literalTranslation = examples[count].translations[0] ?
        examples[count].translations[0].literalTranslation
        : undefined;
      return (
        <c.Example
          basic={basic}
          big={big}
          code={getGrammarSentenceCode(number, count + 1)}
          chinese={insertVariables(examples[count].chinese, this.props.settings)}
          pinyin={examples[count].pinyin}
          translation={translation}
          literalTranslation={literalTranslation}
          audioUrl={examples[count].audioUrl}
        />
      );
    };
  };

  dialogsDumper = dialogs => {
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
            linkUrl={`/study/${this.props.book.id}/dialog/${dialogs[count].id}/listen`}
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

  renderDialog = (dialog, type) => {
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

  reviewDumper = () => {
    return (
      <c.PartTitle linkUrl={`/study/${this.props.book.id}/title/4`}>
        Review
      </c.PartTitle>
    );
  }

  pageNumberDumper = () => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  };

  render() {
    const { number, examples, dialogs, characters } = this.props.book;
    const Content = this.props.content;
    return (
      <Content
        lessonTitle={this.lessonTitle.bind(this)}
        number={number}
        newCharacters={this.newCharactersDumper(characters)}
        example={this.examplesDumper(examples)}
        dialog={this.dialogsDumper(dialogs)}
        review={this.reviewDumper}
        grammarTitle={this.grammarTitle()}
        pageNumber={this.pageNumberDumper()}
        character={this.character(characters)}
        characterPractice={this.characterPractice(characters)}
      />
    );
  }
}

ContentHOC.propTypes = {
  content: propTypes.func.isRequired,
  season: propTypes.instanceOf(models.Season),
  book: propTypes.instanceOf(models.Book),
  settings: propTypes.object.isRequired
};

export default ContentHOC;
