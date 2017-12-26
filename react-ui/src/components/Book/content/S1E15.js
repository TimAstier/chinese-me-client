import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import { Row } from '../../Shared';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle anchor="new-characters">NEW CHARACTERS</c.PartTitle>
          <c.P><i>Practice the stroke order animations. Some characters have material on Stories and Calligraphy.</i></c.P>
          {newCharacters()}
          <c.PartTitle>PATTERNS</c.PartTitle>
          {grammarTitle()}
          <c.P>We have already encountered 就 <b>jiù</b> as a synonym for 只 <b>zhǐ</b> <i>only</i>. But this is just one of a much wider range of uses.</c.P>
          <c.P>The basic meaning of 就 <b>jiù</b> is <i>as a result</i> or <i>as soon as... then</i>.</c.P>
          {example(1, { audio: true })}
          <c.P>If the pattern means that something happens <i>as soon as some other action is completed</i>, this action can be preceded by 一 <b>yī</b>:</c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>If there is no verb complement signalling completion, 一 <b>yī</b> is mandatory in this pattern:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>就 <b>jiù</b> can also be combined with words meaning <i>if</i>:</c.P>
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>In a pattern with 因为 <b>yīnwe̊i</b>, 就 <b>jiù</b> means <i>so</i>, <i>therefore</i>:</c.P>
          {example(8, { audio: true })}
          <c.P>When it is used for something that has already happened, 就 <b>jiù</b> can also be translated as <i>already</i>:</c.P>
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          {grammarTitle()}
          <c.P><i>O'clock</i> is translated as 点钟 <b>diǎn zhōng</b> which literally means <i>points clock</i>.</c.P>
          <c.P><i>It is</i> can be translated with one of two common patterns:
            - 现在 <b>xiànzài</b> meaning <i>it is now</i>.
            - Sentence-final 了 <b>le.2</b> meaning <i>it has become</i> or <i>it is already</i>.</c.P>
          {example(11, { audio: true })}
          {example(12, { audio: true })}
          <c.P>As usual, if we use the question word 几 to ask <i>what time is it</i>, the word order remains the same:</c.P>
          {example(13, { audio: true })}
          <c.P><i>X minutes past</i> is 分 <b>fēn</b>:</c.P>
          {example(14, { audio: true })}
          <c.P><i>A quarter past</i> is 刻 <b>kè</b> or 十五（分） <b>shíwǔ (fēn)</b>:</c.P>
          {example(15, { audio: true })}
          {example(16, { audio: true })}
          <c.P><i>Half past</i> is translated as 点半 <b>diǎn bàn</b> or 三十 <b>sānshí</b>:</c.P>
          {example(17, { audio: true })}
          {example(18, { audio: true })}
          <c.P>To say <i>a quarter to</i> or <i>x minutes to</i>, we use 差 <b>chà</b> <i>lacking</i>:</c.P>
          {example(19, { audio: true })}
          {example(20, { audio: true })}
          {grammarTitle()}
          <c.P>The word for <i>hour</i> is 钟头 <b>zhōngtóu</b>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>一个钟头</c.Char><c.Pinyin>yíge̊ zhōngtóu</c.Pinyin></Row></li>
              <li><Row><c.Char>半个钟头</c.Char><c.Pinyin>bànge̊ zhōngtóu</c.Pinyin></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>The words for <i>minute</i> and <i>quarter of an hour</i> are:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>一分钟</c.Char><c.Pinyin>yì fēn zhōng</c.Pinyin></Row></li>
              <li><Row><c.Char>一刻钟</c.Char><c.Pinyin>yí kè zhōng</c.Pinyin></Row></li>            </c.Ul>
          </c.Bookrow>
          {example(21, { audio: true })}
          <c.PartTitle>会话：我们喝茶就不吃晚饭了。</c.PartTitle>
          {/* <c.P color={'#C0504D'}><i></i></c.P> */}
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          <c.PartTitle>CULTURE AND SOCIETY</c.PartTitle>
          <c.Bookrow center>{image()}</c.Bookrow>
          <c.PartTitle>NEW VOCABULARY</c.PartTitle>
          {newWords()}
          <c.PartTitle anchor="review">Exercises</c.PartTitle>
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
