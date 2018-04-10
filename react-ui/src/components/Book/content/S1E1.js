import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import pinyinize from 'pinyinize';
import insertVariables from '../../../utils/insertVariables';
import { audioUrls } from '../../../constants/urls';
import { practiceSheet } from '../../../constants/urls';
import assetEndpointToUrl from '../../../helpers/assetEndpointToUrl';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character, settings,
      characterIds, practiceIds, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.Bookrow center>{image({ caption: 'In the West, we point at our chest when we say I; Chinese people often point at their face or even nose.'})}</c.Bookrow>
          <c.P>This is Wang Yi. Click on the sound icon and listen carefully as she introduces herself to you. Try to repeat after her a few times.</c.P>
          {example(1, { basic: true, audio: true })}
          <c.P>
            This sentence means <i>My name is Wang Yi</i>. In China, the family name comes before the given name. There are only a few hundred family names, but any combination of one or two characters can be used as a given name. Names often reflect traditional gender roles: <i>Strong</i> and <i>Thunder</i> for boys; <i>Little Swallow</i> and <i>Beautiful Jade</i> for girls. Different names have been popular during different periods: in revolutionary times, some children were named New Constitution and Strong Country. Wang Yi’s family name is Wang, which means <i>king</i>, and her given name is the gender-neutral <i>One</i>.
          </c.P>
          <c.P>
            English words can have different forms depending on grammatical function: in a phrase like <i>my name is Yi</i>, for example, we say <i>my</i> instead of <i>I</i> to signal “possession” of the name. Chinese words don’t change form in this way. Instead, Chinese grammar is based on word order and a small set of function words called <i>particles</i>. This is great news for language learners: when you study a language like Spanish or German, you have to deal with tenses, plurals, separate noun forms for direct and indirect objects, and many other factors that influence how each word is pronounced and written. Chinese grammar is often easier to master, because individual words never change.
          </c.P>
          <c.PartTitle type="secondary">Learn your Chinese name</c.PartTitle>
          <c.P
            buttonOptions={{
              type: 'askUserSettings'
            }}
          >Now, it’s your turn to introduce yourself. Western names can be hard to pronounce for Chinese people. Click on the <i>Me</i> icon and we will give you a Chinese name based on your real name, gender and nationality.</c.P>
          <c.P>We chose a Chinese family name for you based on the sound of your real name. Listen and practice imitating the audio voice a few times!</c.P>
          {example(2, { basic: true, audio: true })}
          <c.P>Your given name is <c.Chinese>{insertVariables('[CHINESE_GIVEN_NAME]', settings)}</c.Chinese> and means <i>{insertVariables('[NAME_MEANING]', settings)}</i>. Practice!</c.P>
          {example(3, { basic: true, audio: true })}
          <c.PartTitle type="secondary">Practice your full Chinese name</c.PartTitle>
          <c.P>Now, practice your full Chinese name. Remember that the family name comes first, followed by the given name:</c.P>
          {example(4, { basic: true, audio: true })}
          <c.P>Repeat until you can say the name exactly as the audio voice.</c.P>
          <c.P>Practice saying <i>my name is</i> by adding <c.Chinese>我叫</c.Chinese> before your name:</c.P>
          {example(5, { basic: true, audio: true })}
          <c.P>Repeat this phrase until you can say it exactly like the voice on the recording.</c.P>
          <c.PartTitle name="dialog" />
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles! Pretend you are Wang Yi, and introduce yourself.</c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: false, hideHeader: true })}
          <c.P>Let’s now use our ﬁrst sentence to learn a bit more about the Chinese language.</c.P>
          <c.PartTitle type="secondary">Each Chinese character corresponds to one spoken syllable</c.PartTitle>
          <c.P>When Wang Yi presents herself, you hear four syllables. Let’s look again at how they are written in Chinese.</c.P>
          {example(1, { basic: true, audio: false })}
          <c.P>English, like most other languages, is written using a phonetic alphabet. When you read a word, you decipher the pronunciation and then you know which word it is. Chinese is the other way around: it is written with characters that indicate <i>meaning</i>. Each Chinese character corresponds to a spoken syllable. Listen:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('wo3')
              }
            }}
          >
            <Row>
              <c.Char>我</c.Char>
              <c.Meaning>I, me</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('jiao4')
              }
            }}
          >
            <Row>
              <c.Char>叫</c.Char>
              <c.Meaning>to be called</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('wang2')
              }
            }}
          >
            <Row>
              <c.Char>王</c.Char>
              <c.Meaning>king</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yi1')
              }
            }}
          >
            <Row>
              <c.Char>一</c.Char>
              <c.Meaning>one</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>Let us practice a bit of pronunciation using this sentence. If you listen carefully one more time, you will notice that each syllabe has a "tone". Practice pronouncing each syllable clearly, with its tone:</c.P>
          {example(1, { basic: true, audio: true })}
          <c.P>These tones are important, because there are many characters that otherwise sound exactly the same. The classical example are four words which are pronounced <b>ma</b>.</c.P>
          <c.P>The first of them means <i>mother</i>. It is pronounced with Tone 1, which is a long, flat tone pronounced high in the speaker’s pitch range:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/1_1.mp3`
              }
            }}>
            {image()}
          </c.Bookrow>
          <c.P>The second means <i>hemp</i>, and is pronounced with Tone 2, a short tone which starts at middle pitch and goes upward:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/1_2.mp3`
              }
            }}>
            {image()}
          </c.Bookrow>
          <c.P>The third means <i>horse</i>. It is pronounced with Tone 3, which starts at a low pitch and then goes down further, so low that it almost breaks off at the bottom, before going up again to end at a medium-high pitch:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/1_3.mp3`
              }
            }}>
            {image()}
          </c.Bookrow>
          <c.P>The fourth means <i>scold</i>, and is pronounced with Tone 4, starting at the top of the speaker’s pitch range and rapidly going all the way down:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/1_4.mp3`
              }
            }}
          >
            {image()}
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            Practice to see if you can identify the tone on each syllable.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: assetEndpointToUrl('/sentences/tada.m4a')
              }
            }}
          >
            If you find tones strange, it might be a comfort to know we actually have the exact same sounds in English! The equivalent of Tone 1 would be the tone on the second syllable of <i>tad<u>aa</u></i>! A magician pulling a rabbit out of a hat might say, with a flourish, <i>tadaa!</i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: assetEndpointToUrl('/sentences/what.m4a')
              }
            }}
          >
            Tone 2 is like the tone of a surprised question in English: <i><u>what?</u></i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: assetEndpointToUrl('/sentences/so.m4a')
              }
            }}
          >
            Tone 3 starts at middle pitch, goes down so low that it is sometimes broken off in the middle, and then rises again. In English, we use a similar tone when we are skeptical or irritated, for example on the word <i><u>so</u></i> in this conversation: <i>You haven’t given me any reason to do it. So? Do it anyway!</i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: assetEndpointToUrl('/sentences/hey.m4a')
              }
            }}
          >
            Tone 4 falls sharply from an initially high pitch to a low one, like the tone on <i><u>hey</u></i> in <i>Hey! You there!</i>
          </c.P>
          <c.P>This is just to show that the tones are not impossible to pronounce for a westerner. The difference, of course, is that in English these tones only change the <i>mood</i> of a sentence; in Chinese, they change the <i>meaning</i> of words.</c.P>
          <c.PartTitle type="secondary">Pinyin – explaining Chinese pronunciation with English letters</c.PartTitle>
          <c.P>In order to help us remember the pronunciation of a Chinese character, its sound can be written using the Latin alphabet:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('wo3')
              }
            }}
          >
            <Row>
              <c.Char>我</c.Char>
              <c.Pinyin>{pinyinize('wo3')}</c.Pinyin>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('jiao4')
              }
            }}
          >
            <Row>
              <c.Char>叫</c.Char>
              <c.Pinyin>{pinyinize('jiao4')}</c.Pinyin>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('wang2')
              }
            }}
          >
            <Row>
              <c.Char>王</c.Char>
              <c.Pinyin>{pinyinize('wang2')}</c.Pinyin>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yi1')
              }
            }}
          >
            <Row>
              <c.Char>一</c.Char>
              <c.Pinyin>{pinyinize('yi1')}</c.Pinyin>
            </Row>
          </c.Bookrow>
          <c.P>The tone on each syllable is indicated with a symbol called a <i>tone mark</i>:</c.P>
          <c.P><Row><c.Space width={80}>Tone 1:</c.Space>¯</Row></c.P>
          <c.P><Row><c.Space width={80}>Tone 2:</c.Space>´</Row></c.P>
          <c.P><Row><c.Space width={80}>Tone 3:</c.Space>ˇ</Row></c.P>
          <c.P><Row><c.Space width={80}>Tone 4:</c.Space>`</Row></c.P>
          <c.P>This system for writing Chinese with the help of Latin letters and tone marks is called <b>pīnyīn</b>. It is used in dictionaries and textbooks to teach pronunciation. It is also a way of inputting characters on computers and mobile phones. But Chinese people never actually read or communicate in <b>pīnyīn</b> – they always use characters.</c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }

            }}
          >
            Try to memorize the <b>pīnyīn</b> spelling of the four characters above, and then click on the exercise icon to see if you can spell them correctly.
          </c.P>
          <c.P>Here is how your Chinese name is written in <b>pīnyīn</b>:</c.P>
          <c.P><b>{insertVariables('[FAMILY_NAME_PINYIN]', settings)} {insertVariables('[GIVEN_NAME_PINYIN]', settings)}</b></c.P>
          <c.P>Listen to the audio voice and practice reading the pīnyīn a few times:</c.P>
          {example(4, { basic: true, audio: true })}
          <c.PartTitle noPrint>ORACLE BONES</c.PartTitle>
          <c.PartTitle type="secondary">Origins of Chinese characters</c.PartTitle>
          <c.P>So where do Chinese characters come from? We know from archaeological finds that they were originally pictures. During the <b>Shāng</b> dynasty, more than 3,000 years ago, the oracles at the royal court used the shells of turtles and shoulder blades of oxen to tell the future.</c.P>
          <c.Bookrow center>{image()}</c.Bookrow>
          <c.P>To do this, they placed glowing hot bronze rods against the bone until it cracked from the heat. The soothsayers interpreted these cracks as answers to their questions about the future.</c.P>
          <c.P>To record the questions and answers, they inscribed each bone with a pictorial script which archeologists have shown to be a primitive forms of modern Chinese characters. We call them <i>oracle bone</i> characters.</c.P>
          <c.PartTitle type="secondary">Pictograms</c.PartTitle>
          <c.P>The simplest and most ancient characters are pictures. Some of these are so clear, and so similar to the modern character, that they are still easy to understand – even when they are symbols of abstract concepts. On the oracle bone above, we immediately recognize the symbols for <i>one</i>, <i>two</i> and <i>three</i>.</c.P>
          <c.Bookrow center>{image()}</c.Bookrow>
          <c.P>Knowing the history of a character can help us memorize it more easily. An <i>oracle bone</i> icon next to a character indicates that it has an interesting story:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'etymology',
              data: {
                elementId: characterIds[1]
              }
            }}
          >
            <Row><c.Char>王</c.Char> <c.Pinyin>wáng</c.Pinyin> <c.Meaning>king</c.Meaning></Row>
          </c.Bookrow>
          <c.PartTitle type="secondary">Radicals for meaning – phonetics for sound</c.PartTitle>
          <c.P>As the written language developed and more characters were needed, the ancient scribes started combining simple pictorial elements into more complex characters. Some elements were chosen for <i>meaning</i>; others for <i>sound</i>.</c.P>
          <c.P>As an example, let us look again at the character meaning <i>to scold, tell somebody off</i>:</c.P>
          <c.Bookrow>
            <Row>
              <c.Char>骂</c.Char>
              <c.Pinyin>mà</c.Pinyin>
              <c.Meaning>scold</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>It is made up of two ancient character elements: <c.Chinese>口</c.Chinese> <i>mouth</i>, and <c.Chinese>马</c.Chinese> <i>horse</i>. Why did the scribes choose these two components?</c.P>
          <c.P>The <i>mouth</i> element contributes <i>meaning</i>. It appears in characters such as <i>eat</i>, <i>drink</i>, <i>kiss</i> and <i>ask</i> – things you do with your mouth. A character component indicating meaning in this way is called a <i>radical</i>. In the character for <i>scold</i>, the radical is duplicated for emphasis: there are two <i>mouths</i> that really illustrate somebody getting a good telling-off.</c.P>
          <c.P>The <i>horse</i> component has nothing to do with meaning. It was chosen to give an indication of <i>pronunciation</i> and also appears in several other characters that sound similar to <c.Chinese>骂</c.Chinese>, for example <i>mother</i>, which has <i>woman</i> as radical:</c.P>
          <c.Bookrow>
            <Row>
              <c.Char>妈</c.Char>
              <c.Pinyin>mā</c.Pinyin>
              <c.Meaning>mother</c.Meaning>
            </Row>
          </c.Bookrow>
          <c.P>A character element indicating sound in this way is called a <i>phonetic</i>. To summarize, the ancient scribes would make new characters by combining a radical for meaning with a phonetic for sound to write “something you do with your mouth which sounds similar to horse” or “a female person which sounds similar to horse”:</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>The characters were created long ago; today, radical and phonetic usually no longer not provide exact indications of meaning and sound. Click on the oracle bone icon to see an example:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'etymology',
              data: {
                elementId: characterIds[3]
              }
            }}
          >
            <Row><c.Char>叫</c.Char> <c.Pinyin>jiào</c.Pinyin> <c.Meaning>to be called</c.Meaning></Row>
          </c.Bookrow>
          <c.P>Even so, these hints of meaning and pronunciation can make it easier for us to memorize characters.</c.P>
          <c.PartTitle>CALLIGRAPHY</c.PartTitle>
          <c.P>Another aid in memorizing characters is to understand their aesthetics. The art of writing characters beautifully using a traditional writing brush is called <i>calligraphy</i>. It is an ancient art form that embodies many concepts of Chinese philosophy.</c.P>
          <c.PartTitle type="secondary">Each stroke has its own beauty</c.PartTitle>
          <c.P>To the beginner, a printed Chinese character can be a confusing jumble of lines. But these lines have an innate logic laid down over thousands of years: each of them represents a brush stroke written in its own specific way.</c.P>
          <c.P>The character <c.Chinese>一</c.Chinese> <b>yī</b> <i>one</i> is the simplest character in the Chinese language. It consists of a single line called a <i>horizontal</i> stroke. But in all its simplicity, it is a great illustration of the basic principles of writing. To see this, let us compare the printed and hand-written versions.</c.P>
          <c.P>The printed character seems absolutely flat:</c.P>
          <c.P>一</c.P>
          <c.P>But if you look carefully at the hand-written character, you will see that in spite of its name, the "horizontal" stroke is not flat at all. It has a clearly defined beginning and end, and the whole stroke curves gently, giving it the organic look of a bone or a tree branch:</c.P>
          <c.P><c.Char>一</c.Char></c.P>
          <c.P>If you click on the brush icon, you can see a calligraphy video showing how to write it correctly. Print out a <a href={practiceSheet} target="_blank" rel="noopener noreferrer">practice sheet</a> and use an ordinary, black ballpoint pen to try writing it as beautifully as you can:</c.P>
          {character(1, { mode: 'practice' })}
          <c.PartTitle type="secondary">Strokes are written according to a fixed order</c.PartTitle>
          <c.P>The <i>horizontal</i> stroke is always written from left to right. But it is not enough to write each individual stroke correctly; in addition, the strokes of each character must always be written in the same <i>order</i>. You can watch a stroke order animation for each character in the course by clicking the stroke order icon. The stroke order for <c.Chinese>王</c.Chinese> <b>wáng</b> <i>king</i>, for example, looks like this:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[1]
              }
            }}
          >
            {image()}
          </c.Bookrow>
          <c.P>Chinese people are taught this standard order for each character in school, and they always use it. The pen flows through the character in the same way every time, and this makes the characters easier to memorize, easier to recognize, and ultimately much faster to write. Stroke order is also the basis for one of the methods used to look up characters in dictionaries.</c.P>
          <c.P>Fortunately, most students find stroke order easy to remember. We do need to memorize each character individually, but there are some general guidelines that make the task easier: <c.Chinese>王</c.Chinese> <b>wáng</b> <i>king</i>, for example, is an illustration of the rule stating that characters should be written <i>top</i> to <i>bottom</i>.</c.P>
          <c.P>Using the correct stroke order for each character is a must. Practicing how to write characters beautifully, on the other hand, is not something you <i>have</i> to do to learn Chinese. But many people find it enjoyable. And the aesthetic principles help us develop a feel for the logic of Chinese characters; the rhythm of writing each stroke makes the whole character come alive. After just a short while of practice, this will help you to see the characters in a new way.</c.P>
          <c.P>Historically, good handwriting was seen as the hallmark of an educated person. Today, there is a revival of interest, and most Chinese children practice calligraphy at school.</c.P>
          <c.PartTitle anchor="new-characters" name="characters"/>
          <c.P>Here are the new characters we need to memorize in this lesson. Click on stroke order icons to review stroke order, on brush icons to see calligraphy videos, and on oracle bone icons to see character etymologies.</c.P>
          {newCharacters()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
