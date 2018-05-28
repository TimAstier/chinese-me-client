import React, { Component } from 'react';
import { bookComponents as c, ArticleWrapper } from '../.';

// TODO: author, createdDate, updatedDate
class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <c.Bookrow marginBottom={15} center>
          <h1>Doing business in China: is learning Chinese a good investment?</h1>
        </c.Bookrow>
        <c.P>
          Some business people will tell you that learning Chinese is a huge waste of time. After all, they say, Chinese is too difficult, and nowadays most Chinese people speak English. There are plenty of good interpreters available.
        </c.P>
        <c.P>
          So for a business person with limited time, is learning Chinese really worth the effort? If by “learning” Chinese we mean “getting a basic working knowledge” of the language, I can answer this question with a resounding “yes!” You don’t have to aim for fluency, but based on my observation of dozens of expatriate managers at large companies in China, picking up the basics is definitely worth your time, for several reasons:
        </c.P>
        <c.P>
          - If you don’t speak any Chinese at all, you have no idea about what is going on in a conversation. But if you get the gist of what is being said, you can at least judge the quality of translation, and whether or not the translator is actually conveying the sense of what you are saying.
        </c.P>
        <c.P>
          - Chinese business people see and appreciate that you are making the effort. The cultural distance between China and the West is large, and Chinese people often assume that Westerners have little or no idea of how things work in China. Seeing that you can speak a few words of Chinese will reassure your Chinese partners that you are serious and committed.
        </c.P>
        <c.P>
          - Interacting with people in their own language, even at a very basic level, will make you more sensitive to local culture and psychology. You will get a better sense of “what’s going on” at the office or in a business negotiation.
        </c.P>
      </ArticleWrapper>
    );
  }
}

export default Article;
