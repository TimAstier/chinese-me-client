import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import styled from 'styled-components';
import pinyinize from 'pinyinize';
import { good as OracleBone1 } from '../etymology';

// Custom code to handle "example" dialogs
const Chinese = styled.div`
  font-size: 30px;
  font-family: Kai;
  line-height: 35px;
  min-width: 200px;
`;

const Translation = styled.div`
  line-height: 25px;
  display: flex;
  font-style: italic;
`;

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, character,
      characterIds, practiceIds, grammarTitle, pronunciationTitle }
      = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <Objective
            text="The most common Chinese greeting"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>A Chinese syllable is composed of three parts: an <i>initial</i>, which comes first; a <i>final</i>, which comes last, and a <i>tone</i>.</c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Practice recognizing the initials, finals and tones on a few syllables.</i>
          </c.P>
          {pronunciationTitle()}
          <c.P>Chinese <b>h-</b> is much “harder” than English <i>h</i>; it sounds more like its German counterpart. Mimic the audio voice and try to exaggerate the strong aspiration on the initial:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('hao3')
              }
            }}
          >
            <Row>
              <c.Char>好</c.Char>
              <c.Pinyin>{pinyinize('hao3')}</c.Pinyin>
            </Row>
          </c.Bookrow>
          {pronunciationTitle()}
          <c.P>Some books and websites claim that the Chinese initial <b>x-</b> is difficult because it doesn’t exist in English. In fact, English has a sound very similar to <b>x-</b>, it’s just that it is well hidden!</c.P>
          <c.P>Here’s how to find it: Slowly and carefully pronounce the <i>ch</i> in English <i>chin</i>. You will notice that <i>ch</i> contains two sounds: <i>t</i> followed by a soft <i>shush</i>. This <i>shush</i> is exactly the missing <b>x-</b> we are looking for! Pronounce the <i>ch</i> in <i>chin</i> without the <i>t</i> sound, and you have it! Listen to the audio voice and repeat very slowly:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('xing4')
              }
            }}
          >
            <Row>
              <c.Char>姓</c.Char>
              <c.Pinyin>{pinyinize('xing4')}</c.Pinyin>
            </Row>
          </c.Bookrow>
          {pronunciationTitle()}
          <c.P>There is no vowel similar to Chinese <b>-ü</b> in English, but this sound is not too difficult to master. Just start saying <i>ee</i>, with your mouth wide, and then gradually round your lips as if you were going to say <i>oo</i>, without changing anything else. Try it:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('nv3')
              }
            }}
          >
            <b>nǚ</b>
          </c.Bookrow>
          {pronunciationTitle()}
          <c.P>Listen carefully and you will notice that <b>-i</b> is pronounced very differently in the syllables below:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('ni3')
              }
            }}
          >
            <b>nǐ</b>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('zi3')
              }
            }}
          >
            <b>zǐ</b>
          </c.Bookrow>
          <c.P>In <b>nǐ</b>, it sounds like English <i>ee</i>; in <b>zǐ</b>, it sounds like the buzzing of a bee: <i>zzz</i>.</c.P>
          <c.P>The pronunciation of <b>-i</b> depends on the initial. It is only after <b>s-</b>, <b>c-</b>, and <b>z-</b> that it has the zzz sound. After the other initials we have learned so far, it is pronounced <i>ee</i>:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('jiao4')
              }
            }}
          >
            <b>jiào</b>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yi1')
              }
            }}
          >
            <b>yī</b>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('xing4')
              }
            }}
          >
            <b>xìng</b>
          </c.Bookrow>
          <c.PartTitle name="characters" />
          <c.P>Here are all the new characters in this lesson. Click on the stroke icon to review stroke order, on the brush icon to see calligraphy video, and on history icon to see the character etymology.</c.P>
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>The most common Chinese greeting is a combination of two characters, <c.Chinese>你</c.Chinese> <i>you</i> and <c.Chinese>好</c.Chinese> <i>good</i>. Let us first practice saying each of them separately. Listen carefully to see if you can identify the tone on each one:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('ni3')
              }
            }}
          >
            <Row>
              <c.Char>你</c.Char>
            </Row>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('hao3')
              }
            }}
          >
            <Row>
              <c.Char>好</c.Char>
            </Row>
          </c.Bookrow>
          <c.P>Both of them are pronounced with Tone 3. Now, listen to how they sound when we put them together in the greeting <c.Chinese>你好</c.Chinese> <i>hi</i>:</c.P>
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
          <c.P>In the previous lesson, we learned to introduce ourselves using the verb <c.Chinese>叫</c.Chinese> which means <i>to be called</i>. The verb <c.Chinese>姓</c.Chinese> is used in a similar pattern to introduce one’s family name:</c.P>
          {example(1, { basic: true, audio: true, displayTranslation: true})}
          <c.P>So while <c.Chinese>叫</c.Chinese> means <i>to be called</i>, <c.Chinese>姓</c.Chinese> literally means <i>to have as family name</i>. The two words are often used together in presentations, a bit like when agent double-oh- seven introduces himself saying <i>My name is Bond; James Bond:</i></c.P>
          <c.Bookrow
            flexDirection="column"
            buttonOptions={{
              top: true,
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/71.m4a'
              }
            }}
          >
            <Row><Chinese>- 你好！</Chinese><Translation>- Hi!</Translation></Row>
            <Row><Chinese>- 我姓王。</Chinese><Translation>- My family name is Wang.</Translation></Row>
            <Row><Chinese>- 我叫王一。 </Chinese><Translation>- My name is Wang Yi.</Translation></Row>
          </c.Bookrow>
          <c.P><c.Chinese>叫</c.Chinese> <i>to be called</i> can also be used with only the given name instead of the full name:</c.P>
          <c.Bookrow
            flexDirection="column"
            buttonOptions={{
              top: true,
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/72.m4a'
              }
            }}
          >
            <Row><Chinese>- 你好！</Chinese><Translation>- Hi!</Translation></Row>
            <Row><Chinese>- 我姓王。</Chinese><Translation>- My family name is Wang.</Translation></Row>
            <Row><Chinese>- 我叫一。 </Chinese><Translation>- My given name is Yi.</Translation></Row>
          </c.Bookrow>
          <c.Bookrow center marginTop={50}>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow>
          <c.PartTitle name="dialog" />
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
            <i>Practice.</i>
          </c.P>
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>When Chinese people meet each other they often say the other person's name as a form of greeting. This is called to <c.Chinese>叫</c.Chinese> <i>call</i> someone:</c.P>
          <c.Bookrow
            flexDirection="column"
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/73.m4a'
              }
            }}
          >
            <Row><Chinese>- 王一！</Chinese><Translation>- Wang Yi!</Translation></Row>
            <Row><Chinese>- 你好！</Chinese><Translation>- Hi!</Translation></Row>
          </c.Bookrow>
          <c.P>You can also add <c.Chinese>你好</c.Chinese> <i>hi</i> after the name. Note that the name and greeting have the opposite order in Chinese and English: we say <i>hi, John!</i> but the Chinese say <i>John, hi!</i></c.P>
          <c.Bookrow
            flexDirection="column"
            buttonOptions={{
              type: 'audio',
              data: {
                url: 'https://s3.eu-west-2.amazonaws.com/chineseme/sentences/74.m4a'
              }
            }}
          >
            <Row><Chinese>- 王一，你好！</Chinese><Translation>- Hi, Wang Yi!</Translation></Row>
            <Row><Chinese>- 你好！</Chinese><Translation>- Hi!</Translation></Row>
          </c.Bookrow>
          <c.P>It is also common to add a title or a kinship term to the name when you <i>call</i> someone; we will see many examples of this later.</c.P>
          <c.Bookrow center marginTop={50}>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow>
          <c.PartTitle name="dialog" />
          {dialog(2, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          {dialog(3, { sentenceType: 'chineseWithTranslation', displayNames: false })}
          <c.PartTitle>ORACLE BONES</c.PartTitle>
          <c.Frame><OracleBone1/></c.Frame>
          <c.PartTitle>CALLIGRAPHY</c.PartTitle>
          <c.P>The characters we have learned in this lesson are a good illustration of how different character components are fitted together in complex characters.</c.P>
          <c.P>When <c.Chinese>女</c.Chinese> <i>woman</i> appears on its own as a character, it has lots of room to fill its imagined square:</c.P>
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
          <c.P>The long <i>horizontal</i> stroke is given plenty of space to spread out to the sides in a soft organic curve. But when a character like this appears as an element in a more complex character, it needs to cede some space to the other components:</c.P>
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
          <c.P>The horizontal stroke is shortened to give room for the phonetic, and the right-hand leg is also shorter and a bit more inclined. Download the <a href="https://s3.eu-west-2.amazonaws.com/chineseme/pdf/Exercise+sheet.pdf" target="_blank" rel="noopener noreferrer">practice sheet</a>, and practice writing:</c.P>
          {character(2, { mode: 'practice' })}
          {character(3, { mode: 'practice' })}
          {character(5, { mode: 'practice' })}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
