import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';

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
            <i>Input why you are learning Chinese.</i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            <i>Practice saying why you are learning Chinese.</i>
          </c.P>
        </div>
      );
    };
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.Bookrow center>{image({ caption: '你为什么学中文？'})}</c.Bookrow>
          <Objective
            text="Explaining why you want to study Chinese"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>When there is no initial, the final <b>-ui</b> is spelled <b>wei</b> in pīnyīn. So <b>huì</b> and <b>guì</b> are pronounced exactly as if they had been spelled <i>hwèi</i> and <i>gwèi</i>.</c.P>
          <c.P>Compare the sounds:</c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('wei4')
              }
            }}
          ><b>wèi</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('hui4')
              }
            }}
          ><b>huì</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('gui4')
              }
            }}
          ><b>guì</b></c.P>
          {pronunciationTitle()}
          <c.P>We have already learned that the final <b>-üe </b> is spelled <b>-ue</b>, without umlaut dots, when there is no initial: <b>yue</b>. The same is true after the initials <b>x</b>-, <b>j</b>- and <b>q</b>-.</c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yue4')
              }
            }}
          ><b>yuè</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('xue2')
              }
            }}
          ><b>xué</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('jue2')
              }
            }}
          ><b>jué</b></c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>The most basic meaning of <c.Chinese>想</c.Chinese> <b>xiǎng</b> is <i>think</i>. Just as the English word <i>think</i>, it can also mean <i>believe</i>, <i>consider</i>:</c.P>
          {example(1, { audio: true })}
          <c.P>It can also mean <i>think about</i>, <i>miss</i>:</c.P>
          {example(2, { audio: true })}
          <c.P>Even more commonly, it can be used before another verb in the meaning <i>want to</i>, <i>would like to</i> or <i>plan to</i>:</c.P>
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
          <c.P>Chinese has direct equivalents of English question words like <i>what</i>, <i>why</i>, <i>how</i> and so on. Just as with <c.Chinese>吗</c.Chinese> <b>må</b>, the word order of a question is the same as that of a statement:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          <c.P>The transcription of <c.Chinese>什么</c.Chinese> can be confusing. Most dictionaries  just combine the pīnyīn for the individual characters, which results in "shénme̊" or "shénmo̊". But in natural speech, <c.Chinese>什么</c.Chinese> is always pronounced <b>shémme̊</b> – without any n-sound.</c.P>
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
          <c.P>One of the most common question words is <c.Chinese>为什么</c.Chinese> <b>wèishe̊mme̊</b> <i>why?</i> The character <c.Chinese>为</c.Chinese> <b>wèi</b> means <i>for</i>, <i>to some purpose</i>, so the literal translation of <c.Chinese>为什么</c.Chinese> <b>wèishe̊mme̊</b> is <i>for what</i>:</c.P>
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          <c.P><c.Chinese>为什么</c.Chinese> <b>wèishe̊mme̊</b> can also be placed at the beginning of the whole sentence:</c.P>
          {example(9, { audio: true })}
          <c.P>As with <c.Chinese>什么</c.Chinese> <b>shémme̊</b>, the transcription of <c.Chinese>为什么</c.Chinese> in most dictionaries is confusing. You will find it written "wèishénme̊" or "wèishénmo̊", but in natural speech <c.Chinese>为什么</c.Chinese> is always pronounced <b>wèishe̊mme̊</b> with a long <i>m</i> sound and neutral tone on the two last syllables.</c.P>
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
          <c.P>The same word in one language can often be translated into many different words in another. The word <c.Chinese>好</c.Chinese> <b>hǎo</b>, for example, basically means <i>good</i>. But depending on the context, it often makes more sense to translate it using other adjectives:</c.P>
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          <c.P>It can also be used at the beginning of a sentence as a mood word meaning <i>OK, good then</i>:</c.P>
          {example(12, { audio: true })}
          <c.P>In idiomatic expressions, there is no need to translate word for word at all. The most common Chinese greeting, for example, is basically the same as just saying <i>hi!</i> or <i>hello!</i> in English:</c.P>
          {example(13, { audio: true })}
          <c.P>In this lesson, <c.Chinese>好</c.Chinese>, <b>hǎo</b> also appears in the sense <i>easy (to do)</i>, as in the word <c.Chinese>好学</c.Chinese>, <b>hǎoxué</b>, <i>easy to learn</i>, literally GOOD (TO) LEARN:</c.P>
          {example(14, { audio: true })}
          <c.P>Finally, we saw in Lesson 9 that the character <c.Chinese>好</c.Chinese>, when pronounced <b>hào</b>, can mean <i>to like</i>. This meaning never appears on its own – only as  part of more complex, "compound" words. In this lesson, we meet another example:</c.P>
          <c.Bookrow>
            <c.Char>好学</c.Char>
            <c.Pinyin>hàoxué</c.Pinyin>
            <c.Meaning>diligent, studious</c.Meaning>
            <c.Meaning>(LIKE-TO-STUDY)</c.Meaning>
          </c.Bookrow>
          <c.P>So when we read the characters <c.Chinese>好学</c.Chinese>, we have to decide from context whether <b>hao</b> should be pronounced with Tone 3 or Tone 4: <b>hǎoxué</b> <i>easy (to learn)</i> or <b>hàoxué</b> <i>diligent</i>.</c.P>
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
          <c.PartTitle name="dialog_zh" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(2, { sentenceType: 'chinese', displayNames: true, specialIntro })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
