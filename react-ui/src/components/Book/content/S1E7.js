import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S1E7 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character, grammarTitle }
      = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.Bookrow>
            <img src={'http://via.placeholder.com/350x150'} alt=""/>
          </c.Bookrow>
          <c.PartTitle>NEW CHARACTERS</c.PartTitle>
          <c.P><i>Practice the stroke order animations at ChineseMe. Some characters have material on Stories and Calligraphy.</i></c.P>
          {newCharacters()}
          <c.PartTitle>GRAMMAR</c.PartTitle>
          {grammarTitle()}
          <c.P>Chinese does not make any difference between both and all; after all, the concept is the same. Pay attention to the sentence intonation in this pattern; the stress is on 都 dōu, so Tone 1 has a higher pitch on都dōu than on 他tā:</c.P>
          {example(1, { audio: true })}
          <c.P>If you want to clarify, you can add the exact number, together with the appropriate measure word, before 都 dōu:</c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          // Practice
          <c.P>In order to say both... and, the speaker will list two things followed by 都 dōu.</c.P>
          {example(4, { audio: true })}
          <c.P>In the pattern above, you may have noticed that Chinese uses a special comma as a break between items in a list which is different from the comma used to create a pause in sentences. Here is a sentence using both kinds of commas:</c.P>
          {example(5, { audio: true })}
          <c.P>Often, 都 dōu is used together with another word meaning all, for example 所有 suǒyǒu.</c.P>
          {example(6, { audio: true })}
          <c.P>This looks odd - we have two all in this sentence! So what is the difference between 都 dōu and 所有 suǒyǒu? The answer is that 都 dōu is part of a fixed pattern where it refers to the noun that comes before it, and it can only be used in this pattern to mean all. 所有 suǒyǒu literally means ALL THAT THERE IS or ALL THAT THERE ARE, and is always followed by a noun (or an implicit noun):</c.P>
          {example(7, { audio: true })}
          // Review
          {grammarTitle()}
          <c.P>Placed after a noun or pronoun, 都 dōu can mean even. In this pattern, the stress is on the Topic or Subject, rather than on 都 dōu:</c.P>
          {example(8, { audio: true })}
          {example(9, { audio: true })}
          // Review
          {grammarTitle()}
          <c.P>都 dōu can also be combined with many question words to form a pattern meaning any, anyone, anything, anyhow. The stress is on the question word:</c.P>
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          <c.P>If these patterns are negated, we get none, no-one, not anyone, nothing, not anything:</c.P>
          {example(14, { audio: true })}
          {example(15, { audio: true })}
          // Review
          <c.P>A similar negated pattern is 一点都 yìdiǎn dōu meaning not at all, not in the least:</c.P>
          {example(16, { audio: true })}
          // Review
          {grammarTitle()}
          <c.P>The verb 会 huì can be used to indicate that the speaker believes something will happen in the future. In this sense, 会 huì is often a bit more stressed than usual:</c.P>
          {example(17, { audio: true })}
          {example(18, { audio: true })}
          // Review
          {grammarTitle()}
          <c.P>的 de̊ .1 can be used as a sentence-final particle - a mood word - that reinforces the speaker's subjective opinion. Its function is the opposite of the “softening" function of啊å.</c.P>
          <c.P>Since 会 huì will in my opinion happen has a similar function, it often appears together with sentence-final 的:</c.P>
          {example(19, { audio: true })}
          {example(20, { audio: true })}
          <c.P>This sentence-final 的 de̊ .1 also appears in short phrases that have the character of fixed expressions:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>是的! shìde̊ .1 yes!, sure!, exactly!</li>
              <li>有的! yǒude̊ .1 sure there is!, (of course) we have that!</li>
            </c.Ul>
          </c.Bookrow>
          // Review
          {grammarTitle()}
          <c.P>The most common way of formulating a yes/no-question in both English and Chinese is in the affirmative: Do you know how to speak French? But in both languages, such questions can also be expressed in the negative: Don't you know how to speak French?</c.P>
          <c.P>In English, we would answer both the affirmative and the negative question in the same way: No, I don't. But Chinese applies mathematical logic to the answer; if you reply to the negative question using the Chinese equivalent of no, you would be contradicting the negative itself, meaning that you do speak French. If you want to say you don't speak French, you need to answer with the Chinese equivalent of yes:</c.P>
          {example(21, { audio: true })}
          <c.P>Chinese speakers often make the opposite mistake in English: Don't you want to have dinner with us? Yes, I need to go now. To avoid confusion, stick to positively formulated questions!</c.P>
          // Dialog title
          <c.PartTitle>会话:你家人都在中国吗?</c.PartTitle>
          // Dialog intro
          // NEED to display sentences together.
          // New version of the dialog
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          <c.PartTitle>CULTURE AND SOCIETY</c.PartTitle>
          // Culture box
          <c.PartTitle>NEW VOCABULARY</c.PartTitle>
          // Words
          <c.PartTitle>REVIEW</c.PartTitle>
          // Review icon
          <c.P><i>On the ChineseMe website, you will find review exercises to practice pronunciation, grammar and character writing. Download the flashcard decks to review character stroke orders and vocabulary. Then do the Final Exam to progress to the next Lesson.</i></c.P>

        </c.Page>
      </div>
    );
  }
}
