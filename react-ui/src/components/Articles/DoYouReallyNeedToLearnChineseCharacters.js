import React, { Component } from 'react';
import { bookComponents as c, ArticleWrapper } from '../.';
import { Img } from '../Shared';
import TweetEmbed from 'react-tweet-embed';

// TODO: author, createdDate, updatedDate
class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <c.Bookrow marginBottom={15} center>
          <h1>Do you really need to learn Chinese characters?</h1>
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="chinese_characters_cover.png"
          />
        </c.Bookrow>
        <c.P>
          I recently met several students of Chinese who regretted not emphasizing Chinese characters earlier in their studies. Most of them said they had started out wanting to “just speak” Chinese, but now wish they had begun learning the characters at the same time. A few had given up on the language altogether, and realized later that not learning to write was part of the reason they had failed.
        </c.P>
        <c.P>
          That someone would attempt to learn Chinese without learning the writing system seemed strange to me; ever since I started my own Chinese studies, I had assumed that learning Chinese characters was an absolute necessity. So I was a bit taken aback when I looked into this and discovered that more than a few teachers — even some schools and universities —provide courses in beginning Chinese without teaching characters at all. Had I been mistaken all along?
        </c.P>
        <c.P>
          One of the people I talked to mentioned that he understood the importance of characters only when he arrived in China, after realizing how much social interaction today takes place over messaging apps like WeChat. “I thought learning characters was too complicated and I just wanted to practice speaking with Chinese friends”, he said, “but then I discovered that so much happens online these days. Sure, you can send voice messages there, but most of the conversations are in writing, and if you can’t follow those conversations, you have a problem building any sort of relationship with modern Chinese people”.
        </c.P>
        <c.P>
          My own experience echoes this; every single one of my Chinese friends and business relations has WeChat. It’s the main way of sharing information and gossip, making arrangements to go out, even introducing new friends. Without it, you’re completely out of the social loop. In my opinion, this is a really good reason to strive for literacy as early as possible. There are other reasons as well, but before we go into them, let’s look at why some people recommend trying to learn Chinese <i>without</i> characters.
        </c.P>
        <c.Bookrow center>
          <Img
            name="wechat_pinyin_screenshot.png"
            caption="Learn Chinese characters if you don’t want to miss out all the fun!"
          />
        </c.Bookrow>
        <c.Bookrow>
          <h4>Why people learn Chinese without characters</h4>
        </c.Bookrow>
        <c.P>
          Some people skip the characters because of a misunderstanding: they believe that they can write Chinese using pīnyīn. But pīnyīn is a transcription system designed to help people learn pronunciation and write Chinese names in western newspapers and books. Chinese people never use pīnyīn. Never. It’s like thinking you would be able to communicate with English-speaking people by using the international phonetic alphabet:
        </c.P>
        <c.P>
          <i>
            heɪ ˈmɑrvɪn! haʊ ɑr ju ˈduɪŋ? aɪ gɑt fri ˈtɪkəts fɔr ðɪs ɪkˈsaɪtɪŋ ˈkɑnsɜrt wi wɜr ˈtɔkɪŋ əˈbaʊt læst taɪm ænd aɪ wʌz ˈwʌndərɪŋ ɪfju wʊd laɪk tu kʌm wɪð ʌs ɑn ˈsætərdi. hoʊp ju kæn meɪk ɪt!
          </i>
        </c.P>
        <c.P>
          You aren’t going to make many friends by sending them text messages like that.
        </c.P>
        <c.P>
          The reasons teachers put off exposing their students to characters can seem more seductive. Chinese characters look so scary that they might sap the confidence of beginners; perhaps by hiding this complexity, we can avoid overwhelming our students, making it less likely that they give up in the first few months? My own experience is exactly the opposite: when I started studying Chinese, I found the characters both motivating and a huge help for learning the spoken language. In fact, I can’t think of anyone I know with a decent level of spoken Chinese who doesn’t also know how to read characters. In my opinion, skipping the characters is a detour rather than a shortcut.
        </c.P>
        <c.Bookrow center>
          <Img
            name="keep_calm_and_learn_chinese.png"
          />
        </c.Bookrow>
        <c.Bookrow>
          <h4>#1. Learning characters is easier than many people think</h4>
        </c.Bookrow>
        <c.P>
          First of all, not everyone agrees that reading characters is “harder” than reading a phonetic alphabet like English. Chinese kids learn to read books at basically the same age as western toddlers. You can type faster in Chinese than in English, and you can fit much more information in a smaller space. Some studies even show that it is possible to read Chinese characters faster than a phonetic system.
        </c.P>
        <c.P>
          Many of the arguments for characters being “hard” or “difficult to use” come from an age before the advent of digital technologies. In an article called <i><a href="http://pinyin.info/readings/texts/moser.html">Why is Chinese So Damn Hard</a></i> from 1991, David Moser suggests that Chinese characters are responsible for making Chinese difficult to learn. A typical argument goes:
        </c.P>
        <c.P>
          <i>
            Even looking up a word in the dictionary is complicated. […] When I was in Taiwan, I heard that they sometimes held dictionary look-up contests in the junior high schools. […] I carried around a little dictionary to look up unfamiliar characters in, but it’s almost impossible to look up a character in a Chinese dictionary while walking along a crowded street.
          </i>
        </c.P>
        <c.P>
          Nowadays, thanks to digital dictionaries, you can look up a character in seconds.
        </c.P>
        <Img
          src="https://www.pleco.com/wp-content/uploads/2016/02/phones@2x.png"
          caption="Digital dictionaries are just too convenient (image from pleco.com)"
          maxWidth={300}
        />
        <c.Bookrow>
          <h4>#2. Characters are interesting and fun</h4>
        </c.Bookrow>
        <c.P>
          Second, the exotic beauty of Chinese characters can be a strong attraction for students. In fact, many people say that the characters are the reason they became interested in the language in the first place. And the more you learn, the more fun it is: calligraphy is an ancient Chinese art form based on ancient esthetic and philosophical ideals that are still influential today, and many characters have fascinating stories that will allow you to appreciate Chinese history.
        </c.P>
        <c.Bookrow center>
          <TweetEmbed id="985793430067523584" />
        </c.Bookrow>
        <c.Bookrow>
          <h4>#3. Without characters, you live the life of a five-year-old</h4>
        </c.Bookrow>
        <c.P>
          As soon as you come to China, characters are everywhere. Someone introduces their name to you? You want to take an interest by asking for the characters. Going to a restaurant? You want to read the menu. Looking for the restroom? You want to choose the right one.
        </c.P>
        <c.P>
          In fact, the characters are the key to much of the cultural adventure of going to China. Want to learn how to play Mahjong or Chinese chess? The pieces all look the same, except for the Chinese characters on them. You go to a Karaoke party? If you can’t read the lyrics, you face suffering through <i><a href="https://www.youtube.com/watch?v=_dggAQk5peA">Tie a yellow ribbon ‘round the old oak tree</a></i> instead of practicing your language skills doing duos of romantic Chinese songs. What a drag.
        </c.P>
        <c.Bookrow>
          <h4>#4. Knowing characters helps you understand and learn new words</h4>
        </c.Bookrow>
        <c.P>
          It’s not just that your life will be miserable without characters —being illiterate will also slow down your acquisition of <i>spoken</i> Chinese. When a Chinese person hears an unfamiliar word, he will often ask the speaker to “write” the characters in the palm of his hand; since most characters contribute meaning to a word, this makes it much easier to understand a new concept.
          Hearing someone talking about an animal called <b>biànsèlóng</b>, for example, gives no indication of the animal we are talking about. But if you know that it’s written <c.Chinese>变色龙</c.Chinese>, where the first character <c.Chinese>变</c.Chinese> <b>biàn</b> means <i>to change</i>, <c.Chinese>色</c.Chinese> <b>sè</b> means <i>color</i> and <c.Chinese>龙</c.Chinese> <b>lóng</b>
          means <i>dragon</i>, you will very likely be able to guess what it means (I actually did the <a href="https://www.facebook.com/learnChinese.chinese.me/photos/a.1504234009788594.1073741828.1503367486541913/1681459202066073/?type=3&theater">experiment</a> on Facebook and almost everybody correctly said <i>chameleon</i>). The vast majority of Chinese words can be guessed in this way from their character components.
        </c.P>
        <c.Bookrow>
          <h4>#5. Learning characters helps you master the tones</h4>
        </c.Bookrow>
        <c.P>
          Without knowing the characters for a word, it can be hard to remember its tones. A word often consists of two, three or even more syllables; you have to remember the tone on each one in sequence. This becomes much easier if you can lean on the constituent characters as a memory aid. Take the word <c.Chinese>过奖</c.Chinese> which means <i>you flatter me</i> — the polite Chinese response to a compliment. The common character <c.Chinese>过</c.Chinese> <i>exceed</i> is pronounced <b>guò</b> with Tone 4. I also know that <c.Chinese>奖</c.Chinese> means <i>praise</i> and is pronounced <b>jiǎng</b>, with Tone 3. So I know that <c.Chinese>过奖</c.Chinese> should be pronounced <b>guòjiǎng</b>
        </c.P>
        <c.Bookrow center>
          <TweetEmbed id="991596768315011072" />
        </c.Bookrow>
        <c.Bookrow>
          <h4>#6. Without characters, it’s hard to tell homophones apart</h4>
        </c.Bookrow>
        <c.P>
          Chinese is not very rich in sounds; there is a limited number of syllables, so many words are pronounced the same. As your vocabulary expands, you will end up with a whole library of like-sounding words. For example, in the words <c.Chinese>说话</c.Chinese> <b>shuōhuà</b> <i>to speak</i>;
          <c.Chinese>画画</c.Chinese> <b>huàhuà</b> <i>to draw</i>, <c.Chinese>变化</c.Chinese> <b>biànhuà</b> <i>a change</i>; the characters coming in second position (<c.Chinese>话</c.Chinese>, <c.Chinese>画</c.Chinese> and <c.Chinese>化</c.Chinese>) are all pronounced <b>huà</b>, (same syllable and same tone). Good luck trying to make sense of these words by relying on sound only! Again, the characters come to the rescue.
        </c.P>
        <c.Bookrow>
          <h4>If you’ve decided to learn Chinese, characters are your friends</h4>
        </c.Bookrow>
        <c.P>
          Over the years, I have read a lot of misinformation about how to study Chinese: everything from “the tones come naturally over time, so you don’t have to worry too much about them” to “let’s make Chinese easy by drawing pictures and putting the characters inside”. In my opinion, skipping the characters “because they are too difficult” is one of the worst of these red herrings. Chinese is not an easy language to unlock; tossing out the characters is like throwing away the master key. It may be possible for some people to learn Chinese without learning to read and write. But for most of us, the characters are one of the most useful — and inspiring — aspects of this fascinating language.
        </c.P>
        <c.P>
          Put an end to writing system ethnocentrism — hug a Chinese character today!
        </c.P>
      </ArticleWrapper>
    );
  }
}

Article.propTypes = {};

export default Article;
