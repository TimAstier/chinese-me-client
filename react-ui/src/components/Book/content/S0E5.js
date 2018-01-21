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
          <c.P>Pīnyīn <b>e</b> is pronounced like English <i>ea</i> in <i>learn</i>.</c.P>
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
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P><c.Chinese>很</c.Chinese> <b>hěn</b> literally means <i>very</i>, <i>to a high degree</i>. Because of this, some textbooks call it an “intensifier”. But in modern Chinese, <c.Chinese>很</c.Chinese> <b>hěn</b> is used as a sort of "filler" between a noun and an adjective, and doesn't make any real difference to the meaning:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>If you really want to express the sense of <i>very</i> or <i>extremely</i> good, you have to emphasize the pronunciation of <b>hěn</b>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我很高兴！</c.Char><c.Pinyin>Wǒ hěn gāoxìng.</c.Pinyin><c.Meaning>I am really happy!</c.Meaning></Row></li>
              <li><Row><c.Char>你很好！</c.Char><c.Pinyin>Nǐ hěn hǎo!</c.Pinyin><c.Meaning>You’re great! You’re very nice!</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Practice translating sentences using <c.Chinese>很</c.Chinese> <b>hěn</b>.</i>
          </c.P>
          {grammarTitle()}
          <c.P><c.Chinese>也</c.Chinese> <b>yě</b> <i>also</i>, <i>too</i> can be added to any of the sentences we have learned so far.  <c.Chinese>也</c.Chinese> <b>yě</b> is placed after the subject and before the verb of the sentence:</c.P>
          {example(3, { audio: true })}
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
            <i>Practice translating sentences using <c.Chinese>也</c.Chinese> <b>yě</b>.</i>
          </c.P>
          <c.PartTitle name="dialogs" />
          <c.PartTitle type= "secondary">Saying hello</c.PartTitle>
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle type="secondary">Role play</c.PartTitle>
          {dialog(2, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="culture" />
          <c.PartTitle type="secondary">Polite greetings</c.PartTitle>
          <c.P>To inquire politely about somebody’s family name, you would say:</c.P>
          {example(6, { audio: true })}
          <c.P><c.Chinese>您</c.Chinese> <b>nín</b> is a more formal form of <c.Chinese>你</c.Chinese> <b>nǐ</b> <i>you</i>. It is used when addressing someone older or in a higher social position. <c.Chinese>贵</c.Chinese> <b>guì</b>, means <i>precious</i> or <i>expensive</i>.</c.P>
          <c.P>When you meet somebody for the first time, it is common to say:</c.P>
          {example(7, { audio: true })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review practiceId={practiceIds[0]} />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
