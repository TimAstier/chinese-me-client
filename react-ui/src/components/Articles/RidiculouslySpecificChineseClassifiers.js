import React, { Component } from 'react';
import { bookComponents as c, ArticleWrapper } from '../.';
import { Img } from '../Shared';

class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <c.Bookrow marginBottom={15} center>
          <h1>5 ridiculously specific Chinese classifiers</h1>
        </c.Bookrow>
        <c.Bookrow marginBottom={30} center>
          <h2>If you plan to learn them all, you may as well start from the end</h2>
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="chinese_classifiers_by_usefulness.png"
          />
        </c.Bookrow>
        <c.P>
          <i>
            When learning Chinese classifiers, people usually find a list and learn the most frequent or useful ones first. But you’re not someone who just runs mindlessly with the crowd, right? <b>If you plan to learn all of them, why don’t you start from the end?</b>
          </i>
        </c.P>
        <c.P>
          This article presents <b>five Chinese <i>classifiers</i></b> that have one thing in common: they are <b>so specific as to be almost useless</b>.
        </c.P>
        <c.Bookrow center>
          <h3>What are classifiers?</h3>
        </c.Bookrow>
        <c.P>
          <i>Classifiers</i> are a special feature of Mandarin Chinese. Any time a Chinese <i>noun</i> is used with a <i>demonstrative (this, that…)</i> a <i>number (one, two…)</i> or an <i>ordinal number ( first, second…)</i>, a classifier needs to precede it.
        </c.P>
        <c.P>
          The reason why Chinese learners love classifiers so much is that Chinese speakers use different classifiers for different nouns. For every noun in Chinese, there is usually one classifier that is most appropriate to use. For example:
        </c.P>
        <c.P>
          - <c.Chinese>张</c.Chinese> (<b>zhāng</b>) is a useful classifier used for flat objects or pieces of paper. <i>Table</i> is <c.Chinese>桌子</c.Chinese> in Chinese, so <i>one table</i> is <c.Chinese>一张桌子</c.Chinese>.
        </c.P>
        <c.P>
          - <c.Chinese>本</c.Chinese> (<b>běn</b>) is the more specific but very common classifier for books or objects similar to books; <i>book</i> is <c.Chinese>书</c.Chinese> in Chinese, so <i>two books</i> is <c.Chinese>两本书</c.Chinese>.
        </c.P>
        <c.P>
          - <c.Chinese>首</c.Chinese> (<b>shǒu</b>) is an even more specific classifier used for songs, poems, etc; <i>song</i> is <c.Chinese>歌</c.Chinese> in Chinese, so <i>three songs</i> is <c.Chinese>三首歌</c.Chinese>.
        </c.P>
        <c.P>
          Using the correct classifier makes it much easier for a native speaker to understand what you’re talking about. On the other hand, using the wrong classifier can create some confusion.
        </c.P>
        <c.P>
          Most language learners focus on learning the most common combinations. <b>But you want to be different, so let’s look at the least useful of them all!</b>
        </c.P>
        <c.Bookrow center>
          <h3>The classifier for camels</h3>
        </c.Bookrow>
        <c.P>When dealing with animals, <c.Chinese>只</c.Chinese> (<b>zhī</b>) is your usual go-to classifier.</c.P>
        <c.P>But <c.Chinese>只</c.Chinese> can be used with almost any animal name in Chinese, so it’s too useful to be very impressive. True, there are some exceptions with rather common animals, such as <c.Chinese>条</c.Chinese> (<b>tiáo</b>) for fishes (<c.Chinese>一条鱼</c.Chinese>) and <c.Chinese>匹</c.Chinese> (<b>pǐ</b>) for horses (<c.Chinese>一匹马</c.Chinese>). But these animals are also pretty common after all. There is a better choice.</c.P>
        <c.P>I’m sure your Chinese friends will be more impressed if you show them that you know the classifier for <i>camel</i>. You just need to find the right opportunity.</c.P>
        <c.Bookrow center>
          <Img
            name="camel_classifier.png"
            caption="峰 (fēng), classifier for camels ( 一峰骆驼 )"
          />
        </c.Bookrow>
        <c.Bookrow center>
          <h3>The classifier for small boats</h3>
        </c.Bookrow>
        <c.P>
          Boats are tricky things in Chinese. <c.Chinese>条</c.Chinese> (<b>tiáo</b>), <c.Chinese>艘</c.Chinese> (<b>sōu</b>) and <c.Chinese>只</c.Chinese> (<b>zhī</b>) can all be used to talk about boats in various situations.
        </c.P>
        <c.P>
          But if you want to take boat classifiers to a new level, go for the special classifier for <i>small</i> boats! When I first saw this, I wondered where the limit is – can we have classifiers for “small plates” or “big cars”?
        </c.P>
        <c.Bookrow center>
          <Img
            name="small_boat_classifier.png"
            caption="叶 (yè), classifier for small boats ( 一叶扁舟 )"
          />
        </c.Bookrow>
        <c.Bookrow center>
          <h3>The classifier for “one or a bunch of Chinese cabbage, salad or grass”</h3>
        </c.Bookrow>
        <c.P>
          This one is the king of them all and doesn’t need any explanation:
        </c.P>
        <c.Bookrow center>
          <Img
            name="cabbage_classifier.png"
            caption="蔸 (dōu), classifier for one or a bunch of Chinese cabbage, salad or grass ( 一蔸白菜 )"
          />
        </c.Bookrow>
        <c.Bookrow center>
          <h3>The classifier for a roof truss</h3>
        </c.Bookrow>
        <c.P>
          If you and your Chinese friends are building a house and you suddenly want to discuss something about the roof, don’t forget to use the correct classifier! Otherwise, this ranks among the most un-useful ones:
        </c.P>
        <c.Bookrow center>
          <Img
            name="roof_truss_classifier.png"
            caption="榀 (pǐn), classifier for a roof truss（ 一榀屋架 )"
          />
        </c.Bookrow>
        <c.Bookrow center>
          <h3>The classifier for a body of clear water</h3>
        </c.Bookrow>
        <c.P>
          My last classifier is not as strictly useless as the other ones; in fact, I chose it for its versatility. This classifier can’t just be used to talk about clear water – it can be used to talk about ANY body of clear water! This is great: learning this single character will open a whole array of new possibilities to express yourself.
        </c.P>
        <c.Bookrow center>
          <Img
            name="clear_water_classifier.png"
            caption="泓 (hóng), classifier for a body of clear water ( 一泓清泉, 一泓秋水, … )"
          />
        </c.Bookrow>
        <c.P>
          These are just a few examples of particularly useless classifiers that I love. But I hope this sample, however small, has opened up some exciting new horizons for your Chinese studies going forward, and that in the future, you won’t ever embarrass yourself again by resorting to <c.Chinese>个</c.Chinese> when you have the chance to show off with a more elegant alternative!
        </c.P>
      </ArticleWrapper>
    );
  }
}

export default Article;
