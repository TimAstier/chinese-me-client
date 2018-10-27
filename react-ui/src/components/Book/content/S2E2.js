import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
// import { Row } from '../../Shared';

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
            text="Chinese given names. Expressing preferences."
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            The pīnyīn spelling of this final is tricky. To begin with, it is one of two finals where the tone mark is not put on the first letter in alphabetical order: instead, tone is indicated on <b>u</b>. Second, in the standard pīnyīn table, it is listed as <b>-iou</b>, but actually spelled <b>-iu</b>.
          </c.P>
          <c.P>
            And it is not only the spelling which is irregular: actual pronunciation also varies depending on the tone. With Tone 3 and 4, <b>-iu</b> is pronounced as if it had indeed been spelled <b>-iou</b>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('jiu3')
              }
            }}
          ><b>jiǔ</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('liu4')
              }
            }}
          ><b>liù</b></c.P>
          <c.P>
            But with Tone 1 and sometimes Tone 2, it usually sounds like a combination of the finals <b>-i</b> and <b>-u</b> pronounced after each other, without any <i>o</i> sound:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('jiu1')
              }
            }}
          ><b>jiū</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('liu1')
              }
            }}
          ><b>liū</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('liu2')
              }
            }}
          ><b>liú</b></c.P>
          <c.P>
            Finally, when there is no initial, <b>-iu</b> is spelled <b>you</b>. Here, the pronunciation is always <b>-iou</b> regardless of tone, and the tone mark is placed on <b>o</b> rather than <b>u</b>! Makes you wonder what the people who developed pīnyīn were thinking about when they decided on the spelling for this final.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('you1')
              }
            }}
          ><b>yōu</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('you3')
              }
            }}
          ><b>yǒu</b></c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Read aloud and compare with the model voice.</i>
          </c.P>
          {pronunciationTitle()}
          <c.P>
            The nasal <i>ng</i>-sound influences other vowels, giving them a “darker” pronunciation. Compare the sound of <b>-eng</b> with the sound of <b>-en</b>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('peng2')
              }
            }}
          ><b>péng</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('hen3')
              }
            }}
          ><b>hěn</b></c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Listen to the voice and write what you hear.</i>
          </c.P>
          {pronunciationTitle()}
          <c.P>
            Chinese <b>q-</b> sounds like English <i>ch</i> in <i>chin</i>. It is the aspirated version of the sound spelled <b>j-</b> in pīnyīn, and can be described as a Chinese <b>t-</b> followed by the soft "shush"-like <b>x-</b>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('qi2')
              }
            }}
          ><b>qí</b></c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
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
            <c.Chinese>有</c.Chinese> <b>yǒu</b> can mean either <i>to have</i> or <i>there is</i>, depending on context. After a noun or pronoun, it often means have:
          </c.P>
          {example(1, { audio: true })}
          <c.P>
            <c.Chinese>有</c.Chinese> <i>yǒu</i> is also used in many words, for example <c.Chinese>有名</c.Chinese> <b>yǒumíng</b> <i>famous</i> (HAVE-NAME).
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            <c.Chinese>有</c.Chinese> <b>yǒu</b> is not negated with <c.Chinese>不</c.Chinese> <b>bù</b>. Instead, Chinese uses <c.Chinese>没有</c.Chinese> <b>méiyǒu</b> or just <c.Chinese>没</c.Chinese> <b>méi</b> to say <i>not have</i>, <i>does not exist</i> or <i>there is no</i>:
          </c.P>
          {example(2, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {grammarTitle()}
          <c.P>You can formulate yes/no questions with <c.Chinese>有</c.Chinese> in two ways. First, with the question particle <c.Chinese>吗</c.Chinese> <b>må</b>:</c.P>
          {example(3, { audio: true })}
          <c.P>
            Second, as an A-not-A question. In this case, the tones on <c.Chinese>没有</c.Chinese> <b>méiyǒu</b> are neutralized:
          </c.P>
          {example(4, { audio: true })}
          <c.P>
            As usual, you reply with the correct alternative. If you want to answer in the negative, you always use <c.Chinese>没有</c.Chinese> <b>méi yǒu</b>; it is not possible to say just <c.Chinese>没</c.Chinese> <b>méi</b>.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            We have already learned how to use the particle <c.Chinese>的</c.Chinese> <b>de̊.1</b> to create the <i>genitive</i> form, indicating that something "belongs" to something else:
          </c.P>
          <c.Bookrow flexDirection="column">
            <c.Char>高英的中文。</c.Char>
            <c.Pinyin>Gāo Yīng de̊.1 zhōngwén.</c.Pinyin>
            <c.Meaning>Colleen's Chinese.</c.Meaning>
          </c.Bookrow>
          <c.P>
            A grammarian would say that the noun (<i>Chinese</i>) has been <i>modified</i> by what comes before it. By "modify" we simply mean <i>say something about</i>: the phrase coming before the word <i>Chinese</i> specifies that it is <i>Colleen's</i> (and not, for example, <i>Tom's</i> or <i>accented</i>) Chinese that we are talking about.
          </c.P>
          <c.P>
            But the genitive is just one of many ways in which <c.Chinese>的</c.Chinese> <b>de̊.1</b> can modify a noun. Another common pattern appends <c.Chinese>的</c.Chinese> <b>de̊.1</b> to a stative verb, the Chinese equivalent of an English adjective. In English, an adjective can modify a noun without anything in between: we say <i>nice people</i> or a <i>new name</i>. In Chinese, this is only possible if the adjective and its noun are so closely linked that they have become
            a fixed expression or a new word: <c.Chinese>好人</c.Chinese> <b>hǎorén</b>, for example, is a fixed expression meaning <i>good guy</i> or <i>model person</i>. But if we want to modify the noun <c.Chinese>人</c.Chinese> <b>rén</b> with the stative verb <b>hǎo</b> <i>good</i>, <i>nice</i>, to say a <i>nice person</i>, we have
            to insert <c.Chinese>的</c.Chinese> <b>de̊.1</b> between the stative verb and the noun that it modifies:
          </c.P>
          {example(5, { audio: true })}
          <c.P>
            We gloss this use of <c.Chinese>的</c.Chinese> <b>de̊.1</b> by a hyphenated <i>-Y</i> in the literal translations, to try to give a sense of its function.
          </c.P>
          <c.P>
            In some cases, the choice is up to the speaker, because the noun and its stative verb can be viewed either as a concept – a fixed unit of meaning – or as an adjective modifying the noun:
          </c.P>
          {example(6, { audio: true })}
          <c.P>
            These variants are interchangeable. Perhaps the most "natural" version is the one without <c.Chinese>的</c.Chinese> <b>de̊.1</b>. But this does not mean the version with <c.Chinese>的</c.Chinese> <b>de̊.1</b> is "unnatural"; it is often used to create contrast; in the example above, perhaps in order to emphasize that you are talking about the person's <i>Chinese</i> name, as opposed to the original native name. These nuances may seem complicated at first, but as you build a feel for the language, the choice will come naturally.
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
            Used as a response to a statement, <c.Chinese>那</c.Chinese> <b>nà</b> (or <c.Chinese>那么</c.Chinese> <b>nàme̊</b>) can mean in that case, OK then:
          </c.P>
          {example(7, { audio: true })}
          <c.P>
            It can also be used to start a phrase where the speaker wants to emphasize a connection to what has just been said, similar to English <i>so</i>:
          </c.P>
          {example(8, { audio: true })}
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
          <c.PartTitle name="dialog_zh" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="words" />
          <c.PartTitle name="culture" />
          <c.P>
            A common Chinese greeting is:
          </c.P>
          <c.Example
            audio={false}
            chinese="你忙吗？"
            pinyin="Nǐ máng må?"
            translation="YOU BUSY YES/NO?"
          />
          <c.P>
            This phrase can be used as a real question, for example in order to check whether it is ok to interrupt somebody. But more commonly, it is used as a greeting similar to English <i>how are you doing?</i>
          </c.P>
          <c.P>
            The most common reply is:
          </c.P>
          <c.Example
            audio={false}
            chinese="不忙！"
            pinyin="Bù máng!"
            translation="No."
          />
          <c.P>
            This is often followed by a polite:
          </c.P>
          <c.Example
            audio={false}
            chinese="你呢？"
            pinyin="Nǐ ne?"
            translation="What about you?"
          />
          <c.P>
            If you know somebody fairly well and actually want to tell them what you are up to these days, you would instead say:
          </c.P>
          <c.Example
            audio={false}
            chinese="很忙。"
            pinyin="Hěn máng."
            translation="Yes."
          />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
