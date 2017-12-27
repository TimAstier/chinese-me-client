import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
// import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
// import insertVariables from '../../../utils/insertVariables';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle>NEW CHARACTERS</c.PartTitle>
          <c.P>Here are the new characters in this lesson. Click on each character to review the stroke order, or on the brush or history icons to see calligraphy and history videos.</c.P>
          {newCharacters()}
          <c.PartTitle>PRONUNCIATION</c.PartTitle>
          <c.P>In this lesson, pay special attention to the following sounds which can be tricky for the beginner. You can review these in the <i>Introduction to Chinese pronunciation and writing</i> by clicking the respective links.</c.P>
          <c.PartTitle type="tertiary">A. The difference between the three different sounds of the pīnyīn letter i </c.PartTitle>
          <c.P>We have already encountered two of the pronunciations of pīnyīn <i>i</i>. In this lesson, we meet the third one, which is a bit like the <i>zzz</i> in the buzzing of a bee:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '四'
              }
            }}
          >
            <c.Ul>
              <li>
                <Row>
                  <c.Char>四</c.Char>
                  <c.Pinyin>sì</c.Pinyin>
                  <c.Meaning>four</c.Meaning>
                </Row>
              </li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Compare this to the  <i>i</i> sounds we have learned earlier: <i>ee</i> in 七 <b>qī</b> <i>seven</i> and <i>r</i> in 十 <b>shí</b> <i>ten</i>.</c.P>
          <c.PartTitle type="tertiary">B. Spelling of -i when it comes first in a syllable</c.PartTitle>
          <c.P>When <b>i</b> comes first in a syllable, it is written <b>yi</b> in <b>pīnyīn</b>; the pronunciation is still <i>ee</i>, as if it had been written just <b>i</b>.</c.P>
          <c.PartTitle type="tertiary">C. Pronunciation of -ui and -iu</c.PartTitle>
          <c.P>Compare the sounds on the following syllables:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '岁'
              }
            }}
          >
            <c.Ul>
              <li>
                <Row>
                  <c.Char>岁</c.Char>
                  <c.Pinyin>suì</c.Pinyin>
                  <c.Meaning>year (of age)</c.Meaning>
                </Row>
              </li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '六'
              }
            }}
          >
            <c.Ul>
              <li>
                <Row>
                  <c.Char>六</c.Char>
                  <c.Pinyin>lìu</c.Pinyin>
                  <c.Meaning>six</c.Meaning>
                </Row>
              </li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '九'
              }
            }}
          >
            <c.Ul>
              <li>
                <Row>
                  <c.Char>九</c.Char>
                  <c.Pinyin>jiǔ</c.Pinyin>
                  <c.Meaning>nine</c.Meaning>
                </Row>
              </li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle>PATTERNS</c.PartTitle>
          {grammarTitle()}
          <c.P>In Chinese, numbers are usually written with the same Arabic numerals that we use in the West. But the handwriting may be different from what you are used to:</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>Numbers can also be written with Chinese characters. In English, we use letters for smaller numbers: <i>five</i> and <i>25</i> are more common than <i>5</i> and <i>twenty-five</i>. In running text, the same is true for Chinese.</c.P>
          <c.P>Strings of digits like phone numbers or prices, on the other hand, are almost always written with Arabic digits; birthdays usually so. But sometimes, there is no clear preference: for house numbers, both systems are common.</c.P>
          <c.P>Chinese numbers are totally regular. There are nine numerals which can in turn be combined with ten to form the numbers 20, 30 and so on:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>1 一</c.Char><c.Pinyin>yī</c.Pinyin><c.Meaning>one</c.Meaning></Row></li>
              <li><Row><c.Char>2 二</c.Char><c.Pinyin>èr</c.Pinyin><c.Meaning>two</c.Meaning></Row></li>
              <li><Row><c.Char>3 三</c.Char><c.Pinyin>sān</c.Pinyin><c.Meaning>three</c.Meaning></Row></li>
              <li><Row><c.Char>4 四</c.Char><c.Pinyin>sì</c.Pinyin><c.Meaning>four</c.Meaning></Row></li>
              <li><Row><c.Char>5 五</c.Char><c.Pinyin>wǔ</c.Pinyin><c.Meaning>five</c.Meaning></Row></li>
              <li><Row><c.Char>6 六</c.Char><c.Pinyin>lìu</c.Pinyin><c.Meaning>six</c.Meaning></Row></li>
              <li><Row><c.Char>7 七</c.Char><c.Pinyin>qī</c.Pinyin><c.Meaning>seven</c.Meaning></Row></li>
              <li><Row><c.Char>8 八</c.Char><c.Pinyin>bā</c.Pinyin><c.Meaning>eight</c.Meaning></Row></li>
              <li><Row><c.Char>9 九</c.Char><c.Pinyin>jiǔ</c.Pinyin><c.Meaning>nine</c.Meaning></Row></li>
              <li><Row><c.Char>10 十</c.Char><c.Pinyin>shí</c.Pinyin><c.Meaning>ten</c.Meaning></Row></li>
              <li><Row><c.Char>11 十一</c.Char><c.Pinyin>shíyī</c.Pinyin><c.Meaning>eleven</c.Meaning></Row></li>
              <li><Row><c.Char>12 十二</c.Char><c.Pinyin>shíèr</c.Pinyin><c.Meaning>twelve</c.Meaning></Row></li>
              <li><Row><c.Char>13 十三</c.Char><c.Pinyin>shísān</c.Pinyin><c.Meaning>thirteen</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>20 二十 </c.Char><c.Pinyin>èrshí</c.Pinyin><c.Meaning>twenty</c.Meaning></Row></li>
              <li><Row><c.Char>21 二十一 </c.Char><c.Pinyin>èrshíyī</c.Pinyin><c.Meaning>twenty-one</c.Meaning></Row></li>
              <li><Row><c.Char>22 二十二 </c.Char><c.Pinyin>èrshíèr</c.Pinyin><c.Meaning>twenty-two</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>99 九十九</c.Char><c.Pinyin>jiǔshíjiǔ</c.Pinyin><c.Meaning>ninenty-nine</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          {grammarTitle()}
          <c.P>We have seen that some Chinese sentences are made up of a Subject, a Verb and an Object, just as in English:</c.P>
          {example(1, { basic: true, big: true, audio: true })}
          <c.P>But unlike in English, not every Chinese sentence needs to contain a verb. For example, we can have a sentence made up of a personal pronoun and a number of years:</c.P>
          {example(2, { basic: true, big: true, audio: true })}
          <c.P>So to tell somebody your age, you literally say “I x years”. This would of course sound odd in English. And you can even shorten this to:</c.P>
          {example(3, { basic: true, big: true, audio: true })}
          <c.P>In fact, in relaxed colloquial language you can shorten some sentences with 是 <b>shì</b> in the same way:</c.P>
          {example(4, { basic: true, big: true, audio: true })}
          <c.P>Sentences like this may be easier to understand by using a different grammatical concept: Topic and Comment. The Topic indicates what the sentence "is about" and the Comment makes some remark regarding this Topic.</c.P>
          <c.P>Linguists have measured the pauses between words in Chinese and found that the pause in the break between Topic and Comment is often a tiny bit longer than the pauses between the other words in a sentence. We can mark this break with a colon in the literal translation to make it even clearer which part is the Topic and which is the Comment:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row>(I : TWENTY-SEVEN YEAR.)</Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>This is a very simple example - but the Topic-Comment construction is also used for more complex patterns. In fact, Topic-Comment sentences are so common that linguists call Chinese a <i>topic-prominent</i> language.</c.P>
          {grammarTitle()}
          <c.P>In Chinese, it is often possible to omit words when they are clear from the context:</c.P>
          {example(5, { basic: true, big: true, audio: true })}
          <c.P>In this example, it is already clear who you are talking about – yourself – so it is not necessary to repeat the subject <i>I</i>.</c.P>
          <c.P>Again, we could analyze this as a Topic-Comment construction:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row>(I : FAMILY-NAMED WANG, CALLED WANG YUGUO.)</Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle>Dialog: Presenting your age</c.PartTitle>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          {dialog(1, { sentenceType: 'pinyin', displayNames: false })}
          {dialog(1, { sentenceType: 'translation', displayNames: false })}
          <c.P
            buttonOptions={{
              type: 'askUserSettings'
            }}
          >Now, input your own age to practice presenting yourself.
          </c.P>
          <c.PartTitle>Practice: Presentation</c.PartTitle>
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          {dialog(3, { sentenceType: 'chinese', displayNames: false })}
          {dialog(4, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle>Practice: Role play</c.PartTitle>
          {dialog(5, { sentenceType: 'chinese', displayNames: false })}
          {dialog(6, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle>Culture and society: How Chinese people count age</c.PartTitle>
          <c.P>In Western countries, age changes on the birthday: you suddenly become one year older than the day before. In China, people instead state their age by saying <i>how old they will be this calendar year</i>; it doesn't matter whether they have actually passed this year's birthday or not. As of January 1 each year, you are one year older than the year before.</c.P>
          <c.PartTitle>Culture and society: Number symbolism</c.PartTitle>
          <c.P>
            Number symbolism is so important in China that many people will pay extra for a “lucky” phone number or license plate.
            There are also “unlucky” numbers that people tend to avoid. The most famous example is 四 <b>sì</b> <i>four</i>, which sounds similar to another character, <b>sǐ</b> <i>to die</i>. As a consequence, many Chinese buildings lack all floors ending in a 4: 4, 14, 24 and so on.
          </c.P>
          <c.P>
            Numbers can also be used in puns which come to symbolize more complex ideas: May 21 is recognized as "Chinese Valentine's Day" because May is the fifth month and <b>wǔ</b> <i>five</i> sounds similar to <b>wǒ</b> <i>I</i>; <b>èryī</b> is interpreted as <b>ài nǐ</b> <i>love you</i>. Such puns are even used to create brand names: the job-hunting internet site 51job chose its name because <i>one</i> can be pronounced to sound like <i>want</i> and <i>five</i> like <i>I</i>.
            An educated Chinese reader who understands the English word <i>job</i> will immediately get the pun: “I want job”. This kind of punning is especially common in text messages and internet chats.
          </c.P>
          <c.PartTitle>NEW VOCABULARY</c.PartTitle>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>岁</c.Char><c.Pinyin>suì</c.Pinyin><c.Meaning>year (of age)</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle>CALLIGRAPHY</c.PartTitle>
          <c.P>The <i>dot</i> is one of the most common and versatile brush strokes. In this episode, we find two examples: 六 <i>six</i> and 八 <i>eight</i>. </c.P>
          <c.P>In the character 六 <i>six</i> all strokes except the <i>horizontal</i> are dots. As you can see, these dots are written differently depending on where they appear in a character.</c.P>
          <c.P>- The short top dot starts at the left and finishes with a slight increase of pressure down and left.</c.P>
          <c.P>- The short left bottom dot starts firmly at the right and tapers evenly down towards the left.</c.P>
          <c.P>- The elongated right bottom dot curves softly downward from left to right.</c.P>
          <c.P>In the character 八 <i>eight</i>, the short left hand dot starts firmly at the right and tapers evenly down towards the left. If you compare this with the character 人 <i>man</i>, <i>person</i>, you see that the dot in 八 is actually just a shorter version of the left downward stroke人.</c.P>
          <c.PartTitle>PRACTICE</c.PartTitle>
          <c.PartTitle type="tertiary">A. The difference between the three different sounds of the pīnyīn letter i</c.PartTitle>
          <c.Bookrow
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            PRACTICE
          </c.Bookrow>
          <c.PartTitle type="tertiary">B. Pronunciation of -ui and -iu</c.PartTitle>
          <c.Bookrow
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            PRACTICE
          </c.Bookrow>
          <c.PartTitle type="tertiary">C. The pronunciation of yī</c.PartTitle>
          <c.Bookrow
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            PRACTICE
          </c.Bookrow>
          <c.PartTitle type="tertiary">D. Say the following numbers in Chinese. Listen to the correct answer and check if you got the tones right:</c.PartTitle>
          <c.Bookrow
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            PRACTICE
          </c.Bookrow>
          <c.PartTitle type="tertiary">E. Dictation: listen and write the following phrases in pīnyīn, with tones. If there is tone sandhi, write the actual tone that you hear:</c.PartTitle>
          <c.Bookrow
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
          >
            PRACTICE
          </c.Bookrow>
          <c.PartTitle type="tertiary">F. Grammar knowledge</c.PartTitle>
          <c.Bookrow
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[6]
              }
            }}
          >
            PRACTICE
          </c.Bookrow>
          <c.PartTitle type="tertiary">G. Translate the following sentences:</c.PartTitle>
          <c.Bookrow
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[7]
              }
            }}
          >
            PRACTICE
          </c.Bookrow>
          <c.PartTitle type="tertiary">H. Write the stroke order for the following characters:</c.PartTitle>
          <c.Bookrow
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[7]
              }
            }}
          >
            PRACTICE
          </c.Bookrow>
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
