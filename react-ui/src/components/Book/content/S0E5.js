import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
// import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
// import insertVariables from '../../../utils/insertVariables';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog,
      practiceIds, newWords } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle type="secondary" anchor="new-characters">New characters</c.PartTitle>
          <c.P>Here are the new characters in this lesson. Click on each character to review the stroke order, or on the brush or history icons to see calligraphy and history videos.</c.P>
          {newCharacters()}
          <c.PartTitle type="secondary">Grammar</c.PartTitle>
          <c.PartTitle type="tertiary">A. The filler adverb 很</c.PartTitle>
          <c.P>很 <b>hěn</b> literally means <i>very</i>, <i>to a high degree</i>. Because of this, some textbooks call it an “intensifier”. But in modern Chinese, 很 <b>hěn</b> is used as a sort of "filler" between a noun and an adjective, and doesn't make any real difference to the meaning:</c.P>
          {example(1, { basic: true, big: true, audio: true })}
          {example(2, { basic: true, big: true, audio: true })}
          <c.P>If you really want to express the sense of <i>very</i> or <i>extremely</i> good, you have to emphasize the pronunciation of hěn:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我很高兴！</c.Char><c.Pinyin>Wǒ hěn gāoxìng.</c.Pinyin><c.Meaning>I am really happy!</c.Meaning></Row></li>
              <li><Row><c.Char>你很好！</c.Char><c.Pinyin>Nǐ hěn hǎo!</c.Pinyin><c.Meaning>You’re great! You’re very nice!</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle type="tertiary">B. The adverb 也</c.PartTitle>
          <c.P>也 <b>yě</b> <i>also</i>, <i>too</i> can be added to any of the sentences we have learned so far.  也 <b>yě</b> is placed after the subject and before the verb of the sentence:</c.P>
          {example(3, { basic: true, big: true, audio: true })}
          <c.P>In a Topic-Comment construction, 也 <b>yě</b> comes after the Topic and before the Comment:</c.P>
          {example(4, { basic: true, big: true, audio: true })}
          {example(5, { basic: true, big: true, audio: true })}
          <c.PartTitle type="secondary">Dialog: Saying hello</c.PartTitle>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle type="secondary">Practice: Role play</c.PartTitle>
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle type="secondary">Culture and society: Polite greetings</c.PartTitle>
          <c.P>To inquire politely about somebody’s family name, you would say:</c.P>
          {example(6, { basic: true, big: true, audio: true })}
          <c.P>您 <b>nín</b> is a more formal form of 你 <b>nǐ</b> <i>you</i>. It is used when addressing someone older or in a higher social position. 贵 <b>guì</b>, means <i>precious</i> or <i>expensive</i>.</c.P>
          <c.P>When you meet somebody for the first time, it is common to say:</c.P>
          {example(7, { basic: true, big: true, audio: true })}
          <c.PartTitle type="secondary">New words</c.PartTitle>
          {newWords()}
          <c.PartTitle type="secondary" anchor="review">Exercises</c.PartTitle>
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