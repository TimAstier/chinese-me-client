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
          <c.P>If there is no subject doing the "having", 有 <b>yǒu</b> simply means <i>there is</i>, <i>there exists</i>. Perhaps the simplest example is the one often heard in Chinese restrooms:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>As usual, 有 <b>yǒu</b> is negated with 没 <b>méi</b>:</c.P>
          {example(4, { audio: true })}
          {grammarTitle()}
          <c.P>还 <b>hái</b> is a very common Chinese adverb with several uses. It can be used to mean <i>also</i>. We have previously learned another word for <i>also</i>: 也 <b>yě</b>. But the function of these two words in a sentence is different.</c.P>
          <c.P>也 <b>yě</b> refers to the subject of the sentence, in this case 我 <b>wǒ</b> <i>I</i>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我也会说中文。</c.Char></Row></li>
              <li><Row><c.Pinyin>Wǒ yě huì shuō zhōngwén.</c.Pinyin></Row></li>
              <li><Row><c.Meaning>I, too, can speak Chinese.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>还 <b>hái</b>, on the other hand, refers to the predicate, in this case 中文 <b>zhōngwén</b> <i>Chinese</i>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我还会说中文。</c.Char></Row></li>
              <li><Row><c.Pinyin>Wǒ hái huì shuō zhōngwén.</c.Pinyin></Row></li>
              <li><Row><c.Meaning>I can also speak Chinese.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>So while English uses the same word <i>also</i> in both of these sentences, Chinese differentiates between them:</c.P>
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          {grammarTitle()}
          <c.P>还 <b>hái</b> can also mean that something is <i>still going on</i>, <i>still happening</i>:</c.P>
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          {grammarTitle()}
          <c.P>就 <b>jiù</b> has several meanings. The most simple is as a synonym for 只 <b>zhǐ</b> <i>only, just</i>:</c.P>
          {example(9, { audio: true })}
          {grammarTitle()}
          <c.P>更 <b>gèng</b> means <i>more</i> and is used to say that something is <i>better</i>, <i>larger</i>, and so on:</c.P>
          {example(10, { audio: true })}
          <c.P>最 <b>zuì</b> <i>most</i> is used to form superlatives like <i>best</i>, <i>largest</i>:</c.P>
          {example(11, { audio: true })}
          {grammarTitle()}
          <c.P>In order to ask for a particular item out of several, Chinese uses the question word 哪, pronounced <b>nǎ</b> or <b>něi</b>. As with other question words, the word order is the same in a question as in a statement:</c.P>
          {example(12, { audio: true })}
          <c.P>哪, <b>nǎ/něi</b> can be combined with just a measure word to say <i>which (one)?</i></c.P>
          {example(13, { audio: true })}
          {example(14, { audio: true })}
          <c.PartTitle>会话：</c.PartTitle>
          <c.P color={'#C0504D'}><i>Meizi is showing a photograph of her family to Wang Yuguo and Li Yu. Marvin and Wang Meixin admire the cute kids.</i></c.P>
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
