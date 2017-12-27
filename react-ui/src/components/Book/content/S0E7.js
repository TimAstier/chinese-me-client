import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
// import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
// import { Row } from '../../Shared';
// import insertVariables from '../../../utils/insertVariables';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog,
      practiceIds, newWords } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle type="secondary" anchor="new-characters">New characters</c.PartTitle>
          <c.P>Here are the new characters in this lesson. Click on each character to review the stroke order, or on the brush or history icons to see calligraphy and history videos.</c.P>
          {newCharacters()}
          <c.PartTitle type="secondary">Grammar</c.PartTitle>
          <c.PartTitle type="tertiary">A. Comparison using 比</c.PartTitle>
          <c.P>In Western languages, comparing two things means learning different forms of words ("good, better, best"). Chinese uses a simple Topic-Comment pattern with the "comparison" word 比 <b>bǐ</b> inserted between the things you want to compare:</c.P>
          {example(1, { basic: true, big: true, audio: true })}
          {example(2, { basic: true, big: true, audio: true })}
          <c.P>If you want to specify the degree of comparison, you add this at the end according to the following pattern:</c.P>
          {example(3, { basic: true, big: true, audio: true })}
          <c.P>Note that 大 <b>dà</b> <i>big</i> is more common than 老 <b>lǎo</b> <i>old</i> when you simply want to state the objective fact that you are older than someone. If you say 我比你老三岁, you are emphasizing the fact that you are older (as in more tired, more experienced or more wrinkled) than the person you are talking to.</c.P>
          <c.PartTitle type="tertiary">B. Your animal year according to the Chinese zodiac</c.PartTitle>
          <c.P>In China, time is divided into twelve-year cycles; each year in the cycle is the year of a zodiac animal: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog and pig. Being born in a particular animal is called 属 <b>shǔ</b> <i>to belong to</i> that animal:</c.P>
          {example(4, { basic: true, big: true, audio: true })}
          <c.PartTitle type="secondary">Dialog: 我生日</c.PartTitle>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle type="secondary">Culture and society: "Empty" years</c.PartTitle>
          <c.P>In China, age is stated as [Xu sui!]</c.P>
          <c.PartTitle type="secondary" anchor="review">Exercises</c.PartTitle>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Help Wang Yuguo say how old he is: 我___岁。</i>
          </c.P>
          <c.PartTitle type="secondary">Dialog: 我属马。</c.PartTitle>
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          {dialog(2, { sentenceType: 'pinyin', displayNames: false })}
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
            <i>Help Wang Xiaoyue say how old she is: 我___岁。</i>
          </c.P>
          {dialog(3, { sentenceType: 'pinyin', displayNames: false })}
          {dialog(3, { sentenceType: 'translation', displayNames: false })}
          <c.P
            buttonOptions={{
              type: 'askUserSettings'
            }}
          >Now, go to the web and input your own birthdate to practice presenting yourself.
          </c.P>
          <c.PartTitle type="secondary">Practice: Presentation</c.PartTitle>
          {dialog(4, { sentenceType: 'chinese', displayNames: false })}
          {dialog(5, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle type="secondary">Practice: Role play</c.PartTitle>
          {dialog(6, { sentenceType: 'chinese', displayNames: false })}
          {dialog(7, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle type="secondary">Culture and society: The personalities of Chinese zodiac animals</c.PartTitle>
          <c.P>Each animal of the Chinese zodiac is said to have certain characteristics:</c.P>
          <c.P>•	Rat: quick-witted, clever, charming</c.P>
          <c.P>•	Ox: solid, detail-oriented, hardworking</c.P>
          <c.P>•	Tiger: ambitious, courageous, warmhearted</c.P>
          <c.P>•	Rabbit: gregarious, popular, compassionate, sincere</c.P>
          <c.P>•	Dragon: powerful, energetic, charismatic</c.P>
          <c.P>•	Snake: seductive, introverted, generous, hardworking</c.P>
          <c.P>•	Horse: energetic, self-reliant, good with money</c.P>
          <c.P>•	Goat: creative, thinkers, unorganized, high-strung and insecure</c.P>
          <c.P>•	Monkey: upbeat, good at listening, lack self-control</c.P>
          <c.P>•	Rooster: practical, resourceful, analytical, honest, perfectionist</c.P>
          <c.P>•	Dog: loyal, faithful, honest, distrustful, sensitive</c.P>
          <c.P>•	Pig: nice, good-mannered, tasteful, helpful</c.P>
          <c.P>Some animals are more popular than others; a lot more babies are born in such years because many Chinese parents try to time having children then.</c.P>
          <c.PartTitle type="secondary">New words</c.PartTitle>
          {newWords()}
          <c.PartTitle type="secondary" anchor="review">Exercises</c.PartTitle>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Now, go through the review exercises to practice pronunciation, grammar and character writing. Then do the Exam to progress to the next Lesson.</i>
          </c.P>
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
