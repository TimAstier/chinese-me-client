import React, { Component } from 'react';
import { bookComponents as c } from '../.';
import { Img } from '../Shared';
import styled from 'styled-components';
// import propTypes from 'prop-types';

const Wrapper = styled.div`
  h1 {
    font-size: 34px;
    font-style: bold;
    font-family: 'Cambria';
    color: #C0504D;
    text-align: center;
  },
  h2 {
    font-size: 28px;
    font-style: bold;
    font-family: 'Cambria';
    margin-bottom: 30px;
    text-align: center;
  },
  h3 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 32px;
    font-style: bold;
    font-family: 'Cambria';
    color: black;
  },
  h4 {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 24px;
    font-style: bold;
    font-family: 'Cambria';
    color: black;
  }
`;

// TODO: author, createdDate, updatedDate

class Article extends Component {
  render() {
    return (
      <Wrapper>
        <c.Bookrow marginBottom={15} center>
          <h1>The ultimate Chinese flashcard system</h1>
        </c.Bookrow>
        <c.Bookrow marginBottom={30} center>
          <h2>How to learn characters, words and grammar in the most efficient way</h2>
        </c.Bookrow>
        <c.P>
          To become fluent in Chinese, you need to memorize hundreds of sentence patterns, thousands of characters, and perhaps tens of thousands of unfamiliar words and expressions. Many students of Chinese use flashcards — or the electronic equivalent, spaced repetition software — as a memorization tool.
        </c.P>
        <c.P>
          Cleverly used, flashcards will increase your learning speed manifold, and can even help you master native pronunciation — provided that you dedicate a few minutes per day to review your decks. But if you’re going to spend this time to take your Chinese to the next level, you want to do it well. Just putting Chinese on one side and English on the other for everything you learn is not very effective.
        </c.P>
        <c.Bookrow center>
          <Img
            name="three_decks.png"
            caption="Three basic card decks cover the whole language."
          />
        </c.Bookrow>
        <c.P>
          Different items demand different review activities. For this reason, I recommend having separate card types for characters, words and grammar patterns. Below, I will discuss each of these card types and how to actually use them for review. But before we go into specifics, let me make some general observations.
        </c.P>
        <c.Bookrow center>
          <h3>General flashcard tips</h3>
        </c.Bookrow>
        <c.Bookrow>
          <h4>Not everything is worth learning</h4>
        </c.Bookrow>
        <c.P>
          Flashcards are for things that you definitely want to remember. Before you put anything on a card, you should ask yourself if it is really worth the effort — maybe you just need to look it up this one time, in order to understand the current text or conversation?
        </c.P>
        <c.P>
          As an intermediate or advanced student, you will often encounter words and expressions that are too rare to be worth spending time on. But even beginners need to be on their guard against useless vocabulary items. An early chapter of my first Chinese course featured the character <c.Chinese>咪</c.Chinese> <i>miaow</i>, which I diligently copied to a flashcard and committed to memory. This was more than thirty years ago. I have never used it since.
        </c.P>
        <c.Bookrow center>
          <Img
            name="useless_flashcard.png"
            caption="A great flashcard for a useless vocabulary item."
          />
        </c.Bookrow>
        <c.Bookrow>
          <h4>There are different kinds of knowledge</h4>
        </c.Bookrow>
        <c.P>
          “Knowing” something in Chinese can mean several different things. When we design our decks, we need to be clear on the “correct” answer that a card is asking for: are we testing pronunciation, writing or understanding, for example? In the examples below, the “correct” answer(s) will be in blue color.
        </c.P>
        <c.P>
          There is also a difference between “being able to recognize it when you hear it or see it” — <i>passive recall</i> — and “being able to come up with it when you need it” — <i>active recall</i>. Passive recall is the ability to translate <i>from</i> Chinese whereas active recall means translating <i>to</i> Chinese. Just because you can do the one doesn’t necessarily mean you can do the other; active recall is usually harder.
        </c.P>
        <c.Bookrow center>
          <Img
            name="active_vs_passive.png"
            caption="Two-way cards practice passive or active recall depending on which way you go."
          />
        </c.Bookrow>
        <c.Bookrow>
          <h4>Cards are more than just text</h4>
        </c.Bookrow>
        <c.P>
          By using different fonts and styles for each component of a flashcard, your make it easier to read; your eyes don’t have to spend time finding the right text when you flip the card. This makes review faster. I use italics for English and bold for pīnyīn, and always place them in the same position on each card.
        </c.P>
        <c.P>
          Audio is an underutilized flashcard tool. After all, most people who study Chinese want to speak, not just read! Adding audio to a card has two benefits: it activates auditory memory, which makes it easier to remember the content that you are trying to learn; and you automatically practice pronunciation with every review of vocabulary or grammar.
        </c.P>
        <c.P>
          You should set the audio to play automatically, so that you hear the pronunciation every time you flip a card. Finding the right audio files is easy. If you are using a textbook, it probably comes with audio files that you can copy directly. Or you can ask your teacher or other native speaker to record vocabulary and sample sentences directly in your cards. If you have the time, you can even download sound clips from volunteer sites like <a href="https://www.forvo.com">Forvo</a>; having many different Chinese voices on your cards helps improve pronunciation and oral comprehension.
        </c.P>
        <c.Bookrow  center>
          <h3>Flashcards for vocabulary</h3>
        </c.Bookrow>
        <c.P>
          Now, let us see how we can apply the principles above to memorizing vocabulary: words and expressions. This is what most people use their flashcard systems for.
        </c.P>
        <c.P>
          When we learn vocabulary, we need to practice both passive and active recall: passive to understand what others are saying, and active so that we are able to come up with the right word when we need it. The good news is that going both ways actually speeds up learning. It might seem like twice the work, but memorizing vocabulary flashcards in both directions — from English to Chinese and vice versa — is easier than just going one way.
        </c.P>
        <c.P>
          So what should you put on a vocabulary card? I find three formats especially useful for words and expressions: simple text, cloze deletions, and pictures.
        </c.P>
        <c.Bookrow>
          <h4>Text-only vocabulary cards</h4>
        </c.Bookrow>
        <c.P>
          The simplest type of card is simply a two-way card with English text on one side and Chinese on the other. In order to test both passive and active knowledge without the help of pīnyīn, I make a slightly different card for each direction:
        </c.P>
        <c.Bookrow center>
          <Img
            name="text_only_passive_card.png"
            caption="Passive recall version of a vocabulary card."
          />
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="text_only_active_card.png"
            caption="Active recall version of the same card."
          />
        </c.Bookrow>
        <c.P>
          In other words, I have one card where I look at the characters for a word and quiz myself on meaning and pronunciation, and another card where I test active recall of characters and pronunciation.
        </c.P>
        <c.P>
          No matter which format you choose for a vocabulary card, remember to include all relevant information. Nouns that take other classifiers than the all-purpose <c.Chinese>个</c.Chinese> should always have the correct one listed, as in the illustration above.
        </c.P>
        <c.Bookrow>
          <h4>Cloze deletion vocabulary cards</h4>
        </c.Bookrow>
        <c.P>
          The second format for vocabulary cards provides context. You remember a word more easily if you can associate it to a particular setting, a person who used it, or a text where it appeared. In addition, most words enter into habitual constructions with other words. It often makes more sense to learn a phrase like <i>relatively simple</i> as a single unit than to study the words <i>relatively</i> and <i>simple</i> separately, even if both these words are common and used in many other constructions. Memorizing expressions where a word is <i>actually</i> used is more valuable than just learning it in isolation.
        </c.P>
        <c.P>
          Perhaps most importantly, context makes cards less ambiguous. Flashcards only work well when the correct answer is simple and straightforward, so that you know exactly what is being asked for. But very few words are limited to a single meaning. In English, <i>chair</i> can be a noun that you sit on, or a verb for hosting a meeting; <i>table</i> can mean <i>array of rows and columns</i>, <i>flat object with four legs</i>, or <i>something you do to a motion at a conference</i>.
        </c.P>
        <c.P>
          Whenever there is a risk of ambiguity, I make separate cards with typical phrases that exemplify each meaning of the word. The Chinese phrase is included as a hint, with the word being asked for indicated by a blank — this is called a <i>cloze deletion</i>. Let us take the Chinese word <c.Chinese>意思</c.Chinese> as an illustration. A good dictionary contains at least half a dozen distinct explanations, not including idiomatic constructions like <c.Chinese>小意思</c.Chinese> and <c.Chinese>不好意思</c.Chinese>. If I were to write just “<c.Chinese>意思</c.Chinese>” on one side, I would have no idea about which meaning was being asked for. Instead, I use a cloze deletion like this:
        </c.P>
        <c.Bookrow center>
          <Img
            name="cloze_deletion_active.png"
            caption="The context of a cloze deletion helps avoid ambiguity on the active recall card."
          />
        </c.Bookrow>
        <c.P>
          As you can see, the vocabulary item is highlighted on the back of the card, so that you can check both characters and pīnyīn. The passive card has a slightly different format, but also allows you to practice pronunciation:
        </c.P>
        <c.Bookrow center>
          <Img
            name="cloze_deletion_passive.png"
            caption="The vocabulary item is highlighted on the passive card as well, but no cloze deletion is necessary here."
          />
        </c.Bookrow>
        <c.P>
          No matter if I am looking at the passive or active card, I know that the correct answer is the meaning of the underlined word in the specific context given. As long as I can recall the correct translation, I will be able to answer correctly and never have to spend mental energy thinking about what I’m being asked for.
        </c.P>
        <c.P>
          For other meanings of the word <c.Chinese>意思</c.Chinese>, I make separate cards containing similar cloze deletion sentences :
        </c.P>
        <c.Bookrow>
          <c.Ul>
            <li><c.Chinese>你有意思去吗？</c.Chinese>&lt;-&gt; Would you like to go? <c.Chinese>你有_ _ 去吗？</c.Chinese></li>
            <li><c.Chinese>这个地方没意思。</c.Chinese> &lt;-&gt; This place is dull. <c.Chinese>这个地方没_ _ 。</c.Chinese></li>
          </c.Ul>
        </c.Bookrow>
        <c.Bookrow>
          <h4>Picture vocabulary cards</h4>
        </c.Bookrow>
        <c.P>
          My third vocabulary card format replaces English pictures. Pictures are useful for concrete, specific words like <i>apple</i> and <i>chopstick</i>, because you learn to think of the Chinese word as soon as you see the object, rather than having to go via English. For this reason, some people advocate doing away with English entirely, that is, using nothing but pictures in the whole deck. I think this is going a bit too far; for more abstract concepts, picture cards often become too ambiguous.
        </c.P>
        <c.P>
          But pictures have an even more important use than avoiding the detour through English; some words are so culture-specific that translation is almost meaningless. An English expression like <i>filial piety</i>, for example, is not very helpful for understanding the Chinese concept of <c.Chinese>孝顺</c.Chinese>. The picture below of <i>a mother taking care of her young son who returns the favor when she has grown old</i> is a much more concrete representation of this abstract philosophical concept:
        </c.P>
        <c.Bookrow center>
          <Img
            name="filial_piety_card.png"
            caption="A picture illustrating one of the most important social concepts in Chinese culture."
          />
        </c.Bookrow>
        <c.P>
          Pictures can also be handy when we come across objects lacking a direct English translation. Learning that something is called <i>antithetical couplet</i> in English, or using a long explanation like <i>perforated tray traditionally used to serve tea</i>, won’t really help you understand what is being talked about. Pictures are much clearer:
        </c.P>
        <c.Bookrow center>
          <Img
            name="antithetical_couplet_card.png"
            caption="The “antithetical couplet” is one of the most common sights in China."
          />
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="cha_hai_card.png"
            caption="Smoother than writing “perforated tray traditionally used to serve tea”."
          />
        </c.Bookrow>
        <c.P>
          Other things that are hard to translate include <i>colors</i>, <i>monuments</i>, and <i>culinary dishes</i> such as the poetically named <i>ants climbing a tree</i>:
        </c.P>
        <c.Bookrow center>
          <Img
            name="mayi_shang_shu_card.png"
            caption="Glass noodles with chili and minced meat."
          />
        </c.Bookrow>
        <c.P>The English translation is of little use if you want to order this dish in a restaurant. Even if you listed all the ingredients in English, you still wouldn’t recognize it. A picture is worth a thousand words.</c.P>
        <c.Bookrow  center>
          <h3>Flashcards for characters</h3>
        </c.Bookrow>
        <c.P>
          Characters need to be reviewed separately from words. “Knowing” a character means being able to pronounce it, write it using the correct stroke order, and understand how it contributes meaning to words. To meet these objectives, character cards have a different design from the three types of vocabulary card.
        </c.P>
        <c.P>
          On the front is the character and its stroke order. On the back, I provide pronunciation, meaning, and a list of one or more sample words where the character appears. In other words: looking at the front of the card, I ask myself to recall pronunciation and meaning, with the examples providing context for how the character fits into words; looking at the back, I test stroke order.
        </c.P>
        <c.Bookrow center>
          <Img
            name="character_card.png"
            caption="A single two-way card covers meaning, pronunciation and stroke order."
          />
        </c.Bookrow>
        <c.P>
          There is no need to make a separate card for each meaning of a character, or to remember every example of a word where a certain character appears. Words are basic units of communication, so we have to master every meaning of a word in context. Characters are just building blocks. Like words, they usually have multiple interpretations, but meaning is useful only to the extent that it helps us memorize words more easily.
        </c.P>
        <c.Bookrow  center>
          <h3>Flashcards for grammar</h3>
        </c.Bookrow>
        <c.P>
          Flashcards for patterns have English on the front and Chinese on the back. I test them going one way only, <i>from</i> English <i>to</i> Chinese, because the other way is usually so easy that it just becomes a waste of time. Underneath the pattern sentence, I copy in the underlying theory — taken from a grammar book, lecture notes or stuff I have found online — so that I can immediately review my grammar knowledge if I can’t recall the pattern correctly.
        </c.P>
        <c.Bookrow center>
          <Img
            name="grammar_card.png"
            caption="Once the example sentences are in the deck, you can throw away your grammar book."
          />
        </c.Bookrow>
        <c.P>
          When you make grammar cards, choose short patterns containing familiar words. Long sentences and obscure vocabulary provide so many possibilities for error that the cards become too difficult. Use the simplest phrases you can find as long as they illustrate the pattern you are learning.
        </c.P>
        <c.P>
          Just as with words, adding audio speeds up learning because it helps you internalize the grammatical structure of your sentence patterns. But there is another benefit: by adding audio to examples that you are going to review over and over again, you practice the correct stress and intonation of entire sentences.
        </c.P>
        <c.Bookrow  center>
          <h3>The Chinese language in one handy review package</h3>
        </c.Bookrow>
        <c.P>
          The flashcard system in this article is a comprehensive tool which will keep everything you learn — characters, words, pronunciation, grammar patterns, even stress and intonation — at the tip of your fingertips. If you commit every item of worthwhile knowledge to a flashcard, you avoid the time waste of forgetting things that you have already spent a lot of time memorizing. I am sure you will make your own custom adaptations based on personal preferences. Please let me know if you have ideas that can help all of us use flashcards even more effectively to learn Chinese!
        </c.P>
      </Wrapper>
    );
  }
}

Article.propTypes = {};

export default Article;
