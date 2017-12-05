import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S1E7 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.Bookrow center>{image()}</c.Bookrow>
          <c.PartTitle anchor="new-characters">NEW CHARACTERS</c.PartTitle>
          <c.P><i>Practice the stroke order animations. Some characters have material on Stories and Calligraphy.</i></c.P>
          {newCharacters()}
          <c.PartTitle>PATTERNS</c.PartTitle>
          {grammarTitle()}
          <c.P>Chinese does not make any difference between <i>both</i> and <i>all</i>; after all, the concept is the same. Pay attention to the sentence intonation in this pattern; the stress is on 都 <b>dōu</b>, so Tone 1 has a higher pitch on 都 <b>dōu</b> than on 他 <b>tā</b>:</c.P>
          {example(1, { audio: true })}
          <c.P>If you want to clarify, you can add the exact number, together with the appropriate measure word, before 都 <b>dōu</b>:</c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            PRACTICE
          </c.P>
          <c.P>In order to say <i>both... and</i>, the speaker will list two things followed by 都 <b>dōu</b>.</c.P>
          {example(4, { audio: true })}
          <c.P>In the pattern above, you may have noticed that Chinese uses a special comma as a break between items in a list which is different from the comma used to create a pause in sentences. Here is a sentence using both kinds of commas:</c.P>
          {example(5, { audio: true })}
          <c.P>Often, 都 <b>dōu</b> is used together with another word meaning <i>all</i>, for example 所有 <b>suǒyǒu</b>.</c.P>
          {example(6, { audio: true })}
          <c.P>This looks odd - we have two <i>all</i> in this sentence! So what is the difference between 都 <b>dōu</b> and 所有 <b>suǒyǒu</b>? The answer is that 都 <b>dōu</b> is part of a fixed pattern where it refers to the noun that comes before it, and it can <i>only</i> be used in this pattern to mean <i>all</i>. 所有 <b>suǒyǒu</b> literally means ALL THAT THERE IS or ALL THAT THERE ARE, and is always <i>followed</i> by a noun (or an implicit noun):</c.P>
          {example(7, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            PRACTICE
          </c.P>
          {grammarTitle()}
          <c.P>Placed after a noun or pronoun, 都 <b>dōu</b> can mean <i>even</i>. In this pattern, the stress is on the Topic or Subject, rather than on 都 <b>dōu</b>:</c.P>
          {example(8, { audio: true })}
          {example(9, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            PRACTICE
          </c.P>
          {grammarTitle()}
          <c.P>都 <b>dōu</b> can also be combined with many question words to form a pattern meaning <i>any</i>, <i>anyone</i>, <i>anything</i>, <i>anyhow</i>. The stress is on the question word:</c.P>
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          <c.P>If these patterns are negated, we get <i>none</i>, <i>no-one</i>, <i>not anyone</i>, <i>nothing</i>, <i>not anything</i>:</c.P>
          {example(14, { audio: true })}
          {example(15, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            PRACTICE
          </c.P>
          <c.P>A similar negated pattern is 一点都 <b>yìdiǎn dōu</b> meaning <i>not at all</i>, <i>not in the least</i>:</c.P>
          {example(16, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
          >
            PRACTICE
          </c.P>
          {grammarTitle()}
          <c.P>The verb 会 <b>huì</b> can be used to indicate that the speaker believes something will happen in the future. In this sense, 会 <b>huì</b> is often a bit more stressed than usual:</c.P>
          {example(17, { audio: true })}
          {example(18, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[6]
              }
            }}
          >
            PRACTICE
          </c.P>
          {grammarTitle()}
          <c.P>的 <b>de̊ .1</b> can be used as a sentence-final particle - a mood word - that reinforces the speaker's subjective opinion. Its function is the opposite of the “softening" function of 啊 <b>å</b>.</c.P>
          <c.P>Since 会 <b>huì</b> <i>will in my opinion happen</i> has a similar function, it often appears together with sentence-final 的:</c.P>
          {example(19, { audio: true })}
          {example(20, { audio: true })}
          <c.P>This sentence-final 的 <b>de̊ .1</b> also appears in short phrases that have the character of fixed expressions:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>是的! shìde̊ .1 yes!, sure!, exactly!</li>
              <li>有的! yǒude̊ .1 sure there is!, (of course) we have that!</li>
            </c.Ul>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[7]
              }
            }}
          >
            PRACTICE
          </c.P>
          {grammarTitle()}
          <c.P>The most common way of formulating a yes/no-question in both English and Chinese is in the affirmative: <i>Do you know how to speak French?</i> But in both languages, such questions can also be expressed in the negative: <i>Don't you know how to speak French?</i></c.P>
          <c.P>In English, we would answer both the affirmative and the negative question in the same way: <i>No, I don't</i>. But Chinese applies mathematical logic to the answer; if you reply to the negative question using the Chinese equivalent of <i>no</i>, you would be contradicting the negative itself, meaning that you <i>do</i> speak French. If you want to say you <i>don't</i> speak French, you need to answer with the Chinese equivalent of <i>yes</i>:</c.P>
          {example(21, { audio: true })}
          <c.P>Chinese speakers often make the opposite mistake in English: <i>Don't you want to have dinner with us? Yes, I need to go now.</i> To avoid confusion, stick to positively formulated questions!</c.P>
          <c.PartTitle>会话:你家人都在中国吗?</c.PartTitle>
          <c.P color={'#C0504D'}><i>The acquaintances learn a bit about each other's families and Marvin picks up a few new words as well as misunderstanding a common grammar pattern.</i></c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          <c.PartTitle>CULTURE AND SOCIETY</c.PartTitle>
          <c.Bookrow center>{image()}</c.Bookrow>
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
