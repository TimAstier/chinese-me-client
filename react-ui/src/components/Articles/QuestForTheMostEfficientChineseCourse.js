import React, { Component } from 'react';
import { bookComponents as c, ArticleWrapper } from '../.';
import { Img } from '../Shared';
import { Link } from 'react-router';
import styled from 'styled-components';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

const Logo = styled.img`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100px;
  height: auto;
  border-radius: 50px;
`;

class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <c.Bookrow marginBottom={35} center>
          <h1>Quest for the most efficient Chinese course</h1>
        </c.Bookrow>
        <c.P>
          Everybody agrees that Chinese is a difficult language to learn. Why is that? Obviously because Chinese is a unique language very different from the languages we know (hi, Chinese characters!).
        </c.P>
        <c.P>
          But this is not the main reason. <b>I think what truly makes learning Chinese difficult is that the <i>process of learning Chinese</i> is inefficient</b>. And this is because the existing study resources are completely fragmented.
        </c.P>
        <c.Bookrow center>
          <h3>The Easy Chinese Loop</h3>
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="super-mega-easy-chinese.png"
            caption="Have you heard about the new SUPER-MEGA EZ Chinese App?"
          />
        </c.Bookrow>
        <c.P>
          For years, <b>students of Chinese have been struggling to find the ultimate learning strategy</b>, assembling pieces from various resources and trying to make everything work together. Unfortunately, it is almost impossible to judge what a good resource is before actually knowing more about the language. And even if you manage to compile a good list of resources based on recommendations, you still need to make everything fit in your schedule. The result is that <b>most people end up giving up on learning Chinese</b>, either because they feel overwhelmed by the task or because the resources they picked misled them towards wrong directions that keep them from reaching their objectives. And <b>inevitably, the Chinese language is relegated to <i>hard to learn</i></b>.
        </c.P>
        <c.P>
          Learning Chinese is more and more popular worldwide. If Chinese is considered <i>hard to learn</i>, <b>the law of supply and demand inevitably creates products promising "an easy way to learn Chinese"</b>, or a revolutionary trick to finally "make learning Chinese easy". Of course, this doesn't actually work. But the harm is done: the market for learning Chinese is filled with products that increase the confusion among learners and <b>make Chinese looking even more difficult than what it actually is</b>. And this is how the <i>Easy Chinese Loop</i> is closed.
        </c.P>
        <c.Bookrow center>
          <h3>What you need to learn to master Chinese</h3>
        </c.Bookrow>
        <c.P>
          Learning Chinese fundamentally consists of three activities:
        </c.P>
        <c.P><b>1. Understand the basics of the language.</b> This can be summed up to three questions that should be answered right from the beginning:</c.P>
        <c.Bookrow>
          <c.Ul>
            <li>
              - What do I need to focus on to acquire a good <b>Chinese pronunciation</b>?
            </li>
            <li>
              - What is <b>Pinyin</b> and how does it work?
            </li>
            <li>
              - What are <b>Chinese characters</b> and how does the <b>writing system</b> works?
            </li>
          </c.Ul>
        </c.Bookrow>
        <c.P>
          2. <b>Extend the number of elements you know.</b> This is usually how people (and tests like the <a href="http://www.chinesetest.cn/gosign.do?id=1&lid=0">HSK</a>) evaluate their level in Chinese, because it's easy to quantify. For example, the HSK5 will test you with materials with words contained in a limited set of 2500 words.
        </c.P>
        <c.Bookrow>
          <c.Ul>
            <li>
              - <b>Chinese characters</b> (the building blocks of words)
            </li>
            <li>
              - <b>Words</b> (the building blocks of sentences)
            </li>
            <li>
              - <b>Grammar patterns</b> (the rules to assemble words into sentences)
            </li>
          </c.Ul>
        </c.Bookrow>
        <c.P>
          <b>3. Practice the four skills.</b> This is necessary to apply your theoretical knowledge to practical situations and properly master the language.
        </c.P>
        <c.Bookrow>
          <c.Ul>
            <li>
              - <b>Listening</b> practice (<c.Chinese>听</c.Chinese>)
            </li>
            <li>
              - <b>Conversation</b> practice (<c.Chinese>说</c.Chinese>)
            </li>
            <li>
              - <b>Reading</b> practice (<c.Chinese>读</c.Chinese>)
            </li>
            <li>
              - <b>Writing</b> practice (<c.Chinese>写</c.Chinese>)
            </li>
          </c.Ul>
        </c.Bookrow>
        <c.Bookrow center>
          <h3>The most efficient strategy:<br />Learn everything simultaneously</h3>
        </c.Bookrow>
        <c.P>
          At the very beginning, you may need to focus on one thing at a time: wrapping your tongue around unfamiliar sounds and learning the basics of character writing, for example. But <b>as soon as you’ve mastered the absolute basics, you should try to learn the same thing from multiple angles</b>.
        </c.P>
        <c.P>
          The most effective strategy is to work on all those areas simultaneously, without neglecting any of them.  Here are a few examples of how this can be achieved:
        </c.P>
        <c.Bookrow>
          <c.Ul>
            <li>
              - By <b>using common words and sentences to practice pronunciation</b>, you not only improve your pronunciation, but you also fix useful vocabulary and sentence structure in auditive memory at the same time.
            </li>
            <li>
              - By <b>memorizing example sentences</b>, you develop a feel for the grammar of the language while learning vocabulary in context. An illustration of such an optimization is the study of Chinese sentences through flashcards or spaced repetition algorithms. For example, this <Link to="https://ankiweb.net/shared/info/867291675">Anki deck</Link> is quite popular among learners because it provides sentences featuring high-frequency words, with integrated audio. Relying exclusively on this to learn Chinese would be very tedious as you would have to brute force every sentence to memory without understanding the logic behind them and you would lack real-world practice. But this is a good practice exercise and it is definitely an improvement compared to let's say, learning word lists by heart.
            </li>
            <li>
              - By <b>studying dialogues</b>, you can practice your reading, pronunciation and listening skills, as well as reviewing the vocabulary and grammar you've learnt before at the same time.
            </li>
          </c.Ul>
        </c.Bookrow>
        <c.P>
          The problem is that until now, <b>I haven't found any existing course (or textbook series) that systematically integrates all the dimensions of the Chinese language into one meaningful learning experience</b>. So the only way to include this type of optimization to your study routine is to design your own learning strategy based on a set of existing resources.
        </c.P>
        <c.Bookrow center>
          <h3>Is there a comprehensive course that <br /> I could just simply and follow?</h3>
        </c.Bookrow>
        <c.P>The short answer is: <i>No. <b>If there was one, everybody would be using and recommending it</b></i>.</c.P>
        <c.P>
          But why is that? I think the reason is that <b>it takes an enormous amount of time, efforts and coordination from people with a very different set of skills to create such a course</b>.
        </c.P>
        <c.P>
          Take Duolingo as an example. It is the most famous language app in the world, and the company has great financial resources. It was launched in 2011 with a mission to teach all languages. Chinese is a language that is increasingly popular to learn since the last decade. Surprisingly, Duolingo didn't had any Chinese course before November 2017 (see <a href="https://www.duolingo.com/comment/25219775/Duolingo%E2%80%99s-new-Chinese-course-now-live">release announcement</a>). And the best part is, even with such a long incubation time to create the course, they did not manage to come up with an acceptable (not even talking about good or ideal) Chinese course. See by yourself the community feedback:
        </c.P>
        <c.Bookrow>
          <c.Ul>
            <li>
              <a href="https://www.duolingo.com/comment/27567363">Duolingo Chinese Badly Needs Improvement</a>
            </li>
            <li>
              <a href="https://www.duolingo.com/comment/27492938">Duolingo and its Chinese Course... Questionable?</a>
            </li>
            <li>
              <a href="https://www.duolingo.com/comment/27490989">Chinese Duolingo - CHANGES NEEDED!</a>
            </li>
            <li>
              <a href="https://www.duolingo.com/comment/27444997">Duolingo needs to do a better job...</a>
            </li>
          </c.Ul>
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="duolingo_course.png"
            caption="Is the Duolingo approach adapted to the specificities of the Chinese language?"
            maxWidth={250}
          />
        </c.Bookrow>
        <c.P>
          Because of this situation, <b>students of Chinese who are motivated enough to reach their objectives are faced with an impossible mission: design their own strategy to learn Chinese</b>. This means going into the wild and find the best resources for every specific dimension of the language. If you visit forums or Q&A platforms about Chinese language, you will easily find examples of learners following this quest:
        </c.P>
        <c.Bookrow>
          <c.Ul>
            <li>
              <a href="https://www.reddit.com/r/ChineseLanguage/comments/8olzi2/resources_help_with_resource_planning/">Help with resource planning</a>
            </li>
            <li>
              <a href="https://www.quora.com/What-strategy-do-you-use-to-learn-Chinese">What strategy do you use to learn Chinese?</a>
            </li>
            <li>
              <a href="https://www.chinese-forums.com/forums/topic/33866-best-strategy-to-self-study-mandarin/">
                Best strategy to self-study Mandarin?
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/ChineseLanguage/comments/8qxgj9/how_to_start_learning_mandarin/">How to start learning mandarin</a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/ChineseLanguage/comments/8q9mdl/why_do_chinese_language_courses_still_suck_so_much/">Why do Chinese language courses still suck so much?</a>
            </li>
          </c.Ul>
        </c.Bookrow>
        <c.Bookrow center>
          <h3>A comprehensive learning strategy <br /> based on existing resources</h3>
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="resources_to_learn_chinese.png"
          />
        </c.Bookrow>
        <c.P>
          Generally speaking, <b>the existing resources are specialized on one dimension of the language</b>. Even like so, they are not always optimal or accurate. And even general Chinese courses are usually only good at one or a few dimensions of the language. Here is a list of resources that are often recommended by learners:
        </c.P>
        <c.Bookrow>
          <c.Ul>
            <li>Chinese pronunciation: <a href="https://www.yoyochinese.com/chinese-learning-tools/Mandarin-Chinese-pronunciation-lesson/pinyin-chart-table">YoyoChinese</a></li>
            <li>Chinese etymology: <a href="http://www.zhongwen.com">Zhongwen.com</a>, <a href="https://www.outlier-linguistics.com/">Outlier Linguistics</a>, <a href="https://www.yellowbridge.com/chinese/character-dictionary.php">YellowBridge</a></li>
            <li>Chinese characters: <a href="https://skritter.com/">Skritter</a>, <a href="https://www.zizzle.io/">Zizzle</a></li>
            <li>Vocabulary: <a href="http://www.hskhsk.com/word-lists.html">HSK lists</a>, <a href="https://www.pleco.com/">Pleco</a></li>
            <li>Chinese grammar: <a href="https://www.amazon.com/Mandarin-Chinese-Functional-Reference-Grammar/dp/0520066103">Mandarin Chinese: A Functional Reference Grammar</a>, <a href="https://resources.allsetlearning.com/chinese/grammar/Main_Page">Chinese Grammar Wiki</a></li>
            <li>Listening practice: <a href="https://chinesepod.com/dashboard">ChinesePod</a></li>
            <li>Conversation practice: <a href="https://www.tutorming.com/">TutorMing</a>, <a href="https://www.meetup.com/">Meetup</a>, Speaking with friends, WeChat</li>
            <li>Reading practice: <a href="https://www.thechairmansbao.com/">The Chairman's Bao</a>, <a href="https://wordswing.com/">WordSwing</a>, <a href="https://www.duchinese.net/">DuChinese</a></li>
            <li>Writing practice: <a href="http://lang-8.com/">Lang8</a></li>
            <li>Review: <a href="https://ankiweb.net/">Anki</a>, <a href="https://www.memrise.com/">Memrise</a>, <a href="http://iphone.pleco.com/manual/30200/flash.html">Pleco flashcards</a></li>
            <li>Questions: <a href="https://chinese.stackexchange.com/">ChineseStackExchange</a>, <a href="https://www.quora.com/">Quora</a>, <a href="https://www.reddit.com/r/ChineseLanguage/new/">Reddit</a></li>
            <li>Gamified approach to the language: <a href="http://www.hellochinese.cc/">HelloChinese</a>, <a href="http://www.chinese-skill.com/cs.html">ChineseSkill</a></li>
            <li>Advices about how to learn Chinese: <a href="https://www.hackingchinese.com/">Hacking Chinese</a>, <a href="https://www.digmandarin.com/">DigMandarin</a></li>
          </c.Ul>
        </c.Bookrow>
        <c.P>As you might imagine, <b>creating an optimal strategy based on fragmented resources is not easy</b>. First, you risk to misjudge the quality of a study resource. You also have to spend a lot of time planning, and this is not something you would necessary like to do given the fact that learning Chinese (like any other activity) is already time-consuming.</c.P>
        <c.P>
          Why does it have to be that difficult? Isn't there one course, textbook, website, app or anything that I can just follow and learn Chinese efficiently, without having to worry about whether I'm doing it right?
        </c.P>
        <c.P>
          <b>What would it really take to create one comprehensive course that would address every dimension of the language?</b> This is how I started to imagine what such a course should look like. And this is <b>the quest for the most efficient Chinese course</b>.
        </c.P>
        <c.Bookrow center>
          <h3>Designing a comprehensive Chinese course</h3>
        </c.Bookrow>
        <c.P>Here are the ideas that should be followed when creating a satisfying comprehensive Chinese course:</c.P>
        <c.P>
          <b>1. It should guide students towards a safe and tested path towards fluency</b>, while preventing them from doing <a href="https://medium.com/@samueltersigni/common-chinese-mistakes-d369dc9c7622">common mistakes</a> or developing bad habits that would be difficult to change later on.
        </c.P>
        <c.P>
          <b>2. It should not reinvent the wheel</b>. There are good resources out there. Like a good teacher, the ideal Chinese course should point learners in the right direction to solve specific needs at the right moment.
        </c.P>
        <c.P>
          <b>3. It should provide a comprehensive introduction to the language</b> for complete beginners. Many courses choose to start immediately with learning words such as "Hello" or "What's your name?". While it's good to keep things practical, it is necessary to start by understanding how the Chinese language works.
        </c.P>
        <c.P>
          <b>4. It should introduce new elements</b> (characters, words and grammar patterns) <b>following a frequency order</b> based on how native Chinese speakers use the language.
        </c.P>
        <c.P>
          <b>5. It should not introduce too many new elements in every lesson</b>. Most existing textbooks feature word lists that go from 15 to 30 or more new words per lesson. Then they provide you with a text or a dialogue featuring all these new words. Not only do the texts or dialogues feel very artificial (you can feel that the authors are trying to fit all the words from the word list into the text), but it is also extremely frustrating for a student to constantly face texts with more than 30% of new words.
        </c.P>
        <c.P>
          <b>6. The knowledge acquired in previous lessons should constantly be reused in the following lessons</b>.
        </c.P>
        <c.P>
          <b>7. There should be a lot of reading and listening materials</b> to practice the newly acquired vocabulary and grammar in different contexts.
        </c.P>
        <c.P>
          <b>8. There should be a distinction between what you absolutely have to know versus what you can optionaly learn</b>. This applies at different levels. At the vocabulary level for example, everybody needs to learn the word <c.Chinese>说话</c.Chinese>, <i>to speak</i>; but only people interested in learning Chinese for business purposes might want to learn the word <c.Chinese>合同</c.Chinese>, <i>contract</i>. At a broader level, it benefits everybody to know the basics of how to write Chinese characters. But not everybody need to learn how to write Chinese characters by hand. And still about Chinese characters, it can be beneficial for your learning to study character etymology or practice Chinese calligraphy, but you don't have to do so if you don't like that or if you don't find this helpful.
        </c.P>
        <c.P>
          <b>9. There should be practice and review exercises</b> embedded into the course.
        </c.P>
        <c.P>
          <b>10. There should be a way to ask questions and get answers you can trust</b> at any time when following the course.
        </c.P>
        <c.Bookrow center>
          <Logo
            src={assetEndpointToUrl('/images/homepage/square_logo_small.png')} alt="logo"
          />
        </c.Bookrow>
        <c.Bookrow center>
          <h3>The ChineseMe course</h3>
        </c.Bookrow>
        <c.P>
          In summer 2017, we started developing an integrated Chinese course (ChineseMe), following the 10 rules mentioned above.
        </c.P>
        <c.P>
          If you want to give it a try, here is the first (free) part of the <Link to="/course">course</Link>. You can also find more information about how the course works on the <Link to="/help">Help page</Link>.
        </c.P>
        <c.P>
          In any case, <b>we wish you success and pleasure in your study or Mandarin Chinese</b>!
        </c.P>
      </ArticleWrapper>
    );
  }
}

export default Article;
