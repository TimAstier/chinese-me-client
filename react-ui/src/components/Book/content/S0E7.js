import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
// import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
// import { Row } from '../../Shared';
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
            text="How to say when you were born and to which Chinese zodiac animal you belong"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>We have previously seen that the finals -i, -ü and -ie are spelled with a y when there is no initial in the syllable: <b>yi</b>, <b>yu</b> and <b>yie</b>.</c.P>
          <c.P>The same is true for <b>-üe</b>, which is written <b>yue</b>. This is a combination of two spelling rules: <b>i</b> and <b>ü</b> are always preceded by y if they come first in a syllable, and <b>ü</b> is in this case spelled <b>u</b>, without the umlaut dots.</c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>In Western languages, comparing two things means learning different forms of words ("<i>good, better, best</i>"). Chinese uses a simple Topic-Comment pattern with the "comparison" word <c.Chinese>比</c.Chinese> <b>bǐ</b> inserted between the things you want to compare:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
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
          <c.P>If you want to specify the degree of comparison, you add this at the end according to the following pattern:</c.P>
          {example(3, { audio: true })}
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
          <c.P>Note that <c.Chinese>大</c.Chinese> <b>dà</b> <i>big</i> is more common than <c.Chinese>老</c.Chinese> <b>lǎo</b> <i>old</i> when you simply want to state the objective fact that you are older than someone. If you say <c.Chinese>我比你老三岁</c.Chinese>, you are emphasizing the fact that you are older (as in more tired, more experienced or more wrinkled) than the person you are talking to.</c.P>
          {grammarTitle()}
          <c.P>Chinese dates are logically structured according to the formula YEAR-MONTH-DAY:</c.P>
          {example(4, { audio: true })}
          <c.P>The date can be denoted by <c.Chinese>号</c.Chinese> <b>hào</b> <i>number</i> or <c.Chinese>日</c.Chinese> <b>rì</b> <i>day</i>:</c.P>
          {example(5, { audio: true })}
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
          {grammarTitle()}
          <c.P>In China, time is divided into twelve-year cycles; each year in the cycle is the year of a zodiac animal: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog and pig. Being born in a particular animal is called <c.Chinese>属</c.Chinese> <b>shǔ</b> <i>to belong to</i> that animal:</c.P>
          {example(6, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          <c.PartTitle name="dialogs" />
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
          >
            <i>Help Wang Yi say how old she is.</i>
          </c.P>
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          {dialog(2, { sentenceType: 'translation', displayNames: false })}
          {dialog(3, { sentenceType: 'chinese', displayNames: false })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Help Wang Yuguo say how old he is.</i>
          </c.P>
          {dialog(3, { sentenceType: 'translation', displayNames: false })}
          <c.P
            buttonOptions={{
              type: 'askUserSettings'
            }}
          >Now, go to the web and input your own birthdate to practice presenting yourself.
          </c.P>
          {dialog(4, { sentenceType: 'chinese', displayNames: false })}
          {dialog(5, { sentenceType: 'chinese', displayNames: false })}
          {dialog(6, { sentenceType: 'chinese', displayNames: true })}
          {dialog(7, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="culture" />
          <c.PartTitle type="secondary">The personalities of Chinese zodiac animals</c.PartTitle>
          <c.P>Each animal of the Chinese zodiac is said to have certain characteristics:</c.P>
          <c.P>- Rat: quick-witted, clever, charming</c.P>
          <c.P>- Ox: solid, detail-oriented, hardworking</c.P>
          <c.P>- Tiger: ambitious, courageous, warmhearted</c.P>
          <c.P>- Rabbit: gregarious, popular, compassionate, sincere</c.P>
          <c.P>- Dragon: powerful, energetic, charismatic</c.P>
          <c.P>- Snake: seductive, introverted, generous, hardworking</c.P>
          <c.P>- Horse: energetic, self-reliant, good with money</c.P>
          <c.P>- Goat: creative, thinkers, unorganized, high-strung and insecure</c.P>
          <c.P>- Monkey: upbeat, good at listening, lack self-control</c.P>
          <c.P>- Rooster: practical, resourceful, analytical, honest, perfectionist</c.P>
          <c.P>- Dog: loyal, faithful, honest, distrustful, sensitive</c.P>
          <c.P>- Pig: nice, good-mannered, tasteful, helpful</c.P>
          <c.P>Some animals are more popular than others; a lot more babies are born in such years because many Chinese parents try to time having children then.</c.P>
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review practiceId={practiceIds[0]} />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
