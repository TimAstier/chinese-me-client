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
          <c.PartTitle name="characters" />
          <c.P><i>Practice the stroke order animations. Some characters have material on Stories and Calligraphy.</i></c.P>
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>To say that something is located somewhere <i>relative to</i> something else, for example that A is inside B, you use the pattern A 在 B 里:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>The same pattern holds for other relative location words such as <i>outside</i>, <i>on top of</i>, <i>under</i> and so on:</c.P>
          {example(3, { audio: true })}
          {example(4, { audio: true })}
          <c.P>The relative place words are often combined with 面 <b>miàn</b> which literally means <i>face</i>, <i>surface</i>, or 边 <b>biān</b> which means <i>edge</i>. In these patterns, 面 and 边 are pronounced with neutral tone, <b>miån</b> and <b>biån</b>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Meaning>A is in B or A is inside B</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>A 在 B 里</c.Char></Row></li>
              <li><Row><c.Char>A 在 B 里面</c.Char></Row></li>
              <li><Row><c.Char>A 在 B 里边</c.Char></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Meaning>A is outside B</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>A 在 B 外</c.Char></Row></li>
              <li><Row><c.Char>A 在 B 外面</c.Char></Row></li>
              <li><Row><c.Char>A 在 B 外边</c.Char></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Meaning>A is on B or A is on top of B</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>A 在 B 上</c.Char></Row></li>
              <li><Row><c.Char>A 在 B 上面</c.Char></Row></li>
              <li><Row><c.Char>A 在 B 上边</c.Char></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Meaning>A is under B or A below B</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>A 在 B 下</c.Char></Row></li>
              <li><Row><c.Char>A 在 B 下面</c.Char></Row></li>
              <li><Row><c.Char>A 在 B 下边</c.Char></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>In other words, pattern 12:4 could equally well be written 书在桌子上面 or 书在桌子上边.  Whether to use only the location word, or combining it with 面 or 边 in the constructions above is a matter of personal choice. Using only the relative location word without 面 or 边 is perhaps slightly more colloquial, but there is no real difference in meaning.</c.P>
          <c.P>There are, however, some cases where only one combination will do. For example, if you want to say that someone is <i>inside</i>, <i>outside</i>, <i>up on top</i> or <i>down below</i>, without a specific location, only the two-character combination can be used:</c.P>
          {example(5, { audio: true })}
          <c.P>边 <b>biån</b>, but not 面 <b>miån</b>, can be combined with 这 <b>zhèi</b> or or 那 <b>nèi</b> to mean mean <i>over here</i>, <i>on this side</i> and <i>over there</i>, <i>on that side</i>:</c.P>
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>面 <b>miån</b>, but not 边 <b>biån</b>, can be combined with 对 <b>duì</b> to mean <i>opposite</i>:</c.P>
          {example(8, { audio: true })}
          {grammarTitle()}
          <c.P>In addition to their basic meaning <i>on top</i> and <i>under</i>, both 上 <b>shàng</b> and 下 <b>xià</b> can function as the complements of resultative verbs, a bit like English <i>write down</i> and <i>look up</i>. In this function, they are pronounced with neutral tone:</c.P>
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          {example(12, { audio: true })}
          {grammarTitle()}
          <c.P>一下 <b>yíxiå</b> is a common classifier. It can mean <i>a bit</i>, in which it is the same as reduplicating the verb:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>看一下</c.Char><c.Pinyin>kàn yíxiå</c.Pinyin><c.Meaning>have a look</c.Meaning>=<c.Char>看看</c.Char><c.Pinyin>kànkån</c.Pinyin></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Often, this is an idiomatic usage that is not easily translated to English:</c.P>
          {example(13, { audio: true })}
          {grammarTitle()}
          <c.P>In colloquial Chinese, expressions like 我这儿 <b>wǒ zhèr</b> can mean either <i>here with me</i> or <i>here at my place</i>, depending on context:</c.P>
          {example(14, { audio: true })}
          {example(15, { audio: true })}
          {grammarTitle()}
          <c.P>To ask a question about two alternatives, Chinese uses 还是 <b>háishi̊</b> in the following pattern, where the first 是 <b>shì</b> is optional:</c.P>
          {example(16, { audio: true })}
          {example(17, { audio: true })}
          <c.P>Sometimes, a 呢 <b>ne̊</b> is added to one or both of the alternatives:</c.P>
          {example(18, { audio: true })}
          {example(19, { audio: true })}
          {grammarTitle()}
          <c.P>The character 还 can also be pronounced <b>huán</b>, meaning <i>to give something back</i>, <i>to return something</i>:</c.P>
          {example(20, { audio: true })}
          <c.PartTitle name="dialog" />
          <c.PartTitle type="secondary">我们照相吧！</c.PartTitle>
          {/* <c.P color={'#C0504D'}><i></i></c.P> */}
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          <c.PartTitle name="culture" />
          <c.Bookrow center>{image()}</c.Bookrow>
          <c.PartTitle name="words" />
          {newWords()}
          <c.PartTitle anchor="review" name="review" />
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
