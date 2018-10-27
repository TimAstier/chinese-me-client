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
            text="Talking about occupations."
          />
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            <c.Chinese>在</c.Chinese> <b>zài</b> is a verb which means <i>to be in</i>, <i>to be at</i> and so on:
          </c.P>
          {example(1, { audio: true })}
          <c.P>
            It can also mean <i>be here</i>, <i>be here</i>, <i>be around</i>, for example when you want to ask for somebody at an office or reception desk:
          </c.P>
          {example(2, { audio: true })}
          <c.P>
            Most commonly, however, <c.Chinese>在</c.Chinese> <b>zài</b> is used to specify location, replacing English prepositions such as <i>at</i> and <i>in</i>:
          </c.P>
          {example(3, { audio: true })}
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
          {grammarTitle()}
          <c.P>
            We have already learned how to use the particle <c.Chinese>的</c.Chinese> <b>de̊.1</b> to modify nouns in several ways, for example to express possession, and after stative verbs (the equivalent of English adjectives):
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Chinese>我的书</c.Chinese><b>wǒ de̊.1 shū</b><i>my book</i> (I-'S BOOK)</Row>
            <br />
            <Row><c.Chinese>好的人</c.Chinese><b>hǎo de̊.1 rén</b><i>nice people</i> (GOOD-Y PERSON)</Row>
          </c.Bookrow>
          <c.P>
            But the use of <b>de̊.1</b> is much more general. In English, we use many different constructions to modify nouns. (You will remember that “modify” simply means “say something about”; the noun being modified is called the <i>head noun</i>.) As an example, let us look at the noun <i>book</i>. We can add a possessive pronoun to state whom the book belongs to: <i>her</i> book. We can use an adjective to say what it is like: an <i>expensive</i> book. We can modify it using another noun: <i>this year‘s</i> book. We can even add a whole clause to describe it in more detail: the book <i>that I read last year</i>.
          </c.P>
          <c.P>
            Chinese grammar is more straightforward: all four examples above can be translated using the particle <b>de̊.1</b>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <span>SHE DE̊.1 BOOK</span>
            <br />
            <span>EXPENSIVE DE̊.1 BOOK</span>
            <br />
            <span>THIS YEAR DE̊.1 BOOK</span>
            <br />
            <span>I READ LAST YEAR DE̊.1 BOOK</span>
          </c.Bookrow>
          <c.P>
            Whatever comes before <b>de̊.1</b> modifies the head noun coming after.
          </c.P>
          <c.P>
            To recap, <b>de̊.1</b> can be used for the genitive, signalling <i>possession</i>:
          </c.P>
          {example(5, { audio: true })}
          <c.P>
            It is always used when the head noun is modified by a stative verb:
          </c.P>
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          <c.P>
            It can even modify the head noun with a whole phrase:
          </c.P>
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          <c.P>
            In the literal translations, we have glossed <b>de̊.1</b> with a hyphenated <i>-Y</i> to try to give a sense of how it helps "modify" the nouns.
          </c.P>
          <c.P>
            The phrases with <b>de̊.1</b> above can of course form part of complete sentences:
          </c.P>
          {example(11, { audio: true })}
          <c.P>
            Note the difference between this pattern using <b>de̊.1</b> and the similar pattern with <b>de̊.3</b>. <c.Chinese>他英文说得很好</c.Chinese> states that he <i>speaks</i> well, while pattern 10:11 says that the <i>English</i> is good.
          </c.P>
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
            <c.Chinese>的</c.Chinese> <b>de̊.1</b> can appear without a head noun or pronoun, for example in <i>mine</i>, <i>yours</i>, <i>hers</i>:
          </c.P>
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          <c.P>
            Just as in English, the head noun can also be omitted when it is understood implicitly, from the context:
          </c.P>
          {example(14, { audio: true })}
          {example(15, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Practice</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            In fact, in the examples above <i>mine</i> or <i>the Chinese one</i> can refer to whatever the speakers have just been talking about, whether a book, a dress or a bicycle. This is an example of a grammatical phenomenon called <i>nominalization</i> where a whole phrase is, grammatically speaking, transformed into a noun. In English, we often have to translate this using phrases like <i>the one</i>, <i>that which</i> or <i>what</i>:
          </c.P>
          {example(16, { audio: true })}
          <c.P>
            The <c.Chinese>是... 的</c.Chinese> <b>shì... de̊.1</b> construction is often used to provide extra emphasis to a statement. As an example, compare the following two sentences:
          </c.P>
          <c.Example
            audio={false}
            chinese="他学中文。"
            pinyin="Tā xué zhōngwén."
            translation="He is learning Chinese"
          />
          {example(17, { audio: true })}
          <c.P>
            The first example is a simple statement; the second emphasises that it is Chinese – as opposed to some other language – that is being discussed. As we can see in the example, the English translation can be rephrased using <i>it is... that</i> to give the same kind of nuance.
          </c.P>
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
          {grammarTitle()}
          <c.P>
            <c.Chinese>的</c.Chinese> <b>de̊.1</b> is often optional, and the rules for when to use it are not always clear-cut. As we have seen in an earlier lesson, we can skip it after personal pronouns: saying <c.Chinese>我朋友</c.Chinese> <b>wǒ péngyo̊u</b>, without <b>de̊.1</b>, is just as common as saying <c.Chinese>我的朋友</c.Chinese> <b>wǒ de̊.1 péngyo̊u</b>.
          </c.P>
          <c.P>
            In general, we can say that the more "natural" or closely associated a word becomes with a noun, the less we need <c.Chinese>的</c.Chinese> <b>de̊.1</b>. Just as in English, this creates a nuance in meaning:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>一个美国公司</c.Char><c.Pinyin>yíge̊ měiguó gōngsī</c.Pinyin><c.Meaning>an American company</c.Meaning></Row>
            <Row><c.Char>一个美国的公司</c.Char><c.Pinyin>yíge̊ měiguó de̊.1 gōngsī</c.Pinyin><c.Meaning>a company from America</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            You sometimes cannot skip <c.Chinese>的</c.Chinese> <b>de̊.1</b> because there is already a fixed concept or word with a different meaning:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>一个大的人</c.Char><c.Pinyin>yíge̊ dà de̊.1 rén</c.Pinyin><c.Meaning>a big person</c.Meaning></Row>
            <Row><c.Char>一个大人</c.Char><c.Pinyin>yíge̊ dàrén</c.Pinyin><c.Meaning>an adult</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            But often, the two variants differ only in degree:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>一个好的人</c.Char><c.Pinyin>yíge̊ hǎo de̊.1 rén</c.Pinyin><c.Meaning>a good person, a person who is good</c.Meaning></Row>
            <Row><c.Char>一个好人</c.Char><c.Pinyin>yíge̊ hǎorén</c.Pinyin><c.Meaning>a good person, a paragon</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            Chinese speakers also try to avoid using more than one <c.Chinese>的</c.Chinese> <b>de̊.1</b> in a single sentence. It is possible to say:
          </c.P>
          <c.Example
            audio={false}
            chinese="李玉的朋友的中文很好。"
            pinyin="Lǐ Yù de̊.1 péngyo̊u de̊.1 zhōngwén hěn hǎo."
            translation="Li Yu's friend's Chinese is good."
          />
          <c.P>
            But sentences like this are felt to be a bit clumsy (in fact, this is also the case in English, as we can see from the translation). Usually, Chinese speakers will rephrase a sentence like this to avoid repeating <c.Chinese>的</c.Chinese> <b>de̊.1</b>, for example by using a Topic-Comment construction:
          </c.P>
          {example(18, { audio: true })}
          {grammarTitle()}
          <c.P>
            Many Chinese verbs can be reduplicated – repeated – with neutralized tone to give the meaning <i>do a little bit of something</i> or <i>do something tentatively</i>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Chinese>看</c.Chinese>&nbsp;<b>kàn</b>&nbsp;<i>look</i>&nbsp;->&nbsp;<c.Chinese>看看</c.Chinese>&nbsp;<b>kànkån</b>&nbsp;<i>have a look</i></Row>
            <br />
            <Row><c.Chinese>想</c.Chinese>&nbsp;<b>xiǎng</b>&nbsp;<i>look</i>&nbsp;->&nbsp;<c.Chinese>想想</c.Chinese>&nbsp;<b>xiǎngxiång</b>&nbsp;<i>think about, consider</i></Row>
            <br />
            <Row><c.Chinese>说</c.Chinese>&nbsp;<b>shuō</b>&nbsp;<i>say</i>&nbsp;->&nbsp;<c.Chinese>说说</c.Chinese>&nbsp;<b>shuōshuo̊</b>&nbsp;<i>say something, speak a little</i></Row>
          </c.Bookrow>
          <c.P>
            Sometimes, <c.Chinese>一</c.Chinese> <i>one</i> is inserted in the middle, also with neutralized tone:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Chinese>看一看</c.Chinese>&nbsp;<b>kànyi̊kån</b>&nbsp;<i>have a look</i></Row>
            <br />
            <Row><c.Chinese>想一想</c.Chinese>&nbsp;<b>xiǎngyi̊xiång</b>&nbsp;<i>think about, consider</i></Row>
            <br />
            <Row><c.Chinese>说一说</c.Chinese>&nbsp;<b>shuōyi̊shuo̊</b>&nbsp;<i>say something, speak a little</i></Row>
          </c.Bookrow>
          <c.P>
            As you may already have figured out, this is another example of <i>aspect</i> in Chinese. Aspect describes <i>how</i> an action is seen in time; reduplication of verbs signals <i>delimitative</i> aspect, that something happens a <i>little</i> or <i>for a short while</i>.
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
