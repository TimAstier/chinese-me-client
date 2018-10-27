import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, pronunciationTitle, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <Objective
            text="Talking about language studies."
          />
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            These words are often translated as <i>can</i> in English. But they have different meanings. <c.Chinese>会</c.Chinese> <b>huì</b> means <i>can</i> in the sense of <i>know how to</i>:
          </c.P>
          {example(1, { audio: true })}
          <c.P>
            <c.Chinese>可以</c.Chinese> <b>kěyǐ</b> means <i>be able to</i> as in <i>have the time to</i>, <i>be willing to</i> or <i>be allowed to</i>:
          </c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>
            <c.Chinese>能</c.Chinese> <b>néng</b> means <i>to be capable of</i>, <i>have the possibility to</i>, <i>be available to</i>:
          </c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>
            Both <c.Chinese>可以</c.Chinese> <b>kěyǐ</b> and <c.Chinese>能</c.Chinese> <b>néng</b> can also mean <b>be possible</b>:
          </c.P>
          {example(6, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Translate to Chinese</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            When you formulate a yes/no question by giving two alternatives, it is not necessary to repeat both syllables of a two-syllable word; usually, only the first syllable is repeated:
          </c.P>
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          <c.P>
            Note the neutralized tones on <c.Chinese>不</c.Chinese> <b>bů</b> as well as the repeated syllables.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Translate to Chinese using A-not-A pattern.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            We have learned two different ways of posing yes/no-questions: either we can use the question particle <c.Chinese>吗</c.Chinese> <b>må</b>, or we can provide both alternatives.
          </c.P>
          <c.P>
            A third alternative is to use <c.Chinese>是不是</c.Chinese> <b>shìbůshi̊</b> to replace the question particle <c.Chinese>吗</c.Chinese> <b>må</b>. Used like this, <c.Chinese>是不是</c.Chinese> <b>shìbůshi̊</b> loses its literal meaning BE NOT BE. But whereas <c.Chinese>吗</c.Chinese> <b>må</b> always comes at the end of the sentence, <c.Chinese>是不是</c.Chinese> <b>shìbůshi̊</b> can come either at the end or immediately after the Subject or Topic:
          </c.P>
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          <c.P>
            This pattern can be used even if the original statement already contains a <c.Chinese>是</c.Chinese> <b>shì</b>:
          </c.P>
          {example(11, { audio: true })}
          {example(12, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Change the question pattern.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            Chinese grammars often call sentence-final particles "mood words". This is because they provide subtle nuances that change how you should perceive a statement. <c.Chinese>啊</c.Chinese> <b>å</b> is a good example: it is used to soften or reduce the forcefulness of an utterance. For example, if you ask somebody to tell you something, just saying <c.Chinese>你说</c.Chinese> <b>nǐ shuō</b> sounds like a harsh command. But if you add <c.Chinese>啊</c.Chinese> <b>å</b> , it instead becomes a polite request or encouragement to talk, a bit like adding English please or come on:
          </c.P>
          {example(13, { audio: true })}
          <c.P>
            Similarly, just saying <i>I don't understand</i> when someone says something unintelligible sounds aggressive in both English and Chinese. In English, we would soften this statement by saying something like <i>sorry, but...</i> In Chinese we can achieve the same nuance by using <c.Chinese>啊</c.Chinese> <b>å</b>:
          </c.P>
          {example(14, { audio: true })}
          <c.P>
            If someone asks you if you can speak Chinese, just replying <c.Chinese>会</c.Chinese> <b>huì</b> can feel a bit cold and impolite, as if you would just answer a short <i>yes</i> in English; the listener might interpret it as <i>yes, why are you asking such a question?</i> or even <i>yes, but I don't want to</i>. With <c.Chinese>啊</c.Chinese> <b>å</b>, the response becomes more like English <i>sure I can</i>:
          </c.P>
          {example(15, { audio: true })}
          <c.P>
            If someone suggests something, simply replying <c.Chinese>好</c.Chinese> <b>hǎo</b> makes the listener unsure about how enthusiastic your agreement really is. <c.Chinese>啊</c.Chinese> <b>å</b> makes the response more positive, implying that this is a <i>great</i> idea:
          </c.P>
          {example(16, { audio: true })}
          <c.P>
            As the name implies, mood words signal the "mood" or "spirit" of what the speaker says. Using them correctly is usually a matter of "feeling and expression" rather than "grammatical right or wrong".
          </c.P>
          <c.P>
            The particle <c.Chinese>啊</c.Chinese> can have slightly different pronunciations, depending on what comes before it. After initials ending in <b>a</b>, <b>e</b>, <b>i</b>, <b>o</b> and <b>ü</b>, it is often pronounced <b>yå</b>, and after <b>u</b> and <b>ao</b>, it sounds like <b>wå</b>. Some writers even use different characters to reflect this. We will sometimes use the most “natural” pīnyīn transcription: <c.Chinese>你说啊</c.Chinese> might be written <b>nǐ shuō yå</b> in pīnyīn.
          </c.P>
          {grammarTitle()}
          <c.P>
            As we have seen, Chinese does not usually differentiate between plural and singular forms: <c.Chinese>语言</c.Chinese> <b>yǔyán</b> can mean either <i>language</i> or <i>languages</i>, depending on context. But there is a special case: for people, we can use the particle <c.Chinese>们</c.Chinese> <b>-me̊n</b> as a sort of plural form to describe groups of people. It is most commonly used with the personal pronouns <c.Chinese>你</c.Chinese>, <c.Chinese>我</c.Chinese>, <c.Chinese>他</c.Chinese>, <c.Chinese>她</c.Chinese>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>我</c.Char><c.Pinyin>wǒ</c.Pinyin><c.Meaning>I, me</c.Meaning></Row>
            <Row><c.Char>我们</c.Char><c.Pinyin>wǒme̊n</c.Pinyin><c.Meaning>we</c.Meaning></Row>
            <Row><c.Char>你</c.Char><c.Pinyin>nǐ</c.Pinyin><c.Meaning>you</c.Meaning></Row>
            <Row><c.Char>你们</c.Char><c.Pinyin>nǐme̊n</c.Pinyin><c.Meaning>you (plural)</c.Meaning></Row>
            <Row><c.Char>他</c.Char><c.Pinyin>tā</c.Pinyin><c.Meaning>he, him</c.Meaning></Row>
            <Row><c.Char>他们</c.Char><c.Pinyin>tāme̊n</c.Pinyin><c.Meaning>they, them (male or mixed)</c.Meaning></Row>
            <Row><c.Char>她</c.Char><c.Pinyin>tā</c.Pinyin><c.Meaning>she, her</c.Meaning></Row>
            <Row><c.Char>她们</c.Char><c.Pinyin>tāme̊n</c.Pinyin><c.Meaning>they, them (female)</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            <c.Chinese>们</c.Chinese> <b>-me̊n</b> can also be used with the formal words for <i>lady</i> and <i>gentleman</i> to say:
          </c.P>
          <c.Example
            audio={false}
            chinese="女士们，先生们！"
            pinyin="Nǚshi̊me̊n, xiānshe̊ngme̊n!"
            translation="Ladies and gentlemen!"
          />
          <c.PartTitle>Culture and society: Chinese nicknames</c.PartTitle>
          <c.PartTitle name="dialog_zh" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
