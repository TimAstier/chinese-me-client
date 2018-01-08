import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import { Row } from '../../Shared';
import styled from 'styled-components';

// Custom code to handle "example" dialogs
const Chinese = styled.div`
  font-size: 25px;
  font-family: Kai;
  margin-left: -20px;
  line-height: 35px;
  min-width: 200px;
`;

const Translation = styled.div`
  font-size: 18px;
  line-height: 25px;
  display: flex;
  font-style: italic;
`;

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character,
      characterIds, practiceIds, image, grammarTitle } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.Bookrow center>{image()}</c.Bookrow>
          <c.PartTitle>CHARACTERS</c.PartTitle>
          {newCharacters()}
          <c.PartTitle>PRONUNCIATION</c.PartTitle>
          <c.P>A Chinese syllable is composed of three parts: an <i>initial</i>, which comes first; a <i>final</i>, which comes last, and a <i>tone</i>. Which are the initials, finals and tones on these syllables?</c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >Practice.</c.P>
          <c.P>Let us practice pronouncing a couple of the initials from this lesson.</c.P>
          <c.PartTitle type="tertiary">The initial h-</c.PartTitle>
          <c.P>Chinese <b>h-</b> is much “harder” than English <i>h</i>; it sounds more like its German counterpart. Mimic the audio voice and try to exaggerate the strong aspiration on the initial:</c.P>
          {character(3, {
            mode: 'details',
            hideMeaning: true,
            hideLinks: true,
            audio: true
          })}
          <c.PartTitle type="tertiary">The initial x-</c.PartTitle>
          <c.P>Some books and websites claim that the Chinese initial <b>x-</b> is difficult because it doesn’t exist in English. In fact, English has a sound very similar to <b>x-</b>, it’s just that it is well hidden!</c.P>
          <c.P>Here’s how to find it: Slowly and carefully pronounce the <i>ch</i> in English <i>cheap</i>. You will notice that <i>ch</i> contains two sounds: <i>t</i> followed by a soft <i>shush</i>. This <i>shush</i> is exactly the missing <b>x-</b> we are looking for! Pronounce the <i>ch</i> in <i>chin</i> without the <i>t</i> sound, and you have it! Listen to the audio voice and repeat very slowly:</c.P>
          {character(5, {
            mode: 'details',
            hideMeaning: true,
            hideLinks: true,
            audio: true
          })}
          <c.PartTitle>PATTERNS</c.PartTitle>
          {grammarTitle()}
          <c.P>The most common Chinese greeting is a combination of two characters, 你 <i>you</i> and 好 <i>good</i>. Let us first practice saying each of them separately. Listen carefully to see if you can identify the tone on each one:</c.P>
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
          <c.P>Both of them are pronounced with Tone 3. Now, listen to how they sound when we put them together in the greeting 你好 <i>hi</i>:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/69.m4a'
              }
            }}
          >
            <c.Char>你好！</c.Char>
          </c.Bookrow>
          <c.P>You may have noticed that the first tone changes to Tone 2. This is an example of a <i>tone change rule</i>: sometimes, the tone on a character changes depending on the tone that comes after. This sounds complicated, but actually comes naturally as you get used to speaking; we just mention it so you won’t be surprised when it happens! The linguistic term for this kind of change is <i>tone sandhi</i>, from the sanscrit word <i>sandhi</i> meaning <i>change</i>.</c.P>
          {grammarTitle()}
          <c.P>In the previous lesson, we learned to introduce ourselves using the verb 叫 which means <i>to be called</i>. The verb 姓 is used in a similar pattern to introduce one’s family name:</c.P>
          {example(1, { basic: true, big: true, audio: true, displayTranslation: true})}
          <c.P>So while 叫 means <i>to be called</i>, 姓 literally means <i>to have as family name</i>. The two words are often used together in presentations, a bit like when agent double-oh- seven introduces himself saying <i>My name is Bond; James Bond:</i></c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/71.m4a'
              }
            }}
          >
            <c.Ul>
              <li><Row><Chinese>你好！</Chinese><Translation>Hi!</Translation></Row></li>
              <li><Row><Chinese>我姓王。</Chinese><Translation>My family name is Wang.</Translation></Row></li>
              <li><Row><Chinese>我叫王一。 </Chinese><Translation>My name is Wang Yi.</Translation></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>叫 <i>to be called</i> can also be used with only the given name instead of the full name:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/72.m4a'
              }
            }}
          >
            <c.Ul>
              <li><Row><Chinese>你好！</Chinese><Translation>Hi!</Translation></Row></li>
              <li><Row><Chinese>我姓王。</Chinese><Translation>My family name is Wang.</Translation></Row></li>
              <li><Row><Chinese>我叫一。 </Chinese><Translation>My given name is Yi.</Translation></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle>DIALOG</c.PartTitle>
          <c.PartTitle type="secondary">Introduce yourself</c.PartTitle>
          <c.P>Now, introduce yourself by giving your last name, and then your full name. Tell Wang Yi what your name is and listen to her response:</c.P>
          {dialog(1, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          <c.P>Repeat this until you feel comfortable.</c.P>
          <c.P>Now, change roles by pretending you are Wang Yi.</c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            Exercise: type the <b>pīnyīn</b>, with tones, of the dialog. Type the actual tones that you hear, taking into account the tone sandhi.
          </c.P>
          <c.PartTitle>PATTERNS</c.PartTitle>
          {grammarTitle()}
          <c.P>When Chinese people meet each other they often say the other person's name as a form of greeting. This is called to 叫 <i>call</i> someone.</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/73.m4a'
              }
            }}
          >
            <c.Ul>
              <li><Row><Chinese>王一！</Chinese><Translation>Wang Yi!</Translation></Row></li>
              <li><Row><Chinese>你好！</Chinese><Translation>Hi!</Translation></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>You can also add 你好 hi after the name. Note that the name and greeting have the opposite order in Chinese and English: we say <i>hi John!</i> but the Chinese say <i>John, hi!</i></c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/74.m4a'
              }
            }}
          >
            <c.Ul>
              <li><Row><Chinese>王一，你好！</Chinese><Translation>Hi, Wang Yi!</Translation></Row></li>
              <li><Row><Chinese>你好！</Chinese><Translation>Hi!</Translation></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>It is also common to add a title or a kinship term to the name when you call someone; we will see many examples of this later.</c.P>
          <c.PartTitle>DIALOG</c.PartTitle>
          <c.PartTitle type="secondary">Greeting people you know</c.PartTitle>
          {dialog(2, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          {dialog(3, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          <c.PartTitle>ORACLE BONES</c.PartTitle>
          <c.P>We have seen that the most ancient Chinese characters were pictures which, as the written language developed, were gradually combined into more complex characters. Most of these were combinations of a radical indicating meaning, and a phonetic hinting at the sound. But some characters were based on different logic.</c.P>
          <c.P>Take 好 for example. The element on the left is the radical 女 which means <i>woman</i>, and the element on the right is the character 子 <i>son, child</i>. This is how it looked on the oracle bones:</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>女 on the left hand side is a pictogram. On the oracle bones, it shows a woman seated on her folded legs, in a pose we still recognize from tea ceremonies today. The arms are crossed in front of the body – or perhaps busy with daily chores.</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>As you can see, the modern character for woman looks different from the original pictogram. As the writing system developed over the centuries, the characters were standardized and stylized. But it still possible to identify the strokes of the ancient oracle bone character.</c.P>
          <c.P>The character 子 <i>son, child</i> on the right hand side is easier to recognize. It is also a pictogram. The oracle bone specimens show a swaddled baby, sometimes with its little arms straight out, sometimes flailing wildly in a way any parent would recognize:</c.P>
          <c.Bookrow>{image()}</c.Bookrow>
          <c.P>Together, <i>woman</i> and <i>child</i> form the character 好, which means <i>good</i>, <i>nice</i>, <i>fine</i>. To the ancients, the idea of a woman caring for a small baby was the very embodiment of something “good”. This is an example of an <i>ideogram</i>, a character where each element contributes to the meaning.</c.P>
          <c.P>Even in characters with a radical and a phonetic, the phonetic was often chosen with an eye for meaning in addition to sound. One example is 姓, where the phonetic 生 <b>shēng</b> means <i>give birth to</i> or <i>be born</i>. ”Born of woman”: <i>to have as family name</i>.</c.P>
          <c.PartTitle>CALLIGRAPHY</c.PartTitle>
          <c.P>The characters we have learned in this lesson are a good illustration of how different character components are fitted together in complex characters.</c.P>
          <c.P>When 女 <i>woman</i> appears on their own as a character, it has lots of room to fill its imagined squares:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[1]
              }
            }}
          >
            <c.CharacterBox simpChar="女"/>
          </c.Bookrow>
          <c.P>The long horizontal strokes are given plenty of space to spread out to the sides in a soft organic curve. But when these characters appears as elements in more complex characters, they need to cede some space to the other components:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[2]
              }
            }}
          >
            <c.CharacterBox simpChar="好"/>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'stroke',
              data: {
                elementId: characterIds[4]
              }
            }}
          >
            <c.CharacterBox simpChar="姓"/>
          </c.Bookrow>
          <c.P>The horizontal stroke is shortened to give room for the phonetic, and the right-hand leg is also shorter and a bit more inclined. Practice writing:</c.P>
          {character(2, { mode: 'practice' })}
          {character(3, { mode: 'practice' })}
          {character(5, { mode: 'practice' })}
          <c.PartTitle anchor="review">EXERCISES</c.PartTitle>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Now, go through the exercises to practice pronunciation, grammar and character writing. Then do the Exam to progress to the next Lesson.</i>
          </c.P>
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
