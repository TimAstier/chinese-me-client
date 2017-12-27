import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
// import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
// import insertVariables from '../../../utils/insertVariables';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle>NEW CHARACTERS</c.PartTitle>
          <c.P>Here are the new characters in this lesson. Click on each character to review the stroke order, or on the brush or history icons to see calligraphy and history videos.</c.P>
          {newCharacters()}
          <c.PartTitle>PATTERNS</c.PartTitle>
          {grammarTitle()}
          <c.P>会 <b>huì</b> means <i>know</i> in the sense of <i>know how to</i>. It can be used as a verb:</c.P>
          {example(1, { audio: true })}
          <c.P>It can also be used as an auxiliary verb, that is, in combination with another verb, meaning <i>know how to do something</i>:</c.P>
          {example(2, { audio: true })}
          {grammarTitle()}
          <c.P>Function words, also called "particles", are an important feature of Chinese. One of the most common examples is the question particle 吗 <b>må</b> which transforms statements to <i>"yes/no"</i> questions, questions that can be answered with a <i>yes</i> or a <i>no</i>:</c.P>
          {example(3, { audio: true })}
          <c.P>In English, we usually change the word order to formulate a question:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row>He is busy. => Is he busy?</Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>But as you can see in pattern 5:3, the word order in Chinese doesn't change; you just add the question particle 吗 <b>må</b> to the end of the sentence. Some more examples:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          <c.P>好吗 <b>hǎo må</b> can also be used to ask for agreement with something you have just said:</c.P>
          {example(7, { audio: true })}
          {grammarTitle()}
          <c.P>Just like in English, you have to raise your tone at the end of a sentence when you ask a question:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>她很好。 => 她很好吗? ↗</c.Char></Row></li>
              <li><Row><c.Pinyin>Tā hěn hǎo. => Tā hěn hǎo må?↗</c.Pinyin></Row></li>
              <li><Row><c.Meaning>She is nice. => Is she nice? ↗</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我是中国人。你也是中国人吗？ ↗</c.Char></Row></li>
              <li><Row><c.Pinyin>Wǒ shì zhōngguó rén. Nǐ yě shì zhōngguó rén ma??↗</c.Pinyin></Row></li>
              <li><Row><c.Meaning>I am Chinese. Are you Chinese, too? ↗</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          {grammarTitle()}
          <c.P>Spoken Chinese uses a single word, <b>tā</b>, for both <i>he</i> and <i>she</i>: there is no difference between gender in the third person. This is why Chinese people sometimes confuse these pronouns in English: <i>Where is Mary? He is not here.</i> But the modern written language uses different characters for <i>he</i> and <i>she</i>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>他</c.Char><c.Pinyin>tā</c.Pinyin><c.Meaning>he, him</c.Meaning></Row></li>
              <li><Row><c.Char>她</c.Char><c.Pinyin>tā</c.Pinyin><c.Meaning>she, her</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>As usual, words do not change form so there is no difference between <i>he</i> and <i>him</i>, <i>she</i> and <i>her</i>.</c.P>
          <c.PartTitle>Dialog: 你会说中文吗？</c.PartTitle>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          {dialog(1, { sentenceType: 'pinyin', displayNames: false })}
          {dialog(1, { sentenceType: 'translation', displayNames: false })}
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          {dialog(2, { sentenceType: 'pinyin', displayNames: false })}
          {dialog(2, { sentenceType: 'translation', displayNames: false })}
          {dialog(3, { sentenceType: 'chinese', displayNames: false })}
          {dialog(3, { sentenceType: 'pinyin', displayNames: false })}
          {dialog(3, { sentenceType: 'translation', displayNames: false })}
          <c.P
            buttonOptions={{
              type: 'askUserSettings'
            }}
          >Now, go to the web and input the languages you speak, to continue practicing how to present yourself.
          </c.P>
          <c.PartTitle>Practice: Presentation</c.PartTitle>
          {dialog(4, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle>Practice: Role play</c.PartTitle>
          {dialog(5, { sentenceType: 'chinese', displayNames: false })}
          {dialog(6, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle>Culture and society: Greetings using 老 and 小</c.PartTitle>
          <c.P>A polite way to 叫 <b>jiào</b> <i>call</i> someone is to use their family name preceded by the terms 老 <b>lǎo</b> <i>old</i> or 小 <b>xiǎo</b> <i>little</i>. Age is important in China, so a younger person addresses someone older with 老 <b>lǎo</b> <i>old</i> as a term of respect, while an older person  uses 小 <b>xiǎo</b> <i>little</i> as a term of endearment:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>老王！</c.Char><c.Pinyin>Lǎo Wáng!</c.Pinyin><c.Meaning>Old Wang!</c.Meaning></Row></li>
              <li><Row><c.Char>小马，你好！</c.Char><c.Pinyin>Xiǎo Mǎ, nǐ hǎo!</c.Pinyin><c.Meaning>Hi Little Ma!</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>
            This way of <i>calling</i> is common both in private and official or business life; it is polite, but less formal than using titles like 先生 <b>xiānshe̊ng</b> <i>mister</i> and 女士 <b>nǚshì</b> <i>madam</i>.
          </c.P>
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
