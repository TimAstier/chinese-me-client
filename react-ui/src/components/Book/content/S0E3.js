import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import insertVariables from '../../../utils/insertVariables';
import { middle as OracleBone1 } from '../etymology';
import { jade as OracleBone2 } from '../etymology';
import { country as OracleBone3 } from '../etymology';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character, settings,
      practiceIds, newWords, image, grammarTitle, pronunciationTitle } = this.props;

    // This part comes between a dialog 'title' and 'intro'
    const specialIntro = () => {
      return (
        <div>
          <c.P>Now, it’s your turn to tell Wang Yi and Wang Yuguo where you are from. In Chinese, <i>{insertVariables('[NATIONALITY_EN]', settings)}</i> is:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: insertVariables('[NATIONALITY_ZH]', settings)
              }
            }}
          >
            <Row>
              <c.Char>{insertVariables('[NATIONALITY_ZH]', settings)}</c.Char>
              <c.Pinyin>{insertVariables('[COUNTRY_PINYIN]', settings)}</c.Pinyin>
            </Row>
          </c.Bookrow>
          <c.P>Listen to the audio voice and repeat until you feel confident saying your country name.</c.P>
          <c.P>
            In order to say <i>I am from {insertVariables('[NATIONALITY_EN]', settings)}</i>, just add <c.Chinese>人</c.Chinese>. Listen and repeat:
          </c.P>
          {example(5, { basic: true, audio: true })}
        </div>
      );
    };
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <Objective
            text="How to say where you are from"
          />
          <c.Bookrow center marginTop={50}>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow>
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>In this lesson, we encounter three initials that are closely related to each other. In <b>pīnyīn</b>, they are spelled <b>sh-</b>, <b>zh-</b> and <b>r-</b>.</c.P>
          <c.P>Chinese <b>sh-</b> is pronounced more or less like English <i>sh</i> in <i>show</i>:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('shi4')
              }
            }}
          >
            <Row>
              <c.Char>是</c.Char>
            </Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >Type the correct tone on <c.Chinese>是</c.Chinese> <b>shi</b>. Repeat again after the recording.</c.P>
          <c.P>Chinese <b>r-</b> is pronounced a bit like British English <i>r</i> (not a thick American <i>r</i>). The position of your tongue and mouth should be exactly the same as when you pronounce <b>sh-</b>. The difference is that <b>r-</b> is voiced and less aspirated. <i>Voiced</i> means that the vocal cords vibrate when you pronounce the sound; hold your fingers against your Adam’s apple and you can feel the vibration. <i>Aspirated</i> means there is a strong airflow; if you hold your palm in front of your mouth, you will feel a strong stream of air as you pronounce <b>sh-</b>, but only a weak flow when you pronounce <b>r-</b>.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('ren2')
              }
            }}
          >
            <Row>
              <c.Char>人</c.Char>
            </Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >Type the correct tone on 人 <b>ren</b>. Repeat again after the recording.</c.P>
          <c.P><b>Zh-</b> is a <i>d-</i>sound followed by a Chinese <i>r</i>.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zhong1')
              }
            }}
          >
            <Row>
              <c.Char>中</c.Char>
            </Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            <c.Chinese>中</c.Chinese> means <i>middle</i>. Type the correct tone on <c.Chinese>中</c.Chinese> <b>zhong</b>. Repeat again after the recording.
          </c.P>
          {pronunciationTitle()}
          <c.P>So far, the words we have encountered have all been monosyllabic. This means one meaning is represented by a single syllable, for example:</c.P>
          <c.Bookrow>
            <Row>
              <c.Char>我</c.Char>
              <c.Pinyin>wǒ</c.Pinyin>
              <c.Meaning>I, me</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow>
            <Row>
              <c.Char>叫</c.Char>
              <c.Pinyin>jiào</c.Pinyin>
              <c.Meaning>to be called</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow>
            <Row>
              <c.Char>姓</c.Char>
              <c.Pinyin>xìng</c.Pinyin>
              <c.Meaning>have as surname</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>Each of these syllables are written with a single character. But words can also be <i>polysyllabic</i>; two examples from this lesson are:</c.P>
          <c.Bookrow>
            <Row>
              <c.Char>中国</c.Char>
              <c.Pinyin>Zhōngguó</c.Pinyin>
              <c.Meaning>China</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow>
            <Row>
              <c.Char>中国人</c.Char>
              <c.Pinyin>Zhōngguórén</c.Pinyin>
              <c.Meaning>Chinese (person)</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            Type the correct tones on <c.Chinese>中国</c.Chinese> <b>zhongguo</b>. Practice pronunciation again.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
          >
            Type the correct tones on <c.Chinese>中国人</c.Chinese> <b>zhongguoren</b>. Practice pronunciation again.
          </c.P>
          <c.P>
            In fact, most words in modern Chinese are polysyllabic. But this was not always so: in classical Chinese, the ancient language spoken in China thousands of years ago, one word almost always corresponded to a single character. As the language developed, however, simple ideas were combined to more and more complex concepts by making words composed of more than one character. Each character still contributes meaning:
          </c.P>
          <c.P><c.Chinese>中国</c.Chinese> = MIDDLE COUNTRY = <i>China</i></c.P>
          <c.P><c.Chinese>中国人</c.Chinese> = MIDDLE COUNTRY PERSON = <i>Chinese</i></c.P>
          <c.P>
            There are no spaces between words in written Chinese, so we have to determine from context which characters go together to form words. This may seem daunting, but it is no more difficult than hearing which syllables go together in any spoken language – after all, we don’t put “spaces” or pauses between words in spoken English either.
          </c.P>
          <c.P>
            The fact that we can combine characters into polysyllabic words is good news for students of Chinese: you don’t always have to learn a new character for a new word. And the meaning of each character is always useful for understanding a word where it appears.
          </c.P>
          <c.P>
            Some characters are no longer used independently at all; they can <i>only</i> appear as elements of polysyllabic words. Starting from this lesson, new characters and new vocabulary will be presented under separate headings so that it will be clear which characters are real words that you can use, and which characters are simply “elements of meaning”. Single-character words will appear in both character and word lists.
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>Chinese has a reputation for being difficult. Is this really true?</c.P>
          <c.P>Imagine that you are a Chinese student studying English. Your teacher asks you to describe your holiday:</c.P>
          <c.Bookrow flexDirection="column">
            <Row lineHeight={30}><c.Space width={100}>Teacher:</c.Space><span><i>Where did you go?</i></span></Row>
            <Row lineHeight={30}><c.Space width={100}>You:</c.Space><span><i>I go to Hong Kong.</i></span></Row>
            <Row lineHeight={30}><c.Space width={100}>Teacher:</c.Space><span><i>No, no, no: I <u>went</u> to Hong Kong. Have you visited Singapore?</i></span></Row>
            <Row lineHeight={30}><c.Space width={100}>You:</c.Space><span><i>No: I have never went to Singapore.</i></span></Row>
            <Row lineHeight={30}><c.Space width={100}>Teacher:</c.Space><span><i>I have never <u>gone</u> to Singapore.</i></span></Row>
          </c.Bookrow>
          <c.P>English words often change depending on the grammatical context. This does not happen in Chinese: it has no plurals (such as English <i>pen</i> and <i>pens</i>), no verb tenses (<i>go</i> – <i>went</i> – <i>gone</i>) and no comparatives of adjectives (<i>good</i> – <i>better</i> – <i>best</i>). In Chinese, the word always has the same form:</c.P>
          <c.Bookrow flexDirection="column">
            <Row lineHeight={30}><span>I <i>am</i> Chinese -> I <b>shì</b> Chinese.</span></Row>
            <Row lineHeight={30}><span>He <i>is</i> Chinese-> He <b>shì</b> Chinese.</span></Row>
            <Row lineHeight={30}><span>They <i>are</i> Chinese-> They <b>shì</b> Chinese.</span></Row>
          </c.Bookrow>
          <c.P>A language without word forms is called an <i>isolating</i> language. When we study an isolating language like Chinese, we don’t have to worry about singular and plural, tenses and declinations. We just need to learn <i>sentence patterns</i>. Once you know the pattern for how to say something, you can insert new words without having to think about how to modify the words themselves.</c.P>
          <c.P>This course is based on such patterns. You should study these examples carefully; if you want, they are even available as flash cards so you can learn them by heart. You will get a feel for the language by internalizing the structures of Chinese as well as directly improving your pronunciation and ability to speak and understand.</c.P>
          <c.P>All patterns come with translations to idiomatic English so that you will know how to use them in the right way. In those cases where we think it will help you understand the structure of a pattern better, we also provide a literal translation in capital letters to show the function of each Chinese word.</c.P>
          {grammarTitle()}
          <c.P>The sentences we have learned in previous lessons are made up of Subject, Verb and Object, just as in English:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>We have already encountered <c.Chinese>是</c.Chinese> <b>shì</b> which functions like English <i>be</i> (<i>am, is</i>):</c.P>
          {example(4, { audio: true })}
          <c.Bookrow center marginTop={50}>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow>
          <c.PartTitle name="dialogs" />
          {dialog(1, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          {dialog(2, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          {dialog(3, { sentenceType: 'chinese', displayNames: false, specialIntro })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles! Pretend you are Wang Yuguo, and introduce yourself.</c.P>
          <c.PartTitle>PINYIN PRACTICE</c.PartTitle>
          <c.P>Let us practice transcribing some other characters and words in this lesson to <b>pīnyīn</b>.</c.P>
          <c.PartTitle type="secondary"><span>Three different sounds are spelled <i>i</i></span></c.PartTitle>
          <c.P>After most initials, Chinese <b>i</b> is pronounced like English <i>ee</i> in <i>tree</i>:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('ni3'),
                text: '你'
              }
            }}
          >
            <Row>
              <c.Char>你</c.Char>
              <c.Pinyin>nǐ</c.Pinyin>
              <c.Meaning>you</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>This is also the how it is pronounced in finals like <b>-ing</b> and <b>-iao</b>:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '姓'
              }
            }}
          >
            <Row>
              <c.Char>姓</c.Char>
              <c.Pinyin>xìng</c.Pinyin>
              <c.Meaning>to have as family name</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '叫'
              }
            }}
          >
            <Row>
              <c.Char>叫</c.Char>
              <c.Pinyin>jiào</c.Pinyin>
              <c.Meaning>to be called</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>But after the initials <b>sh-</b>, <b>r-</b> , <b>ch-</b> and <b>zh-</b> it is pronounced like an American <i>r</i>!</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('shi4'),
                text: '是'
              }
            }}
          >
            <Row>
              <c.Char>是</c.Char>
              <c.Pinyin>shì</c.Pinyin>
              <c.Meaning>, to be (so this is pronounced like English shr in shrewd)</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>In a previous lesson, we learned the third pronunciation of <b>i</b>. After the initials <b>s-</b>, <b>c-</b> and <b>z-</b>, it is a little bit similar to the sound we make to imitate the buzzing of a bee: <i>bzzzzzzz</i>, but without the initial <i>bz-</i>sound, just the long <i>zzzzzz</i>.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zi3'),
              }
            }}
          >
            <Row>
              <c.Char>子</c.Char>
              <c.Pinyin>zǐ</c.Pinyin>
              <c.Meaning>son, child</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>If we had designed <b>pīnyīn</b>, we would have chosen the following spellings, because that is what these syllables sound like:</c.P>
          <c.Bookrow flexDirection="column">
            <Row lineHeight={30}><span><b>nǐ</b> => něe</span></Row>
            <Row lineHeight={30}><span><b>shì</b> => sh`r</span></Row>
            <Row lineHeight={30}><span><b>zǐ</b> => dž</span></Row>
          </c.Bookrow>
          <c.P>Practice the different pronunciations carefully:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/83.m4a'
              }
            }}
          >
            <b>xìng, shì, zǐ, nǐ, jiào, shì, xìng, zǐ</b>
          </c.Bookrow>
          <c.P>You can review all the sounds in this lesson more thoroughly in the <i>Introduction to Chinese pronunciation and writing</i>.</c.P>
          <c.PartTitle>ORACLE BONES</c.PartTitle>
          <c.Frame><OracleBone1/></c.Frame>
          <c.Frame><OracleBone2/></c.Frame>
          <c.Frame><OracleBone3/></c.Frame>
          <c.PartTitle>CALLIGRAPHY</c.PartTitle>
          <c.P>We have so far learned the <i>horizontal</i>, <i>vertical</i> and <i>hook</i> strokes. The character <c.Chinese>人</c.Chinese> <i>person</i> contains two new strokes: the <i>left</i> and <i>right downward</i> strokes.</c.P>
          <c.P>The <i>left downward</i> stroke is used as a “left leg” in many characters. It has the shape of an elephant tusk:</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>The right downward stroke is often used as the right leg of a character. It should stand firmly on a little “foot” at the end of the leg.</c.P>
          <c.P>To write this stroke, you should feel the pen striving upward to the right, even as it slopes gently downwards. You finish the stroke by pressing a bit harder and changing direction to create the stable little foot.</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>The foot should not be at an angle with the rest of the stroke; this will create an ugly, broken impression:</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>Practice: Left and right downward strokes</c.P>
          {character(5, { mode: 'practice' })}
          <c.P>人 is also the radical of <c.Chinese>你</c.Chinese> <i>you</i>, which we learned in the previous lesson. But here, the right downward stroke changes to a vertical stroke:</c.P>
          <c.Bookrow><c.CharacterBox simpChar="亻" /></c.Bookrow>
          <c.P>The phonetic is a rare character from the classical language which we don’t need to learn. Practice writing:</c.P>
          <c.CharacterPractice characterId={9876} simpChar={'你'}/>
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review practiceId={practiceIds[0]} />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
