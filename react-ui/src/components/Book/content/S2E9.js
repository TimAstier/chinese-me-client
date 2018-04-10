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
          <c.P>In the previous episode, we learned that 在 <b>zài</b> means <i>to be in</i> or <i>to be at</i>: </c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我在中国学中文。</c.Char></Row></li>
              <li><Row><c.Pinyin>Wǒ zài zhōngguó xué zhōngwén.</c.Pinyin></Row></li>
              <li><Row><c.Meaning>I am studying Chinese in China.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>But the function of 在 <b>zài</b> is wider than just introducing a location: it can describe a <i>state of doing something</i>. Compare the following  sentences:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>你做什么工作？</c.Char><c.Meaning>What do you do?</c.Meaning></Row></li>
              <li><Row><c.Char>你在做什么工作？</c.Char><c.Meaning>What work are you doing? OR What are you working on?</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>They illustrate a phenomenon which linguists call <i>aspect</i>, and which exists in most languages. The aspect of a verb defines <i>how the action is seen</i>. The first question above asks what somebody does for a living, what their profession is. The second asks what the listener is working on <i>right now</i>, <i>at the present time</i>. This ongoing action is called the <i>progressive</i> aspect; in English it is marked by the verb ending <i>-ing</i> and in Chinese by the use of 在 <b>zài</b>.</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>Since the basic meaning of 在 <b>zài</b> is <i>to be at...</i> or <i>to be in...</i>, its use for ongoing actions (to <i>be doing</i> something) should feel natural.</c.P>
          <c.P>We have actually already learned another example of aspect in Chinese: the reduplication of verbs that we saw in Episode 6, meaning to do something <i>a little</i> or <i>for a short while</i>. This is called the <i>delimitative</i> aspect. We will learn the other Chinese aspects in later episodes.</c.P>
          {grammarTitle()}
          <c.P>We have already learned to make comparisons using 比 <b>bǐ</b>, 更 <b>gèng</b> and 最 <b>zuì</b>: </c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>你比我高。</c.Char><c.Pinyin>Nǐ bǐ wǒ gāo. </c.Pinyin><c.Meaning>You are taller than me.</c.Meaning></Row></li>
              <li><Row><c.Char>她更高。</c.Char><c.Pinyin>Tā gèng gāo. </c.Pinyin><c.Meaning>She is (even) taller.</c.Meaning></Row></li>
              <li><Row><c.Char>她最高。</c.Char><c.Pinyin>Tā zuì gāo. </c.Pinyin><c.Meaning>She is tallest.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>In order to say <i>as tall as</i>, we can use 有... （那么） <b>yǒu... (nàme̊)</b>, where 那么 <b>nàme̊</b> is optional:</c.P>
          {example(3, { audio: true })}
          <c.P>As usual, we can negate this pattern with 没 <b>méi</b> or 没有 <b>méiyǒu</b>:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>Compare this to negating 比 <b>bǐ</b>, which instead means <i>not more than</i>:</c.P>
          {example(6, { audio: true })}
          {grammarTitle()}
          <c.P>To say that something is <i>the same as</i> or <i>equal to</i>, we use the preposition 跟 <b>gēn</b>:</c.P>
          {example(7, { audio: true })}
          <c.P>Note that this means she is <i>exactly</i> the same height as I, whereas 她有我那么高 <b>tā yǒu wǒ nàme̊ gāo</b> can also mean she is <i>at least</i> as tall a I.</c.P>
          {grammarTitle()}
          <c.P>This pattern is used to agree with what someone is arguing, while at the same time raising other objections. It can be translated as <i>it may be so</i> or <i>sure, I agree that.. but...</i>:</c.P>
          {example(8, { audio: true })}
          {example(9, { audio: true })}
          {grammarTitle()}
          <c.P>有的是 <b>yǒude̊.1shì</b> is an idiomatic expression which means <i>there are plenty of</i>. It can be placed either before or after what it refers to:</c.P>
          {example(10, { audio: true })}
          {grammarTitle()}
          <c.P>In colloquial Chinese, 得 can mean <i>must</i>, <i>have to</i> or <i>should</i>. It is then pronounced <b>děi</b>:</c.P>
          {example(11, { audio: true })}
          {grammarTitle()}
          <c.P>Many Chinese verbs have what is called an <i>default object</i>. We know that 写 <b>xiě</b> means <i>write</i>, for example in phrases like:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>她在写一本书。</c.Char></Row></li>
              <li><Row><c.Pinyin>Tā zài xiě yī běn shū. </c.Pinyin></Row></li>
              <li><Row><c.Meaning>She is writing a book.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>But if you want to ask if a child <i>knows how to write</i>, for example, you cannot just use 写 <b>xiě</b>. Instead, you would say:</c.P>
          {example(12, { audio: true })}
          <c.P>
            In other words, both 写 <b>xiě</b> and 写字 <b>xiězì</b> are translated into English <i>write</i>. So how do we know when to use the one or the other? There is a straightforward rule: verbs like 写 <b>xiě</b> must always have an object. When we have a specific object, like 书 <b>shū</b> in 写书 <b>xiě shū</b> <i>write a book</i>, or 信 <b>xìn</b> in 写信 <b>xiě xìn</b> <i>write a letter</i>, all is well.
            But if there is no specific object, we have to insert the verb's standard "default" object. In the case of 写 <b>xiě</b>, this default object is 字 <b>zì</b>.
          </c.P>
          <c.P>The object can be implied. So if you had already been talking about a child's name, you could simply ask 他会写吗？ <b>Tā huì xiě må?</b>, and your listener would understand that you meant 他会写自己的名字吗？ <b>Tā huì xiě zìjǐ de̊.1 míngzi̊ må?</b>  <i>Can he write his name?</i> But if you just wanted to know if the child knows how to write in general, you would have to use the pattern in example 9:12. In this case, if you asked just 他会写吗？ <b>Tā huì xiě må?</b>, the listener would reply: <i>write what?</i></c.P>
          <c.P>There are many other verbs like this. Some that we have already learned are:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>说话</c.Char><c.Pinyin>shuōhuà</c.Pinyin><c.Meaning>speak (speak speech)</c.Meaning></Row></li>
              <li><Row><c.Char>看书</c.Char><c.Pinyin>kànshū</c.Pinyin><c.Meaning>read (read book)</c.Meaning></Row></li>
              <li><Row><c.Char>发音</c.Char><c.Pinyin>fāyīn</c.Pinyin><c.Meaning>pronounce (pronounce sound)</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Another example is 生气 <b>shēngqì</b> <i>to be angry</i>. This word is  made up of the verb 生 <b>shēng</b> <i>to generate</i> and the noun 气 <b>qì</b> <i>breath</i> - when we get angry, we start breathing more heavily. To say <i>I am angry with him</i>, there are two constructions. The first is straightforward; the verb remains intact:</c.P>
          {example(13, { audio: true })}
          <c.P>But we can also form a very common alternative pattern:</c.P>
          {example(14, { audio: true })}
          {example(15, { audio: true })}
          <c.P>This kind of construction also appears with many other verbs:</c.P>
          {example(16, { audio: true })}
          {example(17, { audio: true })}
          {example(18, { audio: true })}
          <c.PartTitle name="dialog" />
          <c.PartTitle type="secondary">我可以帮你找房子</c.PartTitle>
          <c.P color={'#C0504D'}><i>Marvin is starting to worry about his expensive housing situation, and takes the opportunity to ask his new Chinese friends for advice.</i></c.P>
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
