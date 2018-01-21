import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import pinyinize from 'pinyinize';
import insertVariables from '../../../utils/insertVariables';
import { king as OracleBone1 } from '../etymology';
import { call as OracleBone2 } from '../etymology';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character, settings,
      characterIds, practiceIds, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.P>This is Wang Yi. Click on the sound icon and listen carefully as she introduces herself to you. Try to repeat after her a few times.</c.P>
          {example(1, { basic: true, audio: true })}
          <c.P>The literal translation of this sentence is I CALLED WANG YI. Translated to more natural English, it means <i>My name is Wang Yi.</i></c.P>
          <c.P>In China, the family name comes before the given name. There are only a few hundred family names, but any combination of one or two characters can be used as a given name. Different names have been popular during different periods: in revolutionary times, some children were named <i>New Constitution</i> and <i>Strong Country</i>. Names often reflect traditional gender roles: <i>Strong</i> and <i>Thunder</i> for boys; <i>Little Swallow</i> and <i>Beautiful Jade</i> for girls. Wang Yi’s family name is Wang, which means <i>king</i>, and her given name is the gender-neutral <i>One</i>.</c.P>
          <c.PartTitle type="secondary">Learn your Chinese name</c.PartTitle>
          <c.P
            buttonOptions={{
              type: 'askUserSettings'
            }}
          >Now, it’s your turn to introduce yourself. Western names are hard to pronounce for Chinese people. Click on the exercise icon and we will give you a Chinese name based on your real name, gender and nationality.</c.P>
          <c.P>We chose a Chinese family name for you based on the sound of your real name. Listen and practice imitating the audio voice a few times!</c.P>
          {example(2, { basic: true, audio: true })}
          <c.P>Your given name is <c.Chinese>{insertVariables('[CHINESE_GIVEN_NAME]', settings)}</c.Chinese> and means <i>{insertVariables('[NAME_MEANING]', settings)}</i>. Practice!</c.P>
          {example(3, { basic: true, audio: true })}
          <c.PartTitle type="secondary">Practice your full Chinese name</c.PartTitle>
          <c.P>Now, practice your full Chinese name. Remember that the family name comes first, followed by the given name:</c.P>
          {example(4, { basic: true, audio: true })}
          <c.P>Repeat until you can say the name exactly as the audio voice.</c.P>
          <c.P>Practice saying “my name is” by adding <c.Chinese>我叫</c.Chinese> before your name:</c.P>
          {example(5, { basic: true, audio: true })}
          <c.P>Repeat this phrase until you can say it exactly like the voice on the recording.</c.P>
          <c.PartTitle name="dialog" />
          <c.PartTitle type="secondary">Introduce yourself</c.PartTitle>
          <c.P>Listen as Wang Yi introduces herself to you, and then tell her your own name:</c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles! Pretend you are Wang Yi, and introduce yourself.</c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.P>Good!</c.P>
          <c.P>Chinese is very different from Western languages. Let’s use our first sentence to explore some aspects of the Chinese language.</c.P>
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
          <c.P>Let us practice a bit of pronunciation using this sentence. If you listen carefully one more time, you will notice that each Chinese word has a tone. Practice pronouncing each syllable clearly, with the tone:</c.P>
          {example(1, { basic: true, audio: true })}
          <c.P>These tones are important, because there are many characters that sound exactly the same except for the tone. The classical example of this are four words that are all pronounced <b>ma</b>; the only difference is the tone. The diagrams on the left show the pitch contour of each tone.</c.P>
          <c.P>The first of these words means <i>mother</i>, and is pronounced with Tone 1, which is a long, flat tone pronounced at the top of the pitch range:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/pinyin/ma1.m4a'
              }
            }}>
            {image()}
          </c.Bookrow>
          <c.P>The second means <i>hemp</i>, and is pronounced with Tone 2, a short tone which starts at middle pitch and goes upward:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/pinyin/ma2.m4a'
              }
            }}>
            {image()}
          </c.Bookrow>
          <c.P>The third means <i>horse</i>, and is pronounced with Tone 3. This starts at a mid-high pitch, and then goes down so low that it almost breaks off at the bottom, before going slightly up again:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/pinyin/ma3.m4a'
              }
            }}>
            {image()}
          </c.Bookrow>
          <c.P>The fourth means <i>scold</i>, and is pronounced with Tone 4, which is a rapidly falling tone starting at the top of the speaker’s pitch range and going all the way down:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/pinyin/ma4.m4a'
              }
            }}
          >
            {image()}
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            Practice to see if you can identify the tones.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/tada.m4a'
              }
            }}
          >
            If you find tones strange, it can be a comfort to know we actually have the exact same tones in English! The equivalent of Tone 1 would be the tone on the second syllable on <i>tadaa</i>! A magician pulling a rabbit out of a hat might say, with a flourish, <i>tadaa!</i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/what.m4a'
              }
            }}
          >
            Tone 2 is like the tone of a surprised question in English: <i>what?</i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/so.m4a'
              }
            }}
          >
            Tone 3 starts at middle pitch, goes down so low that it is sometimes broken off in the middle, and then rises again. In English, we use a similar tone when we are skeptical or irritated, for example on the word <i>so</i> in this conversation: <i>You haven’t given me any reason to do it. So? Do it anyway!</i>
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/hey.m4a'
              }
            }}
          >
            Tone 4 falls sharply from an initially high pitch to a low one, like the tone on <i>hey</i> in <i>Hey! You there!</i>
          </c.P>
          <c.P>So the tones are not totally alien. The difference is that in English, these tones only change the <i>mood</i> of a sentence; in Chinese, they change the <i>meaning</i> of words.</c.P>
          <c.PartTitle type="secondary">Pinyin – explaining Chinese pronunciation with English letters</c.PartTitle>
          <c.P>In order to help us remember the pronunciation of each character, the sound can be written using the Latin alphabet. Each syllable is written with its tone mark above:</c.P>
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
          <c.P>This spelling system is called <b>pīnyīn</b>. It is used in dictionaries and textbooks to teach pronunciation. It is also a way of inputting characters on computers and mobile phones. But Chinese people never actually read or communicate in <b>pīnyīn</b> – they always use characters.</c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }

            }}
          >
            Try to memorize the <b>pīnyīn</b> spelling of the four characters above, and then click on the exercise icon to see if you can spell them correctly.
          </c.P>
          <c.P>Here is how your Chinese name is written in <b>pīnyīn</b>:</c.P>
          <c.P><b>{insertVariables('[FAMILY_NAME_PINYIN]', settings)} {insertVariables('[GIVEN_NAME_PINYIN]', settings)}</b></c.P>
          <c.P>Listen to the audio voice and practice reading the pīnyīn a few times:</c.P>
          {example(4, { basic: true, audio: true })}
          <c.PartTitle>ORACLE BONES</c.PartTitle>
          <c.Frame><OracleBone1 /></c.Frame>
          <c.Frame><OracleBone2 /></c.Frame>
          <c.PartTitle>CALLIGRAPHY</c.PartTitle>
          <c.P>Another aid in memorizing characters is to understand their aesthetics. The art of writing the characters beautifully is called <i>calligraphy</i>. It is an ancient art form that embodies many concepts of Chinese philosophy. Historically, good handwriting was seen as the hallmark of an educated person. Today, there is a revival of interest, and most Chinese children practice calligraphy at school.</c.P>
          <c.P>Practicing calligraphy is not something you <i>have</i> to do to learn Chinese. But many people find it enjoyable. The aesthetic principles help us develop a feel for the logic of how Chinese characters have been put together; the rhythm of writing each stroke makes the whole character come alive. After just a short while of practice, this will help you to see the characters in a new way. Have a try; in later lessons you can decide whether you want to continue writing calligraphy.</c.P>
          <c.PartTitle
            type="secondary"
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[0]
              }
            }}
          >
            一 yī one
          </c.PartTitle>
          <c.P>This is the simplest character in the Chinese language: just a single horizontal stroke. But in all its simplicity, it illustrates important principles of writing. For example, looking at the printed character, the “horizontal” stroke seems absolutely flat:</c.P>
          <c.P><c.Chinese>一</c.Chinese></c.P>
          <c.P>But if you look carefully at the hand-written character, you will see that the horizontal stroke is not just a flat line. It is always written from left to right, with a clearly defined beginning and end and. The whole stroke curves gently, giving it the organic look of a bone or a tree branch:</c.P>
          {character(1, { mode: 'box' })}
          <c.P
            buttonOptions={{
              type: 'calligraphy',
              data: {
                elementId: characterIds[0]
              }
            }}
          >
            If you click on the calligraphy icon, you can see a video showing how to write it correctly. Print out a <a href="https://s3.eu-west-2.amazonaws.com/chineseme/pdf/Exercise+sheet.pdf" target="_blank" rel="noopener noreferrer">practice sheet</a> and use an ordinary, black ballpoint pen to practice writing it as beautifully as you can:
          </c.P>
          {character(1, { mode: 'practice' })}
          <c.PartTitle
            type="secondary"
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[1]
              }
            }}
          >
            王 wáng king
          </c.PartTitle>
          <c.P>This character is made up of three horizontal strokes which are connected by another stroke: <i>vertical</i>. Unlike the <i>horizontal</i> stroke, the <i>vertical</i> stroke should be absolutely straight. But it still has a clear beginning and end:</c.P>
          <c.Bookrow>
            <c.CharacterBox simpChar="丨"/>
          </c.Bookrow>
          <c.P>But it is not enough to write each individual stroke correctly. The strokes must always be written in the same <i>order</i>.</c.P>
          <c.P>Chinese people are taught this standard order for each character in school, and they always use it. The pen flows through the character in the same way every time, and this makes the characters easier to memorize, easier to recognize, and ultimately much faster to write. Stroke order is also the basis for one of the methods used to look up characters in dictionaries.</c.P>
          <c.P>Fortunately, most students find stroke order easy to remember. We need to memorize each character individually, but there are some general guidelines that make this easier: for example, characters are written <i>top</i> to <i>bottom</i>. The stroke order of <b>wáng</b> is an illustration of this rule.</c.P>
          <c.P>Now, practice writing it yourself, as beautifully as you can:</c.P>
          {character(2, { mode: 'practice' })}
          <c.PartTitle
            type="secondary"
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[2]
              }
            }}
          >
            口 kǒu mouth, opening
          </c.PartTitle>
          <c.P>This character consists of three strokes; the second stroke is a combination of a <i>horizontal</i> and a <i>vertical</i> as you can see from the stroke order animation.</c.P>
          <c.P>Practice writing:</c.P>
          {character(3, { mode: 'practice' })}
          <c.PartTitle
            type="secondary"
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[3]
              }
            }}
          >
            叫 jiào to be called
          </c.PartTitle>
          <c.P>This character illustrates another stroke order rule, which says characters should be written from left to right.</c.P>
          <c.P>Even when a character doesn’t have regular sides, it should fit into a roughly square shape; this is why we practice writing in grids of little boxes. In order to fit into their square shape, the two elements in <c.Chinese>叫</c.Chinese> are written closely together so that they snuggle into each other, becoming a single connected unit:</c.P>
          {character(4, { mode: 'practice' })}
          <c.PartTitle
            type="secondary"
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[4]
              }
            }}
          >
            我 wǒ I, me
          </c.PartTitle>
          <c.P>Finally, let us practice a really beautiful character which is a bit more complex. The stroke order follows the general rules <i>top to bottom</i> and <i>left to right</i>, but as you can see, the dot on the upper right hand side is written last.</c.P>
          <c.P>This character is dominated by a long, sweeping stroke which is called a <i>hook</i>. <i>Hooks</i> are exactly what the name implies: strokes which end in a sharp angle. The character <c.Chinese>我</c.Chinese> contains two examples: a vertical <i>hook</i> on the left, and the long <i>hook</i> on the right hand side, which needs to be given ample space to stretch out. The barb at the end of a <i>hook</i> gathers in the energy of the stroke and prevents it from flowing out of the character:</c.P>
          {character(5, { mode: 'box' })}
          <c.P>If the dominating <i>hook</i> is too short, the whole character looks lopsided:</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>Since <c.Chinese>我</c.Chinese> is one of the most common characters in the Chinese language, writing it quickly will save you lots of time. If you practice writing it elegantly, you will develop a rhythm which will eventually make you faster. Look at the calligraphy video and try to mimic not just each stroke, but the flow of writing:</c.P>
          {character(5, { mode: 'practice' })}
          <c.PartTitle anchor="new-characters" name="characters"/>
          <c.P>Here are all the new characters in this lesson. Click on the stroke icon to review stroke order, on the brush icon to see calligraphy video, and on history icon to see the character etymology.</c.P>
          {newCharacters()}
          <c.Review practiceId={practiceIds[0]} />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
