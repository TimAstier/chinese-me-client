import React, { Component } from 'react';
import * as c from '../components';
import { getGrammarLetter, getGrammarSentenceCode }
  from '../../../utils/lessonContent';

class S1E1 extends Component {

  render() {
    return (
      <div>
        <c.LessonTitle>Lesson 1: Introducing yourself</c.LessonTitle>
        <c.PartTitle>Grammar</c.PartTitle>
        <c.GrammarTitle letter={getGrammarLetter()}>
          Numbers to 99
        </c.GrammarTitle>
        <p>As we have seen in the introduction, Chinese is an isolating language. This means that Chinese words have only a single form: there are no plural forms for nouns (such as English pen and pens), no tenses of verbs (come - came), no comparatives of adjectives (good - better), and so on.</p>
        <p>我 <b>wǒ</b> <i>I, me</i></p>
        <c.Example
          code={getGrammarSentenceCode('1')}
          chinese={'我姓王。'}
          pinyin={'Wǒ xìng Wáng.'}
          translation={'My family name is Wang.'}
          literalTranslation={'(I FAMILY-NAMED WANG.)'}
        />
        <br/>
        <c.Example
          code={getGrammarSentenceCode('1')}
          chinese={'我叫玉国。'}
          pinyin={'Wǒ jiào Yùguó.'}
          translation={'My name is Yuguo.'}
          literalTranslation={'(I CALLED YUGUO.)'}
        />
        <c.GrammarTitle letter={getGrammarLetter()}>
          Sentence patterns with a few common verbs
        </c.GrammarTitle>
        <c.PartTitle>Dialog: Presenting yourself</c.PartTitle>
        <c.PartTitle>Practice: Presentation</c.PartTitle>
        <c.PartTitle>Practice: Role play</c.PartTitle>
      </div>
    );
  }
}

export default S1E1;
