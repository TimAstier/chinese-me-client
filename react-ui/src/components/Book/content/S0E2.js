import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S0E2 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character }
      = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle type="secondary">Saying hello</c.PartTitle>
          <c.P>The most common Chinese greeting is a combination of two characters, 你 you and 好 good. Let us first practice saying each of them separately. Listen carefully to see if you can identify the tone on each one:</c.P>
          {character(6, {
            mode: 'details',
            hidePinyin: true,
            hideMeaning: true,
            hideLinks: true,
            audio: true
          })}
          {character(3, {
            mode: 'details',
            hidePinyin: true,
            hideMeaning: true,
            hideLinks: true,
            audio: true
          })}
          <c.P>Both of them are pronounced with Tone 3. Now, listen to how they sound when we put them together in the greeting 你好 hi:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                text: '你好'
              }
            }}
          >
            你好！
          </c.Bookrow>
          // Format
          <c.P>You may have noticed that the first tone changes to Tone 2. This is an example of a tone change rule: sometimes, the tone on a character changes depending on the tone that comes after. This sounds complicated, but actually comes naturally as you get used to speaking; we just mention it so you won’t be surprised when it happens! The linguistic term for this kind of change is tone sandhi, from the sanscrit word sandhi meaning change.</c.P>
          <c.PartTitle type="secondary">Introducing your last name</c.PartTitle>
          <c.P>In the previous lesson, we learned to introduce ourselves using the verb 叫 which means to be called. The verb 姓 is used in a similar pattern to introduce one’s family name:</c.P>
          {example(1, { basic: true, big: true, audio: true })}
          // Format
          <c.P>So while 叫 means to be called, 姓 literally means to have as family name. The two words are often used together in presentations, a bit like when agent double-oh- seven introduces himself saying The name is Bond; James Bond:</c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: false })}
          // displayTranslation
          <c.P>叫 to be called can also be used with only the given name instead of the full name:</c.P>
          {dialog(2, { sentenceType: 'chinese', displayNames: false })}
          // displayTranslation
          <c.PartTitle type="secondary">Role Play: Introduce yourself</c.PartTitle>
          <c.P>Now, introduce yourself by giving your last name, and then your full name. Tell Wang Yi what your name is and listen to her response:</c.P>
          {dialog(3, { sentenceType: 'chinese', displayNames: false })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles by pretending you are Wang Yi.</c.P>
          <c.PartTitle type="secondary">How to greet someone you already know</c.PartTitle>
          <c.P>When Chinese people meet each other they often say the other person's name as a form of greeting. This is called to 叫 call someone.</c.P>
          {dialog(4, { sentenceType: 'chinese', displayNames: false })}
          // displayTranslation
          <c.P>You can also add 你好 hi after the name.</c.P>
          {dialog(5, { sentenceType: 'chinese', displayNames: false })}
          // displayTranslation
          <c.P>Note that the name and greeting have the opposite order in Chinese and English: we say hi John! but the Chinese say John, hi! It is also common to add a title or a kinship term to the name when you call someone; we will see many examples of this later.</c.P>
          <c.PartTitle type="secondary">Role Play: Greeting people you know</c.PartTitle>
          {dialog(6, { sentenceType: 'chinese', displayNames: false })}
          {dialog(7, { sentenceType: 'chinese', displayNames: false })}
          <c.PartTitle type="secondary">Using Chinese in the ChineseMe interface</c.PartTitle>
          <c.P>We have seen that 好 means good. It can also mean OK – so now that you know this character, the “ok” button will say 好 going forward.</c.P>
          <c.PartTitle type="secondary">Oracle bones</c.PartTitle>
          <c.P>We have seen that the most ancient Chinese characters were pictures which, as the written language developed, were gradually combined into more complex characters. Most of these were combinations of a radical indicating meaning, and a phonetic hinting at the sound. But some characters were based on different logic.</c.P>
          <c.P>Take 好 for example. The element on the left is the radical 女 which means woman, and the element on the right is the character 子 son, child. This is how it looked on the oracle bones:</c.P>
          <c.Bookrow>
            <img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/hao_jiaguwen.png'} alt=""/>
          </c.Bookrow>
          <c.P>女 on the left hand side is a pictogram. On the oracle bones, it shows a woman seated on her folded legs, in a pose we still recognize from tea ceremonies today. The arms are crossed in front of the body – or perhaps busy with daily chores.</c.P>
          <c.Bookrow>
            <img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/nv_jiaguwen.png'} alt=""/>
          </c.Bookrow>
          <c.P>As you can see, the modern character for woman looks different from the original pictogram. As the writing system developed over the centuries, the characters were standardized and stylized. But it still possible to identify the strokes of the ancient oracle bone character.</c.P>
          <c.P>The character 子 son, child on the right hand side is also a pictogram. The oracle bone specimens show a swaddled baby, sometimes with its little arms straight out, sometimes flailing wildly in a way any parent would recognize:</c.P>
          <c.Bookrow>
            <img src={'https://s3.eu-west-2.amazonaws.com/chineseme/images/zi_jiaguwen.png'} alt=""/>
          </c.Bookrow>
          <c.P>Together, woman and child form the character 好, which means good, nice, fine. To the ancients, the idea of a woman caring for a small baby was the very embodiment of something “good”. This is an example of an ideogram, a character where each element contributes to the meaning.</c.P>
          <c.P>Even in characters with a radical and a phonetic, the phonetic was often chosen with an eye for meaning in addition to sound. One example is 姓, where the phonetic 生 shēng means give birth to or be born. ”Born of woman”: to have as family name.</c.P>
          <c.PartTitle type="secondary">Characters – calligraphy</c.PartTitle>
          <c.P>The characters we have learned in this lesson are a good illustration of how different character components are fitted together in complex characters.</c.P>
          <c.P>When 女, 子 and 生 appear on their own as characters, they are given lots of room to spread out and fill their imagined squares:</c.P>
          <c.Bookrow>
            <c.CharacterBox simpChar="女"/>
          </c.Bookrow>
          // Stroke Order
          <c.Bookrow>
            <c.CharacterBox simpChar="子"/>
          </c.Bookrow>
          // Stroke Order
          <c.Bookrow>
            <c.CharacterBox simpChar="生"/>
          </c.Bookrow>
          // Stroke Order
          <c.P>The long horizontal stroks re given plenty of space to spread out to the sides in a long, soft organic curve. But when these characters appears as elements in more complex characters, they need to cede some space to the other components:</c.P>
          <c.Bookrow>
            <c.CharacterBox simpChar="好"/>
          </c.Bookrow>
          // Stroke order
          <c.Bookrow>
            <c.CharacterBox simpChar="姓"/>
          </c.Bookrow>
          // Stroke Order
          <c.P>The horizontal strokes are shortened to give room for the other half of each character, and other strokes are also shortened and more inclined. Try it:</c.P>
          {character(2, { mode: 'practice' })}
          {character(1, { mode: 'practice' })}
          {character(4, { mode: 'practice' })}
          {character(3, { mode: 'practice' })}
          {character(5, { mode: 'practice' })}
          <c.PartTitle type="secondary">Pronunciation</c.PartTitle>
          <c.P>A Chinese syllable is composed of three parts: an initial, which comes first; a final, which comes last, and a tone. Which are the initials, finals and tones on these syllables? Practice:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'review'
            }}
          >
            <c.Ul>
              <li>好 hǎo</li>
              <li>你 nǐ</li>
              <li>姓 xìng</li>
              <li>生 shēng</li>
            </c.Ul>
          </c.Bookrow>
          // Practice
          // Format
          <c.P>Let us also practice pronouncing a couple of the initials from this lesson.</c.P>
          <c.PartTitle type="tertiary">The initial h-</c.PartTitle>
          <c.P>Chinese h- is much “harder” than English h; it sounds more like its German counterpart. Mimic the audio voice and try to exaggerate the strong aspiration on the initial:</c.P>
          {character(3, {
            mode: 'details',
            hideMeaning: true,
            hideLinks: true,
            audio: true
          })}
          <c.PartTitle type="tertiary">The initial x-</c.PartTitle>
          <c.P>Some books and websites claim that the Chinese initial x- is difficult because it doesn’t exist in English. In fact, English has a sound very similar to x-, it’s just that it is well hidden!</c.P>
          <c.P>Here’s how to find it: Slowly and carefully pronounce the ch in English cheap. You will notice that ch contains two sounds: t followed by a soft shush. This shush is exactly the missing x- we are looking for! Pronounce the ch in chin without the t sound, and you have it! Listen to the audio voice and repeat very slowly:</c.P>
          {character(5, {
            mode: 'details',
            hideMeaning: true,
            hideLinks: true,
            audio: true
          })}
          <c.PartTitle type="secondary">New characters</c.PartTitle>
          <c.P><i>Here are all the new characters from this lesson. Practice the stroke order animations at ChineseMe.</i></c.P>
          {newCharacters()}
          <c.PartTitle type="secondary">Review</c.PartTitle>
          // Review
          <c.P><i>Practice pronunciation, grammar and character writing on the ChineseMe website.</i></c.P>
        </c.Page>
      </div>
    );
  }
}
