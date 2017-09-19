import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as c from './components';
import { getGrammarSentenceCode } from '../../utils/lessonContent';
import * as models from '../../models';
import styled from 'styled-components';

const Placeholder = styled.p`
  color: red;
`;

class ContentHOC extends Component {

  lessonTitle = () => {
    const { number, title } = this.props.lesson;
    return (
      <c.LessonTitle>{`Episode ${number}: ${title}`}</c.LessonTitle>
    );
  }

  newCharactersDumper = characters => {
    return () => {
      if (characters.length === 0) {
        // eslint-disable-next-line no-console
        console.log('Error: tried to render unexisting characters in Lesson');
        return <Placeholder>{'{NEW_CHARACTERS PLACEHOLDER}'}</Placeholder>;
      }
      const array = [];
      characters.forEach((character, i) => {
        array.push(
          <c.Character
            key={i}
            simpChar={character.simpChar}
            pinyin={character.pinyin}
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
    const { number } = this.props.lesson;
    let count = -1;
    return () => {
      count++;
      if (count >= examples.length) {
        // eslint-disable-next-line no-console
        console.log('Error: tried to render unexisting example in Lesson');
        return <Placeholder>{'{EXAMPLE PLACEHOLDER}'}</Placeholder>;
      }
      return (
        <c.Example
          code={getGrammarSentenceCode(number)}
          chinese={examples[count].chinese}
          pinyin={examples[count].pinyin}
          translation={examples[count].translations[0].translation}
          literalTranslation={examples[count].translations[0].literalTranslation}
        />
      );
    };
  };

  dialogsDumper = dialogs => {
    let count = -1;
    return () => {
      count++;
      if (count >= dialogs.length) {
        // eslint-disable-next-line no-console
        console.log('Error: tried to render unexisting dialog in Lesson');
        return <Placeholder>{'{DIALOG PLACEHOLDER}'}</Placeholder>;
      }
      return (
        <div>
          <br/>
          <c.PartTitle
            linkUrl={`/study/${this.props.lesson.id}/dialog/${dialogs[count].id}/listen`}
          >
            {`会话：${dialogs[count].chineseTitle}`}
          </c.PartTitle>
          <p>{dialogs[count].translations[0].intro}</p>
          <p>{dialogs[count].englishIntro}</p>
          {this.renderDialog(dialogs[count], 'chinese')}
          <c.PartTitle>{`Dialog：${dialogs[count].translations[0].titleTranslation}`}</c.PartTitle>
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
          text = text + ' ' + sentence.translations[0].translation;
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
      <c.PartTitle linkUrl={`/study/${this.props.lesson.id}/title/4`}>
        Review
      </c.PartTitle>
    );
  }

  render() {
    const { number, examples, dialogs, characters } = this.props.lesson;
    const Content = this.props.content;
    return (
      <Content
        lessonTitle={this.lessonTitle.bind(this)}
        number={number}
        newCharacters={this.newCharactersDumper(characters)}
        example={this.examplesDumper(examples)}
        dialog={this.dialogsDumper(dialogs)}
        review={this.reviewDumper}
      />
    );
  }
}

ContentHOC.propTypes = {
  content: propTypes.func.isRequired,
  lesson: propTypes.instanceOf(models.Lesson)
};

export default ContentHOC;
