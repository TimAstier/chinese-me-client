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
      characterIds, practiceIds, image } = this.props;
    return (
      // ** Modify test content here **
      <c.Page>
        {lessonTitle()}
        <c.P>Welcome to the language with more native speakers than any other in the world: Chinese.</c.P>
        <c.P>This is Wang Yi. Click and listen carefully as she introduces herself to you.</c.P>
        {example(1, { basic: true, big: true, audio: true })}
        <c.P>The literal translation of this sentence is I CALLED WANG YI. Translated to more natural English, it means <i>My name is Wang Yi.</i></c.P>
        <c.P>In China, the family name comes before the given name. There are only a few hundred family names, but any combination of one or two characters can be used as a given name. Different names have been popular during different periods: in revolutionary times, some children were named <i>New Constitution</i> and <i>Strong Country</i>. Names often reflect traditional gender roles: <i>Strong</i> and <i>Thunder</i> for boys; <i>Little Swallow</i> and <i>Beautiful Jade</i> for girls. Wang Yi’s family name is Wang, which means <i>king</i>, and her given name is the gender-neutral <i>One</i>.</c.P>
        <c.PartTitle type="secondary">Learn your Chinese name</c.PartTitle>
        <c.P
          buttonOptions={{
            type: 'askUserSettings'
          }}
        >Now, it’s your turn to introduce yourself. Western names are hard to pronounce for Chinese people. Click on the exercise icon and we will give you a Chinese name based on your real name, gender and nationality.</c.P>
        {example(2, { basic: true, big: true, audio: true })}
        <c.P>Repeat this phrase until you can say it exactly like the voice on the recording.</c.P>
        <c.PartTitle type="secondary">Dialog: Introduce yourself</c.PartTitle>
        <c.P>Listen as Wang Yi introduces herself to you, and then tell her your own name:</c.P>
        {dialog(1, { sentenceType: 'chinese', displayNames: false })}
        <c.P>Repeat this until you feel comfortable.</c.P>
        <c.P>Now, change roles! Pretend you are Wang Yi, and introduce yourself.</c.P>
        {dialog(1, { sentenceType: 'chinese', displayNames: false })}
        <c.P>Good!</c.P>
        <c.P>Learning Chinese is not just useful: it is also an intellectual adventure which allows us to understand the culture of an ancient civilization. So let’s use our first sentence to explore some fascinating aspects of this language.</c.P>
        <c.PartTitle type="secondary">Each Chinese character corresponds to one spoken syllable</c.PartTitle>
        <c.P>When Wang Yi presents herself, you hear four syllables. Here is how they are written in Chinese.</c.P>
        {example(1, { basic: true, big: true, audio: false })}
        <c.P>English, like most other languages, is written using a phonetic alphabet. When you read a word, you decipher the pronunciation and then you know which word it is. Chinese is the other way around: it is written with characters that indicate <i>meaning</i>. Each Chinese character corresponds to a spoken syllable. Listen:</c.P>
        {character(5, {
          mode: 'details',
          hidePinyin: true,
          hideLinks: true,
          audio: true
        })}
        {character(4, {
          mode: 'details',
          hidePinyin: true,
          hideLinks: true,
          audio: true
        })}
        {character(2, {
          mode: 'details',
          hidePinyin: true,
          hideLinks: true,
          audio: true
        })}
        {character(1, {
          mode: 'details',
          hidePinyin: true,
          hideLinks: true,
          audio: true
        })}
        <c.P>Let us practice a bit of pronunciation using this sentence. If you listen carefully one more time, you will notice that each Chinese word has a tone. Practice pronouncing each syllable clearly, with the tone:</c.P>
        {example(1, { basic: true, big: true, audio: true })}
        <c.P>These tones are important, because there are many characters that sound exactly the same except for the tone. The classical example of this are four words that are all pronounced <b>ma</b>; the only difference is the tone. The diagrams on the left show the pitch contour of each tone.</c.P>
        <c.P>The first of this words means <i>mother</i>, and is pronounced with Tone 1, which is a long, flat tone pronounced at the top of the pitch range:</c.P>
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
          If you find tones strange, it can be a comfort to know we actually have the exact same tones in English! The equivalent of Tone 1 would be the tone on the second syllable on tadaa! A magician pulling a rabbit out of a hat might say, with a flourish, <i>tadaa!</i>
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
        <c.P>So the tones are not totally alien. The difference is that in English, these tones only change the mood of a sentence; in Chinese, they change the meaning of words.</c.P>
        <c.PartTitle type="secondary">Pinyin – explaining Chinese pronunciation with English letters</c.PartTitle>
        <c.P>In order to help us remember the pronunciation of each character, the sound can be written using the Latin alphabet. Each syllable is written with its tone mark above:</c.P>
        {character(5, {
          mode: 'details',
          hideMeaning: true,
          hideLinks: true,
          audio: true
        })}
        {character(4, {
          mode: 'details',
          hideMeaning: true,
          hideLinks: true,
          audio: true
        })}
        {character(2, {
          mode: 'details',
          hideMeaning: true,
          hideLinks: true,
          audio: true
        })}
        {character(1, {
          mode: 'details',
          hideMeaning: true,
          hideLinks: true,
          audio: true
        })}
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
        <c.PartTitle type="secondary">Oracle bones</c.PartTitle>
        <c.P>So where do the Chinese characters come from? We know from archaeological finds that they were originally pictures. During the <b>Shāng</b> dynasty, more than 3,000 years ago, the oracles at the royal court used the shells of turtles and shoulder blades of oxen to tell the future.</c.P>
        <c.Bookrow center>{image()}</c.Bookrow>
        <c.P>To do this, they placed glowing hot bronze rods against the bone until it cracked from the heat. The soothsayers interpreted these cracks as answers to their questions about the future.</c.P>
        <c.P>To record the questions and answers, they inscribed each bone with a pictorial script which archeologists have shown to be a primitive forms of modern Chinese characters. We call them <i>oracle bone</i> characters.</c.P>
        <c.PartTitle type="secondary">Pictograms</c.PartTitle>
        <c.P>The simplest and most ancient characters are pictures. Some of these are so clear, and so similar to the modern character, that they are still easy to understand – even when they are symbols of abstract concepts. On the oracle bone above, we immediately recognize the symbols for <i>one</i>, <i>two</i> and <i>three</i>.</c.P>
        <c.Bookrow center>{image()}</c.Bookrow>
        <c.P>Some characters are a bit trickier to understand. The character for <i>king</i>, for example, was originally a picture of an ax head. Weapons were the ultimate source of power, so this picture was used to symbolize <i>king</i>.</c.P>
        <c.Bookrow center>{image()}</c.Bookrow>
        <c.P><i>King</i> is the most common family name in China.</c.P>
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
        <c.P>It is made up of two ancient character elements: 口 <i>mouth</i>, and 马 <i>horse</i>. Why did the scribes choose these two components?</c.P>
        <c.P>The <i>mouth</i> element contributes <i>meaning</i>. It appears in characters such as <i>eat</i>, <i>drink</i>, <i>kiss</i> and <i>ask</i> – things you do with your mouth. A character component indicating meaning in this way is called a <i>radical</i>. In the character for <i>scold</i>, the radical is duplicated for emphasis: there are two <i>mouths</i> that really illustrate somebody getting a good telling-off.</c.P>
        <c.P>The <i>horse</i> component has nothing to do with meaning. It was chosen to give an indication of <i>pronunciation</i> and also appears in several other characters that sound similar to 骂, for example <i>mother</i>, which has <i>woman</i> as radical:</c.P>
        <c.Bookrow>
          <Row>
            <c.Char>妈</c.Char>
            <c.Pinyin>mā</c.Pinyin>
            <c.Meaning>mother</c.Meaning>
          </Row>
        </c.Bookrow>
        <c.P>A character element indicating sound in this way is called a <i>phonetic</i>. To summarize, the ancient scribes would make new characters by combining a radical for meaning with a phonetic for sound to write “something you do with your mouth which sounds similar to horse” or “a female person which sounds similar to horse”:</c.P>
        <c.Bookrow>{image()}</c.Bookrow>
        <c.P>The radical 口 <i>mouth</i> also appears in the character 叫 <i>to call</i>:</c.P>
        <c.Bookrow>{image()}</c.Bookrow>
        <c.P>Clearly, <i>calling</i> is something you do with your mouth. But the pronunciation of the phonetic 丩 is <b>jīu</b>, which may not seem very similar to <b>jiào</b>. Over hundreds of years, the Chinese sound system has changed a lot, so the phonetic usually does not give us the exact modern pronunciation. In the same way, the radical of a character only points to a general category. Even so, these hints of meaning and pronunciation can make it easier for us to memorize characters.</c.P>
        <c.PartTitle type="secondary">Calligraphy – the ancient art of writing</c.PartTitle>
        <c.P>Another aid in memorizing characters is to understand their aesthetics. Chinese calligraphy, the art of writing, is an ancient art form that embodies many concepts of Chinese philosophy. Historically, good handwriting was seen as the hallmark of the educated person. Today, there is a revival of interest, and most Chinese children practice calligraphy at school.</c.P>
        <c.P>Practicing the traditional art of writing is not something you have to do to learn Chinese. But many people find it enjoyable. The artistic principles help us develop a feel for the logic of how the Chinese characters have been put together; the rhythm of writing each stroke makes the whole character come alive. After just a short while of practice, this will help you to see the characters in a new way. Have a try; in later lessons you can decide whether you want to continue writing calligraphy.</c.P>
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
        <c.P>一</c.P>
        <c.P>But if you look carefully at the hand-written character, you will see that the horizontal stroke is not just a flat line. It has a clearly defined beginning and end and the whole stroke curves gently, giving it the organic look of a bone or a tree branch:</c.P>
        {character(1, { mode: 'box' })}
        <c.P>Click on the brush icon to see the video. Print out an <a href="https://s3.eu-west-2.amazonaws.com/chineseme/pdf/Exercise+sheet.pdf" target="_blank" rel="noopener noreferrer">exercise sheet</a> and practice using a black ballpoint pen:</c.P>
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
        <c.P>This character is made up of three horizontal strokes which are connected by a vertical stroke. The four strokes must always be written in a special order. Click on the stroke order icon to see the order.</c.P>
        <c.P>Stroke order is important for all characters: without it, memorizing the characters becomes almost impossible. It also makes writing faster, and it is the basis for one of the methods used to look up characters in printed dictionaries.</c.P>
        <c.P>Fortunately, most students find stroke order easy to remember. We need to memorize each character individually, but there are some general guidelines that make this easier: for example, characters are written top to bottom. The stroke order of <b>wáng</b> is an illustration of this rule.</c.P>
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
        <c.P>This character consists of three strokes; the second stroke is a combination of a horizontal and a vertical as you can see from the stroke order animation.</c.P>
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
        <c.P>Even when a character doesn’t have regular sides, it should fit into a roughly square shape; this is why we practice writing in grids of little boxes. In order to fit into their square shape, the two elements in 叫 are written closely together so that they snuggle into and organic whole:</c.P>
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
        <c.P>Let us practice a really beautiful character which is a bit more complex. The stroke order follows the general rules top <i>to bottom</i> and <i>left to right</i>, but as you can see, the dot on the upper right hand side is written last.</c.P>
        <c.P>It has a long hook on the right hand side that needs to be given ample space to stretch out. The barb at the end of the hook gathers in the energy of the stroke and prevents it from flowing out of the character:</c.P>
        {character(5, { mode: 'box' })}
        <c.P>If this hook is too short, the whole character looks lopsided:</c.P>
        <c.Bookrow>{image()}</c.Bookrow>
        <c.P>Since it is one of the most common characters in the Chinese language, writing it quickly will save you lots of time. If you practice writing it elegantly, you will develop a rhythm which will eventually make you faster:</c.P>
        {character(5, { mode: 'practice' })}
        <c.PartTitle type="secondary" anchor="new-characters">New characters</c.PartTitle>
        <c.P>Here are all the new characters in this lesson. Click on each character to review stroke order, on the brush icon to see calligraphy video, and on history icon to see the character etymology.</c.P>
        {newCharacters()}
        <c.PartTitle type="secondary" anchor="review">Exercises</c.PartTitle>
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
      // ** END of test content **
    );
  }
};

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
