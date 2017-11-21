import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { bookContainers as C } from '../../../containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S0E1 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character }
      = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.P>Welcome to the language with more native speakers than any other in the world: Chinese.</c.P>
          <c.P>This is Wang Yi. Listen carefully as she introduces herself to you.</c.P>
          {example(1, { basic: true, big: true, audio: true })}
          <c.P>The literal translation of this sentence is I CALLED WANG YI. Translated to more natural English, it means My name is Wang Yi.</c.P>
          <c.P>In China, the family name comes before the given name. There are only a few hundred family names, but any combination of one or two characters can be used as a given name. Different names have been popular during different periods: in revolutionary times, some children were named New Constitution and Strong Country. Names often reflect traditional gender roles: Strong and Thunder for boys; Little Swallow and Beautiful Jade for girls. Wang Yi’s family name is Wang, which means king, and her given name is the gender-neutral One.</c.P>
          <c.P>Now, it’s your turn to introduce yourself. Western names are hard to pronounce for Chinese people, so we will give you a Chinese name based on your actual name, your gender and your nationality. Please input them <C.Link type="askUserData">here</C.Link>.</c.P>
          <c.PartTitle type="secondary">Explore: Your Chinese name</c.PartTitle>
          // Display Family AND given chinese names.
          // Ask for genre and given name.
          <c.P>Now, practice your Chinese name. Remember that the family name comes first, followed by the given name:</c.P>
          {example(2, { basic: true, big: true, audio: true })}
          <c.P>Repeat until you can say the name exactly as the audio voice.
          </c.P>
          <c.PartTitle type="secondary">Role Play: Introduce yourself</c.PartTitle>
          <c.P>Listen to Wang Yi and then tell her your own name:</c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles! Pretend you are Wang Yi, and introduce yourself.</c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          <c.P>Good!</c.P>
          <c.P>Learning Chinese is not just useful: it is also an intellectual adventure which allows us to understand the culture of an ancient civilization. So let’s use our first sentence to explore some fascinating aspects of this language.</c.P>
          <c.PartTitle type="secondary">Each Chinese character corresponds to one spoken syllable</c.PartTitle>
          <c.P>When Wang Yi presents herself, you hear four syllables. Here is how they are written in Chinese.</c.P>
          {example(1, { basic: true, big: true, audio: false })}
          <c.P>English, like most other languages, is written using a phonetic alphabet. When you read a word, you decipher the pronunciation and then you know which word it is. Chinese is the other way around: it is written with characters that indicate meaning. Each Chinese character corresponds to a spoken syllable. Listen:</c.P>
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
          <c.P>Let us practice a bit of pronunciation using this sentence. If you listen carefully one more time to this sentence, you will notice that each Chinese syllable has a tone. Practice pronouncing each syllable clearly, with the tone:</c.P>
          {example(1, { basic: true, big: true, audio: true })}
          <c.P>These tones are important, because there are many characters that sound exactly the same except for the tone. The classical example of this are four words that are all pronounced ma. As you can see, the pīnyīn spelling is the same for each character; the only difference is the tone mark. The diagrams on the left show the pitch contour of each tone.</c.P>
          <c.P>The first means mother, and is pronounced with Tone 1, which is a long, flat tone pronounced at the top of the pitch range:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '妈'
              }
            }}>
            <img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/tone1_diagram.png'} alt=""/>
          </c.Bookrow>
          <c.P>The second means hemp, and is pronounced with Tone 2, a short tone which starts at middle pitch and goes upward:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '麻'
              }
            }}>
            <img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/tone2_diagram.png'} alt=""/>
          </c.Bookrow>
          <c.P>The third means horse, and is pronounced with Tone 3. This starts at a mid-high pitch, and then goes down so low that it almost breaks off at the bottom, before going slightly up again:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '马'
              }
            }}>
            <img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/tone3_diagram.png'} alt=""/>
          </c.Bookrow>
          <c.P>The fourth means scold, and is pronounced with Tone 4, which is a rapidly falling tone starting at the top of the speaker’s pitch range and going all the way down:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '骂'
              }
            }}>
            <img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/tone4_diagram.png'} alt=""/>
          </c.Bookrow>
          <c.P>See if you can hear the right tones on the syllables:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'review'
            }}
          >
            DICTATION
          </c.Bookrow>
          // Practice
          <c.P>If you find the tones challenging, it can be a comfort to know we actually have the exact same tones in English! The equivalent of Tone 1 would be the tone on the second syllable on tadaa! A magician pulling a rabbit out of a hat might say, with a flourish, tadaa!</c.P>
          <c.P>Tone 2 is like the tone of a surprised question in English: what?</c.P>
          <c.P>Tone 3 starts at middle pitch, goes down so low that it is sometimes broken off in the middle, and then rises again. In English, we use a similar tone when we are skeptical or irritated, for example on the word so in this conversation: You haven’t given me any reason to do it. So? Do it anyway!</c.P>
          <c.P>Tone 4 falls sharply from an initially high pitch to a low one, like the tone on hey in Hey! You there!</c.P>
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
          <c.P>This spelling system is called pīnyīn. It is used in dictionaries and textbooks to teach pronunciation. It is also a way of inputting characters on computers and mobile phones. But Chinese people never actually read or communicate in pīnyīn – they always use characters.</c.P>
          <c.P>Try writing the pīnyīn spelling of the four characters we have learned so far:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'review'
            }}
          >
            PRACTICE
          </c.Bookrow>
          // Practice
          <c.PartTitle type="secondary">Oracle bones</c.PartTitle>
          <c.P>So where do the Chinese characters come from? We know from archaeological finds that they were originally pictures. During the Shāng dynasty, more than 3,000 years ago, the oracles at the royal court used the shells of turtles and shoulder blades of oxen to tell the future.</c.P>
          <c.Bookrow center><img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/shell.png'} alt=""/></c.Bookrow>
          <c.P>To do this, they placed glowing hot bronze rods against the bone until it cracked from the heat. The soothsayers interpreted these cracks as answers to their questions about the future.</c.P>
          <c.P>To record the questions and answers, they inscribed each bone with a pictorial script which archeologists have shown to be primitive forms of modern Chinese characters. We call them oracle bone characters.</c.P>
          <c.PartTitle type="secondary">Pictograms</c.PartTitle>
          <c.P>The simplest and most ancient characters are pictures. Some of these are so clear, and so similar to the modern character, that they are still easy to understand – even when they are symbols of abstract concepts. On the oracle bone above, we immediately recognize the symbols for one, two and three.</c.P>
          <c.Bookrow center><img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/yi_er_san.png'} alt=""/></c.Bookrow>
          <c.P>Some characters are a bit trickier to understand. The character for king, for example, was originally a picture of an ax head. Weapons were the ultimate source of power, so this picture was used to symbolize king.</c.P>
          <c.Bookrow center><img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/wang_king.png'} alt=""/></c.Bookrow>
          <c.P>King is the most common family name in China. Today, it is written like this:</c.P>
          <c.PartTitle type="secondary">Radicals for meaning – phonetics for sound</c.PartTitle>
          <c.P>As the written language developed and more characters were needed, the ancient scribes started combining simple pictorial elements into more complex characters. Some elements were chosen for meaning; others for sound. As an example, let us look at the character 叫 to be called. It is made up of two ancient character elements: 口 mouth, and 丩 two hooks. Why did the scribes choose these two components?</c.P>
          <c.Bookrow><img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/kou_plus_jiu.png'} alt=""/></c.Bookrow>
          <c.P>The mouth element contributes meaning. This element appears in characters such as eat, drink, kiss and ask – all things which, like叫, you do with your mouth. A character component indicating meaning in this way is called a radical.</c.P>
          <c.P>The two hooks element has nothing to do with meaning. It was chosen to give an indication of pronunciation and also appears in several other characters that sound similar to 叫. A character element indicating sound is called a phonetic.</c.P>
          <c.P>The radical of a character only points to a general category; in this case, things done with the mouth. In the same way, the phonetic usually does not give us an exact pronunciation. This is because, over hundreds of years, the Chinese sound system has changed a lot: in our example, the modern pronunciation of 丩 is jīu, but 叫 is pronounced jiào. Even so, these hints of meaning and pronunciation can make it easier for us to memorize characters.</c.P>
          <c.PartTitle type="secondary">Calligraphy – the ancient art of writing</c.PartTitle>
          <c.P>Another aid in memorizing characters is to understand their aesthetics. Chinese calligraphy, the art of writing, is an ancient art form that embodies many concepts of Chinese philosophy. Historically, good handwriting was seen as the hallmark of the educated person. Today, there is a revival of interest, and most Chinese children practice calligraphy at school.</c.P>
          <c.P>Practicing the traditional art of writing is not something you have to do to learn Chinese. But many people find it enjoyable. The artistic principles help us develop a feel for the logic of how the Chinese characters have been put together; the rhythm of writing each stroke makes the whole character come alive. After just a short while of practice, this will help you to see the characters in a new way. Have a try; in later lessons you can decide whether you want to continue writing calligraphy.</c.P>
          <c.PartTitle type="secondary">一 yī one</c.PartTitle>
          // Stroke order
          <c.P>This is the simplest character in the Chinese language: just a single horizontal stroke. But in all its simplicity, it illustrates important principles of writing. For example, looking at the printed character, the “horizontal” stroke seems absolutely flat:</c.P>
          <c.P>一</c.P>
          <c.P>But if you look carefully at the hand-written character, you will see that the horizontal stroke is not just a flat line. It has a clearly defined beginning and end and the whole stroke curves gently, giving it the organic look of a bone or a tree branch:</c.P>
          {character(1, { mode: 'box' })}
          <c.P>Click on the brush to see the video. Use a black ballpoint pen to practice:</c.P>
          {character(1, { mode: 'practice' })}
          <c.PartTitle type="secondary">王 wáng king</c.PartTitle>
          // Stroke order
          <c.P>This character is made up of three horizontal strokes which are connected by a vertical stroke. The four strokes must always be written in a special order. Click on the stroke order animation to see the order.</c.P>
          <c.P>Stroke order is important for all characters: without it, memorizing the characters becomes almost impossible. It also makes writing faster, and it is the basis for one of the methods used to look up characters in printed dictionaries.</c.P>
          <c.P>Fortunately, most students find stroke order easy to remember. We need to memorize each character individually, but there are some general guidelines that make this easier: for example, characters are written top to bottom. The stroke order of wáng is an illustration of this rule.</c.P>
          <c.P>Now, practice writing it yourself, as beautifully as you can:</c.P>
          {character(2, { mode: 'practice' })}
          <c.PartTitle type="secondary">口 kǒu mouth, opening</c.PartTitle>
          // Stroke order
          <c.P>This character consists of three strokes; the second stroke is a combination of a horizontal and a vertical as you can see from the stroke order animation.</c.P>
          <c.P>Practice writing:</c.P>
          {character(3, { mode: 'practice' })}
          <c.PartTitle type="secondary">叫 jiào to be called</c.PartTitle>
          // Stroke order
          <c.P>This character illustrates another stroke order rule, which says characters should be written from left to right.</c.P>
          <c.P>Even when a character doesn’t have regular sides, it should fit into a roughly square shape; this is why we practice writing in grids of little boxes. In order to fit into their square shape, the two elements in 叫 are written closely together so that they snuggle into and organic whole:</c.P>
          {character(4, { mode: 'practice' })}
          <c.PartTitle type="secondary">我 wǒ I, me</c.PartTitle>
          // Stroke order
          <c.P>Let us practice a really beautiful character which is a bit more complex. The stroke order follows the general rules top to bottom and left to right, but as you can see, the dot on the upper right hand side is written last.</c.P>
          <c.P>It has a long hook on the right hand side that needs to be given ample space to stretch out. The barb at the end of the hook gathers in the energy of the stroke and prevents it from flowing out of the character:</c.P>
          {character(5, { mode: 'box' })}
          <c.P>If this hook is too short, the whole character looks lopsided:</c.P>
          <c.Bookrow><img src={'http://via.placeholder.com/350x150'} alt=""/></c.Bookrow>
          <c.P>Since it is one of the most common characters in the Chinese language, writing it quickly will save you lots of time. If you practice writing it elegantly, you will develop a rhythm which will eventually make you faster:</c.P>
          {character(6, { mode: 'practice' })}
          <c.PartTitle type="secondary">New characters</c.PartTitle>
          <c.P>Here are all the new characters in this lesson. Click on each character to review stroke order, on the brush icon to see calligraphy video, and on history icon to see the character etymology.</c.P>
          {newCharacters()}
          <c.PartTitle type="secondary">Review</c.PartTitle>
          // Practice
          <c.P><i>On the ChineseMe website, you will find review exercises to practice pronunciation, grammar and character writing. Download the flashcard decks to review character stroke orders and vocabulary. Then do the Final Exam to progress to the next Lesson.</i></c.P>
        </c.Page>
      </div>
    );
  }
}
