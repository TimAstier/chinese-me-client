import React, { Component } from 'react';
import { bookComponents as c, ArticleWrapper } from '../.';
import { Img } from '../Shared';

// TODO: author, createdDate, updatedDate
class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <c.Bookrow marginBottom={15} center>
          <h1>A Chinese course where you are the star</h1>
        </c.Bookrow>
        <c.Bookrow marginBottom={30} center>
          <h2>The first Season of ChineseMe is out!</h2>
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="tea_house.png"
            caption="Marvin and Coleen in a Chinese Tea House"
          />
        </c.Bookrow>
        <c.Bookrow center>
          <h3>What do YOU want to talk about?</h3>
        </c.Bookrow>
        <c.P>
          Everyone agrees that the best way to learn a language is by focusing on the most useful vocabulary first. The problem is that “most useful” is different for every learner. ChineseMe is a systematic, integrated Chinese course focusing on YOU: your person, your life, and your interests. Depending on your objectives, you learn the right vocabulary to prepare for business, work, study, travel — or just to surprise your Chinese spouse by saying a few words in his or her language.
        </c.P>
        <c.Bookrow>
          <h4>ChineseMe focuses on YOUR needs</h4>
        </c.Bookrow>
        <c.P>
          Throughout the course, you learn specific vocabulary directly based on your personal ambition and interests.
        </c.P>
        <c.Bookrow center>
          <Img
            name="chineseme_first_sentence.png"
            caption="The first sentence you will practice is “My name is …”, with your own Chinese name."
          />
        </c.Bookrow>
        <c.Bookrow>
          <h4>ChineseMe integrates all aspects of the language</h4>
        </c.Bookrow>
        <c.P>
          ChineseMe integrates vocabulary, grammar and pronunciation to allow you to sound and express yourself like a native. Pronunciation is so important that we try to help you aim at perfection right from the beginning. You will soon be able to impress native speakers even with the most basic sentences.
        </c.P>
        <c.Bookrow center>
          <Img
            name="chineseme_pronunciation.png"
            caption="Students work on pronunciation in three steps. First, they listen and repeat the sounds. Then, they read from the pinyin pronunciation. Finally, they read from Chinese characters. In this way, students are trained not to rely too much on pinyin, and there is less risk that they suffer from a bias from their native language when reading pinyin for the first time."
          />
        </c.Bookrow>
        <c.Bookrow>
          <h4>ChineseMe guides you to the most effective way of studying</h4>
        </c.Bookrow>
        <c.P>
          Chinese characters can seem daunting — but as long as you go approach them in the right way, they actually make it easier to learn the language. ChineseMe focuses only on high-frequency characters, and takes advantage of their etymology, structure and artistic beauty as memory aids. The course systematically combines all characters you have learnt into as many new words as possible. This maximizes the number of words you know without learning too many new characters.
        </c.P>
        <c.Bookrow center>
          <iframe title="Chinese characters - stroke order, etymology and calligraphy" width="560" height="315" src="https://www.youtube.com/embed/kPSXBa81Nak" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
        </c.Bookrow>
        <c.Bookrow>
          <h4>Develop a genuine feel for the language</h4>
        </c.Bookrow>
        <c.P>
          Chinese grammar is just as exotic as the characters. But it can be surprisingly easy to master — as long as we use tools and concepts that help develop an intuitive feel for the language. ChineseMe uses grammatical terms and concepts adapted specifically to Chinese, together with sentence patterns that help internalize grammatical structures and improve oral comprehension.
        </c.P>
        <c.Bookrow center>
          <Img
            name="chineseme_sentence_patterns.png"
            caption="All patterns come with translations to idiomatic English so that you will know how to use them in the right way. In those cases where we think it will help you understand the structure of a pattern better, we also provide a literal translation in capital letters to show the function of each Chinese word."
          />
        </c.Bookrow>
        <c.Bookrow>
          <h4>Learn how to interact and make friends with Chinese people</h4>
        </c.Bookrow>
        <c.P>
          When you learn a language, cultural context can be just as important as grammar and vocabulary. This is especially true for Chinese, as the cultural differences with the West are large. In this course you will learn not just language skills but also how to behave appropriately, make friends and adapt to Chinese society.
        </c.P>
        <c.Bookrow center>
          <Img
            name="yuguo_elevator.jpeg"
            caption="Number symbolism is very important in China. There are both “lucky” and “unlucky” numbers. The most famous example is 四 sì “four”, which sounds similar to another character meaning “to die”. As a consequence, many Chinese buildings lack all floors ending in this dreaded number: 4, 14, 24 and so on."
          />
        </c.Bookrow>
        <c.Bookrow center>
          <h3>Choose the components and exercises YOU want</h3>
        </c.Bookrow>
        <c.P>
          Every learner has his or her own preferences: some people focus on pronunciation and vocabulary, others want to master grammar; some people love our character calligraphy exercises, others prefer learning about culture and character history. ChineseMe has something for everyone; you choose which parts to study and when.
        </c.P>
        <c.Bookrow center>
          <h3>A completely modular course</h3>
        </c.Bookrow>
        <c.P>
          The course is divided into <i>Seasons</i>. Every Season has about a dozen <i>Episodes</i>. These Episodes contain grammar and vocabulary that are so common that they are useful regardless of your interests. In addition, there are many interest-based Episodes with lots of vocabulary tailored to your preferences which provide an opportunity to review and reinforce the grammar you have already mastered.
        </c.P>
        <c.P>
          After completing Season 1, you will know enough vocabulary to have a simple conversation and tell people a bit about yourself in Chinese. You will have mastered 26 sentence patterns, have a solid understanding of Chinese pronunciation and tones and know how to write 88 characters with beautiful strokes in the correct order. You will also have a Chinese name and know which zodiac animal you belong to.
        </c.P>
        <c.Bookrow center>
          <Img
            name="season_1.png"
            caption="In Season 1, you will learn the basics of Mandarin Chinese. In Season 2, you will know enough vocabulary to start following the story of Marvin, a foreigner who arrives in China and do his best to learn Chinese."
          />
        </c.Bookrow>
        <c.P>
          Every Episode introduces a <b>limited number of new elements</b>, while making sure that the knowledge previously learnt is constantly reused.
        </c.P>
        <c.Bookrow center>
          <Img
            name="episode_3_TOC.png"
            caption="Lesson 3 only introduces five new characters."
          />
        </c.Bookrow>
        <c.P>
          If you’re excited about learning Chinese, give Season 1 a try!
        </c.P>
      </ArticleWrapper>
    );
  }
}

export default Article;
