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
            text="Talking about places you have been to."
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            We have earlier seen that the syllable <b>er</b> can be added to many other syllables to create new words, for example:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Chinese>这</c.Chinese>&nbsp;<b>zhè</b>&nbsp;<i>this</i>&nbsp;->&nbsp;<c.Chinese>这儿</c.Chinese>&nbsp;<b>zhèr</b>&nbsp;<i>here</i></Row>
            <br />
            <Row><c.Chinese>那</c.Chinese>&nbsp;<b>nà</b>&nbsp;<i>that</i>&nbsp;->&nbsp;<c.Chinese>那儿</c.Chinese>&nbsp;<b>nàr</b>&nbsp;<i>there</i></Row>
          </c.Bookrow>
          <c.P>
            In this episode, we encounter a word where both the pronunciation and the tone on the original syllable changes:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Chinese>一会儿</c.Chinese>&nbsp;<b>yìhuír</b>&nbsp;<i>a moment, in a moment</i></Row>
          </c.Bookrow>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>
            In this Episode, we encounter one of the most common grammatical particles in Chinese, <c.Chinese>了</c.Chinese> <b>le̊.1.</b> We denote it with the number <i>1</i> in pīnyīn, to avoid confusion with an another grammatical particle written with the same character and pronounced the same way.
          </c.P>
          <c.P>
            The most common and easily understood use of <c.Chinese>了</c.Chinese> <b>le̊.1</b> is to signal that an event is to be seen as <i>completed</i>. As an example, consider the phrase:
          </c.P>
          <c.Bookrow flexDirection="column">
            <c.Char>她看那本书。</c.Char>
            <b>Tā kàn nèi běn shū.</b>
          </c.Bookrow>
          <c.P>
            Depending on the context, this can mean <i>she reads that book, she is reading that book, she was reading that book, when she has read that book.</i> We have no information as to whether or not the reading is finished, or has even started. Adding the particle <c.Chinese>了</c.Chinese> <b>le̊.1</b> signals that the action is to be seen as completed:
          </c.P>
          {example(1, { audio: true })}
          <c.P>
            This sentence would be used in a context where the <i>reading</i> was seen as something already accomplished; in other words, the book is no longer in the process of being read.
          </c.P>
          <c.P>
            <c.Chinese>了</c.Chinese> <b>le̊.1</b> is often used with words like <c.Chinese>已经</c.Chinese> <b>yǐjīng</b> <i>already</i> which in themselves signal completion:
          </c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>
            Since resultative verbs emphasize the accomplishment of an action, they also often appear together with <c.Chinese>了</c.Chinese> <b>le̊.1</b>:
          </c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
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
            The use of <c.Chinese>了</c.Chinese> <b>le̊.1</b> to signal "completion" is in fact a special case of a more general use that linguists call <i>perfective aspect</i>. Just as <c.Chinese>过</c.Chinese> <b>guo̊</b> marks <i>experiential</i> aspect, that something has been experienced at least once, perfective aspect with <c.Chinese>了</c.Chinese> <b>le̊.1</b> signals that an event is to be seen as <i>bounded</i>. When we say that an event is "bounded", we mean that it has clear borders in time: that it happens for a certain amount of time, with a well-defined beginning and end.
          </c.P>
          <c.P>
            If something is "completed", it is of course "bounded": we know that it is no longer ongoing. But an event also becomes bounded if we say that it goes on <i>for a moment</i> or <i>for a little while</i>:
          </c.P>
          {example(6, { audio: true })}
          <c.P>
            The Chinese equivalents of English adjectives are often called <i>stative verbs</i>; they can also have perfective aspect when they are bounded:
          </c.P>
          {example(7, { audio: true })}
          <c.P>
            Here, <i>getting taller</i> is a completed fact quantified by the phrase <c.Chinese>一点</c.Chinese> <b>yìdiǎn</b> <i>a bit, a little</i>.
          </c.P>
          <c.P>
            As with other particles in Chinese, the use of <c.Chinese>了</c.Chinese> <b>le̊.1</b> is often optional and context-dependent. Looking at an example sentence in isolation, two different native speakers might imagine different contexts, and as a consequence come to different conclusions about whether the action is "bounded" or not. This can be frustrating for students of Chinese who would prefer a hard rule to follow. But the use of <c.Chinese>了</c.Chinese> <b>le̊.1</b> is not arbitrary: some sentences are more likely than others to contain it. The sentences above, for example, are clearly in perfective aspect: they are completed, or bounded, so we would usually expect to find <c.Chinese>了</c.Chinese> <b>le̊.1 </b>in them.
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
          <c.P>
            Conversely, there are some cases where <c.Chinese>了</c.Chinese> <b>le̊.1</b> cannot be used.
          </c.P>
          {grammarTitle()}
          <c.P>
            Since <c.Chinese>了</c.Chinese> <b>le̊.1</b> signals <i>boundedness</i>, we can never use it with verbs such as <c.Chinese>觉得</c.Chinese> <b>juéde̊</b> <i>feel, believe</i>, which describe inherently unbounded activities. In English, we can use <i>believe</i> to describe a bounded event, for example <i>she believed for a moment that she was going to fall off the train</i>. But in Chinese we would
            have to replace <c.Chinese>觉得</c.Chinese> <b>juéde̊</b> with another verb. In other words, in Chinese it would be absurd to talk about "completing" the action of "feeling" or "believing". There is just no way to make <c.Chinese>觉得</c.Chinese> <b>juéde̊</b> bounded, so it can never be combined with perfective <c.Chinese>了</c.Chinese> <b>le̊.1</b>.
          </c.P>
          <c.P>
            There are many other inherently bounded verbs which cannot take <c.Chinese>了</c.Chinese> <b>le̊.1</b>:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>是</c.Char><c.Pinyin>shì</c.Pinyin><c.Meaning>be</c.Meaning></Row>
            <Row><c.Char>属</c.Char><c.Pinyin>shǔ</c.Pinyin><c.Meaning>belong to</c.Meaning></Row>
            <Row><c.Char>姓</c.Char><c.Pinyin>xìng</c.Pinyin><c.Meaning>be family-named</c.Meaning></Row>
            <Row><c.Char>喜欢</c.Char><c.Pinyin>xǐhuān</c.Pinyin><c.Meaning>like</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            For the same reason, the potential forms of resultative verbs cannot be combined with <c.Chinese>了</c.Chinese> <b>le̊.1</b>. Potential forms are inherently unbounded because they refer to a general ability or inability to do something.
          </c.P>
          <c.P>
            Of course, verbs can have different meanings which may differ with respect to boundedness. <c.Chinese>叫</c.Chinese> <b>jiào</b>, for example can mean either <i>to be first-named</i> or <i>to call</i>. The first sense is inherently unbounded: there are no borders in time for "being named something". But <i>to call</i> somebody can be a bounded action:
          </c.P>
          {example(8, { audio: true })}
          <c.P>
            We also saw above that a verb such as <c.Chinese>想</c.Chinese> <b>xiǎng</b> in the sense of <i>consider</i>, <i>think about</i> can have perfective aspect, because it is something we can do for <i>a week</i> or <i>a little while</i> which makes it bounded.
          </c.P>
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
          <c.P>
            Many students misunderstand the particle <c.Chinese>了</c.Chinese> <b>le̊</b> as being a marker of <i>past tense</i>. A <i>completed</i> action or event is <i>usually</i> in the past, and most of the examples above are translated to past tense in English. But this is just a coincidence: in fact, perfective <i>aspect</i> says nothing about past, present or future <i>tense</i>. Let us look again at pattern 8:1:
          </c.P>
          <c.Example
            audio={false}
            chinese="她看了那本书。"
            pinyin="Tā kàn le̊.1 nèi běn shū."
            translation="She read that book."
            literalTranslation='(SHE READ "COMPLETION" THAT ROOT-OF BOOK.)'
          />
          <c.P>
            The most natural English translation of this sentence is in past tense. But we can easily set it in the future by adding a time word such as <c.Chinese>以后</c.Chinese> <b>yǐhòu</b> <i>after</i>:
          </c.P>
          {example(9, { audio: true })}
          <c.P>
            The original phrase containing <c.Chinese>了</c.Chinese> <b>le̊.1</b> would be unchanged, even if the sentence were referring to the future.
          </c.P>
          <c.P>
            Conversely, a verb like <c.Chinese>喜欢</c.Chinese> <b>xǐhuån</b> <i>like</i> can of course refer to what somebody "liked" in the past, but since this verb is inherently unbounded, it cannot have perfective aspect and so can never appear with <c.Chinese>了</c.Chinese> <b>le̊.1</b>.
          </c.P>
          <c.P>
            To summarize, we can have sentences <i>with</i> <c.Chinese>了</c.Chinese> <b>le̊.1</b> referring to the future, and sentences <i>without</i> <c.Chinese>了</c.Chinese> <b>le̊.1</b> referring to the past. Clearly, <c.Chinese>了</c.Chinese> <b>le̊.1</b> is not a marker of "past tense".
          </c.P>
          <c.P>
            The following example is another example of the difference between <i>tense</i> and <i>aspect</i>:
          </c.P>
          {example(10, { audio: true })}
          <c.P>
            The Chinese sentence asks whether "the action of Colleen's coming has been completed", in other words, if Colleen "is here". Chinese uses perfective <c.Chinese>了</c.Chinese> <b>le̊.1</b> but the most natural English translation is in present tense.
          </c.P>
          <c.P>
            If we had tried to translate this sentence to past tense in English – <i>did Colleen come?</i> – this could be interpreted as asking whether she had <i>been here and left</i>. But this implies a one-off event, so in Chinese, it would be most natural to use the experiential aspect marker <c.Chinese>过</c.Chinese> <b>guo̊</b>:
          </c.P>
          {example(11, { audio: true })}
          <c.P>
            Pattern 8:10 emphasizes that <i>the act of arriving has been completed</i>, in other words if Colleen "is here". Pattern 8:11 emphasizes that Colleen's arrival has happened <i>at least once</i>: that she has "been here". In pattern 8:10, the perfective aspect marker <c.Chinese>了</c.Chinese> <b>le̊.1</b> signals <i>completion</i>; in 8:11, <c.Chinese>过</c.Chinese> <b>guo̊</b> says that something has <i>been experienced</i>. Neither has anything to with tense. The difference may seem subtle, but trying to force Chinese sentences into western grammatical categories is not the best way to develop a native feel for the language.
          </c.P>
          {grammarTitle()}
          <c.P>
            If we want to say something has "not been completed", we use <c.Chinese>没有</c.Chinese> <b>méiyǒu</b> (or just <c.Chinese>没</c.Chinese> <b>méi</b>):
          </c.P>
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          {example(14, { audio: true })}
          <c.P>
            <c.Chinese>了</c.Chinese> <b>le̊.1</b> cannot appear in these negative sentences, because we cannot talk about something being bounded if it has not even happened. The experiential aspect marker <c.Chinese>过</c.Chinese> <b>guo̊</b>, on the other hand, appears <i>together</i> with <c.Chinese>没有</c.Chinese> <b>méiyǒu</b>:
          </c.P>
          {example(15, { audio: true })}
          <c.P>
            This is because <c.Chinese>过</c.Chinese> <b>guo̊</b> has nothing to do with bounding; <c.Chinese>没有</c.Chinese> <b>méiyǒu</b> just tells us that <i>the event of my having the experience of thinking has not been completed</i>.
          </c.P>
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
            If you want to ask if someone has completed something, you have three alternatives. You can use the question particle <c.Chinese>吗</c.Chinese> <b>må</b> or its equivalent <c.Chinese>是不是</c.Chinese> <b>shìbůshi̊</b>:
          </c.P>
          {example(16, { audio: true })}
          <c.P>
            As usual, you can pose the same question by formulating both alternatives. The tone on <c.Chinese>没有</c.Chinese> is neutralized:
          </c.P>
          {example(17, { audio: true })}
          <c.P>
            If you want to ask if someone has <i>ever</i> done something, you can use experiential <c.Chinese>过</c.Chinese> <b>guo̊</b> in the same way:
          </c.P>
          {example(18, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            <i>Translate to Chinese using A-not-A pattern.</i>
          </c.P>
          {grammarTitle()}
          <c.P>
            Another way of trying to "fence in" the meaning of <c.Chinese>了</c.Chinese> <b>le̊.1</b> is by comparing it with the experiential aspect marker <c.Chinese>过</c.Chinese> <b>guo̊</b>. The following pair of sentences illustrate the point:
          </c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>她去了中国。</c.Char><c.Pinyin>Tā qù le̊.1 Zhōngguó.</c.Pinyin><c.Meaning>She went to China.</c.Meaning></Row>
            <Row><c.Char>她去过中国。</c.Char><c.Pinyin>Tā qù guo̊ Zhōngguó.</c.Pinyin><c.Meaning>She has been to China.</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            As the translations indicate, the two sentences convey similar messages, but with different focus. The sentence with <c.Chinese>了</c.Chinese> <b>le̊.1</b> can be imagined as a reply to the question <i>where did she go last year?</i> The <c.Chinese>过</c.Chinese> <b>guo̊</b> sentence would be the natural answer to whether she has <i>ever been</i> to China.
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
          <c.PartTitle name="culture"/>
          <c.P>
            Food has an important position in Chinese social life. It is not uncommon to hear people greet each other by asking:
          </c.P>
          <c.Bookrow>
            <Row><c.Char>你吃了吗？</c.Char><c.Pinyin>Nǐ chī le̊.1 må?</c.Pinyin><c.Meaning>Have you eaten?</c.Meaning></Row>
          </c.Bookrow>
          <c.P>
            You will often hear Chinese parents remind their children to greet adults:
          </c.P>
          <c.Bookrow>
            <Row><c.Char>你叫了吗？</c.Char><c.Pinyin>Nǐ jiào le̊.1 må?</c.Pinyin><c.Meaning>Have you said hello?</c.Meaning></Row>
          </c.Bookrow>
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
