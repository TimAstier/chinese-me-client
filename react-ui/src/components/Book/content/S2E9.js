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
            text="Getting to know someone."
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            Just like in English, sentences that have the form of statements can be made into questions by using rising intonation. But since Chinese is a tonal language, you can't just change the tone on the final syllable, because that would change the meaning of the word. Instead, the tone range starts rising about halfway through the sentence; the tone on each syllable remains but is pronounced higher and higher in the speaker's register:
          </c.P>
          <c.Example
            audio={false}
            chinese="听说你会说中国话"
            pinyin="Tīngshuō nǐ huì shuō zhōngguóhuà?"
            translation="I hear you can speak Chinese?"
          />
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Practice formulating questions through intonation only.</i>
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            <c.Chinese>谁</c.Chinese> <b>shéi</b>, means <i>who</i>. (Some dictionaries transcribe <c.Chinese>谁</c.Chinese> as <b>shuí</b> in pīnyīn, but <b>shéi</b> is the actual pronunciation.) As usual, the word order is the same in a question as in a statement:
          </c.P>
          {example(1, { audio: true })}
          <c.P>
            <c.Chinese>怎么</c.Chinese> <b>zěmme̊</b> (transcribed <b>zěnme̊</b> in dictionaries, since <c.Chinese>怎</c.Chinese> is pronounced <b>zěn</b>) can mean <i>how</i> or <i>why</i>, depending on context:
          </c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          {example(4, { audio: true })}
          <c.P>
            Patterns 9:3 and 9:4 could also have been formulated using <c.Chinese>为什么</c.Chinese> <b>wèishe̊mme̊</b>:
          </c.P>
          <c.Example
            audio={false}
            chinese="你为什么不说话？"
            pinyin="Nǐ wèishe̊mme̊ bù shuōhuà?"
            translation="Why don't you say anything?"
          />
          <c.P>
            But using <c.Chinese>你为什</c.Chinese> <b>wèishe̊mme̊</b> makes this question sound like an interrogation: <i>for what reason aren't you saying anything?</i> <c.Chinese>怎么</c.Chinese> <b>zěmme̊</b> sounds more like friendly concern.
          </c.P>
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
            In informal oral speech, <c.Chinese>好</c.Chinese> <b>hǎo</b>, often replaces <c.Chinese>很</c.Chinese> <b>hěn</b>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>好美 = 很美</c.Char></Row>
            <Row><c.Char>好美 = 很美</c.Char></Row>
            <Row><c.Char>好美 = 很美</c.Char></Row>
          </c.Bookrow>
          <c.P>
            Using <c.Chinese>好</c.Chinese> <b>hǎo</b>, is a bit more emphatic than <c.Chinese>很</c.Chinese> <b>hěn</b>, so we should usually translate it with <i>really</i> or <i>very</i>.
          </c.P>
          {example(5, { audio: true })}
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
            In Episode 8 of Season 1, we learned one way of asking someone for agreement using <c.Chinese>好吗</c.Chinese> <b>hǎo må</b>:
          </c.P>
          <c.Example
            audio={false}
            chinese="我叫你马文，好吗？"
            pinyin="Wǒ jiào nǐ Mǎ Wén, hǎo må?"
            translation="I'll call you Ma Wen, ok?"
            literalTranslation="(I CALL YOU MA WEN, GOOD YES/NO?)."
          />
          <c.P>
            This question is translated with the English <i>ok?</i> since it explicitly asks the listener to agree to do something.
          </c.P>
          <c.P>
            A more common and neutral tool for asking someone for agreement is the particle <c.Chinese>吧</c.Chinese> <b>bå</b>. This particle can be used in two ways. First, as an <b>imperative</b>, a suggestion to do something:
          </c.P>
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>
            When the speaker states a subjective fact and adds <c.Chinese>吧</c.Chinese> <b>bå</b>, the result becomes a rhetorical question where the speaker supposes that something is the case: <i>isn’t it true that…?</i> or <i>…, right?</i>
          </c.P>
          {example(8, { audio: true })}
          <c.P>
            In other cases, the question becomes more like a statement <i>don’t you think…?</i>
          </c.P>
          {example(9, { audio: true })}
          <c.P>
            The most natural interpretation of this sentence is a statement: the speaker thinks Chinese characters are beautiful and asks you to agree. This is why we have used an exclamation mark rather than a question mark here.
          </c.P>
          <c.P>
            Finally, the agreement function of <c.Chinese>吧</c.Chinese> <b>bå</b> can be used to say yes to a suggestion:
          </c.P>
          {example(10, { audio: true })}
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
            Like many other verbs, <c.Chinese>对</c.Chinese> <b>duì</b> <i>to face</i>, <i>to compare</i> can be used as a preposition, in this meaning <i>to</i>, <i>towards</i>, <i>against</i>. Prepositions and their Objects are usually placed between the Subject and the Verb in Chinese. This is different from English, as the literal translation makes clear:
          </c.P>
          {example(11, { audio: true })}
          {example(12, { audio: true })}
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
            We have previously encountered <c.Chinese>呢</c.Chinese> <b>ne̊</b> as a question particle for follow-on questions:
          </c.P>
          <c.Example
            audio={false}
            chinese="你呢？"
            pinyin="nǐ ne̊?"
            translation="What about you?"
          />
          <c.P>
            The sense of "follow-on" can also be extended to mean <i>in that case</i> or <i>so then</i>:
          </c.P>
          {example(13, { audio: true })}
          <c.P>
            This use of <c.Chinese>呢</c.Chinese> <b>ne̊</b> is only used in conversation, since the function is to bring a listener’s attention to the special importance of what is being said. <c.Chinese>呢</c.Chinese> <b>ne̊</b> often has a sense of <i>mild surprise</i>, indicating that what is being said is especially relevant because it is contrary to expectation:
          </c.P>
          {example(14, { audio: true })}
          <c.P>
            In the dialog in this episode, it "softens" a question which might otherwise sound like an order: <i>Say something!</i>
          </c.P>
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
            <c.Chinese>跟</c.Chinese> <b>gēn</b> can mean <i>and</i>, <i>with</i>; in this case it is synonymous with <c.Chinese>和</c.Chinese> <b>hé</b>:
          </c.P>
          {example(15, { audio: true })}
          <c.P>Sometimes, we can translate <c.Chinese>跟</c.Chinese> <b>gēn</b> as <i>for</i>:</c.P>
          {example(16, { audio: true })}
          <c.P>
            <c.Chinese>跟</c.Chinese> <b>gēn</b> can also be used with words such as <i>speak</i> and <i>tell</i> where English would use either <i>to</i> or no preposition at all:
          </c.P>
          {example(17, { audio: true })}
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
            We have earlier seen that because can be translated <c.Chinese>因为</c.Chinese> <b>yīnwe̊i</b>:
          </c.P>
          <c.Example
            chinese="你为什么去中国？因为我想学中文。"
            pinyin="Nǐ wèishemme qù zhōngguó? Yīnwe̊i wǒ xiǎng xué zhōngwén."
            translation="Why did you go to China? Because I wanted to study Chinese."
          />
          <c.P>
            But <c.Chinese>因为</c.Chinese> <b>yīnwe̊i</b> can also be used together with <c.Chinese>所以</c.Chinese> <b>suǒyǐ</b> to mean <i>since</i> or <i>because</i> in the following pattern:
          </c.P>
          {example(18, { audio: true })}
          {example(19, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[7]
              }
            }}
          >
            <i>Translate to Chinese.</i>
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
