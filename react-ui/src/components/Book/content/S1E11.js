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
          <c.P>The most basic sense of the character 要 <b>yào</b> is <i>to want</i>:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          <c.P>But 要 <b>yào</b> is more commonly used to express <i>going to do something in the future</i>, similar to English <i>will</i>. The following examples can therefore be interpreted in two ways, depending on the context:</c.P>
          {example(3, { audio: true })}
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>As we have seen, 想 <b>xiǎng</b> is similar in meaning to 要 <b>yào</b>, but it is a bit softer, having <i>would like to</i> rather than <i>want to</i>:</c.P>
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          {grammarTitle()}
          <c.P>The 把 <b>bǎ</b> construction is a common Chinese grammar pattern that does not have any equivalent in Western languages.</c.P>
          <c.P>The basic meaning of the character 把 <b>bǎ</b> is <i>to take</i>. The 把 <b>bǎ</b> construction can therefore be literally translated as <i>take something and do something with it</i>. It highlights how something is <i>handled</i>, <i>manipulated</i>, <i>dealt with</i> or <i>disposed of</i>; this is why grammarians call it the <i>disposal</i> form.</c.P>
          <c.P>Let us look at some typical examples. The disposal form is especially common in imperatives - when you tell someone to do something. For example, the most common way of asking for an object in Chinese is:</c.P>
          {example(8, { audio: true })}
          <c.P>Here, the 把 <b>bǎ</b> construction is just a way to specify a certain object, similar to the function of <i>the</i> in English. Let's compare the example above to the same sentence without 把 <b>bǎ</b>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>给我书！</c.Char><c.Pinyin>Gěi wǒ shū!</c.Pinyin><c.Meaning>(GIVE I BOOK)</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>This is not grammatically impossible, but we have to imagine a somewhat odd context where it could be used. Since Chinese does not make any difference between <i>a book</i>,  <i>the book</i>, <i>books</i> or <i>a book</i>, the most natural interpretation is <i>give me books</i>, which someone might (perhaps) say in the unusual setting of choosing between an offer of "books" and "something else". Using the 把 <b>bǎ</b> construction makes it clear that you are talking about a specific book rather than "books" in general.</c.P>
          <c.P>The thing that is "taken" must be something specific and definite, and the "doing" must have a result or completion. Because of this, the 把 <b>bǎ</b> construction is especially common with resultative verbs:</c.P>
          {example(9, { audio: true })}
          <c.P>And of course, the perfective aspect marker 了 <b>le̊.1</b> often appears in such sentences:</c.P>
          {example(10, { audio: true })}
          <c.P>The 把 <b>bǎ</b> construction may seem unfamiliar at first, but it is logical and quickly becomes intuitive.</c.P>
          {grammarTitle()}
          <c.P>These common location words have two variants: in northern China, people tend to prefer saying 这儿, 那儿 and 哪儿; in the south, 这里, 那里 and 哪里 are the most common:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>这儿 or 这里</c.Char><c.Pinyin>zhèr or zhèlǐ</c.Pinyin><c.Meaning>here</c.Meaning></Row></li>
              <li><Row><c.Char>那儿 or 那里</c.Char><c.Pinyin>nàr or nàlǐ</c.Pinyin><c.Meaning>there</c.Meaning></Row></li>
              <li><Row><c.Char>哪儿 or 哪里</c.Char><c.Pinyin>nǎr or nǎlǐ</c.Pinyin><c.Meaning>where</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          {example(11, { audio: true })}
          <c.P>Like other question words, 哪儿 <b>nǎr</b> can be combined with 都 <b>dōu</b> meaning <i>anywhere</i>:</c.P>
          {example(12, { audio: true })}
          <c.PartTitle>会话：你的电话号码是多少？</c.PartTitle>
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
