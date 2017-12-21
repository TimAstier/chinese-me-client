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
          <c.P>Up to now, we have formulated yes/no-questions using the question particle <b>må</b>. Another common way of asking this type of question is by listing both the alternative answers one after another.</c.P>
          {example(1, { audio: true })}
          <c.P>This means the same thing as using the question particle to say 我美吗？<b>Wǒ měi må?</b></c.P>
          <c.P>At natural speed, the second part often loses its tone: <b>Wǒ měi bů měi?</b> or <b>Wǒ měi bů me̊i?</b> This is always the case in questions with 是不是, which is pronounced <b>shìbůshi̊</b>:</c.P>
          {example(2, { audio: true })}
          <c.P>Just as when we use <b>må</b>, this is a perfectly neutral question: the speaker is simply asking whether or not you are Chinese. You sometimes see a variant of this pattern where the two characters 不是 <b>bů shi̊</b> appear at the end:</c.P>
          {example(3, { audio: true })}
          <c.P>This tends to give the question a more subjective and demanding nuance, as when you add <i>or not</i> to a question in English: the literal translation should make this clear.</c.P>
          <c.P>Of course, if the statement is already negated, you cannot use the <i>A NOT A</i> pattern – the only possibility is to use <b>må</b>:</c.P>
          {example(4, { audio: true })}
          <c.P>是不是 <b>shìbůshi̊</b> is actually possible to use as a general alternative to the question particle 吗. When it is used like this, 是不是 loses its literal meaning BE NOT BE and is simply a way of posing a yes-no question, so we can gloss it the same way as the question particle:</c.P>
          {example(5, { audio: true })}
          <c.P>If the original sentence contains a 是 <b>shì</b>, you then have to repeat it:</c.P>
          {example(6, { audio: true })}
          <c.P>If this seems strange at first, it should become clearer if you remove 是不是 <b>shìbůshi̊</b> and add the question particle 吗 <b>må</b> instead.</c.P>
          <c.P>ith two-character words, it is not necessary to repeat the whole word; usually, only the first character is repeated:</c.P>
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          <c.P>Note the neutral tone on 不 <b>bů</b> above.</c.P>
          <c.P>The potential forms of resultative verbs work the same way:</c.P>
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          {grammarTitle()}
          <c.P>These words are often translated as <i>can</i> in English. But they have  different meanings. 会 <b>huì</b> means <i>can</i> in the sense of <i>know how to</i>:</c.P>
          {example(11, { audio: true })}
          <c.P>可以 <b>kěyǐ</b> means <i>be able to</i> as in <i>have the time to</i>, <i>be willing to</i> or <i>be allowed to</i>:</c.P>
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          <c.P>能 <b>néng</b> means <i>to be capable of</i>, <i>have the possibility to</i>, <i>be available to</i>:</c.P>
          {example(14, { audio: true })}
          {grammarTitle()}
          <c.P>Chinese grammars often call sentence-final particles "mood words". This is because they provide subtle nuances that change how you should perceive a statement. 啊 <b>å</b> is a good example: it is used to soften or reduce the forcefulness of a statement. For example, if you ask somebody to tell you something, just saying 你说 <b>nǐ shuō</b> sounds like a harsh command. But if you add 啊 <b>å</b>, it instead becomes a polite request or encouragement to talk, a bit like adding English <i>please</i> or <i>come on</i>:</c.P>
          {example(15, { audio: true })}
          <c.P>Similarly, just saying <i>I don't understand</i> when someone says something unintelligible sounds agressive in both English in Chinese. In English, we would say something like <i>sorry, but...</i> to soften this statement; in Chinese we can use 啊 <b>å</b>: </c.P>
          {example(16, { audio: true })}
          <c.P>If someone asks you if you can speak Chinese, just replying 会 <b>huì</b> feels a bit cold and impolite, as if you would just answer a short <i>yes</i> in English; the listener might interpret it as <i>yes, why are you asking such a question?</i> or even <i>yes, but I don't want to</i>. With 啊 <b>å</b>, the response becomes more like English <i>sure I can</i>:</c.P>
          {example(17, { audio: true })}
          <c.P>If someone suggests something, simply replying 好 <b>hǎo</b> makes the listener unsure about how enthusiastic your agreement really is. 啊 <b>å</b> softens the response, implying that this is a <i>great</i> idea: </c.P>
          {example(18, { audio: true })}
          <c.P>As the name implies, Chinese mood words tell a listener in what spirit to understand what the speaker says. Using them correctly is therefore often a matter of "feeling" rather than "right and wrong".</c.P>
          {grammarTitle()}
          <c.P>As we have seen, Chinese usually does not differentiate between plural and singular forms: 语言 <b>yǔyán</b> can mean either <i>language</i> or <i>languages</i>, depending on context. But there is a special case: for people, we can use the particle 们 <b>-me̊n</b>, to form plurals. It is most commonly used with the personal pronouns 你, 我, 他, 她:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我</c.Char>  <c.Pinyin><b>wǒ</b></c.Pinyin>  <c.Meaning><i>I, me</i></c.Meaning></Row></li>
              <li><Row><c.Char>我们</c.Char>  <c.Pinyin><b>wǒme̊n</b></c.Pinyin>  <c.Meaning><i>we</i></c.Meaning></Row></li>
              <li><Row><c.Char>你</c.Char>  <c.Pinyin><b>nǐ</b></c.Pinyin>  <c.Meaning><i>you</i></c.Meaning></Row></li>
              <li><Row><c.Char>你们</c.Char>  <c.Pinyin><b>nǐme̊n</b></c.Pinyin>  <c.Meaning><i>you (plural)</i></c.Meaning></Row></li>
              <li><Row><c.Char>他</c.Char>  <c.Pinyin><b>tā</b></c.Pinyin>  <c.Meaning><i>he, him</i></c.Meaning></Row></li>
              <li><Row><c.Char>他们</c.Char>  <c.Pinyin><b>tāme̊n</b></c.Pinyin>  <c.Meaning><i>they, them (male or mixed)</i></c.Meaning></Row></li>
              <li><Row><c.Char>她</c.Char>  <c.Pinyin><b>tā</b></c.Pinyin>  <c.Meaning><i>she, her</i></c.Meaning></Row></li>
              <li><Row><c.Char>她们</c.Char>  <c.Pinyin><b>tāme̊n</b></c.Pinyin>  <c.Meaning><i>they, them (female)</i></c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle>会话：你可以帮我学中文吗？</c.PartTitle>
          <c.P color={'#C0504D'}><i>Colleen suggests that Marvin and Wang Yuguo could do a language exchange. Marvin comes up with an English name for Yuguo.</i></c.P>
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
