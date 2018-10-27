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
            text="Talking about language studies."
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            We have already learned that many Chinese consonant pairs differ only in aspiration. If you hold the palm of your hand up in front of your mouth, you can feel the strong puff of air following the aspirated initial <b>ch-</b>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('chang2')
              }
            }}
          ><b>cháng</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('cheng2')
              }
            }}
          ><b>chéng</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('chi1')
              }
            }}
          ><b>chī</b></c.P>
          <c.P>
            There should be very little air flow when you pronounce <b>zh-</b>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zhang1')
              }
            }}
          ><b>zhāng</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zhong1')
              }
            }}
          ><b>zhōng</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zhi4')
              }
            }}
          ><b>zhì</b></c.P>
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
            These two initials respectively sound like a heavily aspirated <b>t-</b> and an unaspirated <b>d-</b> followed by <b>s</b>. Hold the palm of your hand up in front of your mouth to check that you get the aspiration right:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('can1')
              }
            }}
          ><b>cān</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('cai4')
              }
            }}
          ><b>cài</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zan1')
              }
            }}
          ><b>zān</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zai4')
              }
            }}
          ><b>zài</b></c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Read aloud and compare with the model voice.</i>
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            The words <c.Chinese>来</c.Chinese> <i>come</i> and <c.Chinese>去</c.Chinese> <i>go</i> can be used much the same as in English to denote movement <i>to</i> or <i>away from</i> the speaker:
          </c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>
            Note that in Chinese, you do not need any preposition like <i>to</i> or <i>from</i> after these verbs:
          </c.P>
          {example(3, { audio: true })}
          <c.P>
            In addition to their basic function as verbs of direction, both of them can be used as verb complements with neutralized tone. Together with the verb <c.Chinese>过</c.Chinese> <b>guò</b> which can mean <i>cross</i> or <i>pass</i>, they mean <i>come over</i>:
          </c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>
            But they can also be used in many other resultative verbs:
          </c.P>
          {example(6, { audio: true })}
          {grammarTitle()}
          <c.P>
            As we have seen, Chinese does not have grammatical tenses. We can see this easily by looking at a simple phrase like:
          </c.P>
          <c.Bookrow flexDirection="column">
            <c.Char>她去中国学汉语。</c.Char>
            <c.Pinyin>tā qù Zhōngguó xué hànyǔ</c.Pinyin>
          </c.Bookrow>
          <c.P>
            This can mean either <i>she is going to China to study Chinese</i> or <i>she went to China to study Chinese</i>. The Chinese phrase gives no information as to whether we are talking about the past or the future.
          </c.P>
          <c.P>
            But tense is only one way of looking at time. Most languages also have something called <i>aspect</i>, which describes <i>the shape</i> of an event. Tense describes <i>when</i> an activity happened; aspect describes <i>how</i> this activity should be seen – as "finishing" or "continuing", being done "once" or "several times" – regardless of whether it happens now, in the past or in the future.
          </c.P>
          <c.P>
            In English, we have an aspect that describes an activity as <i>ongoing</i>. This aspect is signaled by the <i>-ing</i> form of a verb. The phrases <i>he worked</i> and <i>he was working</i>, for example, have the same tense; both are in the past. But they provide different perspectives. We would say <i>worked</i> when the focus is on the action itself: <i>he worked there for three years</i>. The <i>-ing</i> form of the verb is used for an activity that is just the ongoing background for some more significant event: <i>he was working on his book when the neighbor knocked on the door</i>. How we see the event doesn't influence tense: <i>he is working</i>, he was working and <i>he will be working</i> are all "ongoing" events, even though they are in the present, past and future.
          </c.P>
          <c.P>
            Chinese has several particles for marking aspect. Perhaps the easiest one is <c.Chinese>过</c.Chinese>, which signals that an action has taken place <i>at least once</i>. Note that when it is used as a particle, the tone on <c.Chinese>过</c.Chinese> is neutralized: <b>guo̊</b>:
          </c.P>
          {example(7, { audio: true })}
          <c.P>
            <c.Chinese>过</c.Chinese> <b>guo̊</b> tells the listener that the person we are talking about has <i>been at least once</i> to China, that she has had the <i>experience</i> of going to China; <c.Chinese>过</c.Chinese> <b>guo̊</b> is said to signal <b>experiential</b> aspect; note that the tone is neutralized.
          </c.P>
          <c.P>
            Let's look at another example: if you tell someone that you "have read" a particular book, you mean that you have <i>read it at least once</i>, that you have <i>had the experience</i> of reading it. In Chinese, you would typically use <c.Chinese>过</c.Chinese> <b>guo̊</b> here:
          </c.P>
          {example(8, { audio: true })}
          <c.P>
            Similarly, if you want to ask someone if they have <i>ever considered</i> something, or if a thought <i>has occurred</i> to them, you can say:
          </c.P>
          {example(9, { audio: true })}
          <c.P>
            Somewhat counter-intuitively, it is possible to ask someone if they have <i>ever been</i> somewhere even if you are both in the very place you are asking about. The meaning then becomes "have you (ever) been here <i>before</i>":
          </c.P>
          {example(10, { audio: true })}
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
            We cannot use <c.Chinese>不</c.Chinese> <b>bù</b> to negate a sentence with the experiential aspect marker <c.Chinese>过</c.Chinese> <b>guo̊</b>. Instead, we use <c.Chinese>没</c.Chinese> <b>méi</b> or <c.Chinese>没有</c.Chinese> <b>méiyǒu</b>. Negated sentences with <c.Chinese>过</c.Chinese> <b>guo̊</b> signal that something has <i>never</i> occurred or been experienced:
          </c.P>
          {example(11, { audio: true })}
          {example(12, { audio: true })}
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
            <c.Chinese>好</c.Chinese> <b>hǎo</b> can be used as a general verb complement signalling accomplishment:
          </c.P>
          {example(13, { audio: true })}
          {example(14, { audio: true })}
          <c.P>
            In the same way, <c.Chinese>会</c.Chinese> <b>huì</b> can be used as a complement meaning <i>to master something</i>:
          </c.P>
          {example(15, { audio: true })}
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
