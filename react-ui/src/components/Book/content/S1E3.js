import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import { country as OracleBone1 } from '../etymology';
import { audioUrls } from '../../../constants/urls';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character,
      practiceIds, newWords, image, grammarTitle, pronunciationTitle } = this.props;

    // This part comes between a dialog 'title' and 'intro'
    const specialIntro = () => {
      return (
        <div>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
          ><i>Practice how to say where you are from.</i>
          </c.P>
        </div>
      );
    };
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.Bookrow center>{image({ caption: '我是中国人!'})}</c.Bookrow>
          <Objective
            text="How to say where you are from"
          />
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
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Type the correct tone on <c.Chinese>是</c.Chinese> <b>shi</b>. Repeat again after the recording.</i>
          </c.P>
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
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Type the correct tone on 人 <b>ren</b>. Repeat again after the recording.</i>
          </c.P>
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
                elementId: practiceIds[2]
              }
            }}
          >
            <i><c.Chinese>中</c.Chinese> means <i>middle</i>. Type the correct tone on <c.Chinese>中</c.Chinese> <b>zhong</b>. Repeat again after the recording.</i>
          </c.P>
          {pronunciationTitle()}
          <c.P>As we have seen, after most initials, Chinese <b>i</b> is pronounced like English <i>ee</i> in <i>tree</i>:</c.P>
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
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('xing4'),
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
                url: pinyinNumberToAudioUrl('jiao4'),
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
          <c.P>We have also learned that <b>-i</b> is pronounced like the <i>buzzing of a bee</i> after the initials <b>s-</b>, <b>c-</b> and <b>z-</b>: <i>zzz</i>.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zi3'),
                text: '子'
              }
            }}
          >
            <Row>
              <c.Char>子</c.Char>
              <c.Pinyin>zǐ</c.Pinyin>
              <c.Meaning>son, child</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>The final <b>-i</b> actually has one more pronunciation: after the initials <b>sh-</b>, <b>r-</b>, <b>ch-</b> and <b>zh-</b> it is pronounced like a British English <i>r</i>!</c.P>
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
              <c.Meaning>to be</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>Since <b>-i</b> here is pronounced like <b>r</b>, <b>shì</b> should sound like English <i>shr</i> in <i>shrewd</i>!</c.P>
          <c.P>If we had designed <b>pīnyīn</b>, we would have chosen the following spellings, because that is what these syllables sound like:</c.P>
          <c.Bookrow flexDirection="column">
            <Row lineHeight={30}><span><b>nǐ</b> => nee</span></Row>
            <Row lineHeight={30}><span><b>zǐ</b> => dz</span></Row>
            <Row lineHeight={30}><span><b>shì</b> => shr</span></Row>
          </c.Bookrow>
          <c.P>Practice the different pronunciations carefully:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/3_1.mp3`
              }
            }}
          >
            <b>xìng, shì, zǐ, nǐ, jiào, shì, zǐ</b>
          </c.Bookrow>
          {/* <c.P>You can review all the sounds in this lesson more thoroughly in the <i>Introduction to Chinese pronunciation and writing</i>.</c.P> */}
          {pronunciationTitle()}
          <c.P><b>Pīnyīn</b> doesn’t allow certain “naked” finals, so when there is no initial, the spelling changes. We have already seen examples of this, such as adding a <b>y-</b> to <b>-i</b>, and changing the <b>u</b> in <b>-uang</b> to a <b>w-</b>, for example in <b>wang</b>.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yi1'),
                text: '一'
              }
            }}
          >
            <Row>
              <c.Char>一</c.Char>
              <c.Pinyin>yī</c.Pinyin>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('wang2'),
                text: '王'
              }
            }}
          >
            <Row>
              <c.Char>王</c.Char>
              <c.Pinyin>wáng </c.Pinyin>
            </Row>
          </c.Bookrow>
          <c.P>The same thing goes for <b>-ü</b>. But to confuse things further, in this case the sound <b>-ü</b> is spelled <b>-u</b>, without its dots:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yu4'),
                text: '玉'
              }
            }}
          >
            <b>yù</b>
          </c.Bookrow>
          <c.P>So something that could have been written simply <b>ü</b> becomes “<b>yu</b>”! This is obvious if you compare the sound to the pronunciation of the character <c.Chinese>女</c.Chinese>, written <b>nǚ</b> in <b>pīnyīn</b>. The sound of <b>yu</b> is exactly the same as that of <b>ü</b> in <b>nü</b>.</c.P>
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
                elementId: practiceIds[3]
              }
            }}
          >
            <i>Type the correct tones on <c.Chinese>中国</c.Chinese> <b>zhongguo</b>. Practice pronunciation again.</i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            <i>Type the correct tones on <c.Chinese>中国人</c.Chinese> <b>zhongguoren</b>. Practice pronunciation again.</i>
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
          <c.P>This course is based on such patterns. You should study these examples carefully; if you want, you can even copy them out as flash cards and learn them by heart. You will get a feel for the language by internalizing the structures of Chinese as well as directly improving your pronunciation and ability to speak and understand.</c.P>
          <c.P>All patterns come with translations to idiomatic English so that you will know how to use them in the right way. In those cases where we think it will help you understand the structure of a pattern better, we also provide a literal translation in capital letters to show the function of each Chinese word.</c.P>
          {grammarTitle()}
          <c.P>The sentences we have learned in previous lessons are made up of Subject, Verb and Object, just as in English:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>We have already encountered <c.Chinese>是</c.Chinese> <b>shì</b> which functions like English <i>be</i> (<i>am, is</i>):</c.P>
          {example(4, { audio: true })}
          <c.PartTitle name="dialogs" />
          {dialog(1, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          {dialog(2, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          {dialog(3, { sentenceType: 'chinese', displayNames: false, specialIntro })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles! Pretend you are Wang Yuguo, and introduce yourself.</c.P>
          <c.PartTitle>ORACLE BONES</c.PartTitle>
          <c.PartTitle type="secondary">Simplified and traditional characters</c.PartTitle>
          <OracleBone1/>
          <c.PartTitle>CALLIGRAPHY</c.PartTitle>
          <c.P>Practice the <i>left</i> and <i>right downward</i> strokes:</c.P>
          {character(5, { mode: 'practice' })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
