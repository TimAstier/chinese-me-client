import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
// import insertVariables from '../../../utils/insertVariables';
import assetEndpointToUrl from '../../../helpers/assetEndpointToUrl';

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
            text="A more polite way of inquiring about somebody's name"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>As we have seen, the flow of air – also called <i>aspiration</i> – is an important feature of Chinese initials. In fact, there are some pairs of initials where aspiration is the only difference. We will learn more about this in later lessons.</c.P>
          <c.P>The Chinese initial <b>g-</b> is pronounced like an English <i>k</i>, but with less flow of air. Hold your palm up facing your mouth at a distance of an inch or two and pronounce English <i>g</i> and <i>k</i>. You can feel that there is a much weaker flow of air when you pronounce <i>g</i> than when you pronounce <i>k</i>. Chinese <b>g-</b> is pronounced like an English <i>k</i> without the flow of air! Listen:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('gao1'),
                text: '高'
              }
            }}
          >
            <b>gāo</b>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('gui4'),
                text: '贵'
              }
            }}
          >
            <b>guì</b>
          </c.Bookrow>
          {pronunciationTitle()}
          <c.P>As we have seen, Chinese syllables are usually pronounced clearly; each syllable is stressed and has a clear tone. But this is not always the case. Syllables can lose their stress, and when this happens the tone becomes a short, relaxed version called <i>neutral</i> or <i>zero</i> tone. This process is not difficult to master; we mention it here so that you will not be confused when you notice it.</c.P>
          <c.P>In some cases, the neutral tone is an optional feature of relaxed, fast speech, just as we in English say <i>wanna</i> instead of <i>want to</i>. If your professor pronounces the word <c.Chinese>中国人</c.Chinese> carefully for you, in order to teach you the pronunciation, he or she might say:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '中国人',
                url: assetEndpointToUrl('/audio/others/5_1.m4a')
              }
            }}
          >
            <b>zhōngguórén</b>
          </c.Bookrow>
          <c.P>But at natural conversational speed, the second syllable usually loses its stress and is pronounced without a clear Tone 2:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '中国人',
                url: assetEndpointToUrl('/audio/others/5_2.m4a')
              }
            }}
          >
            <b>zhōngguo̊rén</b>
          </c.Bookrow>
          <c.P>This kind of optional neutral tone is usually not mentioned in dictionaries and textbooks; its pīnyīn is written with all three original tone marks. In this course, we want to be a bit more serious about pronunciation, so when we want to draw attention to tone neutralization we replace the original tone mark with a little “zero” symbol.</c.P>
          <c.P>As we have seen, a Chinese syllable has one of the Tones 1-4. But in some cases, this tone disappears. The word <c.Chinese>认识</c.Chinese> in this lesson is an example.</c.P>
          <c.P>
            Some neutral tones are mandatory. In this chapter, for example, each character in the word <c.Chinese>认识</c.Chinese> has its own tone:  <c.Chinese>认</c.Chinese> is pronounced <b>rèn</b> with Tone 4 and <c.Chinese>识</c.Chinese> is pronounced <b>shí</b> with
            Tone 2. But when these two characters are combined into the bisyllabic word <c.Chinese>认识</c.Chinese>, the second syllable loses its original tone.
          </c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '认识',
                url: assetEndpointToUrl('/audio/words/ren4shi0.mp3')
              }
            }}
          >
            <b>rènshi̊</b>
          </c.Bookrow>
          <c.P>Here, the neutral tone is a permanent feature of the word, independent of how fast the speaker is going. No Chinese person would pronounce this word with the tone intact on the second syllable. In dictionaries and most textbooks, this mandatory neutral tone is marked by the absence of any tone mark; again, to make things as clear as possible, we mark it with a “zero” over the syllable.</c.P>
          <c.P>
            The neutral tone is short and less distinct than the four main tones. It always appears in unstressed position; never at the beginning of a word or phrase. Its pitch depends on the preceding tone: If you listen again to <c.Chinese>认识</c.Chinese>, for example, you will notice that the neutral tone ends up at the bottom of the speaker’s pitch range when it comes after Tone 4. After Tone 1 the neutral tone has a slightly higher pitch; after Tone 2 higher still; and after Tone 3 it ends up close to the top of the speaker’s pitch range. Most people don’t have to memorize this; it comes naturally as you practice speaking.
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P><c.Chinese>很</c.Chinese> <b>hěn</b> literally means <i>very</i>, <i>to a high degree</i>. Because of this, some textbooks call it an “intensifier”. But in modern Chinese, <c.Chinese>很</c.Chinese> <b>hěn</b> is used as a sort of "filler" between a noun and an adjective, and doesn't make any real difference to the meaning:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>If you really want to express the sense of <i>very</i> or <i>extremely</i> good, you have to emphasize the pronunciation of <b>hěn</b>:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '我很高兴。',
                url: assetEndpointToUrl('/audio/examples/S0E5_custom_example_1.m4a')
              }
            }}
          >
            <Row>
              <c.Char>我很高兴！</c.Char>
              <c.Pinyin>Wǒ hěn gāoxìng.</c.Pinyin>
              <c.Meaning>I am really happy!</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '你很好！',
                url: assetEndpointToUrl('/audio/examples/S0E5_custom_example_2.m4a')
              }
            }}
          >
            <Row>
              <c.Char>你很好！</c.Char>
              <c.Pinyin>Nǐ hěn hǎo!</c.Pinyin>
              <c.Meaning>You’re great! You’re very nice!</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {grammarTitle()}
          <c.P><c.Chinese>也</c.Chinese> <b>yě</b> <i>also</i>, <i>too</i> can be added to any of the sentences we have learned so far.  <c.Chinese>也</c.Chinese> <b>yě</b> is placed after the subject and before the verb of the sentence:</c.P>
          {example(3, { audio: true })}
          <c.Bookrow center>{image({ maxWidth: 400, caption: 'ADD SOME TEXT.'})}</c.Bookrow>
          <c.P>In a Topic-Comment construction, <c.Chinese>也</c.Chinese> <b>yě</b> comes after the Topic and before the Comment:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          <c.Bookrow center marginTop={30}>{image({ maxWidth: 550, caption: 'ADD SOME TEXT.'})}</c.Bookrow>
          <c.PartTitle name="dialogs" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          {dialog(2, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="culture" />
          <c.PartTitle type="secondary">Polite greetings</c.PartTitle>
          <c.P>To inquire politely about somebody’s family name, you would say:</c.P>
          <c.Example
            chinese="您贵姓？"
            pinyin="Nín guìxìng?"
            translation="What is your family name?"
            literalTranslation="(YOU: PRECIOUS NAME?)"
            audio
            slow={false}
          />
          <c.P><c.Chinese>您</c.Chinese> <b>nín</b> is a more formal form of <c.Chinese>你</c.Chinese> <b>nǐ</b> <i>you</i>. It is used when addressing someone older or in a higher social position. <c.Chinese>贵</c.Chinese> <b>guì</b>, means <i>precious</i> or <i>expensive</i>.</c.P>
          <c.P>When you meet somebody for the first time, it is common to say:</c.P>
          <c.Example
            chinese="认识你我很高兴。"
            pinyin="Rènshi nǐ wǒ hěn gāoxìng."
            translation="I am happy to meet you."
            literalTranslation="(KNOW YOU: I (VERY) HAPPY.)"
            audio
            slow={false}
          />
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
