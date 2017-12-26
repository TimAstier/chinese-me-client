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
          <c.P>是 <b>shì</b> can be used to reinforce the strength of a statement:</c.P>
          {example(1, { audio: true })}
          <c.P>English has a similar pattern: <i>this book does cost a lot</i> is stronger than the plain <i>this book costs a lot</i>.</c.P>
          <c.P>Sometimes, depending on where the speaker places the stress, a sentence like this can be interpreted in more than one way:</c.P>
          {example(2, { audio: true })}
          <c.P>If the stress in this sentence is on 中国 <b>zhōngguó</b>, it means that you are talking about <i>China</i> (and not somewhere else):</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Meaning>It is in China that I am studying Chinese.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>If the stress is on 是 <b>shì</b>, the most natural interpretation is:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Meaning>I do study Chinese in China.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          {grammarTitle()}
          <c.P>Just as 是 can be inserted on its own to create emphasis, we can put the focus on a past event using the construction 是...的 <b>shì...de̊.1</b>: </c.P>
          {example(3, { audio: true })}
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>The purpose of 是...的 <b>shì...de̊.1</b> is emphasis or focus on a certain detail of an event. But note that this construction is always used for events that have <i>already happened</i>. Even though Chinese does not have any formal tenses (<i>go</i>, <i>went</i>, <i>gone</i>), patterns such as this one can still signal past time in an <i>indirect</i> way.</c.P>
          {grammarTitle()}
          <c.P>The character 了 <b>le̊</b> is used for two very common particles, often called <b>le̊.1</b> and <b>le̊.2</b> in pīnyīn. We will start looking at what is usually called the <i>perfective aspect marker</i>, <b>le̊.1</b>.</c.P>
          <c.P>In Episode 9, we learned that the aspect of a verb defines <i>how an action is seen</i>. We also learned the <i>progressive</i> aspect (the <i>-ing</i> form of a verb in English and the aspect marker 在 <b>zài</b> in Chinese) which describes an action as <i>ongoing</i>, and the <i>delimitative</i> aspect which says that something is done <i>a little bit</i> or <i>for a short while</i>.</c.P>
          <c.P>The Chinese perfective aspect, signalled by 了 <b>le.1</b>, describes that an event or action reaches a certain limit or end-state; the event or action is said to be <i>bounded</i>. For example, the phrase <i>read five books</i> describes a bounded action because it describes an end state where "five books have been read". The phrase <i>read books</i>, on the other hand, describes an activity in general; it is unbounded because there is no limit or end-state involved.</c.P>
          <c.P>Let us look at the following pattern:</c.P>
          {example(6, { audio: true })}
          <c.P>To understand how aspect influences the meaning of this sentence, let's compare it to two other examples:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>她看那本书。</c.Char><c.Meaning>She reads that book.</c.Meaning></Row></li>
              <li><Row><c.Char>她在看那本书。</c.Char><c.Meaning>She is reading that book.</c.Meaning></Row></li>
              <li><Row><c.Char>她看了那本书。</c.Char><c.Meaning>She has read that book.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>These three sentences differ only in aspect. The first is about the general action of reading a book; it can be used in an imagined dialog where someone asks you <i>how does she learn Chinese?</i> Your response is: <i>She reads that book</i>. This action is not ongoing (she is not doing it now), nor is it bounded (it is not about reading a certain number of pages or about finishing the book; it is just about "reading" it in general). So there is no aspect marker in this sentence.</c.P>
          <c.P>The second sentence has the progressive aspect marker 在 <b>zài</b>, which signals that the action is ongoing, is happening now. This sentence would be appropriate as an answer to questions such as <i>What is she doing?</i> or <i>Where is she?</i></c.P>
          <c.P>The third sentence has the perfective aspect marker 了 <b>le.1</b>. This makes it bounded: it tells us that she has <i>finished</i> or <i>completed</i> reading the book. We can imagine this sentence as the answer to questions like <i>Has she read any Chinese books?</i> or <i>What did she do today?</i></c.P>
          <c.P>Let us look at some more examples using perfective aspect with 了 <b>le.1</b>:</c.P>
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          <c.P>The perfective aspect is of course especially common with resultative verbs, since these have an "in-built" sense of completion:</c.P>
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          {example(14, { audio: true })}
          {example(15, { audio: true })}
          <c.P>Another way of understanding the function of perfective aspect is to look at cases where the perfective can <i>not</i> be used. For example, since 了 <b>le̊.1</b> signals boundedness, it can only be used with verbs that can actually be bounded: a phrase like ?她姓了李? <b>tā xìng le̊.1 Lǐ?</b> is grammatically impossible, because "being named something" is an ongoing state so there can be no "boundedness" or "completion" involved. Other verbs that cannot have perfective aspect are:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>觉得</c.Char><c.Pinyin>juéde̊</c.Pinyin><c.Meaning>think, feel</c.Meaning></Row></li>
              <li><Row><c.Char>相信</c.Char><c.Pinyin>xiāngxìn</c.Pinyin><c.Meaning>believe</c.Meaning></Row></li>
              <li><Row><c.Char>知道</c.Char><c.Pinyin>zhīdåo</c.Pinyin><c.Meaning>know</c.Meaning></Row></li>
              <li><Row><c.Char>有</c.Char><c.Pinyin>yǒu</c.Pinyin><c.Meaning>have</c.Meaning></Row></li>
              <li><Row><c.Char>姓 </c.Char><c.Pinyin>xìng</c.Pinyin><c.Meaning>be named (as family name)</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>These counterexamples also illustrate the difference between <i>aspect</i> and <i>tense</i>. You will have noticed that all the sentence patterns above were translated to past tense in English. This is not a coincidence: bounded actions will of course usually have occurred in the past. It is therefore easy to confuse Chinese <i>perfective aspect</i> with English <i>past tense</i>. But perfective aspect only works with verbs  describing actions that <i>can be completed</i>. In English, we can use present and past tense to express the difference between <i>she is named Li</i> and <i>she was named Li</i>, or <i>he knows</i> and <i>he knew</i>. There is no way to make this distinction in Chinese without using words like <i>yesterday</i> or <i>last year</i> to make the timing explicit.</c.P>
          <c.P>Here is another example showing that perfective aspect is different from past tense:</c.P>
          {example(16, { audio: true })}
          <c.P>This sentence talks about something that will happen in the future, and is translated to future tense in English, so it cannot be said to be in past tense. The perfective <b>le̊.1</b> in Chinese just says that something <i>will</i> be completed: she will <i>have seen</i> something and <i>will be happy</i> as a result. In later episodes, we will encounter other examples illustrating that perfective aspect really has nothing to do with whether an event occurs in the future or in the past.</c.P>
          {grammarTitle()}
          <c.P>Since 了 <b>le.1</b> says that something has been completed, you cannot negate it with 不 <b>bù</b>. Instead, we use 没有 <b>méiyǒu</b> or just 没 <b>méi</b>. It is interesting to note that <i>not have</i> is used in both English and Chinese to describe the state of something that has not been completed:</c.P>
          {example(17, { audio: true })}
          {example(18, { audio: true })}
          {example(19, { audio: true })}
          {example(20, { audio: true })}
          <c.P>还没（有）<b>hái méi(yǒu)</b> means <i>still hasn't</i>:</c.P>
          {example(21, { audio: true })}
          {grammarTitle()}
          <c.P>The basic meaning of 给 <b>gěi</b> is <i>to give</i>:</c.P>
          {example(22, { audio: true })}
          <c.P>But it is also used as a preposition to replace English <i>for</i> and <i>to</i>, synonymous with 跟 <b>gēn</b>:</c.P>
          {example(23, { audio: true })}
          <c.P>The word order can either be Subject-gěi-Object-Verb or Subject-Verb-gěi-Object:</c.P>
          {example(24, { audio: true })}
          {example(25, { audio: true })}
          {grammarTitle()}
          <c.P>If you pronounce several 一 <b>yī</b> in a row, it can be hard for the listener to tell how many there are (try it over the phone!) To make it easier for the listener, 一 is often pronounced <b>yāo</b> in numbers:</c.P>
          {example(26, { audio: true })}
          <c.PartTitle>会话：你的电话号码是多少？</c.PartTitle>
          <c.P color={'#C0504D'}><i>Wang Meixin promises to help Marvin find a place to stay, giving her a good reason to note down his phone number.</i></c.P>
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
