import React, { Component } from 'react';
import * as c from '../components';
import { getGrammarLetter } from '../../../utils/lessonContent';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import styled from 'styled-components';

const Book = styled.div`
  font-size: 16px;
  p {
    text-align: justify;
    text-justify: inter-word;
  }
`;

export default class S1E1 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, review } = this.props;
    return (
      <Book>
        {lessonTitle()}
        {newCharacters()}
        <c.PartTitle>Grammar</c.PartTitle>
        <c.GrammarTitle letter={getGrammarLetter()}>
          Pronunciation of 一
        </c.GrammarTitle>
        <p>We have seen that the word 不, <strong>bù</strong>, <em>no</em>, <em>not</em>, has different tones depending on the tone of the character coming after it. The same is true for the number 一, <em>one</em>:</p>
        <p>On its own, for example in a phone number or when we count, it is pronounced <strong>yī</strong>, with tone one:</p>
        <c.Ul>
          <li>一，二，三, <strong>yī</strong>, <strong>èr</strong>, <strong>sān</strong>.</li>
        </c.Ul>
        <p>Before tone four and neutral tone it has tone two:</p>
        <c.Ul>
          <li><p>一个人, <strong>yí ge̊ rén</strong> <em>a person</em>; <em>one person</em></p></li>
        </c.Ul>
        <p>Before tones one, two and three, it has tone four:</p>
        <c.Ul>
          <li>一本书 <strong>yì běn shū</strong> <em>a book</em>; <em>one book</em></li>
          <li>一点 <strong>yì diǎn</strong> <em>a bit</em>; <em>a little bit</em></li>
          <li>一点 <strong>yì diǎndiǎn</strong> <em>a tiny bit</em>; <em>a tiny little bit</em></li>
        </c.Ul>
        <c.GrammarTitle letter={getGrammarLetter()}>
          The demonstrative pronouns 这 <strong>zhè</strong> <em>this</em> and 那 <strong>nà</strong> <em>that</em>.
        </c.GrammarTitle>
        <p>These pronouns function very much like in English.</p>
        {example()}
        <br/>
        {example()}
        <c.GrammarTitle letter={getGrammarLetter()}>
          Measure words or &quot;classifiers&quot;.
        </c.GrammarTitle>
        <p><em>Measure words</em>, also called <em>classifiers</em>, are an important feature of Chinese. Measure words exist in all languages: in <em>one liter of milk</em>, for example, <em>liter</em> is the measure word for <em>milk</em>; the same goes for two <em>rolls</em> of tape, a <em>little bit</em> of English and a <em>group</em> of people.</p>
        <p>But Chinese uses measure words for <em>all</em> nouns, not just things that can be &quot;measured&quot; like a liter of milk. You cannot just say <em>a book</em> or <em>a language</em>; you have to say <em>a &quot;volume&quot; of book</em> and <em>a &quot;portal&quot; of language</em>. English has a similar phenomenon with uncountable nouns:
          we say <em>a piece of news</em> rather than just <em>a news</em>. Here, <em>piece</em> is the measure word for <em>news</em>. The difference is that Chinese treats <em>all</em> nouns in this way.</p>
        <p>Most &quot;measure words&quot; do not actually &quot;measure&quot; anything, so modern grammarians instead prefer to call them <em>classifiers</em>.</p>
        <c.Ul>
          <li>本, <strong>běn</strong>, <em>root</em>: classifier  for books</li>
          <li>门, <strong>mén</strong>, <em>door</em>: classifier for languages, academic subjects - and artillery pieces!</li>
          <li>个, <strong>ge̊</strong>, <em>piece</em>: the most common classifier, used as a &quot;general&quot; measure for many different nouns</li>
        </c.Ul>
        <p>The connection between a classifier and its noun is not always obvious: why is <em>root</em> the classifier for books, and why do <em>language</em> and <em>artillery piece</em> have the same classifier: <em>door</em>? Since there is no rule, we need to memorize the correct classifier for each noun.</p>
        <p>In modern spoken Chinese, 个 <strong>ge̊</strong> is becoming the all-purpose classifier, gradually replacing the others. Chinese people will actually understand you even if you don&#39;t use any other classifier. But your Chinese will sound more native if you use the correct specialized classifier in each case; some classifiers, such as 本 <strong>běn</strong> and 门 <strong>mén</strong> above, are still so common that replacing them with 个 <strong>ge̊</strong> would sound unusual to a native speaker.</p>
        <p>When 这 and 那 are followed immediately by a classifier, they are usually pronounced <strong>zhèi</strong> and <strong>nèi</strong>:</p>
        <c.Ul>
          <li>一本书 <strong>yì běn shū</strong> <em>a book</em> OR <em>one book</em> (ONE ROOT-OF BOOK)</li>
          <li>这本书 <strong>zhèi běn shū</strong> <em>this book</em> (THIS ROOT-OF BOOK)</li>
          <li>那本书 <strong>nèi běn shū</strong> <em>that book</em> (THAT ROOT-OF BOOK)</li>
          <li>三门语言 <strong>sān mén yǔyán</strong> (THREE PORTAL-OF LANGUAGE)</li>
          <li>一个人 <strong>yí ge̊ rén</strong> <em>a person</em> (ONE PIECE-OF PERSON)</li>
          <li>这个人 <strong>zhèi ge̊ rén</strong> <em>this person</em> (THIS PIECE-OF PERSON)</li>
          <li>那个人 <strong>nèi ge̊ rén</strong> <em>that person</em> (THAT PIECE-OF PERSON)</li>
          <li>一个姓 <strong>yí ge̊ xìng</strong> <em>a family name</em> (ONE PIECE-OF FAMILY-NAME)</li>
          <li>这个姓名 <strong>zhèi ge̊ xìngmíng</strong> <em>this name</em> (THIS PIECE-OF NAME)</li>
          <li>那个名字 <strong>nèi ge̊ míngzi̊</strong> <em>that given name</em> (THAT PIECE-OF GIVEN-NAME)</li>
        </c.Ul>
        <p>Just as in English, there is a difference between talking about a thing in general and a specific item. If we are looking at a box and someone asks what is inside, we can say:</p>
        {example()}
        <br/>
        <p>But if we point at a <em>particular</em> book or books, we need to use a classifier:</p>
        {example()}
        <br/>
        {example()}
        <br/>
        {example()}
        <br/>
        {example()}
        <br/>
        {example()}
        <br/>
        {example()}
        <c.GrammarTitle letter={getGrammarLetter()}>
          那 or 那么, meaning <em>in that case</em> or <em>so</em>
        </c.GrammarTitle>
        <p>Used as a response to a statement, 那 <strong>nà</strong> or  那么 <strong>nàme̊</strong> can mean <em>in that case</em>, <em>OK then</em>:</p>
        {example()}
        <br/>
        <p>It can also be used to start a phrase where the speaker wants to emphasize a connection to what has just been said, similar to English <em>so</em>. It is often shortened to just 那 <strong>nà</strong>:</p>
        {example()}
        <c.GrammarTitle letter={getGrammarLetter()}>
          Follow-on questions using 呢
        </c.GrammarTitle>
        <p>In this lesson, we encounter a new question particle, 呢 <strong>ne̊</strong>. It has several uses; in the present case, it is used to pose follow-on questions of the type <em>what about you?</em></p>
        {example()}
        <c.GrammarTitle letter={getGrammarLetter()}>
          我个人 <em>I personally</em>
        </c.GrammarTitle>
        <p>The character 个 is not only a measure word; it can also appear in other words. In this lesson, for example, we have the expression 我个人 <strong>wǒ gèrén</strong> <em>I personally</em> (I PARTICULAR-PERSON):</p>
        {example()}
        {dialog()}
        {review()}
      </Book>
    );
  }
}
