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
          <c.P>The Chinese initial <b>g-</b> is pronounced like an English <i>k</i>, but with less flow of air. Hold your palm up facing your mouth at a distance of an inch or two and pronounce English <i>g</i> and <i>k</i>. You can feel that there is a much weaker flow of air when you pronounce <i>g</i> than when you pronounce <i>k</i>. Chinese <b>g-</b> is pronounced like an English <i>k</i> without the flow of air! Listen:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                // url: pinyinNumberToAudioUrl('gao1'),
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
                // url: pinyinNumberToAudioUrl('gui4'),
                text: '贵'
              }
            }}
          >
            <b>guì</b>
          </c.Bookrow>
          {pronunciationTitle()}
          <c.P>As we have seen, a Chinese syllable has one of the Tones 1-4. But in some cases, this tone disappears. The word <c.Chinese>认识</c.Chinese> in this lesson is an example.</c.P>
          <c.P>
            The two characters <c.Chinese>认</c.Chinese> and <c.Chinese>识</c.Chinese> in this word are pronounced <b>rèn</b> with Tone 4 and <b>shí</b> with Tone 2, respectively. But when they are combined into the polysyllabic word <c.Chinese>认识</c.Chinese>, the second syllable loses its original tone. The resulting tone is called <i>neutral</i> or <i>zero</i> tone. In dictionaries, it is usually written by leaving out the tone mark, with no special symbol. In this course, we denote it with a little zero over the vowel:
          </c.P>
          <c.Bookrow>
            <Row><c.Char>认识</c.Char><c.Pinyin>rènshi̊</c.Pinyin></Row>
          </c.Bookrow>
          <c.P>We have already seen that most polysyllabic words keep the tone on each syllable: <c.Chinese>中国</c.Chinese> <b>zhōngguó</b> and <c.Chinese>中国人</c.Chinese> <b>zhōngguórén</b>, for example. We simply need to memorize the neutral tone as part of the “spelling” of certain words.</c.P>
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
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {grammarTitle()}
          <c.P><c.Chinese>也</c.Chinese> <b>yě</b> <i>also</i>, <i>too</i> can be added to any of the sentences we have learned so far.  <c.Chinese>也</c.Chinese> <b>yě</b> is placed after the subject and before the verb of the sentence:</c.P>
          {example(3, { audio: true })}
          {/* <c.Bookrow>
            <img src="http://via.placeholder.com/400x250" alt="" />
          </c.Bookrow> */}
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
          {/* <c.Bookrow center marginTop={50}>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow> */}
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
