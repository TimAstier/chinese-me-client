import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
import { audioUrls } from '../../../constants/urls';

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
            text="Describing what you see."
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            We have seen that the word <c.Chinese>不</c.Chinese> <b>bù</b> <i>no, not</i>, has different tones depending on the tone of the character coming after it. The same is true for the number <c.Chinese>一</c.Chinese> <i>one</i>.
          </c.P>
          <c.P>
            When it is regarded purely as a <i>digit</i>, for example in years and dates, or when we count <i>one, two, three</i>, it is pronounced <b>yī</b> with Tone 1, regardless of the tone that comes after:
          </c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_1.mp3`
              }
            }}>
            <span><b>yī, èr, sān</b> <i>one, two, three</i></span>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_2.mp3`
              }
            }}>
            <span><b>Tā yī suì.</b> <i>He is one year old.</i></span>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_3.mp3`
              }
            }}>
            <span><b>Wǒ sānshíyī suì.</b> <i>I am 31 years old.</i></span>
          </c.Bookrow>
          <c.P>
            In all other cases, the tone on <c.Chinese>一</c.Chinese> <i>one</i> depends on the tone that comes after it. Before Tone 4 and Neutral Tone, it is pronounced with Tone 2:
          </c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_4.mp3`
              }
            }}>
            <span><b>yí ge̊ rén</b> <i>a person; one person</i></span>
          </c.Bookrow>
          <c.P>And before Tones 1, 2 and 3, it has Tone 4:</c.P>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_5.mp3`
              }
            }}>
            <span><b>yì zhāng zhǐ a sheet</b> <i>a sheet (piece) of paper</i></span>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_6.mp3`
              }
            }}>
            <span><b>yì míng xuéshe̊ng</b> <i>a student</i></span>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_7.mp3`
              }
            }}>
            <span><b>yì běn shū</b> <i>a book; one book</i></span>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_8.mp3`
              }
            }}>
            <span><b>yì diǎn</b> <i>a bit; a little bit</i></span>
          </c.Bookrow>
          <c.Bookrow
            buttonOptions={{
              type: 'audio',
              data: {
                url: `${audioUrls.othersPath}/S2_3_9.mp3`
              }
            }}>
            <span><b>yì diándiǎn</b> <i>a tiny bit; a tiny little bit</i></span>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Choose the right tone on <c.Chinese>一</c.Chinese>.</i>
          </c.P>
          {pronunciationTitle()}
          <c.P>
            When there is no initial, <b>-ian</b> is spelled <b>yan</b>, and <b>-iao</b> is spelled <b>yao</b>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yan2')
              }
            }}
          ><b>yán</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('yao4')
              }
            }}
          ><b>yào</b></c.P>
          <c.P>
            Remember that the <i>a</i> in <b>-ian</b> is pronounced like English <i>e</i> in <i>hen</i>, not like the final <b>-a</b>!
          </c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Listen to the voice and write what you hear.</i>
          </c.P>
          {pronunciationTitle()}
          <c.P>
            These two initials form an aspirated-unaspirated pair. As usual, hold the palm of your hand close to your mouth and make sure there is a strong flow of air when you pronounce <b>k-</b>, and very little when you say <b>g-</b>:
          </c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('gui4')
              }
            }}
          ><b>guì</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('gao1')
              }
            }}
          ><b>gāo</b></c.P>
          <c.P
            buttonOptions={{
              type: 'audio',
              data: {
                url: pinyinNumberToAudioUrl('kan4')
              }
            }}
          ><b>kàn</b></c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Listen to the voice and write what you hear.</i>
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            <i>Measure words</i>, also called <i>classifiers</i>, are an important feature of Chinese. Measure words exist in all languages: in <i>one liter of milk</i>, for example, <i>liter</i> is the measure word for <i>milk</i>; the same goes for two <i>rolls</i> of tape, a <i>little</i> bit of English and a <i>group</i> of people.
          </c.P>
          <c.P>
            Chinese, however, uses measure words for all nouns, not just things that can be "measured" like a liter of milk. You cannot just say <i>a book</i> or <i>a language</i>; you have to say <i>a "root" of book</i> and <i>a "portal" of language</i>. English has a similar phenomenon with uncountable nouns: we say <i>a piece of news</i> rather than just a <i>news</i>. Here, <i>piece</i> is the measure word for <i>news</i>. The difference is that Chinese treats <i>all</i> nouns in this way. Since most "measure words" do not actually "measure" anything, modern grammarians prefer to call them <i>classifiers</i>. Here are some common examples:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>本</c.Char><c.Pinyin>běn</c.Pinyin><c.Meaning>root</c.Meaning></Row>
            <Row>classifier for books</Row>
            <br />
            <Row><c.Char>门</c.Char><c.Pinyin>mén</c.Pinyin><c.Meaning>door</c.Meaning></Row>
            <Row>classifier for languages, academic subjects – and artillery pieces!</Row>
            <br />
            <Row><c.Char>张</c.Char><c.Pinyin>zhāng</c.Pinyin><c.Meaning>stretch, spread</c.Meaning></Row>
            <Row>classifier for things with flat surfaces</Row>
            <br />
            <Row><c.Char>名</c.Char><c.Pinyin>míng</c.Pinyin><c.Meaning>name</c.Meaning></Row>
            <Row>classifier for professional roles such as <i>student</i> and <i>representative</i></Row>
            <br />
            <Row><c.Char>个</c.Char><c.Pinyin>ge̊</c.Pinyin><c.Meaning>item</c.Meaning></Row>
            <Row>the most common classifier, used as a "general" measure for many different nouns</Row>
          </c.Bookrow>
          <c.P>
            The meaning of each classifier is historically related to the noun it classifies, but this connection is not always obvious today. The character <c.Chinese>门</c.Chinese> <b>mén</b> <i>door</i>, <i>portal</i> is probably used for academic disciplines because students would go to the <i>door</i> of the teacher; to <i>start studying a subject</i> is still called <i>entering the door</i> in modern Chinese. A <i>spread</i> of paper conjures up the image of paper manufacturing. But there is little historical support for such interpretations – at best, they are memory aids that can help us remember the correct classifier for each noun.
          </c.P>
          <c.P>
            In modern spoken Chinese, <c.Chinese>个</c.Chinese> <b>ge̊</b> is becoming the all-purpose classifier, gradually replacing all others. Chinese people will understand you even if you don't use anything else. But your Chinese will sound more authentic if you use the correct specialized classifier in each case; some classifiers, such as <c.Chinese>本</c.Chinese> <b>běn</b> and <c.Chinese>门</c.Chinese> <b>mén</b> <i>above</i>, are still so common that replacing them with <c.Chinese>个</c.Chinese> <b>ge̊</b> <i>sounds</i> odd to a native speaker.
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>一本书</c.Char><c.Pinyin>yì běn shū</c.Pinyin><c.Meaning>a book OR one book (ONE ROOT-OF BOOK)</c.Meaning></Row>
            <Row><c.Char>这本书</c.Char><c.Pinyin>zhè běn shū</c.Pinyin><c.Meaning>this book (THIS ROOT-OF BOOK)</c.Meaning></Row>
            <Row><c.Char>那本书</c.Char><c.Pinyin>nà běn shū</c.Pinyin><c.Meaning>that book (THAT ROOT-OF BOOK)</c.Meaning></Row>
            <Row><c.Char>三门语言</c.Char><c.Pinyin>sān mén yǔyán</c.Pinyin><c.Meaning>(THREE PORTAL-OF LANGUAGE)</c.Meaning></Row>
            <Row><c.Char>四名学生</c.Char><c.Pinyin>sì míng xuéshe̊ng</c.Pinyin><c.Meaning>four students (FOUR NAME-OF STUDENT)</c.Meaning></Row>
            <Row><c.Char>一个人</c.Char><c.Pinyin>yí ge̊ rén</c.Pinyin><c.Meaning>a person (ONE ITEM-OF PERSON)</c.Meaning></Row>
            <Row><c.Char>这个人</c.Char><c.Pinyin>zhè ge̊ rén</c.Pinyin><c.Meaning>this person (THIS ITEM-OF PERSON)</c.Meaning></Row>
            <Row><c.Char>那个人</c.Char><c.Pinyin>nà ge̊ rén</c.Pinyin><c.Meaning>that person (THAT ITEM-OF PERSON)</c.Meaning></Row>
            <Row><c.Char>一个姓</c.Char><c.Pinyin>yí ge̊ xìng</c.Pinyin><c.Meaning>a family name (ONE ITEM-OF FAMILY-NAME)</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            When the demonstratives <c.Chinese>这</c.Chinese> and <c.Chinese>那</c.Chinese> are followed immediately by a classifier, they are often pronounced <b>zhèi</b> and <b>nèi</b>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>这个姓名</c.Char><c.Pinyin>zhèi ge̊ xìngmíng</c.Pinyin><c.Meaning>this name (THIS ITEM-OF NAME)</c.Meaning></Row>
            <Row><c.Char>那个名字</c.Char><c.Pinyin>nèi ge̊ míngzi̊</c.Pinyin><c.Meaning>that given name (THAT ITEM-OF GIVEN-NAME)</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            Both pronunciations are listed as correct in most dictionaries. The colloquial forms <b>zhèi</b> and <b>nèi</b> may originally have been shortened versions of the more formal <c.Chinese>这一</c.Chinese> <b>zhè yī</b> and <c.Chinese>那一</c.Chinese> <b>nà yī</b>. There are also some regional differences: <b>zhèi</b> and <b>nèi</b> seem to be more common in Beijing and northern China, while southerners prefer <b>zhè</b> and <b>nà</b>.
          </c.P>
          <c.P>
            Some classifiers have English equivalents depending on context. In English, for example, <i>a paper</i> means <i>a newspaper</i>; if we mean <i>the white thing you write on</i>, we say a "piece" or "sheet" of paper. In Chinese, the corresponding classifier is <c.Chinese>张</c.Chinese> <b>zhāng</b>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>一张纸</c.Char><c.Pinyin>yì zhāng zhǐ</c.Pinyin><c.Meaning>a sheet (piece) of paper</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            But <c.Chinese>张</c.Chinese> <b>zhang</b> is also used for many other flat things, such as <i>bed</i> and <i>table</i>, where English does not use any classifier.
          </c.P>
          <c.P>
            So now that we know what classifiers are, when do we actually need to use them? In Chinese, just as in English, there is a difference between talking about <i>a thing in general</i> and <i>a specific item</i>. If we are looking at a box and someone asks what is inside, we can say:
          </c.P>
          {example(1, { audio: true })}
          <c.P>
            But if we point at a <i>particular</i> book, we need to use a classifier:
          </c.P>
          {example(2, { audio: true })}
          <c.P>The same goes for all nouns when we talk about specific instances:</c.P>
          {example(3, { audio: true })}
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>
            Many words appear as both classifiers and nouns. <c.P>门</c.P> <b>mén</b>, for example, is used both as a classifier for nouns like <i>language</i> and as a noun meaning <i>door</i>, which can take the classifier <c.Chinese>个</c.Chinese> <b>ge̊</b>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>一个门</c.Char><c.Pinyin>yí ge̊ mén</c.Pinyin><c.Meaning>a door (ONE ITEM-OF DOOR)</c.Meaning></Row>
          </c.Bookrow>
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
          <c.P>The classifier <c.Chinese>些</c.Chinese> <b>xiē</b> <i>a few</i> is used with all nouns in the plural:</c.P>
          {example(8, { audio: true })}
          {example(9, { audio: true })}
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
            Just as in English, it is often possible – even necessary – to leave out the noun that a classifier refers to:
          </c.P>
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          {grammarTitle()}
          <c.P>
            The character <c.Chinese>个</c.Chinese> is not only a classifier; it can also appear in other words. In this lesson, for example, we have the expression <c.Chinese>我个人</c.Chinese> <b>wǒ gèrén</b> <i>I personally</i> (I PARTICULAR-PERSON):
          </c.P>
          {example(12, { audio: true })}
          <c.P>
            Here, <c.Chinese>个</c.Chinese> has Tone 4; but as a measure word, it has neutral tone.
          </c.P>
          {grammarTitle()}
          <c.P>
            In English, we can't ask someone else to "want" something, but in Chinese it can also mean <i>take, choose, buy</i>:
          </c.P>
          {example(13, { audio: true })}
          {grammarTitle()}
          <c.P>
            <c.Chinese>先</c.Chinese> <b>xiān</b> means <i>first</i>, but it is often used in polite expressions as a kind of "softener"; we have already seen an example in the expression <c.Chinese>我先走</c.Chinese> <b>wǒ xiān zǒu</b> <i>ok, I'm off</i>. In this episode, Marvin uses it to take the edge off his refusal to buy Zhang Youxin's book, which might otherwise have been seen as a bit too harsh:
          </c.P>
          {example(14, { audio: true })}
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
