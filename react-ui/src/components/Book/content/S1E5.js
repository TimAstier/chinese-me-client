import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import { Row } from '../../Shared';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle anchor="new-characters">NEW CHARACTERS</c.PartTitle>
          <c.P><i>Practice the stroke order animations. Some characters have material on Stories and Calligraphy.</i></c.P>
          {newCharacters()}
          <c.PartTitle>PATTERNS</c.PartTitle>
          {grammarTitle()}
          <c.P>谁 <b>shéi</b>, means <i>who</i>. (Some dictionaries transcribe 谁 as <b>shuí</b> in pīnyīn, but <b>shéi</b> is the actual pronunciation.) As usual, the word order is the same in a question as in a statement:</c.P>
          {example(1, { audio: true })}
          <c.P>怎么 <b>zěmme̊</b> (transcribed <b>zěnme̊</b> in dictionaries, since 怎 is pronounced <b>zěn</b>) can mean <i>how</i> or <i>why</i>, depending on context:</c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          {grammarTitle()}
          <c.P>In informal oral speech, 好 <b>hǎo</b>, often replaces 很 <b>hěn</b>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>好美 = 很美</c.Char></Row></li>
              <li><Row><c.Char>好难 = 很难</c.Char></Row></li>
              <li><Row><c.Char>好好 = 很好</c.Char></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Using 好 <b>hǎo</b>, is a bit more emphatic than 很 <b>hěn</b>, so we should usually translate it with <i>really</i> or <i>very</i>.</c.P>
          {example(4, { audio: true })}
          {grammarTitle()}
          <c.P>In the introductory Lesson 5, we learned one way of asking someone for agreement using 好吗 <i>hǎo må</i>:</c.P>
          {example(5, { audio: true })}
          <c.P>This question is translated with the English <i>ok?</i> since it explicitly asks the listener to agree to do something.</c.P>
          <c.P>A more common and neutral tool for asking someone for agreement is the particle 吧 <b>bå</b>. This particle can be used in two ways. First, as an imperative, meaning a <i>suggestion</i> to do something:</c.P>
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>When the speaker states a subjective fact and adds 吧 <b>bå</b>, the result becomes a rhetorical question where the speaker supposes that something is the case: <i>isn’t it true that…?</i> or <i>…, right?</i></c.P>
          {example(8, { audio: true })}
          <c.P>In other cases, the question becomes more like a statement <i>don’t you think…?</i></c.P>
          {example(9, { audio: true })}
          <c.P>The most natural interpretation of this sentence is a statement: the speaker thinks Chinese characters are beautiful and asks you to agree. This is why we have used an exclamation mark rather than a question mark here.</c.P>
          <c.P>Finally, the agreement function of 吧 <b>bå</b> can be used to say <i>yes</i> to a suggestion:</c.P>
          {example(10, { audio: true })}
          {grammarTitle()}
          <c.P>对 <b>duì</b> can be used as a preposition meaning <i>to</i>, <i>towards</i>, <i>against</i>. Prepositions are usually placed between the subject and the verb in Chinese. This is different from English, as the literal translation makes clear:</c.P>
          {example(11, { audio: true })}
          {grammarTitle()}
          <c.P>We have previously encountered 呢 <b>ne̊</b> as a question particle for follow-on questions - 你呢？ <b>nǐ ne̊?</b> <i>what about you?</i> This sense of "follow-on" can also be extended to <i>in that case</i> or <i>so then</i>:</c.P>
          {example(12, { audio: true })}
          <c.P>This use of 呢 <b>ne̊</b> is limited to conversation, since the function is to bring a listener’s attention to the special importance of what is being said. 呢 <b>ne̊</b> often has a sense of <i>mild surprise</i>, indicating that what is being said is especially relevant because it is contrary to expectation:</c.P>
          {example(13, { audio: true })}
          <c.P>In the dialog in this episode, it "softens" a question which might otherwise sound a bit like an order: <i>Say something!</i></c.P>
          {grammarTitle()}
          <c.P>跟 <b>gēn</b> can mean <i>and</i>, <i>with</i>; in this case it is synonymous with 和 <b>hé</b>:</c.P>
          {example(14, { audio: true })}
          <c.P>Sometimes, we can translate 跟 <b>gēn</b> as <i>for</i>:</c.P>
          {example(15, { audio: true })}
          <c.P>It can also mean <i>to</i>; in this case it is synonymous with 对 <b>duì</b>:</c.P>
          {example(16, { audio: true })}
          <c.PartTitle>会话：他是谁？</c.PartTitle>
          <c.P color={'#C0504D'}><i>Li Yu's friend Wang Meixin is interested in getting to know Marvin - "just to learn English". Li Yu is unimpressed.</i></c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          <c.PartTitle>NEW VOCABULARY</c.PartTitle>
          {newWords()}
          <c.PartTitle anchor="review">Exercises</c.PartTitle>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Now, go through the review exercises to practice pronunciation, grammar and character writing. Then do the Exam to progress to the next Lesson.</i>
          </c.P>
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
