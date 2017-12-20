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
          <c.P>Chinese has three so-called <i>structural</i> particles, all pronounced <b>de̊</b>. The first of these particles is the most common character in the entire language; it makes up about 5% of a typical text. Since the pronunciation is the same as the other structural particles, we will write this one with the number 1 - <b>de̊.1</b> - in pīnyīn.</c.P>
          <c.P>Using 的 <b>de̊.1</b> is not always mandatory; you will recognize some of the examples below from earlier texts, where they appeared without the 的 <b>de̊.1</b>. In grammar point (B), we will explain this in more detail.</c.P>
          <c.P>The simplest use of 的 <b>de̊.1</b> is to say that a thing or a person “belongs” to something else. In English, this "possessive" form can often be translated using an <i>s</i> with an apostrophe, <i>‘s</i>:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>If a Chinese personal pronoun is followed by <b>de̊.1</b>, it becomes the equivalent of an English possessive pronoun like <i>my</i>, <i>your</i>, <i>his</i> and <i>her</i>:</c.P>
          {example(3, { audio: true })}
          <c.P>Each one of these 的, <b>de̊.1</b> phrases can be the Topic of a Topic-Comment pattern:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>As usual, the word order remains the same in questions:</c.P>
          {example(6, { audio: true })}
          <c.P>Just as in English, you can leave out the noun:</c.P>
          {example(7, { audio: true })}
          {grammarTitle()}
          <c.P>As we mentioned above, using 的 <b>de̊.1</b> is not always necessary. The following two sentences, for example, mean exactly the same thing:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>马文中文很好。</c.Char> <c.Pinyin><b>Mǎ Wén zhōngwén hěn hǎo.</b></c.Pinyin> <c.Meaning>MA WEN: CHINESE (VERY) GOOD.</c.Meaning></Row></li>
              <li><Row><c.Char>马文的中文很好。</c.Char> <c.Pinyin><b>Mǎ Wén de̊.1 zhōngwén hěn hǎo.</b></c.Pinyin> <c.Meaning>MA WEN'S CHINESE: (VERY) GOOD.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>We can analyze the first sentence, which we have already encountered in earlier lessons, by seeing YOU as the Topic and CHINESE VERY GOOD as the Comment. In the second sentence, we insert 的 <b>de̊.1</b> to create the Topic YOU'S CHINESE with the comment VERY GOOD</c.P>
          <c.P>With personal pronouns, 的 <b>de̊.1</b> is often optional:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我生日是1983年6月21日。</c.Char></Row></li>
              <li><Row><c.Char>我的生日是1983年6月21日。</c.Char></Row></li>
              <li><Row><c.Char>她是我朋友。</c.Char></Row></li>
              <li><Row><c.Char>她是我的朋友。</c.Char></Row></li>
            </c.Ul>
          </c.Bookrow>
          {grammarTitle()}
          <c.P>有 <b>yǒu</b> can mean either <i>to have</i>, or <i>there is</i>, depending on context. After a noun or pronoun, it means <i>have</i>:</c.P>
          {example(8, { audio: true })}
          {example(9, { audio: true })}
          <c.P>有 <b>yǒu</b> is also used in many words, for example 有名 <b>yǒumíng</b> <i>famous</i> (HAVE NAME).</c.P>
          {grammarTitle()}
          <c.P>有 <b>yǒu</b> is not negated with 不 <b>bù</b>. Instead, Chinese uses either 没有 <b>méiyǒu</b> or just 没 <b>méi</b> to say <i>not have</i>, <i>does not exist</i> or <i>there is no</i>.</c.P>
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          {grammarTitle()}
          <c.P>As usual, you can formulate questions with the question particles:</c.P>
          {example(12, { audio: true })}
          <c.P>Or you can give both alternatives:</c.P>
          {example(13, { audio: true })}
          <c.PartTitle>会话:你的中文很好</c.PartTitle>
          <c.P color={'#C0504D'}><i>Marvin's new friend Wang Yuguo introduces Marvin to his Japanese teacher, Meizi. They are all impressed by Colleen's language skills.</i></c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
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
