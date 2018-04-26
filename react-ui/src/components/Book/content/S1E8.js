import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
// import chineseToPinyin from '../../../utils/chineseToPinyin';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, pronunciationTitle, image } = this.props;

    // This part comes between a dialog 'title' and 'intro'
    const specialIntro = () => {
      return (
        <div>
          <c.P
            buttonOptions={{
              type: 'askUserSettings',
              data: null
            }}
          >
            <i>Now, click on the </i>Me<i> icon and input the languages you speak to learn their names in Chinese.</i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            <i>Practice saying the languages you speak.</i>
          </c.P>
        </div>
      );
    };

    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.Bookrow center>{image({ caption: '我会写“中文”！'})}</c.Bookrow>
          <Objective
            text="How to say that you can speak Chinese"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>These two initials illustrate an important contrast between different consonants in English and Chinese: <i>voiced</i> versus <i>unvoiced</i>, and <i>aspirated</i> versus <i>non-aspirated</i>.</c.P>
          <c.P>Let us begin by looking at voicing. A sound is called voiced if the vocal chords vibrate when you pronounce it. All vowels are voiced: if you hold your fingers softly against your Adam’s apple and pronounce the English vowels, you can feel the vibration.</c.P>
          <c.P>Some consonants are also voiced: you can feel a vibration when pronouncing the <i>m</i>-sound; but if you pronounce the <i>s</i>-sound there is no vibration, which means that s is unvoiced (to hear this, don’t say the name of the letter “ess”; just pronounce the <i>s</i>-sound itself, “sss”).</c.P>
          <c.P>In English, <i>d</i> is voiced: the vocal chords vibrate if you pronounce the <i>d</i> sound without any vowel following it. English <i>t</i>, on the other hand, is unvoiced: there is no vibration if you pronounce the <i>t</i> sound on its own.</c.P>
          <c.P>
            In Chinese, <b>d-</b> and <b>t-</b> are both unvoiced! The difference between Chinese <b>d-</b> and <b>t-</b> instead lies in what’s called <i>aspiration</i>: the breath expelled as you pronounce the sound. The initial <b>d-</b> is pronounced a bit like English <i>t</i> in <i>stun</i>, with little aspiration. Chinese <b>t-</b> is pronounced more like the English <i>t</i> in <i>ton</i>, but even more forcefully, with very strong aspiration. You can hear this difference if you listen carefully:
          </c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                // url: SOME_URL,
                text: '耷，她'
              }
            }}
          >
            <b>dā, tā</b>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                // url: SOME_URL,
                text: '大，踏'
              }
            }}
          >
            <b>dà, tà</b>
          </c.Bookrow>
          <c.P>If you hold your palm up facing your mouth at a distance of an inch or two, you should be able to feel the strong flow of air against your hand as you pronounce <b>t-</b>. Chinese <b>d-</b>, on the other hand, gives very little flow of air, or none at all.</c.P>
          <c.P>To summarize: in English, <i>d</i> is voiced but non-aspirated, and <i>t</i> is aspirated but unvoiced. The biggest difference is in the voicing. Chinese is more or less the opposite: here, <i>both</i> sounds are unvoiced, so the <i>only</i> difference between <b>d-</b> and <b>t-</b> lies in the amount of aspiration.</c.P>
          <c.P>For the beginner, this can make Chinese <b>d-</b> and <b>t-</b> harder to tell apart than English <i>d</i> and <i>t</i>: in English, there are two differences between these sounds, but in Chinese, there is only one. There are many other Chinese consonant pairs where the only difference is the amount of aspiration. Because of this, being able to tell the difference is important for oral comprehension; and as you master aspiration, you will start to sound more and more like a native.</c.P>
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
                elementId: practiceIds[0]
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
                elementId: practiceIds[1]
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
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          <c.PartTitle name="dialogs" />
          <c.Bookrow center marginTop={30}>{image({ caption: '你是美国人吗？我是英国人。'})}</c.Bookrow>
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
