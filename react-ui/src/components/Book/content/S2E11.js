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
            text="Talking about family."
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            How are the syllables <c.Chinese>音</c.Chinese> and <c.Chinese>英</c.Chinese> pronounced? Different textbooks and different teachers have different opinions.
          </c.P>
          <c.P>
            Both of these syllables lack initial; they are composed of the finals <b>-in</b> and <b>-ing</b>, respectively. According to one view, they could have been simply written <b>īn</b> and <b>īng</b>. But in clearly articulated speech, many native speakers pronounce these syllables with a barely audible semivowel called a <i>glide</i>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yin1')
              }
            }}
          ><c.Char>音</c.Char></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('ying1')
              }
            }}
          ><c.Char>英</c.Char></c.P>
          <c.P>
            This glide is the reason these syllables are written with a <b>y-</b> in pīnyīn.
          </c.P>
          <c.P>
            In the same way, finals starting with <b>-u</b> are written with a <b>w</b> when there is no initial, where <b>w</b> stands for a semivowel similar to English w in <i>we</i>. And as we have seen, finals starting with a <b>-ü</b> are also written with a <b>y-</b> in pīnyīn – although the semivowel in this case is actually slightly different from the one preceding <b>-i</b>.
          </c.P>
          <c.P>
            Being aware of these minute nuances can help you hone your pronunciation – and finally get an explanation of what would otherwise seem to be an arbitrary spelling convention in pīnyīn.
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            Chinese does not make any difference between <i>both</i> and <i>all</i>; after all, the concept is the same:
          </c.P>
          {example(1, { audio: true })}
          <c.P>
            Pay attention to the intonation in this pattern; the stress is on <c.Chinese>都</c.Chinese> <b>dōu</b>, so Tone 1 has a higher pitch on <c.Chinese>都</c.Chinese> <b>dōu</b> than on <c.Chinese>他</c.Chinese> <b>tā</b>.
          </c.P>
          <c.P>
            If you want to clarify, you can add the exact number, together with the appropriate measure word, before <c.Chinese>都</c.Chinese> <b>dōu</b>:
          </c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>
            In order to say <i>both... and</i>, the speaker will list two or more things followed by <c.Chinese>都</c.Chinese> <b>dōu</b>, which is stressed:
          </c.P>
          {example(4, { audio: true })}
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
          <c.P>
            In the pattern above, you may have noticed that Chinese uses a special comma (<c.Chinese>、</c.Chinese>) as a break between items in a list. This comma is different from the comma used to create a pause in sentences (<c.Chinese>，</c.Chinese>) . Here is a sentence using both kinds of commas:
          </c.P>
          {example(5, { audio: true })}
          <c.P>
            Often, <c.Chinese>都</c.Chinese> <b>dōu</b> is used together with another word meaning <i>all</i>, for example <c.Chinese>所有</c.Chinese> <b>suǒyǒu</b>:
          </c.P>
          {example(6, { audio: true })}
          <c.P>
            This looks odd – we have two <i>all</i> in this sentence! So what is the difference between <c.Chinese>都</c.Chinese> <b>dōu</b> and <c.Chinese>所有</c.Chinese> <b>suǒyǒu</b>? The answer is that <c.Chinese>都</c.Chinese> <b>dōu</b> is part of a fixed pattern where it refers to the noun that comes
            before it, and it can <i>only</i> be used in this pattern to mean <i>all</i>. <c.Chinese>所有</c.Chinese> <b>suǒyǒu</b> literally means ALL THAT THERE IS or ALL THAT THERE ARE, and is always <i>followed</i> by a noun (or an implicit noun):
          </c.P>
          {example(7, { audio: true })}
          <c.P>
            Finally, to negate sentences with <c.Chinese>都</c.Chinese> <b>dōu</b>, we must use a pattern with <c.Chinese>不是所有</c.Chinese> <b>bú shi̊ suǒyǒu de̊.1</b>:
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
          <c.P>
            Placed after a noun or pronoun, <c.Chinese>都</c.Chinese> <b>dōu</b> can mean <i>even</i>. In this pattern, the stress is on the Topic or Subject, rather than on <c.Chinese>都</c.Chinese> <b>dōu</b>:
          </c.P>
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P><c.Chinese>都</c.Chinese> <b>dōu</b> can be combined with many question words to form a pattern meaning <i>any, anyone, anything, anyhow</i>. The stress is usually on the question word:</c.P>
          {example(11, { audio: true })}
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          {example(14, { audio: true })}
          <c.P>
            If these patterns are negated, they mean <i>none</i>, <i>no-one</i>, <i>not anyone</i>, <i>nothing</i>, <i>not anything</i>:
          </c.P>
          {example(15, { audio: true })}
          {example(16, { audio: true })}
          <c.P>
            There is also a negated pattern with <c.Chinese>一点都</c.Chinese> <b>yìdiǎn dōu</b> meaning <i>not at all</i>, <i>not in the least</i>:
          </c.P>
          {example(17, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            The verb <c.Chinese>会</c.Chinese> <b>huì</b> can be used to indicate that the speaker believes something will happen in the future. In this sense, <c.Chinese>会</c.Chinese> <b>huì</b> is often a bit more stressed than usual:
          </c.P>
          {example(18, { audio: true })}
          {example(19, { audio: true })}
          {example(20, { audio: true })}
          <c.P>
            The last statement is a good example of how perfective aspect is different from past tense. This sentence talks about something that will happen in the future, and is translated to future tense in English, so it cannot be said to be in past tense. The perfective <b>le̊.1</b> in Chinese just says that something <i>will</i> be completed: she will <i>have seen</i> something and <i>will be happy</i> as a result.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            We have seen that the construction <c.Chinese>是... 的</c.Chinese> <b>shì... de̊.1</b> can be used for emphasis. <c.Chinese>的</c.Chinese> <b>de̊.1</b> is often used in a similar construction without <c.Chinese>是</c.Chinese> <b>shì</b> to reinforce the speaker's subjective opinion. It's almost as if <c.Chinese>的</c.Chinese> <b>de̊.1</b> were a sentence-final particle – a mood word – with the opposite value of the “softening" particle <c.Chinese>啊</c.Chinese> <b>å</b>.
          </c.P>
          <c.P>
            Since <c.Chinese>会</c.Chinese> <b>huì</b> <i>will in my opinion happen</i> has a similar function, it often appears together with sentence-final <c.Chinese>的</c.Chinese>:
          </c.P>
          {example(21, { audio: true })}
          {example(22, { audio: true })}
          <c.P>
            This sentence-final <c.Chinese>的</c.Chinese> <b>de̊.1</b> also appears in short phrases that almost have the character of fixed expressions:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>是的！</c.Char><c.Pinyin>shìde̊.1</c.Pinyin><c.Meaning>yes!, sure!, exactly!</c.Meaning></Row>
            <Row><c.Char>有的！</c.Char><c.Pinyin>yǒude̊.1</c.Pinyin><c.Meaning>sure there is!, (of course) we have that!</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            In fact, this is just a variant of the emphatic <c.Chinese>是... 的</c.Chinese> <b>shi̊... de̊.1</b> construction we have seen before. We could add <c.Chinese>是</c.Chinese> <b>shi̊</b> to all of the examples above with no change of meaning, although this is less common.
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[5]
              }
            }}
          >
            <i>Translate to Chinese.</i>
          </c.P>
          {grammarTitle()}
          <c.P>The most common way of formulating a yes/no-question in both English and Chinese is in the affirmative: <i>Do you know how to speak French?</i> But in both languages, such questions can also be expressed in the negative: <i>Don't you know how to speak French?</i></c.P>
          <c.P>
            In English, we would answer both the affirmative and the negative question in the same way: <i>No, I don't</i>. But Chinese applies mathematical logic to the answer; if you reply to the negative question using the Chinese equivalent of <i>no</i>, you would be contradicting the negative itself, meaning that you <i>do</i> speak French. If you want to say you <i>don't</i> speak French, you need to answer with the Chinese equivalent of <i>yes</i>:
          </c.P>
          {example(23, { audio: true })}
          <c.P>
            Chinese speakers often make the opposite mistake in English: <i>Don't you want to have dinner with us? Yes, I need to go now.</i> To avoid confusion, stick to positively formulated questions!
          </c.P>
          <c.PartTitle name="dialog_zh" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.PartTitle>Culture and society: Performing formal introductions</c.PartTitle>
          <c.P>
            In the dialog, Wang Meixin embarrasses Marvin by suggesting that she will help him find a girlfriend. But among Chinese friends, this would not seem out of the ordinary: friends try to help each other in all areas of life and family matters are not as "personal" as in western countries. Wang Meixin is a networker who knows lots of people, so introducing Marvin to a potential girlfriend seems just as natural to her as helping him to find an apartment.
          </c.P>
          <c.PartTitle>Culture and society: Words for spouse, husband and wife</c.PartTitle>
          <c.P>
            Chinese has many terms to describe family relations: there are specific words for concepts like <i>older female cousin on the paternal side</i> or <i>younger uncle on the maternal side</i>.
          </c.P>
          <c.P>
            To complicate things further, there are often a number of synonyms for the same kinship term. In some cases, these differences are regional: northerners use one term and southerners another. Other terms are more common in certain age groups. To say <i>husband</i> and <i>wife</i>, for example, middle-aged people would often use:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>先生</c.Char><c.Pinyin>xiānshe̊ng</c.Pinyin><c.Meaning>mister</c.Meaning></Row>
            <Row><c.Char>太太</c.Char><c.Pinyin>tàitåi</c.Pinyin><c.Meaning>madam</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            In this age group in Mainland China, you will also often hear a politically correct gender-neutral term which literally means <i>loved person</i>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>爱人</c.Char><c.Pinyin>àirén</c.Pinyin><c.Meaning>spouse</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            Younger people in northern China can say:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>老婆</c.Char><c.Pinyin>lǎopo̊</c.Pinyin><c.Meaning>old lady</c.Meaning></Row>
            <Row><c.Char>老公</c.Char><c.Pinyin>lǎogōng</c.Pinyin><c.Meaning>old man</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            The are other more formal words which are also in frequent use.
          </c.P>
          <c.P>
            Today, when Chinese families often only have one child, words such as those to describe different cousin relationships have become rare. But the words for closer relations, and the regional differences between them, remain.
          </c.P>
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
