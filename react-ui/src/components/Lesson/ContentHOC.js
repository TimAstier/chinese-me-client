import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as c from './components';
import { getGrammarSentenceCode } from '../../utils/lessonContent';
import * as models from '../../models';

class ContentHOC extends Component {

  lessonTitle = () => {
    const { number, title } = this.props.lesson;
    return (
      <c.LessonTitle>{`Episode ${number}: ${title}`}</c.LessonTitle>
    );
  }

  examplesDumper = examples => {
    const { number } = this.props.lesson;
    let count = -1;
    return () => {
      count++;
      if (count >= examples.length) {
        // eslint-disable-next-line no-console
        console.log('Error: tried to render unexisting example in Lesson');
        return null;
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
        return null;
      }
      return (
        <div>
          <c.PartTitle>{`会话：${dialogs[count].chineseTitle}`}</c.PartTitle>
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

  render() {
    const { number, examples, dialogs } = this.props.lesson;
    const Content = this.props.content;
    return (
      <Content
        lessonTitle={this.lessonTitle.bind(this)}
        number={number}
        example={this.examplesDumper(examples)}
        dialog={this.dialogsDumper(dialogs)}
      />
    );
  }
}

ContentHOC.propTypes = {
  content: propTypes.func.isRequired,
  lesson: propTypes.instanceOf(models.Lesson)
};

export default ContentHOC;
