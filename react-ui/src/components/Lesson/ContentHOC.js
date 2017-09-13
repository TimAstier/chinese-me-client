import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as models from '../../models';
import * as c from './components';
import { getGrammarSentenceCode } from '../../utils/lessonContent';

class ContentHOC extends Component {
  examplesDumper = examples => {
    let count = -1;
    return () => {
      count++;
      if (count >= examples.length) {
        console.log('Error: tried to render unexisting example in Lesson');
        return null;
      }
      return (
        <c.Example
          code={getGrammarSentenceCode('3')}
          chinese={examples[count].get('chinese')}
          pinyin={examples[count].get('pinyin')}
          translation={examples[count].get('english')}
          literalTranslation={examples[count].get('literalEnglish')}
        />
      );
    };
  };

  render() {
    const Content = this.props.content;
    return (
      <Content
        number={this.props.number}
        example={this.examplesDumper(this.props.examples)}
      />
    );
  }
}

ContentHOC.propTypes = {
  examples: propTypes.arrayOf(propTypes.instanceOf(models.Example)).isRequired,
  content: propTypes.func.isRequired,
  number: propTypes.number.isRequired
};

export default ContentHOC;
