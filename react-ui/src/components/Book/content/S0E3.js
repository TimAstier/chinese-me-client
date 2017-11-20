import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S1E7 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character }
      = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle type="secondary">Introducing where you are from</c.PartTitle>
          {example(1, { basic: true, audio: true })}
          <c.P>This sentence means I am Chinese. It contains three initials that are related to each other. In pīnyīn, they are spelled sh-, zh- and r-.</c.P>
          <c.P>Chinese sh- is pronounced more or less like English sh in show, for example in the character 是 shi. Type the correct pīnyīn, with tone:</c.P>
          // MultipleChoice
          <c.P>Chinese r- is pronounced a bit like British English r (not a thick American r). The position of your tongue and mouth should be exactly the same as when you pronounce sh-. The difference is that r- is voiced and less aspirated. Voiced means that the vocal cords vibrate when you pronounce the sound; hold your fingers against your Adam’s apple and you can feel the vibration. Aspirated means there is a strong airflow; if you hold your palm in front of your mouth, you will feel strong stream of air as you pronounce sh-, but only a weak flow when you pronounce r-.</c.P>
          <c.P>Type the correct tone on 人 ren. Repeat again after the recording:</c.P>
          // MultipleChoice
          <c.P>Zh- is a d-sound followed by a Chinese r.</c.P>
          <c.P>中 means middle. Type the correct tone on 中 zhong. Repeat again after the
          recording:</c.P>
          // MultipleChoice
          <c.P>In Chinese, China is called 中国 which means Middle Kingdom. Type the correct tones on 中国 zhongguo. Practice pronunciation again:</c.P>
          // Exo
          <c.P>In order to say Chinese (person, someone whose nationality is Chinese), we add the character 人 rén person. Type the correct tones on 中国人 zhongguoren:</c.P>
          // Exo
          <c.P>To say I am Chinese, you use the verb 是 be. Type the correct tones on this sentence:</c.P>
          // Exo
          <c.PartTitle type="secondary">Explore: Meet Yi and Yuguo</c.PartTitle>
          <c.P>Yi and her friend Yuguo both come from China. Here’s how they present themselves:</c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          // displayTranslation
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          // displayTranslation
          <c.PartTitle type="secondary">Your country and nationality</c.PartTitle>
          <c.P>Now, it’s your turn to tell Wang Yi and Wang Yuguo where you are from. Listen how to say the name of your country on ChineseMe:</c.P>
          // My country...
          <c.P>Repeat this until you feel confident saying your country name.</c.P>
          <c.P>In order to say I am [USER_NATIONALITY], just add 人:</c.P>
          // Wrong variable?
          {example(5, { basic: true, big: true, audio: true })}
          <c.PartTitle type="secondary">Role Play: Introduce yourself and where you are from</c.PartTitle>
          <c.P>Introduce yourself to Wang Yi and Wang Yuguo:</c.P>
          {dialog(3, { sentenceType: 'chinese', displayNames: false })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles! Pretend you are Wang Yuguo, and introduce yourself.</c.P>
          <c.PartTitle type="secondary">Pinyin practice</c.PartTitle>
          <c.P>Let us practice transcribing the characters and words in this lesson to pīnyīn.</c.P>
          <c.P>Three different sounds are spelled i.</c.P>
          <c.P>After most initials, Chinese i is pronounced like English ee in tree:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: { url: 'test' }
            }}
          >
            <c.Ul>
              <li>你 nǐ you</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>This is also the how it is pronounced in finals like -ing and -iao:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: { url: 'test' }
            }}
          >
            <c.Ul>
              <li>姓 xìng to have as family name</li>
              <li>叫 jiào to be called</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>But after the initials sh-, r- , ch- and zh- it is pronounced like an American r!</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: { url: 'test' }
            }}
          >
            <c.Ul>
              <li>是 shì, to be (so this is pronounced like English shr in shrewd)</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>In a previous lesson, we learned the third pronunciation of i. After the initials s-, c- and z-, it is a little bit similar to the sound we make to imitate the buzzing of a bee: bzzzzzzz, but without the initial bz-sound, just the long zzzzzz.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: { url: 'test' }
            }}
          >
            <c.Ul>
              <li>子 zǐ, son, child</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>If we had designed pīnyīn, we would have chosen the following spellings, because that is what these syllables sound like:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>nǐ you => něe</li>
              <li>shì you => sh`r</li>
              <li>zǐ you => dž</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Practice the different pronunciations carefully:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: { url: 'test' }
            }}
          >
            <c.Ul>
              <li>xìng, shì, zǐ, nǐ, jiào, shì, xìng, zǐ</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>You can review all the sounds in this lesson more thoroughly in the Introduction to Chinese pronunciation and writing.</c.P>
          <c.PartTitle type="secondary">Oracle bones</c.PartTitle>
          <c.Bookrow>
            <img src={'http://via.placeholder.com/350x150'} alt=""/>
          </c.Bookrow>
          <c.Bookrow>
            <img src={'http://via.placeholder.com/350x150'} alt=""/>
          </c.Bookrow>
          <c.Bookrow>
            <img src={'http://via.placeholder.com/350x150'} alt=""/>
          </c.Bookrow>
          <c.PartTitle type="secondary">Characters – calligraphy</c.PartTitle>
          <c.P>We have so far learned the horizontal, vertical and hook strokes. The character 人 person contains two new strokes: the left and right downard strokes.</c.P>
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
          <c.P>人 is also the radical of 你 you, which we learned in the previous lesson. But here, the right downward stroke changes to a vertical stroke:</c.P>
          <c.Bookrow><c.CharacterBox simpChar="亻" /></c.Bookrow>
          <c.P>The phonetic is a rare character from the classical written language which we don’t need to learn. Practice writing:</c.P>
          {character(2, { mode: 'practice' })}
          <c.PartTitle type="secondary">Grammar</c.PartTitle>
          <c.PartTitle type="tertiary">A. Using sentence patterns to learn Chinese</c.PartTitle>
          <c.P>Chinese has a reputation for being difficult. Is this really true?</c.P>
          <c.P>Imagine that you are a Chinese student studying English. Your teacher asks you to describe your holiday:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>Teacher: Where did you go?</li>
              <li>You: I go to Hong Kong.</li>
              <li>Teacher: No, no, no: I went to Hong Kong. Have you visited Singapore?</li>
              <li>You: No: I have never went to Singapore.</li>
              <li>Teacher: I have never gone to Singapore.</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>English words often change depending on the grammatical context. This does not happen in Chinese: it has no plurals (such as English pen and pens), no verb tenses (go – went – gone) and no comparatives of adjectives (good – better – best). In Chinese, the word always has the same form:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>I am Chinese -> I shì Chinese.</li>
              <li>He is Chinese-> He shì Chinese.</li>
              <li>They are Chinese-> They shì Chinese.</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>A language without word forms is called an isolating language. When we study an isolating language like Chinese, we don’t have to worry about singular and plural, tenses and declinations. We just need to learn sentence patterns. Once you know the pattern for how to say something, you can insert new words without having to think about how to modify the words themselves.</c.P>
          <c.P>This course is based on such patterns. You should study these examples carefully; if you want, they are even available as flash cards so you can learn them by heart. You will get a feel for the langauge by internalizing the structures of Chinese as well as directly improving your pronunciation and ability to speak and understand.</c.P>
          <c.P>All patterns are available as flash cards with translations to idiomatic English so that you will know how to use them in the right way. In those cases where we think it will help you understand the structure of a pattern better, we also provide a literal translation in capital letters to show the function of each Chinese word.</c.P>
          <c.PartTitle type="tertiary">B. Sentence patterns with a few common verbs</c.PartTitle>
          <c.P>The sentences we have learned in previous lessons are made up of Subject, Verb and Object, just as in English:</c.P>
          {example(1, { audio: true })}
          // Pinyin with tones
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
