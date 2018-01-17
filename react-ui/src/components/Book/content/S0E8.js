import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
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
            text="How to say that you can speak Chinese"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>Just as in the other cases we have seen, the final <b>-ing</b> is spelled <b>ying</b> when there is no initial. In other words, the <b>y</b> is silent:</c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('xing4'),
                text: '姓'
              }
            }}
          >
            <Row><c.Char>姓</c.Char><c.Pinyin>xìng</c.Pinyin></Row>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('ying1'),
                text: '英'
              }
            }}
          >
            <Row><c.Char>英</c.Char><c.Pinyin>yīng</c.Pinyin></Row>
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P><c.Chinese>会</c.Chinese> <b>huì</b> means <i>know</i> in the sense of <i>know how to</i>. It can be used as a verb:</c.P>
          {example(1, { audio: true })}
          <c.P>It can also be used as an auxiliary verb, that is, in combination with another verb, meaning <i>know how to do something</i>:</c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
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
          <c.P><c.Chinese>好吗</c.Chinese> <b>hǎo må</b> can also be used to ask for agreement with something you have just said:</c.P>
          {example(4, { audio: true })}
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
          {grammarTitle()}
          <c.P>Spoken Chinese uses a single word, <b>tā</b>, for both <i>he</i> and <i>she</i>: there is no difference between gender in the third person. This is why Chinese people sometimes confuse these pronouns in English: <i>Where is Mary? He is not here.</i> But the modern written language uses different characters for <i>he</i> and <i>she</i>:</c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>他</c.Char><c.Pinyin>tā</c.Pinyin><c.Meaning>he, him</c.Meaning></Row>
            <Row><c.Char>她</c.Char><c.Pinyin>tā</c.Pinyin><c.Meaning>she, her</c.Meaning></Row>
          </c.Bookrow>
          <c.P>As usual, words do not change form so there is no difference between <i>he</i> and <i>him</i>, <i>she</i> and <i>her</i>.</c.P>
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
          <c.PartTitle name="dialogs" />
          <c.PartTitle type="secondary">你会说中文吗？</c.PartTitle>
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {/* {dialog(1, { sentenceType: 'pinyin', displayNames: true })} */}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          {dialog(2, { sentenceType: 'chinese', displayNames: true })}
          {/* {dialog(2, { sentenceType: 'pinyin', displayNames: true })} */}
          {dialog(2, { sentenceType: 'translation', displayNames: true })}
          {dialog(3, { sentenceType: 'chinese', displayNames: true })}
          {/* {dialog(3, { sentenceType: 'pinyin', displayNames: true })} */}
          {dialog(3, { sentenceType: 'translation', displayNames: true })}
          <c.P
            buttonOptions={{
              type: 'askUserSettings'
            }}
          >Now, go to the web and input the languages you speak, to continue practicing how to present yourself.
          </c.P>
          <c.PartTitle type="secondary">Presentation</c.PartTitle>
          {dialog(4, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle type="secondary">Role play</c.PartTitle>
          {dialog(5, { sentenceType: 'chinese', displayNames: true })}
          {dialog(6, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.PartTitle>ORACLE BONES</c.PartTitle>
          <c.PartTitle>CALLIGRAPHY</c.PartTitle>
          <c.Review practiceId={practiceIds[0]} />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
