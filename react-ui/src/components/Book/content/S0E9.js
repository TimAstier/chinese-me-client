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
          <c.P>不 <b>bù</b> can be used independently to answer a question, just like English <i>no</i>. It can also be used like English <i>not</i> to negate any of the sentences we have learned so far. 不 <b>bù</b> is always placed in front of the word or phrase it should negate. Let’s start by negating simple Topic-Comment sentences:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>The filler word 很 <b>hěn</b> comes before the negation:</c.P>
          {example(3, { audio: true })}
          <c.P>In the same way, 不 can be placed before verbs:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>Note the pronunciation in the patterns above: 不 is pronounced in two different ways, depending on the tone that comes after. If the following tone is 1, 2, or 3, 不 is pronounced <b>bù</b>, with tone 4:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Pinyin>bù hǎo</c.Pinyin><c.Meaning>not good</c.Meaning></Row></li>
              <li><Row><c.Pinyin>bù měi</c.Pinyin><c.Meaning>not beautiful</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>But if the following tone is tone 4, 不 changes to tone 2, <b>bú</b>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Pinyin>bú huì</c.Pinyin><c.Meaning>cannot</c.Meaning></Row></li>
              <li><Row><c.Pinyin>bú shì</c.Pinyin><c.Meaning>is not</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>This is another example of <i>tone sandhi</i>, where the tone on a character changes depending on what comes after it - we have seen other examples of this, for example when a tone three comes before another tone three. Tone sandhi is usually not marked in dictionaries and textbooks: 不 is written <b>bù</b>, with tone 4, regardless of what comes after. You will just have to remember that the actual pronunciation is different than what the dictionary indicates.</c.P>
          <c.P>Remember that 不 <b>bù</b> negates whatever comes immediately after it. When we negate a statement with 也 <b>yě</b> <i>also</i> the resulting phrase can be translated using <i>not… either</i> in English:</c.P>
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>But in questions with 也 <b>yě</b> <i>also</i> we actually have two possibilities. We can negate the meaning of the phrase following 也:</c.P>
          {example(8, { audio: true })}
          <c.P>The other possibility is to use 不 <b>bù</b> to negate 也 :</c.P>
          {example(9, { audio: true })}
          <c.P>Pattern 6:9 expresses surprise; it can be translated as a rhetorical question: <i>(but) isn’t it the case that you are also American?</i> Again, the literal translation should make the difference clear.</c.P>
          {grammarTitle()}
          <c.P>In Lesson 4, we learned how to use the question particle 吗 <b>må</b> to formulate questions that can be answered <i>yes</i> or <i>no</i>, such as <i>can you write Chinese characters?</i> The most common way of answering <i>yes</i> is by repeating only the thing being asked about:</c.P>
          {example(10, { audio: true })}
          <c.P>The answer is "KNOW-HOW-TO", because that is what the question is asking about. You normally can't just say 是 <b>shì</b> or  不 <b>bù</b> as we say <i>yes</i> or <i>no</i> in English - in Chinese it would sound harsh, like a military order. But just like in English, you can answer with a shorter or longer phrase (<i>yes</i>; <i>yes I can</i>; or <i>yes I can speak Chinese</i>) depending on how clear you want to be:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>你会说中国话吗？</c.Char></Row></li>
              <li><Row><c.Char>- 会。</c.Char></Row></li>
              <li><Row><c.Char>- 会说。</c.Char></Row></li>
              <li><Row><c.Char>- 我会说。</c.Char></Row></li>
              <li><Row><c.Char>- 我会说中国话。</c.Char></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>If you want to answer <i>no</i>, you use 不 <b>bù</b> <i>not</i> to negate your response:</c.P>
          {example(11, { audio: true })}
          <c.P>Again, you can choose a more complete answer as appropriate:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>你会说中国话吗？</c.Char></Row></li>
              <li><Row><c.Char>- 不会。</c.Char></Row></li>
              <li><Row><c.Char>- 不会说。</c.Char></Row></li>
              <li><Row><c.Char>- 我不会说。</c.Char></Row></li>
              <li><Row><c.Char>- 我不会说中国话。</c.Char></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>In some contexts, it is also possible to use 不 <b>bù</b> directly like English <i>no</i> to answer a question or contradict a statement:</c.P>
          {example(12, { audio: true })}
          <c.P>Using 不 <b>bù</b> as an answer is very forceful: <i>no!</i> Usually this would sound brusque and impolite, but when you are being humble, this forcefulness actually makes the statement even more polite.</c.P>
          {grammarTitle()}
          <c.P>The word 对 <b>duì</b>, which literally means <i>correct</i>, is used to agree with something someone has just said:</c.P>
          {example(13, { audio: true })}
          <c.P>So 对 <b>duì</b> <i>correct</i> can be used to answer a yes/no question more or less like <i>yes</i> in English:</c.P>
          {example(14, { audio: true })}
          <c.P>In the same way, 不对 <b>bú duì</b> <i>not correct</i> can be used like English <i>no</i>:</c.P>
          {example(15, { audio: true })}
          <c.P>But as we saw above, a more common way of answering this kind of question is by repeating or negating the thing that is being asked about.</c.P>
          {grammarTitle()}
          <c.P>A few characters can be pronounced in more than one way. For example, we have learned that 好 is pronounced <b>hǎo</b> and means <i>good</i>. But 好 can also be a verb meaning <i>to like</i>; in this case it has tone four: <b>hào</b>. This meaning - and pronunciation - of 好 only appears as part of words, such as 好客 <b>hàokè</b> <i>hospitable</i> which literally means <i>to like guests</i>.</c.P>
          {grammarTitle()}
          <c.P>
            There are several different Chinese terms for the Chinese language.
            In everyday conversation, it is called 汉语 <b>hànyǔ</b> or 中文 <b>zhōngwén</b>. They are synonyms, with 汉语 being slightly more formal. Strictly speaking, however, both of them mean “Chinese” in the sense of all Chinese dialects, not just Mandarin. Somewhat less common, and least formal, is 中国话 <b>zhōngguóhuà</b>, which literally means <i>China speech</i>.
          </c.P>
          <c.P><b>Pǔtōnghuà</b>, <i>common speech</i>, is the official PRC name for Mandarin Chinese. It has a slightly political overtone and is not used in normal conversation unless you really want to emphasize that you are talking about Mandarin as opposed to local dialects. In Táiwān, the corresponding terms are 国语 <b>guóyǔ</b> or 国文 <b>guówén</b>.</c.P>
          <c.PartTitle>会话：你中文很好！</c.PartTitle>
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {/* {dialog(1, { sentenceType: 'pinyin', displayNames: true })} */}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          <c.PartTitle>Practice: Role play</c.PartTitle>
          {dialog(2, { sentenceType: 'chinese', displayNames: true })}
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
