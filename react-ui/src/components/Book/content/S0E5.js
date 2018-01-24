import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
// import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
// import insertVariables from '../../../utils/insertVariables';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, pronunciationTitle } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <Objective
            text="A more polite way of inquiring about somebody's name"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            We have already learned that the Chinese final <b>-i</b> is written <b>yi</b> when there is no initial before it (when it comes first in a syllable). In the same way, when there is no initial, the final <b>-ie</b> is spelled <b>ye</b> in pīnyīn.
          </c.P>
          {pronunciationTitle()}
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                // url: pinyinNumberToAudioUrl('hen3'),
                text: '很'
              }
            }}
          >
            Listen to the audio voice and practice the pronunciation of <b>hěn</b> a few times.
          </c.P>
          {pronunciationTitle()}
          <c.P>As we have seen, a Chinese syllable has one of the Tones 1-4. But in some cases, this tone disappears. The word <c.Chinese>认识</c.Chinese> in this lesson is an example.</c.P>
          <c.P>The two characters <c.Chinese>认</c.Chinese> and <c.Chinese>识</c.Chinese> in this word are pronounced <b>rèn</b> with Tone 4 and <b>shí</b> with Tone 2, respectively. But when they are combined into the polysyllabic word <c.Chinese>认识</c.Chinese>, the second syllable loses its original tone. The resulting tone is called <i>neutral</i> or <i>zero</i> tone, and we denote it with a little zero over the vowel:</c.P>
          <c.Bookrow>
            <Row><c.Char>认识</c.Char><c.Pinyin>rènshi̊</c.Pinyin></Row>
          </c.Bookrow>
          <c.P>We have already seen that this is not a general rule. In fact, most polysyllabic words keep the tone on each syllable: <c.Chinese>中国</c.Chinese> <b>zhōngguó</b> and <c.Chinese>中国人</c.Chinese> <b>zhōngguórén</b>, for example. Neither is there anything strange or difficult about it: we simply need to memorize the neutral tone as part of the “spelling” of certain words.</c.P>
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
                text: '我很高兴。'
                // url: pinyinNumberToAudioUrl('')
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
                text: '你很好！'
                // url: pinyinNumberToAudioUrl('')
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
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {grammarTitle()}
          <c.P><c.Chinese>也</c.Chinese> <b>yě</b> <i>also</i>, <i>too</i> can be added to any of the sentences we have learned so far.  <c.Chinese>也</c.Chinese> <b>yě</b> is placed after the subject and before the verb of the sentence:</c.P>
          {example(3, { audio: true })}
          <c.Bookrow>
            <img src="http://via.placeholder.com/400x250" alt="" />
          </c.Bookrow>
          <c.P>In a Topic-Comment construction, <c.Chinese>也</c.Chinese> <b>yě</b> comes after the Topic and before the Comment:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          <c.Bookrow center marginTop={50}>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow>
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
          />
          <c.P><c.Chinese>您</c.Chinese> <b>nín</b> is a more formal form of <c.Chinese>你</c.Chinese> <b>nǐ</b> <i>you</i>. It is used when addressing someone older or in a higher social position. <c.Chinese>贵</c.Chinese> <b>guì</b>, means <i>precious</i> or <i>expensive</i>.</c.P>
          <c.P>When you meet somebody for the first time, it is common to say:</c.P>
          <c.Example
            chinese="认识你我很高兴。"
            pinyin="Rènshi nǐ wǒ hěn gāoxìng."
            translation="I am happy to meet you."
            literalTranslation="(KNOW YOU: I (VERY) HAPPY.)"
            audio
          />
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review practiceId={practiceIds[0]} />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
