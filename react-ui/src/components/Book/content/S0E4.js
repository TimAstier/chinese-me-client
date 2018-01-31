import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
// import insertVariables from '../../../utils/insertVariables';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, image, pronunciationTitle } = this.props;

    // This part comes between a dialog 'title' and 'intro'
    const specialIntro = () => {
      return (
        <c.P
          buttonOptions={{
            type: 'askUserSettings'
          }}
        ><i>Now, input your own birthdate to practice presenting yourself.</i>
        </c.P>
      );
    };
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <Objective
            text="How to tell someone your age"
          />
          <c.Bookrow center marginTop={50}>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow>
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yi1')
              }
            }}
          >
            When <b>-i</b> comes first in a syllable (when there is no initial), it is written <b>yi</b> in <b>pīnyīn</b>; the pronunciation is still <i>ee</i>, as if it had been written just <b>i</b>.
          </c.P>
          {pronunciationTitle()}
          <c.P>Compare the sounds on the following syllables:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('sui4')
              }
            }}
          >
            <Row>
              <c.Char>岁</c.Char>
              <c.Pinyin>suì</c.Pinyin>
              <c.Meaning>year (of age)</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('liu4')
              }
            }}
          >
            <Row>
              <c.Char>六</c.Char>
              <c.Pinyin>lìu</c.Pinyin>
              <c.Meaning>six</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('jiu3')
              }
            }}
          >
            <Row>
              <c.Char>九</c.Char>
              <c.Pinyin>jiǔ</c.Pinyin>
              <c.Meaning>nine</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Practice a few words with these sounds and spellings.</i>
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle>Typing Chinese characters</c.PartTitle>
          <c.P>Starting in this lesson, you will need to type Chinese characters in some of the exercises. To do this, you will need to download a Chinese character input method for your computer.</c.P>
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>In Chinese, numbers are usually written with the same Arabic numerals that we use in the West. But the handwriting may be different from what you are used to:</c.P>
          <c.Bookrow center>{image()}</c.Bookrow>
          <c.P>Numbers can also be written with Chinese characters. In English, we use letters to write smaller numbers: <i>five</i> and <i>25</i> are more common than <i>5</i> and <i>twenty-five</i>. In running text, the same is true for Chinese.</c.P>
          <c.P>Strings of digits like phone numbers or prices, on the other hand, are almost always written with Arabic digits; birthdays usually so. But sometimes, there is no clear preference: for house numbers, both systems are common.</c.P>
          <c.P>Chinese numbers are totally regular. There are nine numerals which can in turn be combined with ten to form the numbers 20, 30 and so on:</c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Space width={100}><c.Pinyin>1</c.Pinyin></c.Space><c.Space width={120}><c.Char>一</c.Char></c.Space><c.Space width={100}><c.Pinyin>yī</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>one</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>2</c.Pinyin></c.Space><c.Space width={120}><c.Char>二</c.Char></c.Space><c.Space width={100}><c.Pinyin>èr</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>two</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>3</c.Pinyin></c.Space><c.Space width={120}><c.Char>三</c.Char></c.Space><c.Space width={100}><c.Pinyin>sān</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>three</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>4</c.Pinyin></c.Space><c.Space width={120}><c.Char>四</c.Char></c.Space><c.Space width={100}><c.Pinyin>sì</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>four</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>5</c.Pinyin></c.Space><c.Space width={120}><c.Char>五</c.Char></c.Space><c.Space width={100}><c.Pinyin>wǔ</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>five</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>6</c.Pinyin></c.Space><c.Space width={120}><c.Char>六</c.Char></c.Space><c.Space width={100}><c.Pinyin>lìu</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>six</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>7</c.Pinyin></c.Space><c.Space width={120}><c.Char>七</c.Char></c.Space><c.Space width={100}><c.Pinyin>qī</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>seven</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>8</c.Pinyin></c.Space><c.Space width={120}><c.Char>八</c.Char></c.Space><c.Space width={100}><c.Pinyin>bā</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>eight</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>9</c.Pinyin></c.Space><c.Space width={120}><c.Char>九</c.Char></c.Space><c.Space width={100}><c.Pinyin>jiǔ</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>nine</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>10</c.Pinyin></c.Space><c.Space width={120}><c.Char>十</c.Char></c.Space><c.Space width={100}><c.Pinyin>shí</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>ten</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>11</c.Pinyin></c.Space><c.Space width={120}><c.Char>十一</c.Char></c.Space><c.Space width={100}><c.Pinyin>shíyī</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>eleven</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>12</c.Pinyin></c.Space><c.Space width={120}><c.Char>十二</c.Char></c.Space><c.Space width={100}><c.Pinyin>shíèr</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>twelve</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>13</c.Pinyin></c.Space><c.Space width={120}><c.Char>十三</c.Char></c.Space><c.Space width={100}><c.Pinyin>shísān</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>thirteen</c.Meaning></c.Space></Row>
          </c.Bookrow>
          <c.Bookrow flexDirection="column">
            <Row><c.Space width={100}><c.Pinyin>20</c.Pinyin></c.Space><c.Space width={120}><c.Char>二十</c.Char></c.Space><c.Space width={100}><c.Pinyin>èrshí</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>twenty</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>21</c.Pinyin></c.Space><c.Space width={120}><c.Char>二十一</c.Char></c.Space><c.Space width={100}><c.Pinyin>èrshíyī</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>twenty-one</c.Meaning></c.Space></Row>
            <Row><c.Space width={100}><c.Pinyin>22</c.Pinyin></c.Space><c.Space width={120}><c.Char>二十二</c.Char></c.Space><c.Space width={100}><c.Pinyin>èrshíèr</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>twenty-two</c.Meaning></c.Space></Row>
          </c.Bookrow>
          <c.Bookrow flexDirection="column">
            <Row><c.Space width={100}><c.Pinyin>99</c.Pinyin></c.Space><c.Space width={120}><c.Char>九十九</c.Char></c.Space><c.Space width={100}><c.Pinyin>jiǔshíjiǔ</c.Pinyin></c.Space><c.Space width={100}><c.Meaning>ninenty-nine</c.Meaning></c.Space></Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Practice saying numbers in Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>We have seen that some Chinese sentences are made up of a Subject, a Verb and an Object, just as in English:</c.P>
          {example(1, { audio: true })}
          <c.P>But unlike in English, not every Chinese sentence needs to contain a verb. For example, we can have a sentence made up of a personal pronoun and a number of years:</c.P>
          {example(2, { audio: true })}
          <c.P>So to tell somebody your age, you literally say I X YEARS. This would of course sound odd in English. And you can even shorten this to:</c.P>
          {example(3, { audio: true })}
          <c.P>In fact, in relaxed colloquial language you can shorten some sentences with <c.Chinese>是</c.Chinese> <b>shì</b> in the same way:</c.P>
          {example(4, { audio: true })}
          <c.P>Sentences like this may be easier to understand by using a different grammatical concept: Topic and Comment. The Topic indicates what the sentence "is about" and the Comment makes some remark regarding this Topic. The Topic always comes first in a sentence:</c.P>
          <c.P><Row><c.Char>我</c.Char><c.Space width={100}/><c.Char>二十七。</c.Char></Row></c.P>
          <c.P><Row>TOPIC<c.Space width={75}/>COMMENT</Row></c.P>
          <c.P>Linguists have measured the pauses between words in Chinese and found that the pause in the break between Topic and Comment is often a tiny bit longer than the pauses between the other words in a sentence. We can mark this break with a colon in the literal translation to make it even clearer which part is the Topic and which is the Comment:</c.P>
          <c.P>(I : TWENTY-SEVEN YEAR.)</c.P>
          <c.P>The sentences above are all very simple - but the Topic-Comment construction is also used for more complex patterns. In fact, Topic-Comment sentences are so common that linguists call Chinese a <i>topic-prominent</i> language.</c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            <i>Check your understanding of Topic-Comment constructions.</i>
          </c.P>
          {grammarTitle()}
          <c.P>In Chinese, it is often possible to omit words when they are clear from the context. In the second phrase below, the subject <c.Chinese>我</c.Chinese> <i>I</i> has been omitted:</c.P>
          {example(5, { audio: true })}
          <c.P>In this example, it is already clear who you are talking about – yourself – so it is not necessary to repeat this subject <i>I</i>.</c.P>
          <c.P>Again, we could analyze this as a Topic-Comment construction:</c.P>
          <c.Bookrow>(I : FAMILY-NAMED WANG, CALLED WANG YUGUO.)</c.Bookrow>
          <c.PartTitle name="dialogs" />
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          {dialog(1, { sentenceType: 'translation', displayNames: false })}
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          {dialog(2, { sentenceType: 'translation', displayNames: false })}
          {dialog(3, { sentenceType: 'chinese', displayNames: false, specialIntro })}
          {dialog(4, { sentenceType: 'chinese', displayNames: false })}
          {dialog(5, { sentenceType: 'chinese', displayNames: false })}
          {dialog(6, { sentenceType: 'chinese', displayNames: true })}
          {dialog(7, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="culture" />
          <c.PartTitle type="secondary">How Chinese people count age</c.PartTitle>
          <c.P>In Western countries, age changes on a person’s birthday. In China, people state their age by saying <i>how old they will be this calendar year</i>; it doesn't matter whether they have actually passed this year's birthday or not. As of January 1 each year, they are one year older than the year before.</c.P>
          <c.PartTitle type="secondary">Number symbolism</c.PartTitle>
          <c.P>
            Number symbolism is so important in China that many people will pay extra for a “lucky” phone number or license plate.
            There are also “unlucky” numbers that people tend to avoid. The most famous example is <c.Chinese>四</c.Chinese> <b>sì</b> <i>four</i>, which sounds similar to another character, <b>sǐ</b> <i>to die</i>. As a consequence, many Chinese buildings lack all floors ending in this dreaded number: 4, 14, 24 and so on.
          </c.P>
          <c.P>
            Numbers can also be used in puns which come to symbolize more complex ideas: May 21 is recognized as "Chinese Valentine's Day" because May is the fifth month and <b>wǔ</b> <i>five</i> sounds similar to <b>wǒ</b> <i>I</i>; <b>èryī</b> is interpreted as <b>ài nǐ</b> <i>love you</i>. Such puns are even used to create brand names: the job-hunting internet site <i>51job</i> chose its name because <i>one</i> can
            be pronounced to sound like <i>want</i> and <i>five</i> like <i>I</i>.
            An educated Chinese reader who understands the English word <i>job</i> will immediately get the pun: “I want job”. This kind of punning is especially common in text messages and internet chats.
          </c.P>
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review practiceId={practiceIds[0]} />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
