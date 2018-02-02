import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import insertVariables from '../../../utils/insertVariables';
// import chineseToPinyin from '../../../utils/chineseToPinyin';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, pronunciationTitle, settings } = this.props;

    // This part comes between a dialog 'title' and 'intro'
    const specialIntro = () => {
      return (
        <div>
          <c.P
            buttonOptions={{
              type: 'askUserSettings'
            }}
          >Now, click on the <i>Me</i> icon and input the languages you speak to learn their names in Chinese.
          </c.P>
          <c.P>Here are the names of your languages in Chinese. Listen to their pronunciation and repeat until you feel confident.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: insertVariables('[MOTHER_TONGUE_ZH]', settings)
              }
            }}
          >
            <Row>
              <c.Char>{insertVariables('[MOTHER_TONGUE_ZH]', settings)}</c.Char>
              <c.Pinyin>{insertVariables('[MOTHER_TONGUE_PINYIN]', settings)}</c.Pinyin>
            </Row>
          </c.Bookrow>
          {
            insertVariables('[OTHER_LANGUAGE]', settings) !== '__' &&
            insertVariables('[OTHER_LANGUAGE]', settings) !== 'N/A' &&
              <c.Bookrow
                buttonOptions={{
                  type: 'audio',
                  data: {
                    text: insertVariables('[OTHER_LANGUAGE_ZH]', settings)
                  }
                }}
              >
                <Row>
                  <c.Char>{insertVariables('[OTHER_LANGUAGE_ZH]', settings)}</c.Char>
                  <c.Pinyin>{insertVariables('[OTHER_LANGUAGE_PINYIN]', settings)}</c.Pinyin>
                </Row>
              </c.Bookrow>
          }
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '中文'
              }
            }}
          >
            <Row>
              <c.Char>中文</c.Char>
              <c.Pinyin>zhōngwén</c.Pinyin>
            </Row>
          </c.Bookrow>
        </div>
      );
    };

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
          <c.Bookrow center>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow>
          <c.PartTitle name="dialogs" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          {dialog(2, { sentenceType: 'chinese', displayNames: true })}
          {dialog(2, { sentenceType: 'translation', displayNames: true })}
          {dialog(3, { sentenceType: 'chinese', displayNames: true })}
          {dialog(3, { sentenceType: 'translation', displayNames: true })}
          {dialog(4, { sentenceType: 'chinese', displayNames: false, specialIntro })}
          {dialog(5, { sentenceType: 'chinese', displayNames: true })}
          {dialog(6, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
