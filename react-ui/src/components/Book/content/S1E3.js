import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import { Row } from '../../Shared';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle anchor="new-characters">NEW CHARACTERS</c.PartTitle>
          <c.P><i>Practice the stroke order animations. Some characters have material on Stories and Calligraphy.</i></c.P>
          {newCharacters()}
          <c.PartTitle>PATTERNS</c.PartTitle>
          {grammarTitle()}
          <c.P>In this episode, we meet another of the three structural particles, 得. Since all three are pronounced the same, but written with different characters, we will call this one <b>de̊.3</b>.</c.P>
          <c.P>A common function of 得 <b>de̊.3</b> is to link a verb with an adverb specifying <i>how</i> something is done:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>If you compare this pattern with an example we have learned earlier, you will see that they both mean more or less the same thing but have different grammatical structures:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>你的中文很好。</c.Char> <c.Meaning>Your Chinese is good.</c.Meaning></Row></li>
              <li><Row><c.Char>你中文说得很好。</c.Char> <c.Meaning>You speak Chinese very well.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>The first sentence says something about <i>your</i> Chinese; the second about how you <i>speak</i> Chinese. In the first pattern, 很好 is an adjective, <i>good</i>; in the second it has become an adverb, <i>well</i>.</c.P>
          <c.P>得 <b>de̊.3</b> is mandatory in this pattern; you cannot just say "说很好". The pattern can always be understood as a <i>state</i> - how the action is or was generally performed - rather than just an <i>action</i>:</c.P>
          {example(3, { audio: true })}
          <c.P>As we see, in both patterns above, the speaker is emphasizing the general states of the listener's "speaking Chinese well" and "ability to learn quickly".</c.P>
          <c.P>If the verb has an object, the verb is often repeated in a Topic-Comment pattern:</c.P>
          {example(4, { audio: true })}
          {grammarTitle()}
          <c.P>English tends to use different verbs to describe an action and its result: <i>look</i> and <i>see</i>, for example. Chinese uses the same verb for both, just appending the <i>result</i> to the original verb. This gives a new compound verb, <i>doing something so that something happens</i>, composed of the "action" and the "result" (often called the <i>verb</i> and the <i>verb complement</i>):</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>看</c.Char> <c.Pinyin><b>kàn</b></c.Pinyin> <c.Meaning><i>look</i></c.Meaning></Row></li>
              <li><Row><c.Char>看见</c.Char> <c.Pinyin><b>kànjiån</b></c.Pinyin><c.Meaning><i>see</i></c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Another example is <i>listen</i> and <i>hear</i></c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>听</c.Char> <c.Pinyin><b>tīng</b></c.Pinyin> <c.Meaning><i>listen</i></c.Meaning></Row></li>
              <li><Row><c.Char>听见</c.Char> <c.Pinyin><b>tīngjiån </b></c.Pinyin><c.Meaning><i>hear</i></c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>
            Another example is 看懂 <b>kàndǒng</b> which is a compound of 看 <b>kàn</b> which can also mean <i>read</i> and 懂 <b>dǒng</b> <i>understand</i>. It literally means <i>understand by reading</i> or <i>read so I understand</i>. English doesn't have an equivalent word, so we usually translate 看懂 <b>kàndǒng</b> as just <i>understand</i>. But Chinese makes a difference between verbs such as 听懂 <b>tīngdǒng</b> <i>understanding by hearing</i> (for example what somebody is saying)
            and 看懂 <b>kàndǒng</b> <i>understanding by reading</i>, even if we would translate them the same way in English.
          </c.P>
          <c.P>When 得 <b>de̊.3</b> is inserted between a verb and its complement,  the meaning becomes <i>be able to</i>. This is called the <i>potential</i> form of the verb:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>看得见</c.Char> <c.Pinyin><b>kànde̊.3jiån</b></c.Pinyin> <c.Meaning><i>be able to see</i></c.Meaning></Row></li>
              <li><Row><c.Char>听得见</c.Char> <c.Pinyin><b>tīngde̊.3jiån</b></c.Pinyin> <c.Meaning><i>be able to hear</i></c.Meaning></Row></li>
              <li><Row><c.Char>听得懂</c.Char> <c.Pinyin><b>tīngde̊.3dǒng</b></c.Pinyin> <c.Meaning><i>be able to understand(by listening) </i></c.Meaning></Row></li>
              <li><Row><c.Char>看得懂</c.Char> <c.Pinyin><b>kànde̊.3dǒng</b></c.Pinyin> <c.Meaning><i>be able to understand (by reading)</i></c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>We can also replace 得 <b>>de̊.3</b> in this pattern with 不 <b>bù</b> to get a <i>negative potential form</i> meaning <i>not able to</i>:</c.P>
          {example(8, { audio: true })}
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          <c.P>A very common verb complement is 起 <b>qǐ</b>, which means <i>up</i> but only appears in compound words in modern Chinese:</c.P>
          {example(11, { audio: true })}
          <c.P>Another common complement is 完 <b>wán</b>, <i>end</i>, <i>finish</i>:</c.P>
          {example(12, { audio: true })}
          <c.P>Some verbs exist only - or mainly - in this potential form. The basic form 看起 <b>kànqǐ</b>, for example, is very rare, but its potential forms are common:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>看得起</c.Char><c.Pinyin>kànde̊qǐ</c.Pinyin> <c.Meaning>have a good opinion of, think highly of (somebody)</c.Meaning></Row></li>
              <li><Row><c.Char>看不起</c.Char><c.Pinyin>kànbůqǐ </c.Pinyin> <c.Meaning>look down on, despise</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          {example(13, { audio: true })}
          <c.P>The most common Chinese expression for <i>I'm sorry</i> has this form; it literally means <i>(I am) not able to answer up (to your expectations):</i></c.P>
          <c.P>对不起 <b>duìbůqǐ</b> <i>sorry</i></c.P>
          <c.P>This expression can also be used in the sense of <i>letting someone down</i> or <i>not answering up to someone's (rightful) expectations:</i></c.P>
          {example(14, { audio: true })}
          <c.P>Another common expression which has a similar form is 怪不得 <b>guàibůdé</b>, <i>no wonder</i>:</c.P>
          {example(15, { audio: true })}
          {grammarTitle()}
          <c.P>Chinese has relatively few family names - but there are still some names that are pronounced the same although they are written with different characters. So when people introduce themselves, it is sometimes necessary to specify which of two possibilities the speaker has in mind. One way of doing this is to list the character components of the name. For example, somebody with the surname Li could say <i>the family name <b>Lǐ</b> consisting of the characters <b>mù</b> and <b>zǐ</b></i>:</c.P>
          {example(16, { audio: true })}
          {grammarTitle()}
          <c.P>A common use of the <b>de̊.1</b> construction is to define which Chinese character a speaker has in mind. Let’s again take 李玉 <b>Lǐ Yù</b> as an example.  Since 李 <b>Lǐ</b> is one of the most common family names in China, most people will get the character right - so the explanation in pattern 3:7 is not always necessary. Given names, on the other hand, can be almost anything - and since there are many characters pronounced <b>yù</b>, <b>Lǐ Yù</b> cannot assume that a new acquaintance will understand her name just by hearing it spoken.</c.P>
          <c.P>One way to explain it would be to write it down - and you can often see Chinese people writing characters with a finger in the palm of their hand to show which character they have in mind. But it is also possible to describe a character without writing, by using a 的 <b>de̊.1</b> construction with a common word containing the character. In <b>Lǐ Yù</b>’s case, the <b>yù</b> in her name means <i>jade</i>, but in modern Chinese the more common word for <i>jade</i> is 美玉 <b>měiyù</b>. So when she explains that the <b>yù</b> in her name is <i>“the yù of měiyù”</i>, a Chinese listener will immediately know which character she means:</c.P>
          {example(17, { audio: true })}
          <c.P>It is not just names that are explained this way; the same principle can be used to specify which characters make up an unusual word by listing a more common word for each character.</c.P>
          {grammarTitle()}
          <c.P>The Chinese numbers for one, two, three are 一 <b>yī</b>，二 <b>èr</b>, 三 <b>sān</b>. But in front of measure words, Chinese uses 两 <b>liǎng</b> instead of 二 <b>èr</b>. This is just something we have to remember:</c.P>
          {example(18, { audio: true })}
          {example(19, { audio: true })}
          <c.PartTitle>会话：我姓李，木子李</c.PartTitle>
          <c.P color={'#C0504D'}><i>At the party, another acquaintance of Colleen joins the group. She tries to explain her name to Marvin, who is a bit confused.</i></c.P>
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
