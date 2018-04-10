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
          <c.PartTitle name="characters" />
          <c.P><i>Practice the stroke order animations. Some characters have material on Stories and Calligraphy.</i></c.P>
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>We have seen that the word 不<b>bù</b><i> no, not,</i>has different tones depending on the tone of the character coming after it. The same is true for the number 一 <i>one</i>:</c.P>
          <c.P>When it is regarded as the digit in a number, for example in a phone number or when we count, it is pronounced <b>yī</b>, with tone 1:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>一，二，三，</c.Char> <c.Pinyin>yī, èr, sān</c.Pinyin></Row></li>
              <li><Row><c.Char>他一岁。</c.Char><c.Pinyin>Tā yī suì.</c.Pinyin>  <c.Meaning>He is one year old.</c.Meaning></Row></li>
              <li><Row><c.Char>我三十一岁。</c.Char><c.Pinyin>Wǒ sānshíyī suì.</c.Pinyin>  <c.Meaning>I am 31 years old.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Before tone 4 and neutral tone it otherwise has tone 2:</c.P>
          <c.P>一个人 <b>yí ge̊ rén</b> <i>a person; one person</i></c.P>
          <c.P>And before tones 1, 2 and 3, it has tone 4:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>一本书</c.Char> <c.Pinyin>yì běn shū</c.Pinyin> <c.Meaning>a book; one book</c.Meaning></Row></li>
              <li><Row><c.Char>一点</c.Char> <c.Pinyin>yì diǎn</c.Pinyin> <c.Meaning>a bit; a little bit</c.Meaning></Row></li>
              <li><Row><c.Char>一点</c.Char> <c.Pinyin>yì diǎndiǎn</c.Pinyin> <c.Meaning>a tiny bit; a tiny little bit</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          {grammarTitle()}
          <c.P>These pronouns function very much like in English.</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          {grammarTitle()}
          <c.P><i>Measure words,</i> also called <i>classifiers,</i> are an important feature of Chinese. Measure words exist in all languages: in <i>one liter of milk,</i> for example, <i>liter</i> is the measure word for <i>milk</i>; the same goes for two <i>rolls</i> of tape, a <i>little bit</i> of English and a <i>group</i> of people.</c.P>
          <c.P>
            But Chinese uses measure words for <i>all</i> nouns, not just things that can be "measured" like a liter of milk. You cannot just say <i>a book</i> or <i>a language</i>; you have to say <i>a "root" of book</i> and <i>a "portal" of language</i>. English has a similar phenomenon with uncountable nouns: we say <i>a piece of news</i> rather than just <i>a news</i>. Here, <i>piece</i> is the measure word for <i>news</i>. The difference is that Chinese treats <i>all</i> nouns in this way. Most "measure words" do not actually "measure" anything, so modern grammarians instead prefer to call them <i>classifiers.</i>
          </c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>本</c.Char> <c.Pinyin>běn</c.Pinyin> <c.Meaning>root: classifier for books</c.Meaning></Row></li>
              <li><Row><c.Char>门</c.Char> <c.Pinyin>mén</c.Pinyin> <c.Meaning>door: classifier for languages, academic subjects - and artillery pieces!</c.Meaning></Row></li>
              <li><Row><c.Char>个</c.Char> <c.Pinyin>ge̊</c.Pinyin> <c.Meaning>item: the most common classifier, used as a "general" measure for many different nouns</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>The meaning of each classifier is historically related to the noun it classifies, but this connection is not always obvious today. The character 门 <b>mén</b> <i>door</i>, <i>portal</i> is probably used for academic disciplines because students would go to the <i>door</i> of the teacher; to start studying a subject is still called <i>going inside the door</i> in modern Chinese. The use of <i>root</i> as the classifier for books may refer to printing blocks, each block being the "root" of many books. At best, such interpretations are memory aids that can help us memorize the correct classifier for each noun.</c.P>
          <c.P>In modern spoken Chinese, 个 <b>ge̊</b> is becoming the all-purpose classifier, gradually replacing the others. Chinese people will actually understand you even if you don't use any other classifier. But your Chinese will sound more native if you use the correct specialized classifier in each case; some classifiers, such as 本 <b>běn</b> and 门 <b>mén</b> above, are still so common that replacing them with 个 <b>ge̊</b> would sound unusual to a native speaker.</c.P>
          <c.P>When 这 and 那 are followed immediately by a classifier, they are usually pronounced <b>zhèi</b> and <b>nèi</b>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>一本书</c.Char> <c.Pinyin>yì běn shū</c.Pinyin> <c.Meaning><i>a book</i> OR <i>one book</i> (ONE ROOT-OF BOOK)</c.Meaning></Row></li>
              <li><Row><c.Char>这本书</c.Char> <c.Pinyin>zhèi běn shū</c.Pinyin> <c.Meaning><i>this book</i> (THIS ROOT-OF BOOK)</c.Meaning></Row></li>
              <li><Row><c.Char>那本书</c.Char> <c.Pinyin>nèi běn shū</c.Pinyin> <c.Meaning><i>that book</i> (THAT ROOT-OF BOOK)</c.Meaning></Row></li>
              <li><Row><c.Char>三门语言</c.Char> <c.Pinyin>sān mén yǔyán</c.Pinyin> <c.Meaning><i>three languages</i>(THREE PORTAL-OF LANGUAGE)</c.Meaning></Row></li>
              <li><Row><c.Char>一个人</c.Char> <c.Pinyin>yí ge̊ rén</c.Pinyin> <c.Meaning><i>a person</i> (ONE ITEM-OF PERSON)</c.Meaning></Row></li>
              <li><Row><c.Char>这个人</c.Char> <c.Pinyin>zhèi ge̊ rén</c.Pinyin> <c.Meaning><i>this person</i> (THIS ITEM-OF PERSON)</c.Meaning></Row></li>
              <li><Row><c.Char>那个人</c.Char> <c.Pinyin>nèi ge̊ rén</c.Pinyin> <c.Meaning><i>that person</i> (THAT ITEM-OF PERSON)</c.Meaning></Row></li>
              <li><Row><c.Char>一个姓</c.Char> <c.Pinyin>yí ge̊ xìng</c.Pinyin> <c.Meaning><i>a family name</i> (ONE ITEM-OF FAMILY-NAME)</c.Meaning></Row></li>
              <li><Row><c.Char>这个姓名</c.Char> <c.Pinyin>zhèi ge̊ xìngmíng</c.Pinyin> <c.Meaning><i>this name</i> (THIS ITEM-OF NAME)</c.Meaning></Row></li>
              <li><Row><c.Char>那个名字</c.Char> <c.Pinyin>nèi ge̊ míngzi̊</c.Pinyin> <c.Meaning><i>that given name</i> (THAT ITEM-OF GIVEN-NAME)</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Just as in English, there is a difference between talking about <i>a thing in general</i> and <i>a specific item</i>. If we are looking at a box and someone asks what is inside, we can say:</c.P>
          {example(3, { audio: true })}
          <c.P>But if we point at a <i>particular</i> book or books, we need to use a classifier:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          {example(9, { audio: true })}
          {grammarTitle()}
          <c.P>Just as in English, it is often possible or even necessary to leave out the noun that a classifier refers to:</c.P>
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          {grammarTitle()}
          <c.P>Used as a response to a statement, 那 <b>nà</b> or  那么 <b>nàme̊</b> can mean <i>in that case</i>, <i>OK then</i>:</c.P>
          {example(12, { audio: true })}
          <c.P>It can also be used to start a phrase where the speaker wants to emphasize a connection to what has just been said, similar to English <i>so</i>. It is often shortened to just 那 <b>nà</b>:</c.P>
          {example(13, { audio: true })}
          {grammarTitle()}
          <c.P>In this lesson, we encounter a new question particle, 呢 <b>ne̊</b>. It has several uses; in the present case, it is used to pose follow-on questions of the type <i>what about you?</i></c.P>
          {example(14, { audio: true })}
          {grammarTitle()}
          <c.P>The character 个 is not only a measure word; it can also appear in other words. In this lesson, for example, we have the expression 我个人 <b>wǒ gèrén</b> <i>I personally</i> (I PARTICULAR-PERSON):</c.P>
          {example(15, { audio: true })}
          <c.PartTitle name="dialog" />
          <c.PartTitle type="secondary">我叫你马文，好吗?</c.PartTitle>
          <c.P color={'#C0504D'}><i>American student Colleen invites her friend Marvin to a calligraphy exhibition. Marvin has just started studying Chinese which he uses on a new acquaintance. Even though Marvin only replies with a single Chinese word, his new friend is impressed!</i></c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
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
