import React, { Component } from 'react';
import { bookComponents as c, ArticleWrapper } from '../.';
import { Img } from '../Shared';

class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <c.Bookrow marginBottom={35} center>
          <h1>Chinese Consonant Pairs and Aspiration</h1>
        </c.Bookrow>
        <c.P>
          This week we meet Johan in Stockholm who shares with us one of the keys to understand Chinese pronunciation: aspiration and voicing.
        </c.P>
        <c.Bookrow center marginTop={40} marginBottom={40}>
          <iframe title="Chinese Pinyin Pronunciation: consonants and aspiration" width="560" height="315" src="https://www.youtube.com/embed/upFeDw8lpgQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
        </c.Bookrow>
        <c.P>
          Here are two takeaways from this video:
        </c.P>
        <c.Bookrow>
          <h2>Unlike many other languages, Chinese consonants are all <i>unvoiced</i></h2>
        </c.Bookrow>
        <c.P>
          If you pronounce b- and p- in English and hold the palm of your hand on your Adam’s apple, you can notice that the main difference between b- and p- is that b- is <i>voiced</i> (you can feel a vibration), whereas p- is <i>unvoiced</i> (there is no vibration).
        </c.P>
        <Img
          name="no_voicing.png"
        />
        <c.Bookrow>
          <h2>Chinese consonant pairs are distinguished with <i>aspiration</i></h2>
        </c.Bookrow>
        <c.P>
          Instead of this <i>voiced vs. unvoiced</i> distinction, many Chinese consonant pairs are distinguished with another concept called <i>aspiration</i>.
        </c.P>
        <c.P>
          In Chinese, both -b and -p are <i>unvoiced</i> (no vibration). But if you place your hand or a piece of paper if front of your month, you should feel a strong flow of air when pronouncing -p, whereas the flow of air is much weaker when pronouncing -b.
        </c.P>
        <c.P>
          Knowing that Chinese consonants are mostly distinguished based on aspiration can help you a lot if you want to master Chinese pronunciation and sound like a native speaker.
        </c.P>
        <Img
          name="stiff_paper_2.png"
        />
      </ArticleWrapper>
    );
  }
}

export default Article;
