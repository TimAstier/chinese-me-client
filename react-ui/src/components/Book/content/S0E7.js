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
      practiceIds, newWords, pronunciationTitle, image } = this.props;

    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <Objective
            text="How to say when you were born and to which Chinese zodiac animal you belong"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>The Chinese initial <b>d-</b> is pronounced like an English <i>t</i>, but with less flow of air. Hold your palm up facing your mouth at a distance of an inch or two and pronounce English <i>d</i> and <i>t</i>. You can feel that there is a much weaker flow of air when you pronounce <i>d</i> than when you pronounce <i>t</i>. Chinese <b>d-</b> is pronounced like an English <i>t</i> without the flow of air! Listen:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('da4')
              }
            }}
          >
            <b>dà</b>
          </c.Bookrow>
          {pronunciationTitle()}
          <c.P>We have previously seen that when there is no initial in the syllable, <b>-ü</b> is spelled with a <b>y-</b> and without dots over u: <b>yu</b>.</c.P>
          <c.P>The same is true for <b>-üe</b>, which is written <b>yue</b>. Remember that this is a combination of two spelling rules: (1) <b>-i</b> and <b>-ü</b> are always preceded by <b>y-</b> if they come first in a syllable, and (2) <b>ü</b> is in this case spelled <b>u</b>, without the umlaut dots.</c.P>
          <c.P>Rule (1) also applies to the final <b>-iang</b>, which is written <b>yang</b>.</c.P>
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
                elementId: practiceIds[0]
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
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          <c.P>Note that <c.Chinese>大</c.Chinese> <b>dà</b> <i>big</i> is more common than <c.Chinese>老</c.Chinese> <b>lǎo</b> <i>old</i> when you simply want to state the objective fact that you are older than someone. If you say <c.Chinese>我比你老三岁</c.Chinese>, you are emphasizing the fact that you are older (as in more tired, more experienced or more wrinkled) than the person you are talking to.</c.P>
          {grammarTitle()}
          <c.P>Chinese dates are logically structured according to the formula YEAR-MONTH-DAY.</c.P>
          <c.P><i>Years</i> are just lists of digits followed by the character <c.Chinese>年</c.Chinese> <b>nián</b> <i>year</i>: ONE-NINE-NINE-FOUR or just NINE-FOUR for 1994 and TWO-ZERO-ZERO-THREE or ZERO-THREE for 2003. <i>Zero</i> is pronounced <b>líng</b>.</c.P>
          <c.P>
            <i>
              Months
            </i> are the numbers <i>one</i> to <i>twelve</i> followed by <c.Chinese>月</c.Chinese> <b>yuè</b> <i>month</i>: <c.Chinese>一月</c.Chinese> <b>yīyuè</b> ONE-MONTH for <i>January</i>; <c.Chinese>二月</c.Chinese> <b>èryuè</b> TWO-MONTH for <i>February</i> and so on.
          </c.P>
          <c.P><i>Days</i> are numbers followed by either <c.Chinese>号</c.Chinese> <b>hào</b> <i>number</i> or  <c.Chinese>日 </c.Chinese> <b>rì</b> <i>day</i>.</c.P>
          {example(4, { audio: true })}
          <c.P>The date can be denoted by <c.Chinese>号</c.Chinese> <b>hào</b> <i>number</i> or <c.Chinese>日</c.Chinese> <b>rì</b> <i>day</i>:</c.P>
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
          {grammarTitle()}
          <c.P>The Chinese year starts at the Lunar New Year, which, depending on the year, falls on a date between January 21 and February 20. Time was traditionally divided into twelve-year cycles, and each year in a cycle is the year of a zodiac animal: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog and pig. Being born in a particular animal is called <c.Chinese>属</c.Chinese> <b>shǔ</b> <i>to belong to</i> that animal.</c.P>
          {example(6, { audio: true })}
          {/* <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
            >
            <i>Practice.</i>
          </c.P> */}
          <c.Bookrow center marginTop={30}>{image({ maxWidth: 550, caption: 'ADD SOME TEXT.'})}</c.Bookrow>
          <c.PartTitle name="dialogs" />
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.Bookrow center marginTop={30}>{image({ maxWidth: 400, caption: 'ADD SOME TEXT.'})}</c.Bookrow>
          {/* <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
            >
            <i>Help Wang Yi say how old she is.</i>
          </c.P> */}
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          {dialog(2, { sentenceType: 'translation', displayNames: false })}
          {dialog(3, { sentenceType: 'chinese', displayNames: false })}
          {dialog(3, { sentenceType: 'translation', displayNames: false })}
          {/* <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
            >
            <i>Help Wang Yuguo say how old he is.</i>
          </c.P> */}
          {dialog(4, { sentenceType: 'chinese', displayNames: false })}
          {dialog(5, { sentenceType: 'chinese', displayNames: false })}
          {dialog(6, { sentenceType: 'chinese', displayNames: true })}
          {dialog(7, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="culture" />
          <c.PartTitle type="secondary">The personalities of Chinese zodiac animals</c.PartTitle>
          <c.P>Each animal of the Chinese zodiac is said to have certain characteristics:</c.P>
          <c.P><Row>•<c.Space width={20}/> Rat: quick-witted, clever, charming</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Ox: solid, detail-oriented, hardworking</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Tiger: ambitious, courageous, warmhearted</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Rabbit: gregarious, popular, compassionate, sincere</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Dragon: powerful, energetic, charismatic</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Snake: seductive, introverted, generous, hardworking</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Horse: energetic, self-reliant, good with money</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Goat: creative, thinkers, unorganized, high-strung and insecure</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Monkey: upbeat, good at listening, lack self-control</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Rooster: practical, resourceful, analytical, honest, perfectionist</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Dog: loyal, faithful, honest, distrustful, sensitive</Row></c.P>
          <c.P><Row>•<c.Space width={20}/> Pig: nice, good-mannered, tasteful, helpful</Row></c.P>
          <c.P>Some animals are more popular than others; a lot more babies are born in such years because many Chinese parents try to time having children then.</c.P>
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
