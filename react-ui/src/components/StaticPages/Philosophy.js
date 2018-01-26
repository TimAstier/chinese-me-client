import React, { Component } from 'react';
import { bookComponents as c } from '../.';
import { ScrollableWrapper } from '../.';
import styled from 'styled-components';
// import { Link } from 'react-router';
// import { Row } from '../Shared';

const Title = styled.span`
  font-size: 34px;
  font-style: bold;
  font-family: 'Cambria';
  color: #C0504D;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

class Privacy extends Component {
  render() {
    return (
      <ScrollableWrapper>
        <c.Page>
          <c.Bookrow marginBottom={30} center>
            <H1>
              <Title>Our Philosophy</Title>
            </H1>
          </c.Bookrow>
          <c.PartTitle type="secondary">Chinese isn’t difficult - just different!</c.PartTitle>
          <c.P>Chinese has a reputation for being difficult. This may be because it is so different from western languages: pronunciation, vocabulary, writing system, grammar and even cultural context are all unfamiliar to the beginner. Many textbooks and apps promise to make Chinese “easy”. But what is really needed is an integrated course, based on modern best practices, that specifically addresses each unique challenge of the Chinese language.</c.P>
          <c.PartTitle type="secondary">Pronunciation: Go for native accent</c.PartTitle>
          <c.P>Pronunciation is important in any language. It makes you better at conversation, because if you speak clearly, people understand you more easily and are more willing to talk to you. Perhaps more surprisingly, a native accent will also improve your listening comprehension: as you become aware of the correct way of pronouncing words and phrases, you hear more clearly what other people are saying. This also makes it easier to memorize vocabulary and grammar.</c.P>
          <c.P>In some ways, Chinese pronunciation is easy: for example, syllables are pronounced more distinctly than in many other languages. But acquiring a good accent still takes effort, because Chinese is a tone language with many sounds that are alien to western ears. We will help you take a systematic approach by:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>- Explaining the Chinese sound system in depth.</li>
              <li>- Continuously reinforcing phonetics, phrasing and intonation as you learn vocabulary and grammar.</li>
              <li>- Providing lots of exercises and interactive tools for practice.</li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle type="secondary">Vocabulary: Characters are your friends</c.PartTitle>
          <c.P>In order to master a language, you need to remember a lot of new words. As every experienced language student knows, there are some scientifically proven tools to minimize this effort, such as using a spaced repetition algorithm that reinforces each word before you have the chance to forget it. So we have made all vocabulary in this course available on the web as flashcard decks for the user-friendly Anki program.</c.P>
          <c.P>But in this area, too, Chinese poses special challenges. When we learn a language related to our own, we get many words “for free”: for example, an English speaker will immediately recognize the French word <i>telephone</i>. In Chinese, though, the word for <i>telephone</i> is written using two characters, <c.Chinese>电话</c.Chinese>, rather than our familiar latin alphabet; and it is pronounced <b>diànhuà</b>, which sounds nothing like the English word. No freebies there.</c.P>
          <c.P>
            Fortunately, the Chinese writing system also has some features that make it easier for us to memorize new vocabulary. First, each Chinese character has <i>meaning</i>. In the example above, <c.Chinese>电</c.Chinese> means <i>electricity</i> and <c.Chinese>话</c.Chinese> <i>speech</i>, so <c.Chinese>电话</c.Chinese> means <i>electrical speech</i>. Once we have learned the meaning of an individual character, we will more easily understand and remember other words where this character appears.
          </c.P>
          <c.P>Second, the meaning of each character has a fascinating <i>story</i>. Many characters are based on pictures: <c.Chinese>电</c.Chinese>, <i>electricity</i>, originally meant <i>lightning</i>, and in its oldest form it is actually a pictogram of a thunderbolt under a cloud. We can use this etymology - historical background - as a memory aid.</c.P>
          <c.P>Third, some characters are more frequent than others: the two hundred most common ones make up over fifty percent of a typical text. Frequent characters are easier to remember, because they tend to come back often enough for us to avoid forgetting them. Some characters are also more <i>useful</i> than others because they have more than one meaning, or because they readily combine with other characters to form new words.</c.P>
          <c.P>Fourth, most characters are combinations of more simple ones: <c.Chinese>好</c.Chinese> <i>good</i> is composed of the characters <c.Chinese>女</c.Chinese> <i>woman</i> and <c.Chinese>子</c.Chinese> <i>son</i>. The character <c.Chinese>好</c.Chinese> is very frequent and should be learned early, so we have the opportunity to learn its two component characters with little extra effort.</c.P>
          <c.P>Finally, writing is a traditional <i>art form</i> with deep roots in Chinese philosophy. Most language courses teach only the essentials, such as using correct stroke orders. But learning a bit more about the aesthetics of calligraphy can give you a feel for the characters which makes them easier to memorize.</c.P>
          <c.P>This course will help you build vocabulary in the most efficient way by:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>- Focusing on high-frequency characters.</li>
              <li>- Using their etymology, structure and artistic beauty as memory aids.</li>
              <li>- Systematically combining them into as many new words as possible.</li>
              <li>- Making use of all “freebie” characters that appear as parts of other characters.</li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle type="secondary">Grammar: A genuine feel for the language</c.PartTitle>
          <c.P>
            Chinese grammar is in some ways relatively simple. In English, for example, we often have many different forms for each word: the verb <i>to be</i> becomes <i>am</i>, <i>is</i>, <i>are</i>, <i>was</i> or <i>were</i>. Chinese has no such conjugations - no plurals, no definite or indefinite forms, no tenses. We say that Chinese is an <i>isolating language</i> or that it <i>lacks morphology</i>. This makes it possible to learn Chinese grammar by studying “sentence patterns”; since the language has only one form for each word, we can simply insert new words in each pattern, without having to think about how to modify the words themselves.
          </c.P>
          <c.P>
            On the other hand, the concepts used to analyze western grammar are sometimes not ideal for learning Chinese. In English, for example, it is usually easy to analyze sentences as having a <i>subject</i>, a <i>verb</i> and an <i>object</i>. But many Chinese sentences lack either verb or subject or both. A typical Chinese sentence reads, in direct translation: <i>That magazine, picture very pretty</i>. A possible idiomatic translation would be: <i>That magazine has pretty pictures</i>. But there is no <i>has</i> or other verb in the Chinese sentence, which makes it awkward to explain using familiar western grammatical concepts. It makes more sense to explain the Chinese sentence as a “Topic-Comment” construction: <i>that magazine</i> is the “topic”, what the sentence is about, and the speaker then goes on to “comment” on this topic by adding <i>pictures very pretty</i>. Such phrases are common in Chinese; we say that Chinese is a topic-prominent language. And this is just one of many features that require a new toolkit for western learners:
          </c.P>
          <c.Bookrow>
            <c.Ul>
              <li>- Chinese uses many grammatical function words called particles or <i>“mood words”</i>. These can have straightforward functions such as “changing a statement into a question”, but they often involve subtleties that are more challenging to master.</li>
              <li>- There are no tenses - <i>past, present or future</i> - that define <i>when</i> an action happened. But there are <i>aspects</i> that describe <i>how</i> an action is seen, for example if it is “ongoing” or “completed”.</li>
              <li>- Word classes are less well-defined than those of western languages. In Chinese, it can be difficult to decide whether a word should be considered a noun, verb, adjective or adverb.</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>In this course, we limit our use of grammatical terms and concepts to those that are really helpful in developing an instinctive feel for the Chinese language.</c.P>
          <c.PartTitle type="secondary">Culture: Communication is more than words</c.PartTitle>
          <c.P>When you learn a language, cultural context can be just as important as grammar and vocabulary. This is especially true for Chinese. The cultural differences with the West are large, so you need to familiarize yourself with everything from local table manners to what it means to <b>“sòng”</b> somebody (<i>seeing them off properly</i>). In this course you will learn not just language skills but also how to behave appropriately, make friends and adapt to Chinese society.</c.P>
        </c.Page>
      </ScrollableWrapper>
    );
  }
}

export default Privacy;
