/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Episode, Season } from '../../models';
// import Sentence from '../../models/Sentence';
import { Book } from '../.';
import { Provider } from '../../utils/testComponents';
import { bookComponents as c } from '../.';
import { Row } from '../Shared';

const season = new Season();
const episode = new Episode();

class Content extends React.Component {
  render() {
    const { newCharacters, example, lessonTitle, dialog, character,
      characterIds, practiceIds, image, grammarTitle, newWords } = this.props;
    return (
      // ** Modify test content here **
      <c.Page>
        {lessonTitle()}
        <c.PartTitle anchor="new-characters">NEW CHARACTERS</c.PartTitle>
        <c.P><i>Practice the stroke order animations. Some characters have material on Stories and Calligraphy.</i></c.P>
        {grammarTitle()}
        <c.P>We have seen that the word 不<b>bù</b><i> no, not,</i>has different tones depending on the tone of the character coming after it. The same is true for the number 一 <i>one</i>:</c.P>
        <c.P>When it is regarded as the digit in a number, for example in a phone number or when we count, it is pronounced <b>yī</b>, with tone 1:</c.P>
        <c.P>一，二，三,<b>yī, èr, sān</b>他一岁。<b>Tā yī suì.</b><i>He is one year old.</i> 我三十一岁。<b>Wǒ sānshíyī suì.</b> <i>I am 31 years old.</i></c.P>
        <c.P>Before tone 4 and neutral tone it otherwise has tone 2:</c.P>
        <c.P>一个人 <b>yí ge̊ rén</b> <i>a person; one person</i></c.P>
        <c.P>And before tones 1, 2 and 3, it has tone 4:</c.P>
        <c.Bookrow>
          <c.Ul>
            <li>一本书 <b>yì běn shū</b> <i>a book; one book</i></li>
            <li>一点 <b>yì diǎn</b> <i>a bit; a little bit</i></li>
            <li>一点 <b>yì diǎndiǎn</b> <i>a tiny bit; a tiny little bit</i></li>
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
            <li>本 <b>běn</b> <i>root</i>: classifier for books</li>
            <li>门 <b>mén</b> <i>door</i>: classifier for languages, academic subjects - and artillery pieces!</li>
            <li>个 <b>ge̊</b> <i>item</i>: the most common classifier, used as a ""general"" measure for many different nouns</li>
          </c.Ul>
        </c.Bookrow>
        <c.P>The meaning of each classifier is historically related to the noun it classifies, but this connection is not always obvious today. The character 门 <b>mén</b> <i>door</i>, <i>portal</i> is probably used for academic disciplines because students would go to the *door* of the teacher; to start studying a subject is still called *going inside the door* in modern Chinese. The use of <i>root</i> as the classifier for books may refer to printing blocks, each block being the "root" of many books. At best, such interpretations are memory aids that can help us memorize the correct classifier for each noun.</c.P>
        <c.P>In modern spoken Chinese, 个 <b>ge̊</b> is becoming the all-purpose classifier, gradually replacing the others. Chinese people will actually understand you even if you don't use any other classifier. But your Chinese will sound more native if you use the correct specialized classifier in each case; some classifiers, such as 本 <b>běn</b> and 门 <b>mén</b> above, are still so common that replacing them with 个 <b>ge̊</b> would sound unusual to a native speaker.</c.P>
        <c.P>When 这 and 那 are followed immediately by a classifier, they are usually pronounced <b>zhèi</b> and <b>nèi</b>:</c.P>
        <c.Bookrow>
          <c.Ul>
            <li><Row><c.Char>一本书</c.Char><c.Pinyin>yì běn shū</c.Pinyin><c.Meaning><i>a book</i> OR <i>one book</i> (ONE ROOT-OF BOOK)</c.Meaning></Row></li>
            <li>这本书 <b>zhèi běn shū</b> <i>this book</i> (THIS ROOT-OF BOOK)</li>
            <li>那本书 <b>nèi běn shū</b> <i>that book</i> (THAT ROOT-OF BOOK)</li>
            <li>三门语言 <b>sān mén yǔyán</b> (THREE PORTAL-OF LANGUAGE)</li>
            <li>一个人 <b>yí ge̊ rén</b> <i>a person</i> (ONE ITEM-OF PERSON)</li>
            <li>这个人 <b>zhèi ge̊ rén</b> <i>this person</i> (THIS ITEM-OF PERSON)</li>
            <li>那个人 <b>nèi ge̊ rén</b> <i>that person</i> (THAT ITEM-OF PERSON)</li>
            <li>一个姓 <b>yí ge̊ xìng</b> <i>a family name</i> (ONE ITEM-OF FAMILY-NAME)</li>
            <li>这个姓名 <b>zhèi ge̊ xìngmíng</b> <i>this name</i> (THIS ITEM-OF NAME)</li>
            <li>那个名字 <b>nèi ge̊ míngzi̊</b> <i>that given name</i> (THAT ITEM-OF GIVEN-NAME)</li>
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
        <c.PartTitle>会话:我叫你马文，好吗?</c.PartTitle>
        <c.P color={'#C0504D'}><i>The acquaintances learn a bit about each other's families and Marvin picks up a few new words as well as misunderstanding a common grammar pattern.</i></c.P>
        {dialog(1, { sentenceType: 'chinese', displayNames: true })}
        {dialog(1, { sentenceType: 'translation', displayNames: true })}
        <c.Exam />
      </c.Page>
      // ** END of test content **
    );
  }
}

storiesOf('Book', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Book', () =>
    <Book
      content={Content}
      initialized
      settings={{}}
      images={[]}
      season={season}
      episode={episode}
    />
  );
