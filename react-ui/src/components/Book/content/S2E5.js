import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, pronunciationTitle, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <Objective
            text="Explaining and describing Chinese characters."
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            Since most Chinese syllables receive equal stress, they are pronounced clearly and distinctly. In English, stressed syllables are longer, louder and higher pitched than unstressed ones:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row>His pronunci<b>a</b>tion is very g<b>oo</b>d.</Row>
            <Row>o o--o--o-<b>O</b>-o o o-o <b>O</b></Row>
          </c.Bookrow>
          <c.P>
            As we have seen, this is not the case for Chinese. Most Chinese syllables have equal stress:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row>Tā fāyīn hěn hǎo.</Row>
            <Row>O O-O O O</Row>
          </c.Bookrow>
          <c.P>
            In this way, Chinese is easier to pronounce – and understand – than languages like English. You just need to practice four things:
          </c.P>
          <c.P>
            1. Individual words, with tones
          </c.P>
          <c.P>
            2. Changing Tone 3 depending on context
          </c.P>
          <c.P>
            3. Changing tone on 不 no and 一 one depending on context
          </c.P>
          <c.P>
            4. Neutral and neutralized tones
          </c.P>
          <c.P>
            If you master these four areas, you can pronounce anything in Chinese – provided that you know the words.
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            English tends to use different verbs to describe an action and its result: <i>look</i> and <i>see</i>, for example. Chinese uses the same verb for both, just appending the <i>result</i> to the original verb. This gives a new compound verb, <i>doing something so that something happens</i>, composed of the "action" and the "result" (often called the <i>verb</i> and the <i>verb complement</i>):
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>看</c.Char><c.Pinyin>kàn</c.Pinyin><c.Meaning>look</c.Meaning></Row>
            <Row><c.Char>看见</c.Char><c.Pinyin>kànjiån</c.Pinyin><c.Meaning>see (LOOK-SEE)</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            Other examples are <i>listen</i> and <i>hear</i>, <i>study</i> and <i>learn</i>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>听</c.Char><c.Pinyin>tīng</c.Pinyin><c.Meaning>listen</c.Meaning></Row>
            <Row><c.Char>听见</c.Char><c.Pinyin>tīngjiån</c.Pinyin><c.Meaning>hear (LISTEN-SEE)</c.Meaning></Row>
          </c.Bookrow>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>学</c.Char><c.Pinyin>xué</c.Pinyin><c.Meaning>study</c.Meaning></Row>
            <Row><c.Char>学会</c.Char><c.Pinyin>xuéhuì</c.Pinyin><c.Meaning>learn (STUDY-ABLE-TO-DO)</c.Meaning></Row>
          </c.Bookrow>
          {grammarTitle()}
          <c.P>
            When <c.Chinese>得</c.Chinese> <b>de̊.2</b> is inserted between a verb and its complement, the meaning becomes <i>be able to</i>. This is called the <i>potential</i> form of the verb:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>看见</c.Char><c.Pinyin>kànjiån</c.Pinyin><c.Meaning>see</c.Meaning> => <c.Char>看得见</c.Char><c.Pinyin>kàn de̊.2 jiån</c.Pinyin><c.Meaning>be able to see</c.Meaning></Row>
            <Row><c.Char>听见</c.Char><c.Pinyin>tīngjiån</c.Pinyin><c.Meaning>hear</c.Meaning> => <c.Char>听得见</c.Char><c.Pinyin>tīng de̊.2 jiån</c.Pinyin><c.Meaning>be able to hear</c.Meaning></Row>
          </c.Bookrow>
          {example(1, { audio: true })}
          <c.P>
            Another example is 看懂 kàndǒng. This is a compound of 看 kàn which can also mean read and 懂 dǒng understand. It literally means understand by reading or read so I understand. English doesn't have an equivalent word, so we usually translate 看懂 kàndǒng as just understand. But Chinese makes a difference between verbs such as 看懂 kàndǒng understanding by reading and 听懂 tīngdǒng understanding by hearing (for example what somebody is saying), even though we would translate them into the same word in English.
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>听得懂</c.Char><c.Pinyin>tīng de̊.2 dǒng</c.Pinyin><c.Meaning>be able to understand (by listening)</c.Meaning></Row>
            <Row><c.Char>看得懂</c.Char><c.Pinyin>kàn de̊.2 dǒng</c.Pinyin><c.Meaning>be able to understand (by reading)</c.Meaning></Row>
          </c.Bookrow>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            If we replace <c.Chinese>得</c.Chinese> <b>de̊.2</b> in the patterns above with <c.Chinese>不</c.Chinese> <b>bù</b>, we get a <i>negative potential form</i> meaning <i>not able to</i>:
          </c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>
            <c.Chinese>起</c.Chinese> <b>qǐ</b> is a common verb complement. It originally means <i>rise</i> but is often used in compound words to signal result, for example in the verb <c.Chinese>想起</c.Chinese> <b>xiǎngqǐ</b> <i>remember, (come to) think of</i>:
          </c.P>
          {example(8, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>As usual, you can formulate questions with <c.Chinese>吗</c.Chinese> <b>må</b>:</c.P>
          <c.Example
            audio={false}
            chinese="这本书你看得懂吗？"
            pinyin="Zhèi běn shū nǐ kànde̊.2dǒng må?"
            translation="Can you understand this book?"
          />
          <c.P>
            You can also present alternatives, in one of two ways. You can repeat the whole verb, including the verb complement:
          </c.P>
          {example(9, { audio: true })}
          <c.P>Or you can repeat only the main verb:</c.P>
          {example(10, { audio: true })}
          <c.P>
            The verb and verb complement are stressed each time; only <c.Chinese>得</c.Chinese> <b>de̊.2</b> and <c.Chinese>不</c.Chinese> <b>bů</b> have neutral tone. Regardless of format, questions containing the potential form of resultative verbs are usually formulated using Topic-Comment structures, as in the examples above.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Translate to Chinese using A-not-A pattern.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            Some verbs exist only – or mainly – in potential form. The basic form <c.P>看起</c.P> <b>kànqǐ</b>, for example, is very rare, but its potential forms are common:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>看得起</c.Char><c.Pinyin>kànde̊qǐ</c.Pinyin><c.Meaning>have a good opinion of, think highly of (somebody)</c.Meaning></Row>
            <Row><c.Char>看不起</c.Char><c.Pinyin>kànbůqǐ</c.Pinyin><c.Meaning>look down on, despise</c.Meaning></Row>
          </c.Bookrow>
          {example(11, { audio: true })}
          <c.P>
            The most common Chinese expression for <i>I'm sorry</i> has this form; it literally means <i>(I am) not able to answer up (to your expectations)</i>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>对不起</c.Char><c.Pinyin>duìbůqǐ</c.Pinyin><c.Meaning>sorry</c.Meaning></Row>
          </c.Bookrow>
          <c.P>This expression can also be used in the sense of <i>letting someone down</i> or *not answering up to someone's (rightful) expectations:</c.P>
          {example(12, { audio: true })}
          <c.P>Another common expression which has a similar form is <c.Chinese>怪不得</c.Chinese> <b>guàibůdé</b> <i>no wonder</i>:</c.P>
          {example(13, { audio: true })}
          {grammarTitle()}
          <c.P>
            Chinese has relatively few family names – but there are still some names that are pronounced the same although they are written with different characters. So when people introduce themselves, it is sometimes necessary to specify which of two possibilities the speaker has in mind. One way of doing this is to list the character components of the name. For example, somebody with the surname Li could say <i>the family name <b>Lǐ</b> consisting of the characters <b>mù</b> and <b>zǐ</b></i>:
          </c.P>
          {example(14, { audio: true })}
          {grammarTitle()}
          <c.P>
            A common use of the <b>de̊.1</b> construction is to define which Chinese character a speaker has in mind. Let’s again take <c.Chinese>李玉</c.Chinese> <b>Lǐ Yù</b> as an example. Since <c.Chinese>李</c.Chinese> <b>Lǐ</b> is one of the most common family names in China, most people will get the character right – so the explanation in pattern 5:14 is not always necessary. Given names, on the other hand, can be almost anything. Since there are also many characters pronounced <b>yù</b>, <b>Lǐ Yù</b> cannot assume that a new acquaintance will understand her name just by hearing it spoken.
          </c.P>
          <c.P>
            One way to explain it would be to write it down; you can often see Chinese people writing with a finger in the palm of their hand to show which character they have in mind. But it is also possible to describe a character without writing, by using a <c.Chinese>的</c.Chinese> <b>de̊.1</b> construction with a common word containing the character. There are many characters pronounced <b>yù</b> in Chinese, so someone hearing <b>Lǐ Yù</b>’s name has no way of knowing how her given name is written. In order to explain that the <b>yù</b> in her name is the one that means <i>jade</i>, she pronounces the common word <c.Chinese>美玉</c.Chinese> <b>měiyù</b>, which literally means <i>fine jade</i>: my <b>yù</b> is “<i>the yù in měiyù</i>”. Hearing this, a Chinese listener will immediately know which character she means:
          </c.P>
          {example(15, { audio: true })}
          <c.P>
            It is not just names that are explained this way; the same principle can be used to specify which characters make up any word by listing a more common word for each character, or saying a character with its measure word.
          </c.P>
          {example(16, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            <i>Practice</i>
          </c.P>
          <c.PartTitle>Culture and society: Chinese nicknames</c.PartTitle>
          <c.PartTitle name="dialog_zh" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
