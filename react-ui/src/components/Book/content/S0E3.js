import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import insertVariables from '../../../utils/insertVariables';

export default class S1E7 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character, settings }
      = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle type="secondary">Introducing where you are from</c.PartTitle>
          {example(4, { basic: true, audio: true })}
          <c.P>This sentence means I am Chinese. It contains three initials that are related to each other. In <b>pīnyīn</b>, they are spelled <b>sh-</b>, <b>zh-</b> and <b>r-</b>.</c.P>
          <c.P>Chinese <b>sh-</b> is pronounced more or less like English <i>sh</i> in <i>show</i>, for example in the character 是 <b>shi</b>. Type the correct <b>pīnyīn</b>, with tone:</c.P>
          <c.Bookrow>
            <c.Char>是</c.Char>
          </c.Bookrow>
          // MultipleChoice
          <c.P>Chinese <b>r-</b> is pronounced a bit like British English <i>r</i> (not a thick American <i>r</i>). The position of your tongue and mouth should be exactly the same as when you pronounce <b>sh-</b>. The difference is that <b>r-</b> is voiced and less aspirated. <i>Voiced</i> means that the vocal cords vibrate when you pronounce the sound; hold your fingers against your Adam’s apple and you can feel the vibration. <i>Aspirated</i> means there is a strong airflow; if you hold your palm in front of your mouth, you will feel strong stream of air as you pronounce <b>sh-</b>, but only a weak flow when you pronounce <b>r-</b>.</c.P>
          <c.P>Type the correct tone on 人 <b>ren</b>. Repeat again after the recording:</c.P>
          <c.Bookrow>
            <c.Char>人</c.Char>
          </c.Bookrow>
          // MultipleChoice
          <c.P><b>Zh-</b> is a <i>d-</i>sound followed by a Chinese <i>r</i>.</c.P>
          <c.P>中 means <i>middle</i>. Type the correct tone on 中 <b>zhong</b>. Repeat again after the
          recording:</c.P>
          <c.Bookrow>
            <c.Char>中</c.Char>
          </c.Bookrow>
          // MultipleChoice
          <c.P>In Chinese, China is called 中国 which means <i>Middle Kingdom</i>. Type the correct tones on 中国 <b>zhongguo</b>. Practice pronunciation again:</c.P>
          <c.Bookrow>
            <c.Char>中国</c.Char>
          </c.Bookrow>
          // Exo
          <c.P>In order to say <i>Chinese (person, someone whose nationality is Chinese)</i>, we add the character 人 <b>rén</b> <i>person</i>. Type the correct tones on 中国人 <b>zhongguoren</b>:</c.P>
          <c.Bookrow>
            <c.Char>中国人</c.Char>
          </c.Bookrow>
          // Exo
          <c.P>To say <i>I am Chinese</i>, you use the verb 是 <i>be</i>. Type the correct tones on this sentence:</c.P>
          <c.Bookrow>
            <c.Char>我是中国人。</c.Char>
          </c.Bookrow>
          // Exo
          <c.PartTitle type="secondary">Explore: Meet Yi and Yuguo</c.PartTitle>
          <c.P>Yi and her friend Yuguo both come from China. Here’s how they present themselves:</c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          // displayTranslation
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          // displayTranslation
          <c.PartTitle type="secondary">Your country and nationality</c.PartTitle>
          <c.P>Now, it’s your turn to tell Wang Yi and Wang Yuguo where you are from. Listen how to say the name of your country:</c.P>
          {example(6, { basic: true, big: true, audio: true })}
          <c.P>Repeat this until you feel confident saying your country name.</c.P>
          <c.P>
            In order to say <i>I am from {insertVariables('[NATIONALITY_EN]', settings)}</i>, just add 人:
          </c.P>
          {example(5, { basic: true, big: true, audio: true })}
          <c.PartTitle type="secondary">Role Play: Introduce yourself and where you are from</c.PartTitle>
          <c.P>Introduce yourself to Wang Yuguo:</c.P>
          {dialog(3, { sentenceType: 'chinese', displayNames: false })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles! Pretend you are Wang Yuguo, and introduce yourself.</c.P>
          <c.PartTitle type="secondary">Pinyin practice</c.PartTitle>
          <c.P>Let us practice transcribing the characters and words in this lesson to <b>pīnyīn</b>.</c.P>
          <c.P>Three different sounds are spelled <b>i</b>.</c.P>
          <c.P>After most initials, Chinese <b>i</b> is pronounced like English ee in <i>tree</i>:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('ni3'),
                text: '你'
              }
            }}
          >
            <c.Ul>
              <li>
                <Row>
                  <c.Char>你</c.Char>
                  <c.Pinyin>nǐ</c.Pinyin>
                  <c.Meaning>you</c.Meaning>
                </Row>
              </li>
            </c.Ul>
          </c.Bookrow>
          <c.P>This is also the how it is pronounced in finals like <b>-ing</b> and <b>-iao</b>:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '姓，叫'
              }
            }}
          >
            <c.Ul>
              <li>
                <Row>
                  <c.Char>姓</c.Char>
                  <c.Pinyin>xìng</c.Pinyin>
                  <c.Meaning>to have as family name</c.Meaning>
                </Row>
              </li>
              <li>
                <Row>
                  <c.Char>叫</c.Char>
                  <c.Pinyin>jiào</c.Pinyin>
                  <c.Meaning>to be called</c.Meaning>
                </Row>
              </li>
            </c.Ul>
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
            <c.Ul>
              <li>
                <Row>
                  <c.Char>是</c.Char>
                  <c.Pinyin>shì</c.Pinyin>
                  <c.Meaning>, to be (so this is pronounced like English shr in shrewd)</c.Meaning>
                </Row>
              </li>
            </c.Ul>
          </c.Bookrow>
          <c.P>In a previous lesson, we learned the third pronunciation of <b>i</b>. After the initials <b>s-</b>, <b>c-</b> and <b>z-</b>, it is a little bit similar to the sound we make to imitate the buzzing of a bee: <i>bzzzzzzz</i>, but without the initial <i>bz-</i>sound, just the long <i>zzzzzz</i>.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                // url: pinyinNumberToAudioUrl('zi3'),
                text: '子'
              }
            }}
          >
            <c.Ul>
              <li>
                <Row>
                  <c.Char>子</c.Char>
                  <c.Pinyin>zǐ</c.Pinyin>
                  <c.Meaning>son, child</c.Meaning>
                </Row>
              </li>
            </c.Ul>
          </c.Bookrow>
          <c.P>If we had designed <b>pīnyīn</b>, we would have chosen the following spellings, because that is what these syllables sound like:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><b>nǐ</b> => něe</li>
              <li><b>shì</b> => sh`r</li>
              <li><b>zǐ</b> => dž</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Practice the different pronunciations carefully:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '姓，是，子，你，叫，是，姓，子'
              }
            }}
          >
            <c.Ul>
              <li><c.Pinyin>xìng, shì, zǐ, nǐ, jiào, shì, xìng, zǐ</c.Pinyin></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>You can review all the sounds in this lesson more thoroughly in the <i>Introduction to Chinese pronunciation and writing</i>.</c.P>
          <c.PartTitle type="secondary">Oracle bones</c.PartTitle>
          <c.Bookrow center><img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/zhong_jiaguwen.png'} alt=""/></c.Bookrow>
          <c.Bookrow center><img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/yu_jiaguwen.png'} alt=""/></c.Bookrow>
          <c.Bookrow center><img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/guo_jiaguwen.png'} alt=""/></c.Bookrow>
          <c.PartTitle type="secondary">Characters – calligraphy</c.PartTitle>
          <c.P>We have so far learned the <i>horizontal</i>, <i>vertical</i> and <i>hook</i> strokes. The character 人 <i>person</i> contains two new strokes: the <i>left</i> and <i>right downard</i> strokes.</c.P>
          <c.P>The left downward stroke is used as a “left leg” in many characters. It has the shape of an elephant tusk:</c.P>
          <c.Bookrow>
            <img src={'http://via.placeholder.com/350x150'} alt=""/>
          </c.Bookrow>
          <c.P>The right downward stroke is often used as the right leg of a character. It should stand firmly on a little “foot” at the end of the leg.</c.P>
          <c.P>To write this stroke, you should feel the pen striving upward to the right, even as it slopes gently downwards. You finish the stroke by pressing a bit harder and changing direction to create the stable little foot.</c.P>
          <c.Bookrow>
            <img src={'http://via.placeholder.com/350x150'} alt=""/>
          </c.Bookrow>
          <c.P>The foot should not be at an angle with the rest of the stroke; this will create an ugly, broken impression:</c.P>
          <c.Bookrow>
            <img src={'http://via.placeholder.com/350x150'} alt=""/>
          </c.Bookrow>
          <c.P>Practice: Left and right downward strokes</c.P>
          {character(1, { mode: 'practice' })}
          <c.P>人 is also the radical of 你 <i>you</i>, which we learned in the previous lesson. But here, the right downward stroke changes to a vertical stroke:</c.P>
          <c.Bookrow><c.CharacterBox simpChar="亻" /></c.Bookrow>
          <c.P>The phonetic is a rare character from the classical written language which we don’t need to learn. Practice writing:</c.P>
          {character(2, { mode: 'practice' })}
          <c.PartTitle type="secondary">Grammar</c.PartTitle>
          <c.PartTitle type="tertiary">A. Using sentence patterns to learn Chinese</c.PartTitle>
          <c.P>Chinese has a reputation for being difficult. Is this really true?</c.P>
          <c.P>Imagine that you are a Chinese student studying English. Your teacher asks you to describe your holiday:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>Teacher: <i>Where did you go?</i></li>
              <li>You: <i>I go to Hong Kong.</i></li>
              <li>Teacher: <i>No, no, no: I <u>went</u> to Hong Kong. Have you visited Singapore?</i></li>
              <li>You: <i>No: I have never went to Singapore.</i></li>
              <li>Teacher: <i>I have never <u>gone</u> to Singapore.</i></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>English words often change depending on the grammatical context. This does not happen in Chinese: it has no plurals (such as English <i>pen</i> and <i>pens</i>), no verb tenses (<i>go</i> – <i>went</i> – <i>gone</i>) and no comparatives of adjectives (<i>good</i> – <i>better</i> – <i>best</i>). In Chinese, the word always has the same form:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>I <i>am</i> Chinese -> I <b>shì</b> Chinese.</li>
              <li>He <i>is</i> Chinese-> He <b>shì</b> Chinese.</li>
              <li>They <i>are</i> Chinese-> They <b>shì</b> Chinese.</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>A language without word forms is called an <i>isolating</i> language. When we study an isolating language like Chinese, we don’t have to worry about singular and plural, tenses and declinations. We just need to learn <i>sentence patterns</i>. Once you know the pattern for how to say something, you can insert new words without having to think about how to modify the words themselves.</c.P>
          <c.P>This course is based on such patterns. You should study these examples carefully; if you want, they are even available as flash cards so you can learn them by heart. You will get a feel for the langauge by internalizing the structures of Chinese as well as directly improving your pronunciation and ability to speak and understand.</c.P>
          <c.P>All patterns are available as flash cards with translations to idiomatic English so that you will know how to use them in the right way. In those cases where we think it will help you understand the structure of a pattern better, we also provide a literal translation in capital letters to show the function of each Chinese word.</c.P>
          <c.PartTitle type="tertiary">B. Sentence patterns with a few common verbs</c.PartTitle>
          <c.P>The sentences we have learned in previous lessons are made up of Subject, Verb and Object, just as in English:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>In this chapter, we encountered 是 shì which functions like English be (am, is):</c.P>
          {example(4, { audio: true })}
          <c.PartTitle type="secondary">New characters</c.PartTitle>
          <c.P>Here are the new characters in this lesson. Click on each character to review the stroke order, or on the brush or history icons to see calligraphy and history videos.</c.P>
          {newCharacters()}
          <c.PartTitle type="secondary">New words</c.PartTitle>
          // newWords
          <c.PartTitle type="secondary">Review</c.PartTitle>
          <c.P><i>On the ChineseMe website, you will find review exercises to practice pronunciation, grammar and character writing. Download the flashcard decks to review character stroke orders and vocabulary. Then do the Final Exam to progress to the next Lesson.</i></c.P>
        </c.Page>
      </div>
    );
  }
}
