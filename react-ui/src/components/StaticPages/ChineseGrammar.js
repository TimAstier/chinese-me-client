import React, { Component } from 'react';
import { ScrollableWrapper, NLSignupForm } from '../.';
import styled from 'styled-components';
import { bookComponents as c } from '../.';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';
import { Link } from 'react-router';

// TODO: dry header and btn with HomePage
const Wrapper = styled.div`
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
  margin: 0;
  position: relative;
  background-color: #E30024;
  h2 {
    margin: 0;
  }
  /* Extra small devices (phones, less than 768px) */
  /* No media query since this is the default in Bootstrap */
  /* Small devices (tablets, 768px and up) */
  /* Medium devices (desktops, 992px and up) */
  /* Large devices (large desktops, 1200px and up) */

  .centered {
    text-align: center;
  }

  #mainHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  #mainHeader h1 {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 53px;
    font-weight: 700;
    line-height: 48px;
    color: #ffffff;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
  }

  @media(max-width: 991px) {
    #mainHeader h1 {
      margin-top: 30px;
    }
  }

  #mainHeader h2 {
    margin-top: 20px;
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
    text-align: center;
    color: black;
  }
`;

const MainCTA = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  height: 45px;
  width: 200px;
  display: flex;

  /**  colors and transitions back to normal
    *  hex colors from flatuicolors.com   
    * button style from https://1stwebdesigner.com/10-pure-css-call-action-button-sets/
    * (other colors available)
    **/

  .btn-read {
    background: #f2f7fa;
    -webkit-transition: background 225ms ease!important;
    -moz-transition: background 225ms ease!important;
    transition: background 225ms ease!important;
    text-decoration: none; /* strip natual underlines */
    width: 200px;
    line-height: 102px;
    height: 70px;
  }

  .btn-read span {
    color: #fff;
    text-decoration: none;
  }

  .btn-read:before, .btn-read:focus, .btn-read:hover {
    background: #244746;
  }
  /* base btn styling */
  .btn-base {
    font-family: Oswald, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    position: relative;
    transition: all 225ms ease;
    border: none;
    border-radius: 2px;
    overflow: hidden;
    color: #fff;
    text-align: center;
    line-height: 74px;
  }

  /* places copy on top */
  .btn-cta span {
    z-index: 8;
    position: relative;
  }

  /** definition and placement of 
    * starting size before element */

  .btn-cta:before {
    content: "";
    display: block;
    width: 86%;
    height: 65%;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transition: all 400ms cubic-bezier(.32,1.25,.1,1.47);
    -moz-transition: all 400ms cubic-bezier(.32,1.25,.1,1.47);
    transition: all 400ms cubic-bezier(.32,1.25,.1,1.47);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }

  /* grow to sizing for before element */
  .btn-cta:focus:before, .btn-cta:hover:before {
    height: 105%;
    width: 105%;
  }
`;

class ChineseGrammar extends Component {
  render() {
    return (
      <ScrollableWrapper>
        <Wrapper>
          <header>
            <div id="mainHeader">
              <h1>Sentence patterns</h1>
              <h2>Chinese grammar without complicated theoretical explanations</h2>
            </div>
          </header>
        </Wrapper>
        <c.Page>
          <c.PartTitle type="secondary">Introduction to sentence patterns</c.PartTitle>
          <br />
          <c.P>
            The best way to learn Chinese grammar is to study <i>Sentence Patterns</i>. Once you learn and understand a pattern, you can easily adjust it with your own vocabulary to make your own sentences in Chinese.
          </c.P>
          <c.P>
            Here is an example of a pattern:
          </c.P>
          <c.Example
            code="3:4"
            chinese="我是中国人。"
            pinyin="Wǒ shì zhōngguórén."
            translation="I am Chinese."
            literalTranslation="(I BE CHINA-PERSON)"
            audio
            audioUrl={assetEndpointToUrl('/audio/examples/3_4.mp3')}
            slowAudioUrl={assetEndpointToUrl('/audio/examples/3_4_slow.mp3')}
          />
          <c.P>
            <i><b>TIPS:</b> click the audio button another time to hear a slow version of the recording.</i>
          </c.P>
          <c.P>
            This pattern can be explained like this: Simple sentences in Chinese are created with a Subject, Verb and Object, just as in English.
          </c.P>
          <br />
          <c.PartTitle type="secondary">Learning Chinese grammar in a practical way</c.PartTitle>
          <br />
          <c.P>
            In the ChineseMe <Link to="/course">course</Link>, we strive to make grammar explanations as clear and practical as possible. Each episode only introduces 2 to 4 new patterns, so you won't feel overwhelmed by too much theory.
          </c.P>
          <c.P>
            When we do explain grammatical structures, we use terms and ideas that have been developed especially for Mandarin Chinese. Every word and example has been carefully selected for maximum usefulness, and we continuously incorporate student feedback to improve the course.
          </c.P>
          <c.P>
            Patterns in ChineseMe are introduced in a very systematic way. When writing the course content, we make sure that every dialogue only includes patterns that have already been explained previously.
          </c.P>
          <c.P>
            Each pattern contains several elements:
          </c.P>
          <c.Bookrow>
            <c.Ul>
              <li>- A reference code to identify and find the pattern within the course (for example, 3:4 for the pattern #4 in Episode 3)</li>
              <li>- The sentence in Chinese characters</li>
              <li>- The sentence in pinyin</li>
              <li>- The English translation</li>
              <li>- A literal translation</li>
              <li>- Audio recording from a native Chinese speaker, in both normal and slow speed</li>
              <li>- An explanation written in plain English.</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Finally, every pattern is followed by interactive practice exercises to make sure you understood the pattern correctly.</c.P>
          <br />
          <c.PartTitle type="secondary">Grammar Bibliography</c.PartTitle>
          <br />
          <c.P>
            Here is a list of resources about Chinese grammar that we use and recommend:
          </c.P>
          <c.Bookrow>
            <c.Ul>
              <li>- Mandarin Chinese: A Functional Reference Grammar - by Charles N. Li & Sandra A. Thompson</li>
              <li>- <c.Chinese>现代汉语八百次</c.Chinese> - Xiandai hanyu babai ci - by <c.Chinese>吕叔</c.Chinese> (in Chinese)</li>
            </c.Ul>
          </c.Bookrow>
          <hr />
          <c.PartTitle>Ready for the challenge?</c.PartTitle>
          <br />
          <c.P>
            Learning Chinese grammar is fundamental to learn Chinese well. If you agree with us, you will love our integrated Chinese course!
          </c.P>
          <c.Bookrow center>
            <MainCTA>
              <Link to="/course" className="btn-base btn-cta btn-read">
                <span>see course</span>
              </Link>
            </MainCTA>
          </c.Bookrow>
        </c.Page>
        <NLSignupForm
          title="Get our free PDF course"
          text="Sign up now to receive the free PDF version of our Chinese course for beginners, as well as the latest news about the project."
        />
      </ScrollableWrapper>
    );
  }
}

export default ChineseGrammar;
