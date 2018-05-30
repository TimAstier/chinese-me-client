import React, { Component } from 'react';
import { bookComponents as c, ArticleWrapper } from '../.';
import { Img } from '../Shared';

class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <c.Bookrow marginBottom={15} center>
          <h1>Saying “chameleon” in Chinese</h1>
        </c.Bookrow>
        <c.Bookrow marginBottom={30} center>
          <h2>The fastest way of learning enough characters to reach fluency</h2>
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="chameleon.png"
            caption="A changecolordragon"
          />
        </c.Bookrow>
        <c.P>
          When we learn a language related to our own, we get many words “for free”: an English speaker will immediately recognize a French word like <i>telephone</i> in both spoken and written form. In Chinese, however, <i>telephone</i> is pronounced <b>diànhuà</b>, which sounds nothing like the English word; and it is written using two characters, <c.Chinese>电话</c.Chinese>, rather than our familiar Latin alphabet. Most students of Chinese see the characters as a huge challenge: you will need to master about 2 000 characters to attain even basic literacy. But the Chinese writing system actually has some features that make it easier for us to memorize new vocabulary.
        </c.P>
        <c.Bookrow center>
          <h3>Learn words through the meaning of individual characters</h3>
        </c.Bookrow>
        <c.P>
          Each Chinese character has meaning. In the example above, <c.Chinese>电</c.Chinese> means <i>electricity</i> and <c.Chinese>话</c.Chinese> <i>speech</i>, so <c.Chinese>电话</c.Chinese> means <i>electrical speech</i>. Once we have learned the meaning of an individual character, we will more easily understand and remember other words where this character appears,
          for example <i>computer</i> (<c.Chinese>电脑</c.Chinese>: <i>electricity</i> + <i>brain</i>), <i>electrocardiogram</i> (<c.Chinese>心电图</c.Chinese>: <i>heart</i> + <i>electricity</i> + <i>chart</i>) or <i>movie</i> (<c.Chinese>电影</c.Chinese>:
          <i>electricity</i> + <i>shadow</i>). And once you know a few characters, you can immediately decipher the meaning of complex words such as <c.Chinese>变色龙</c.Chinese> (<i>change</i> + <i>color</i> + <i>dragon</i> = <i>chameleon</i>).
        </c.P>
        <c.Bookrow center>
          <h3>Use the etymology of pictograms as a memory aid</h3>
        </c.Bookrow>
        <c.P>
          Many characters were originally pictures. Over the millennia, they gradually developed into stylized symbols. The character <c.Chinese>看</c.Chinese>, for example, means <i>to look</i>; this becomes easier to remember if we understand that it is actually a picture of a <i>hand</i> held over an <i>eye</i>, as if shielding it from the sun:
        </c.P>
        <c.Bookrow center>
          <Img
            name="hand_and_eye.png"
            caption="An ancient Chinese gazing into the distance."
          />
        </c.Bookrow>
        <c.P>
          <i>
            In our <a href="https://www.chinese-me.com/course">course</a>, we use etymology — the historical background of characters— as one of the memory aids.
          </i>
        </c.P>
        <c.Bookrow center>
          <h3>Learn characters by combining individual elements</h3>
        </c.Bookrow>
        <c.P>
          The vast majority of characters are combinations of simpler elements which indicate meaning or pronunciation. Sometimes, these elements can be used independently: <c.Chinese>好</c.Chinese> <i>good</i>, for example, is made up of the characters <c.Chinese>女</c.Chinese> <i>woman</i> and <c.Chinese>子</c.Chinese> <i>son</i>. Learning all three characters is not much more work than learning each one separately.
        </c.P>
        <c.P>
          <c.Chinese>好</c.Chinese> = <c.Chinese>女</c.Chinese> + <c.Chinese>子</c.Chinese>
        </c.P>
        <c.P>
          <i>
            On ChineseMe, we systematically introduce characters that are elements of others that we have already learned.
          </i>
        </c.P>
        <c.Bookrow center>
          <h3>Practice calligraphy to develop a feel for the characters</h3>
        </c.Bookrow>
        <c.P>
          Calligraphy, the art of writing beautifully, is almost as ancient as the characters themselves. Learning to appreciate the artistic beauty of a character gives you a feel for its internal logic and makes it much easier to memorize. This is the way Chinese students learn characters. Still, most language courses for non-native speakers hardly mention calligraphy at all.
        </c.P>
        <c.Bookrow center>
          <Img
            name="beautiful_handwriting.png"
            caption="Beautiful handwriting = faster learning."
          />
        </c.Bookrow>
        <c.P>
          <i>
            At ChineseMe, detailed videos made by master calligraphers show students how to shape and place each stroke properly to create harmonious characters.
          </i>
        </c.P>
        <c.Bookrow center>
          <h3>Study characters in the right order</h3>
        </c.Bookrow>
        <c.P>
          Mnemonic aids like etymology and calligraphy ease the task of memorization, but focusing on the right characters is even more important. Some characters are much more frequent than others: the two hundred most common ones make up over fifty percent of a typical text.
        </c.P>
        <c.P>
          <i>
            ChineseMe teaches characters in order of <a href="http://lingua.mtsu.edu/chinese-computing/statistics/char/list.php?Which=MO">frequency</a>, because frequent characters tend to come back so often that you won’t have time to forget them.
          </i>
        </c.P>
        <c.P>
          Some characters are also more useful than others because they have more than one meaning, or because they readily combine with other characters to form new words: the character <c.Chinese>电</c.Chinese> <i>electricity</i> above is a good example, since it appears in so many terms to do with electricity and electronics. On the other hand, some common everyday words can be a waste of time for the beginner. It makes little sense to learn to write the characters for <i>grape</i>, <c.Chinese>葡萄</c.Chinese>, since they aren’t used in any other word; in addition, they are quite complex to write.
        </c.P>
        <c.Bookrow center>
          <Img
            name="grape_useless.png"
            caption="葡萄: the useless characters for “grapes”"
          />
        </c.Bookrow>
        <c.Bookrow center>
          <h3>If you are systematic, characters become more rewarding over time</h3>
        </c.Bookrow>
        <c.Bookrow center>
          <Img
            name="curve_up.png"
            caption="Soon, you can say everything you want!"
          />
        </c.Bookrow>
        <c.P>
          If you choose the right characters and spend some time getting to know them in depth — their history, structure and aesthetics — you will be surprised at how easy it is to learn enough characters for basic communication. Once you reach that point, your vocabulary will grow exponentially with each new character you memorize.
        </c.P>
      </ArticleWrapper>
    );
  }
}

export default Article;
