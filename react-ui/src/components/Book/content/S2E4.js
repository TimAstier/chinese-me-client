import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import { audioUrls } from '../../../constants/urls';

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
            text="Asking questions when you don't understand."
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            Let us review the three different sounds spelled <b>i</b> in pīnyīn. After the initials <b>s-</b>, <b>z-</b> and <b>c-</b>, it is pronounced like the buzzing of a bee, <i>zzz</i>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('si1')
              }
            }}
          ><b>sī</b></c.P>
          <c.P>
            After the initials <b>r-</b>, <b>sh-</b>, <b>zh-</b> and <b>ch-</b>, it is pronounced <i>r</i>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('shi1')
              }
            }}
          ><b>shī</b></c.P>
          <c.P>
            In all other cases, it is pronounced <i>ee</i>:
          </c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_4_1.mp3`
              }
            }}>
            <span><b>dì yī</b></span>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Listen to the voice and write what you hear.</i>
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            In this episode, we meet another of the three structural particles, <c.Chinese>得</c.Chinese>. Since all three are pronounced the same, but written with different characters, we will gloss this one as <b>de̊.2</b> in pīnyīn.
          </c.P>
          <c.P>
            A common function of <c.Chinese>得</c.Chinese> <b>de̊.2</b> is to link a verb with an adverb, specifying <i>how</i> something is done:
          </c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>
            If you compare this pattern with the examples we have learned earlier using <c.Chinese>的</c.Chinese> <b>de̊.1</b>, you will see that they both mean more or less the same thing, but have different grammatical structures:
          </c.P>
          <c.Example
            audio={false}
            chinese="你的中文很好。"
            pinyin="Nǐ de̊.1 zhōngwén hěn hǎo."
            translation="Your Chinese is good."
          />
          <c.Example
            audio={false}
            chinese="你中文说得很好。"
            pinyin="Nǐ zhōngwén shuō de̊.2 hěn hǎo."
            translation="You speak Chinese very well."
          />
          <c.P>
            The first sentence comments on <i>your</i> Chinese; the second on how you <i>speak</i> Chinese. In the first sentence, <c.Chinese>你的中文</c.Chinese> <b>nǐ de̊.1 zhōngwén</b> is the
            Subject and <c.Chinese>很好</c.Chinese> <b>hěn hǎo</b> is the Predicate, <i>good</i>; the second is a Topic-Comment construction with <c.Chinese>你</c.Chinese> <b>nǐ</b> as the Topic, and <c.Chinese>很好</c.Chinese> <b>hěn hǎo</b> as an adverb, <i>well</i>.
          </c.P>
          <c.P>
            A sentence with <c.Chinese>得</c.Chinese> <b>de̊.2</b> always describes a <i>state</i> – how the action is (or was) <i>generally</i> performed – rather than just an “action”:
          </c.P>
          {example(3, { audio: true })}
          <c.P>
            This example can only be interpreted as <i>you learn quickly (in general)</i>, not <i>you learned (this) quickly</i>. As we see, in each of the patterns above, the speaker is emphasizing a general state: the listener's <i>speaking Chinese well</i> or <i>ability to learn quickly</i>. Note that <c.Chinese>得</c.Chinese> <b>de̊.2</b> is mandatory; you cannot just say <b>说很好</b>.
          </c.P>
          <c.P>
            When there is an Object, the Verb is often repeated:
          </c.P>
          {example(4, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            The Chinese numbers for <i>one, two, three</i> are <c.Chinese>一</c.Chinese> <b>yī</b>, <c.Chinese>二</c.Chinese> <b>èr</b>, <c.Chinese>三</c.Chinese> <b>sān</b>. But in front of measure words, Chinese uses <c.Chinese>两</c.Chinese> <b>liǎng</b> instead of <c.Chinese>二</c.Chinese> <b>èr</b>. There is no "explanation" for this; it is just an exception that we have to remember:
          </c.P>
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            The question word <c.Chinese>几</c.Chinese> <b>jǐ</b> <i>how many?</i> is applied to numbers up to a dozen. It is often used to ask for the age of children. As usual, the word order is the same as that of a statement:
          </c.P>
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            As we have seen, Chinese numbers are logical and easy to learn. The same goes for ordinal numbers: in order to say <i>first, second, third</i> and so on, we just add the character <c.Chinese>第</c.Chinese> <b>dì</b> before any basic number:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>第一</c.Char><c.Pinyin>dì yī</c.Pinyin><c.Meaning>first</c.Meaning></Row>
            <Row><c.Char>第二</c.Char><c.Pinyin>dì èr</c.Pinyin><c.Meaning>second</c.Meaning></Row>
            <Row><c.Char>第三</c.Char><c.Pinyin>dì sān</c.Pinyin><c.Meaning>third</c.Meaning></Row>
            <br />
            <Row>...</Row>
            <br />
            <Row><c.Char>第九十九</c.Char><c.Pinyin>dì jiǔshíjiǔ</c.Pinyin><c.Meaning>ninety-ninth</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            The format is the same if we add a noun and classifier, with two points where we need to pay attention. First, after <c.Chinese>第</c.Chinese> the number <i>one</i> is always pronounced <b>yī</b> with Tone 1:
          </c.P>
          {example(9, { audio: true })}
          <c.P>Second, we keep the basic numeral <c.Chinese>二</c.Chinese> <b>èr</b> for <i>two</i> rather than replacing it with <c.Chinese>两</c.Chinese> <b>liǎng</b>:</c.P>
          {example(10, { audio: true })}
          <c.P>
            As usual, the word order is the same in a question as in a statement:
          </c.P>
          {example(11, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            An expression such as <i>a book of yours</i> is literally rendered in Chinese as YOU-Y ONE-ROOT-OF BOOK:
          </c.P>
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          {example(14, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            Because of its many meanings and idiomatic usages, <c.Chinese>意思</c.Chinese> <b>yìsi̊</b> is often used for puns and jokes. Its original and most basic sense is <i>meaning</i>:
          </c.P>
          {example(15, { audio: true })}
          <i>It can also be used with <c.Chinese>有</c.Chinese> in the sense <i>interesting</i>:</i>
          {example(16, { audio: true })}
          {example(17, { audio: true })}
          <c.P>
            When said of a person, it can take on a friendly sarcastic tinge which implies "interesting" in the sense of <i>strange</i>:
          </c.P>
          {example(18, { audio: true })}
          {example(19, { audio: true })}
          <c.P>
            <c.Chinese>有意思</c.Chinese> can also mean <i>like to, have the intention to</i>:
          </c.P>
          {example(20, { audio: true })}
          <c.P>
            <c.Chinese>好意思</c.Chinese> means <i>have the nerve to, be so impolite so as to</i>:
          </c.P>
          {example(21, { audio: true })}
          <c.P>
            The negation is a commonly used apology:
          </c.P>
          {example(22, { audio: true })}
          <c.P>
            Another common polite phrase, used when someone thanks you or praises you for something, is:
          </c.P>
          {example(23, { audio: true })}
          <c.P>
            In future episodes, we will meet even more uses for this fabulous word!
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[6]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            We have earlier learned to use <c.Chinese>是</c.Chinese> <b>shì</b> as an equivalent of English <i>be</i>:
          </c.P>
          <c.Example
            audio={false}
            chinese="他是中国人。"
            pinyin="Tā shi̊ zhōngguórén."
            translation="He is Chinese."
          />
          <c.P>
            But <c.Chinese>是</c.Chinese> <b>shì</b> can also be added for emphasis in sentences where it would otherwise not be necessary. In this case, <c.Chinese>是</c.Chinese> <b>shì</b> is always stressed and keeps its original Tone 4:
          </c.P>
          {example(24, { audio: true })}
          <c.P>
            Of course, <c.Chinese>是</c.Chinese> <b>shì</b> is used in many expressions where there is no <i>be</i> in English, without any special stress or emphasis.
          </c.P>
          {example(25, { audio: true })}
          <c.P>
            It then has its usual neutralized tone.
          </c.P>
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
