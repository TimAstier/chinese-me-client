import React, { Component } from 'react';
import propTypes from 'prop-types';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';
import { ScrollableWrapper, NLSignupForm } from '../.';
import styled from 'styled-components';
import { Link } from 'react-router';

const FeatureLabel = styled.div`
  height: 34px;
  border-radius: 17px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #55b6ff;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
  align-self: center;
  padding-left: 50px;
  padding-right: 50px;
  visibility: ${props => props.visibility};
`;

const Wrapper = styled.div`
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
  margin: 0;
  position: relative;
  background-color: #ffffff;
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
  }

  #logo {
    margin-top: 20px;
    margin-bottom: 40px;
    width: 100px;
    height: auto;
    border-radius: 50px;
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
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
    text-align: center;
    color: black;
  }

  #main-cta {
    margin-top: 30px;
    height: 45px;
    width: 200px;
    display: flex;
  }

  #screenshotWrapper {
    margin-top: 30px;
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  #screenshotDiv {
    width: 700px;
  }

  #screenshotWrapper > div:nth-of-type(1){
    display: flex;
  }

  #screenshotWrapper > div:nth-of-type(3){
    display: flex;
    width: 700px;
    justify-content: space-around;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 70px;
  }

  #screenshotWrapper .leftColumn {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-right: 90px;
  }

  #screenshotWrapper .rightColumn {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-left: 90px;
  }

  #screenshotWrapper .leftColumn > div:nth-of-type(1) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #screenshotWrapper .leftColumn > div:nth-of-type(2) {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #screenshotWrapper .leftColumn > div:nth-of-type(3) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #screenshotWrapper .rightColumn > div:nth-of-type(1) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  #screenshotWrapper .rightColumn > div:nth-of-type(2) {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #screenshotWrapper .rightColumn > div:nth-of-type(3) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .app-icon {
    background-color: #ffffff;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #602323;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  #mobileFeatures {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #mobileFeatures h2 {
    margin-bottom: 40px;
    margin-top: 40px;
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
  }

  .mobile-icon {
    border: 5px solid #602323;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
    height: 70px;
    border-radius: 35px;
    max-width: 60%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .mobile-icon img {
    height: 55%;
    width: auto;
    margin-right: 20px;
  }

  .mobile-icon > span {
    font-size: 18px;
    font-weight: 500;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
  }

  .app-icon:hover {
    background: radial-gradient(white, #55b6ff);
  }

  .app-icon img {
    height: 55%;
    width: auto;
  }

  .screenshot {
    width: 700px;
    height: auto;
  }

  @media(max-width: 1300px) {
    #screenshotDiv {
      width: 600px;
      margin-top: 10px;
    }
    #screenshotWrapper > div:nth-of-type(3){
      width: 600px;
    }
    .screenshot {
      max-width: 600px;
    }
  }

  @media(max-width: 1160px) {
    #screenshotWrapper .leftColumn {
      padding-right: 20px;
    }
    #screenshotWrapper .rightColumn {
      padding-left: 20px;
    }
  }

  @media(max-width: 1000px) {
    #screenshotDiv {
      width: 500px;
    }
    #screenshotWrapper > div:nth-of-type(3){
      width: 500px;
    }
    .screenshot {
      max-width: 500px;
    }
    #screenshotWrapper .leftColumn {
      padding-right: 0;
    }
    #screenshotWrapper .rightColumn {
      padding-left: 0;
    }
  }

  @media(max-width: 920px) {
    #screenshotWrapper {
      width: 95%;
    }
  }

  #mobileFeatures {
    display: none;
  }

  @media(max-width: 690px) {
    #screenshotDiv {
      width: 80%;
      margin-top: 20px;
    }
    .screenshot {
      max-width: 100%;
      margin-right: auto;
      margin-left: auto;
    }
    #screenshotWrapper > div:nth-of-type(3){
      display: none;
    }
    #screenshotWrapper .leftColumn {
      display: none;
    }
    #screenshotWrapper .rightColumn {
      display: none;
    }
    #topHeader {
      background-image: none;
      background-color: #ce3535;
    }
    #screenshotWrapper {
      width: 100%;
    }
    #screenshotWrapper > div {
      display: flex;
      justify-content: center;
    }
    #mobileFeatures {
      display: block;
    }
  }

  #defaultScreenshot {
    display: block;
  }

  #userLinks {
    display: flex;
    justify-content: flex-end;
    font-family: "Open Sans Condensed", helvetica, sans-serif;
  }

  @media (max-width: 991px) {
    #userLinks {
      justify-content: center;
    }
  }

  #userLinks div {
    display: flex;
    justify-content: space-between;
    min-width: 400px;
  }

  #userLinks div a {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 100px;
    font-weight: 600;
    font-size: 16px;
  }

  @media(max-width: 450px) {
    #userLinks div {
      min-width: 320px;
    }
    #userLinks div a {
      width: 80px;
      font-size: 14px;
    }
  }

  #userLinks div a:hover {
    color: #E4667D;
  }

  #userLinks > div {
    margin-top: 20px;
    width: 120px;
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
  }

  @media (min-width: 768px) {
    .hide-mobile {
      display: block;
    }
    .show-mobile {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .hide-mobile {
      display: none;
    }
    .show-mobile {
      display: block;
    }
  }

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

  #learnChinese {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  #learnChinese > section {
    margin-bottom: 60px;
    width: 95%;
    max-width: 900px;
  }

  #learnChinese h2 {
    margin-bottom: 80px;
    margin-top: 20px;
    font-size: 45px;
    font-weight: 700;
    line-height: 48px;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
  }

  #learnChinese .description {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #learnChinese .imgWrapper img {
    height: auto;
    width: 100%;
    max-width: 600px;
  }

  #learnChinese p {
    text-align: justify;
    line-height: 1.5;
  }

  #learnChinese img {
    border-radius: 5px;
  }

  figcaption {
    font-style: italic;
    margin-top: 15px;
  }

  #aboutAuthor {
    background-color: #ce3535;
    line-height: 1.5;
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;
  }

  #aboutAuthor a {
    color: black;
  }

  #aboutAuthor header {
    text-align: center;
  }

  #aboutAuthor section {
    margin-top: 40px;
    max-width: 900px;
    width: 95%;
  }

  #aboutAuthor h2 {
    margin-bottom: 40px;
    margin-top: 20px;
    font-size: 45px;
    font-weight: 700;
    line-height: 48px;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
  }

  #aboutAuthor h3 {
    margin-bottom: 0px;
  }

  #aboutAuthor h4 {
    margin-bottom: 25px;
  }

  #aboutAuthor p {
    line-height: 1.5;
    text-align: justify;
  }

  .authorInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .authorPhoto {
    border-radius: 50%;
    width: 120px;
    height: auto;
    border: solid 3px white;
  }

  .authorName {
    margin-bottom: 25px;
  }

  #testimonials {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #ce3535;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #testimonials h2 {
    margin-bottom: 40px;
    margin-top: 20px;
    font-size: 45px;
    font-weight: 700;
    line-height: 48px;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
  }

  /* Style the imgContainer with a rounded border, grey background and some padding and margin */
  .imgContainer {
    border: 2px solid #ccc;
    background-color: #eee;
    border-radius: 5px;
    padding: 16px;
    margin-top: 16px;
    text-align: left;
    color: black;
    max-width: 700px;
  }

  .imgContainer p {
    font-size: 16px;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.5;
  }

  /* Clear floats after containers */
  .imgContainer::after {
    content: "";
    clear: both;
    display: table;
  }

  /* Float images inside the imgContainer to the left. Add a right margin, and style the image as a circle */
  .imgContainer img {
    float: left;
    margin-right: 20px;
    border-radius: 50%;
    border: white 5px solid;
  }

  /* Increase the font-size of a span element */
  .imgContainer span {
    font-size: 20px;
    margin-right: 15px;
  }

  /* Add media queries for responsiveness. This will center both the text and the image inside the imgContainer */
  @media (max-width: 500px) {
    .imgContainer {
      text-align: center;
    }

    .imgContainer img {
      margin: auto;
      float: none;
      display: block;
    }
  }

  #faq {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
  }

  #faq p {
    font-size: 16px;
  }

  #faq h2 {
    margin-bottom: 80px;
    margin-top: 20px;
    font-size: 45px;
    font-weight: 700;
    line-height: 48px;
    font-family: Whitney SSm A,Whitney SSm B,Whitney,Helvetica Neue,sans-serif;
  }

  #faq h3 {
    margin-top: 30px;
    line-height: 1.3;
  }

  /*@media (min-width: 992px) {
    #faq {
      
    }
  }*/

  #faq > div {
    width: 80%;
  }

  #faq p {
    text-align: justify;
    line-height: 1.5;
  }

  #faq li {
    text-align: justify;
    line-height: 1.5;
  }

  @media(max-width: 450px) {
    #learnChinese h2 {
      font-size: 36px;
      line-height: 36px;
      margin-bottom: 30px;
    }
    #aboutAuthor h2 {
      font-size: 36px;
      line-height: 36px;
      margin-bottom: 40px;
    }
    #testimonials h2 {
      font-size: 36px;
      line-height: 36px;
      margin-bottom: 40px;
    }
    #faq h2 {
      margin-bottom: 40px;
      margin-top: 20px;
      font-size: 36px;
      line-height: 36px;
    }
    #mainHeader h2 {
      font-size: 22px;
      line-height: 25px;
    }
    #learnChinese {
      padding-bottom: 10px;
    }
  }
`;

const SCREENSHOT_IMAGES = {
  default: { src: '/images/homepage/defaultScreenshot.png', label: undefined },
  me: { src: '/images/homepage/meScreenshot.png', label: 'Personalized vocabulary' },
  audio: { src: '/images/homepage/audioScreenshot.png', label: 'Audio' },
  dialog: { src: '/images/homepage/dialogScreenshot.png', label: 'Interactive dialogs' },
  pronunciation: { src: '/images/homepage/pronunciationScreenshot.png', label: 'Pronunciation training' },
  help: { src: '/images/homepage/helpScreenshot.png', label: 'Ask the experts' },
  exercise: { src: '/images/homepage/exerciseScreenshot.png', label: 'Exercises' },
  calligraphy: { src: '/images/homepage/calligraphyScreenshot.png', label: 'Calligraphy' },
  stroke: { src: '/images/homepage/strokeScreenshot.png', label: 'Stroke order' },
  etymology: { src: '/images/homepage/etymologyScreenshot.png', label: 'Etymology' }
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: 'default'
    };
  }

  _handleIconMouseEnter(icon) {
    return () => this.setState({ screenshot: icon });
  }

  _handleIconMouseLeave() {
    return () => this.setState({ screenshot: 'default' });
  }

  render() {
    return (
      <ScrollableWrapper>
        <Wrapper>
          <header id="topHeader" style={{ backgroundImage: `url(${assetEndpointToUrl('/images/homepage/home-gradient.svg')}`, backgroundRepeat: 'no-repeat' }} >
            <div id="mainHeader">
              <h1>ChineseMe</h1>
              <h2>The integrated Chinese course</h2>
              <div id="main-cta">
                <Link to="/course" className="btn-base btn-cta btn-read">
                  <span>Get started</span>
                </Link>
              </div>
              <div id="screenshotWrapper">
                <div>
                  <div className="leftColumn">
                    <div><div onMouseEnter={this._handleIconMouseEnter('me')} onMouseLeave={this._handleIconMouseLeave()} id="meIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/square_logo.jpg')} alt="personalized vocabulary icon"/></div></div>
                    <div><div onMouseEnter={this._handleIconMouseEnter('audio')} onMouseLeave={this._handleIconMouseLeave()} id="audioIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/audioIcon.svg')} alt="audio icon"/></div></div>
                    <div><div onMouseEnter={this._handleIconMouseEnter('dialog')} onMouseLeave={this._handleIconMouseLeave()} id="dialogIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/dialogIcon.svg')} alt="dialog icon"/></div></div>
                  </div>
                  <div id="screenshotDiv">
                    <img className="screenshot" src={assetEndpointToUrl(SCREENSHOT_IMAGES[this.state.screenshot].src)} alt=""/>
                  </div>
                  <div className="rightColumn">
                    <div><div onMouseEnter={this._handleIconMouseEnter('calligraphy')} onMouseLeave={this._handleIconMouseLeave()} id="calligraphyIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/calligraphyIcon.svg')} alt="calligraphy icon"/></div></div>
                    <div><div onMouseEnter={this._handleIconMouseEnter('stroke')} onMouseLeave={this._handleIconMouseLeave()} id="strokeIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/strokeIcon.svg')} alt="stroke order icon"/></div></div>
                    <div><div onMouseEnter={this._handleIconMouseEnter('etymology')} onMouseLeave={this._handleIconMouseLeave()} id="etymologyIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/etymologyIcon.svg')} alt="etymology icon"/></div></div>
                  </div>
                </div>
                <FeatureLabel visibility={this.state.screenshot === 'default' ? 'hidden' : 'visible'}>
                  { SCREENSHOT_IMAGES[this.state.screenshot].label }
                </FeatureLabel>
                <div>
                  <div><div onMouseEnter={this._handleIconMouseEnter('pronunciation')} onMouseLeave={this._handleIconMouseLeave()} id="pronunciationIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/lipsIcon.png')} alt="pronunciation icon"/></div></div>
                  <div><div onMouseEnter={this._handleIconMouseEnter('help')} onMouseLeave={this._handleIconMouseLeave()} id="helpIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/helpIcon.svg')} alt="ask experts icon"/></div></div>
                  <div><div onMouseEnter={this._handleIconMouseEnter('exercise')} onMouseLeave={this._handleIconMouseLeave()} id="exerciseIcon" className="app-icon"><img src={assetEndpointToUrl('/images/homepage/exerciseIcon.svg')} alt="exercise icon"/></div></div>
                </div>
              </div>
            </div>
          </header>

          <div id="mobileFeatures">
            <h2 className="centered">Everything in one course</h2>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/square_logo.jpg')} alt="personalized vocabulary icon"/>
              <span>Personalized vocabulary</span>
            </div>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/audioIcon.svg')} alt="audio icon"/>
              <span>Audio</span>
            </div>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/dialogIcon.svg')} alt="dialog icon"/>
              <span>Interactive dialogs</span>
            </div>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/lipsIcon.png')} alt="pronunciation icon"/>
              <span>Pronunciation training</span>
            </div>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/helpIcon.svg')} alt="ask experts icon"/>
              <span>Ask the experts</span>
            </div>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/exerciseIcon.svg')} alt="exercise icon"/>
              <span>Exercises</span>
            </div>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/calligraphyIcon.svg')} alt="calligraphy icon"/>
              <span>Calligraphy</span>
            </div>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/strokeIcon.svg')} alt="stroke order icon"/>
              <span>Stroke order</span>
            </div>
            <div className="mobile-icon">
              <img src={assetEndpointToUrl('/images/homepage/etymologyIcon.svg')} alt="etymology icon"/>
              <span>Etymology</span>
            </div>
          </div>

          <div id="testimonials" className="centered">
            <h2>Testimonials</h2>
            <div className="imgContainer">
              <img src={assetEndpointToUrl('/images/homepage/Joakim_Enwall.png')} alt="Joakim Enwall" style={{ width: '90px' }} />
              <p><span>Joakim Enwall</span></p>
              <p>Chinese teacher at Uppsala University</p>
              <p>
                <i>"With its fun dialogues and clear explanations, ChineseMe is a wonderful blend of practical skills and academic rigour. Where others tend to ignore or gloss over grammatical intricacies, this course instead goes in-depth to provide an accessible and easily understood presentation of what makes Chinese so unique and interesting. Warmly recommended."</i>
              </p>
            </div>
            <div className="imgContainer">
              <img src={assetEndpointToUrl('/images/homepage/cecilia_lindqvist.png')} alt="Cecilia Lindqvist" style={{ width: '90px' }} />
              <p><span>Cecilia Lindqvist</span></p>
              <p>Author of <i>China – Empire of Living Symbols</i>, Guest Professor at Beijing Language and Culture University</p>
              <p><i>"Finally, a systematic course in Chinese where pronunciation, sentence patterns, character etymology and calligraphy are integrated pedagogically. I have been waiting for years for a course like this!"</i></p>
            </div>
            <div className="imgContainer">
              <img src={assetEndpointToUrl('/images/homepage/rachel_meyer.png')} alt="Rachel Meyer" style={{ width: '90px' }} />
              <p><span>Rachel Meyer</span></p>
              <p>Author of <i>Chit-Chat Chinese</i>, Co-founder of <a href="https://abclang.com/">ABC Languages</a></p>
              <p>
                <i>"ChineseMe is the perfect marriage of solid pedagogical content and an entertaining digital interface. The lessons move in a super logical way taking students from pronunciation, to writing, then on to new words and finally a long dialogue. It has everything you would want in a lesson plan, even an ending quiz. Also loved the cultural tips in each lesson. This program caught my eye right from the start. I recommend giving it a try."</i>
              </p>
            </div>
          </div>

          <div id="learnChinese" className="centered">
            <img id="logo" src={assetEndpointToUrl('/images/homepage/square_logo_small.png')} alt="logo"/>
            <h2 className="centered">Why ChineseMe?</h2>

            <section>
              <div className="description centered">
                <h3>Teleport yourself into Chinese reality</h3>
                <p>If you want to understand a country, learning words and grammar is not enough - you also need to understand culture and social norms. Every text and illustration in our book contains cultural clues to help you socialize and make friends in China.</p>
              </div>
              <figure className="imgWrapper centered">
                <img src={assetEndpointToUrl('/images/homepage/illustration.png')} alt="Chinese culture is so rich, understanding how to behave in China is an eye-opener." />
                <figcaption>“Chinese culture is so rich, understanding how to behave in China is an eye-opener.”</figcaption>
              </figure>
            </section>

            <section>
              <div className="description centered">
                <h3>A course that adapts itself to your interests</h3>
                <p>In the first lesson, we will help you find a Chinese name for yourself. As you go through the course, you will continue to learn specific vocabulary directly linked to your personal ambition and interests.</p>
              </div>
              <figure className="imgWrapper centered">
                <img src={assetEndpointToUrl('/images/homepage/ai-based-course.png')} alt="I’ve never seen a textbook like this. Learning to say my own name on the first page was a real surprise!" />
                <figcaption>“I’ve never seen a textbook like this. Learning to say my own name on the first page was a real surprise!”</figcaption>
              </figure>
            </section>

            <section>
              <div className="description centered">
                <h3>The book is the interface</h3>
                <p>The ChineseMe experience is based on an interactive textbook. Sure, apps with games and other gimmicks may help you to study a foreign language – but the most fundamental tool is always having a pedagogically organised reference textbook with useful and fun dialogs. ChineseMe is totally personalised; you can follow the lessons at your own pace while enjoying the interactive content.</p>
              </div>
              <figure className="imgWrapper centered">
                <img src={assetEndpointToUrl('/images/homepage/book.png')} alt='"The format is a super combination of a printed textbook format and an app. I always know where I am, and I can go back to check things I learned previously, but everything is interactive.”' />
                <figcaption>"The format is a super combination of a printed textbook format and an app. I always know where I am, and I can go back to check things I learned previously, but everything is interactive.”</figcaption>
              </figure>
            </section>

            <section>
              <div className="description centered">
                <h3>Research-based pedagogy</h3>
                <p>Every lesson has been carefully developed to help you learn things in the right order. Words come back regularly, before you can forget them. Pronunciation, vocabulary and sentence patterns are continuously reinforced through integrated interactive exercises. We believe this method is by far the fastest and most effective way of mastering Mandarin Chinese.</p>
              </div>
              <figure className="imgWrapper centered ">
                <img src={assetEndpointToUrl('/images/homepage/pedagogy.png')} alt="Lessons are structured around key elements such as Pronunciation, Patterns, Characters and Dialogs." />
                <figcaption>"Lessons are structured around key elements such as Pronunciation, Patterns, Characters and Dialogs."</figcaption>
              </figure>
            </section>

            <section>
              <div className="description centered">
                <h3>Learn to speak - and understand - Chinese!</h3>
                <p>
                  Mastering pronunciation right from the beginning is crucial to making progress in Chinese. We focus on teaching you the sounds of the language and not just how to spell them in pinyin. Every character, word, example sentence and dialog comes with audio recordings by some of China’s best-known radio hosts, so that you learn the correct, official accent. Audio files are available at two speeds - “slow" and “natural" – and we use several voices to get you used to listening to different people.
                </p>
              </div>
              <figure className="imgWrapper centered">
                <img src={assetEndpointToUrl('/images/homepage/audio-recordings.png')} alt="The pronunciation parts are perfect! I find it hard to learn things if I don’t know how to pronounce them." />
                <figcaption>“The pronunciation parts are perfect! I find it hard to learn things if I don’t know how to pronounce them.”</figcaption>
              </figure>
            </section>

            <section>
              <div className="description centered">
                <h3>Crystal clear explanations</h3>
                <p>The course is built on <Link to="/chinese-grammar">sentence patterns</Link> - the ideal way of learning Chinese grammar without complicated theoretical explanations. And when we do explain grammatical structures, we use terms and ideas that have been developed especially for Mandarin Chinese. Every word and example has been carefully selected for maximum usefulness, and we continuously incorporate student feedback to improve the course.</p>
              </div>
              <figure className="imgWrapper centered">
                <img src={assetEndpointToUrl('/images/homepage/patterns.png')} alt="You really know how to explain difficult concepts."/>
                <figcaption>“You really know how to explain difficult concepts.”</figcaption>
              </figure>
            </section>

            <section>
              <div className="description centered">
                <h3>Calligraphy and stories to help you memorize characters</h3>
                <p>Chinese characters take a lot of effort to learn. We try to make this easier by focusing on the most common characters first, and maximizing the words you can build using already memorised characters. We are also the first course ever to integrate both calligraphy and character etymology as mnemonic aids.</p>
              </div>
              <figure className="imgWrapper centered">
                <img src={assetEndpointToUrl('/images/homepage/explanations.png')} alt="I loved Johan Bjorksten’s book on calligraphy. But seeing the videos is even better!" />
                <figcaption>“I loved Johan Bjorksten’s book on calligraphy. But seeing the videos is even better!”</figcaption>
              </figure>
            </section>

            <section>
              <div className="description centered">
                <h3>Exercises and feedback</h3>
                <p>Every lesson comes with interactive exercises that help you understand and remember the elements and concepts you learn in the course. You decide which exercises, and how many, you want to do. When you feel ready, you can take an exam to make sure you've mastered the lesson.</p>
              </div>
              <figure className="imgWrapper centered">
                <img src={assetEndpointToUrl('/images/homepage/exercises.png')} alt="The exercises are like a mix of DuoLingo and my favorite teacher." />
                <figcaption>“The exercises are like a mix of DuoLingo and my favorite teacher.”</figcaption>
              </figure>
            </section>

          </div>

          <div id="aboutAuthor">
            <h2>About the Authors</h2>
            <section>
              <header className="authorInfo">
                <img className="authorPhoto" src={assetEndpointToUrl('/images/homepage/johan_bjo%CC%88rkste%CC%81n.jpg')} alt="Johan Björkstén" />
                <h3 className="authorName">Johan Björkstén</h3>
                <h4>Co-founder and Author</h4>
              </header>
              <div>
                <p>
                  Johan is a Swedish entrepreneur, a prolific author as well as a radio- and TV host and the founder of the Swedish Chamber of Commerce in China. He is a dedicated language learner and speaks six languages. After learning Russian at the Swedish Armed Forces Language School, he studied Chinese and then spent two years at Peking University (北京大学) studying Chemistry and Mathematics as the only non-Chinese student in the natural sciences department. He later founded several companies in China, including a record company, a radio and TV production business, and the PR firm Eastwei Relations, which became one of China’s largest communications consultancies with over 200 employees in four cities. He also worked as a radio and TV presenter for eight years, hosting over 400 of his own weekly Chinese programmes.  Johan has a Master’s degree in Physical Chemistry from Uppsala University.
                </p>
              </div>
            </section>
            <section>
              <header className="authorInfo">
                <img className="authorPhoto" src={assetEndpointToUrl('/images/homepage/TimotheeAstier.jpg')} alt="Timothée Astier" />
                <h3 className="authorName">Timothée Astier</h3>
                <h4>Co-founder and CTO</h4>
              </header>
              <div>
                <p>
                  Tim is a French entrepreneur and language nerd who started learning Chinese at the age of 14 and immediately fell in love with the Chinese language and culture. Three years later, he moved to Taiwan and spent a year studying Chinese at the National Taoyuan Senior High School (國立桃園高級中學). During his business studies in Paris, focusing on entrepreneurhip, e-business and web-marketing, he developed the initial blueprints for the ChineseMe concept. He is now CTO at ChineseMe, responsible for technical development and marketing. Tim has a Master’s degree in Management Science from leading French business school ESSEC and an MBA from Peking University’s Guanghua School of Management (光华管理学院). To learn more about Tim and the ChineseMe project, watch his 2016 <a href="https://www.youtube.com/watch?v=k7J9salF8FQ">interview</a> on Chinese National Television news program CCTV News.
                </p>
              </div>
            </section>
          </div>

          <div id="faq">
            <div>
              <h2 className="centered">FAQ</h2>
              <h3>IS IT DIFFICULT TO LEARN CHINESE?</h3>
              <p>
                Some people claim that learning Chinese is more difficult than learning other languages. Mandarin Chinese is exotic and different - but many people learn it surprisingly quickly! The key, in our opinion, is to focus on the right things, and use concepts and methods that are especially designed for Chinese rather than adapted from courses in Western languages. So if you like challenging yourself and learning things that are completely different from what you are used to, learning Chinese is not difficult. It's just different.
              </p>
              <h3>DO I REALLY NEED TO LEARN CHINESE CHARACTERS?</h3>
              <p>
                Some language learners try to focus on pīnyīn, skipping the characters entirely. This might look like a reasonable choice if you want to focus on speaking and are not so interested in reading and writing. But in our experience, learning Chinese characters is not only enjoyable, but is also always a good idea and worth the effort. We wrote a complete article about this topic: <a href="https://blog.chinese-me.com/do-you-really-need-to-learn-chinese-characters-b0ff06f6bbb2">Do you really need to learn Chinese characters?</a>
              </p>
              <h3>DO I NEED TO WRITE CHARACTERS?  MY CHINESE FRIENDS JUST TYPE THEM.</h3>
              <p>
                Just like us, people in China write mainly by using electronic input methods. If you have great memory for pictures, you can choose to skip writing characters by hand, and simply learn how to recognize them. That way, you can type characters on your devices. But most people find it easier to remember the characters if they practice writing by hand.
              </p>
              <h3>SHOULD I LEARN CHINESE CALLIGRAPHY?</h3>
              <p>Practicing calligraphy is not something you have to do to learn Chinese. But many people find it enjoyable. The aesthetic principles help us develop a feel for the logic of how Chinese characters have been put together; the rhythm of writing each stroke makes the whole character come alive. After just a short while of practice, this will help you to see the characters in a new way.</p>
              <h3>HOW LONG DOES IT TAKE TO BE ABLE TO COMMUNICATE IN CHINESE?</h3>
              <p>
                Some people have been in China for ages and speak little or no Chinese. Others have good grammar and vocabulary but their pronunciation is so bad that Chinese people can’t understand even their most basic sentences. But the structure of Mandarin Chinese is not difficult - with the right method, you can quickly start to communicate on basic topics. If you focus on the right things, such as pronunciation and characters, you will get a good feel for the language within a few months to a year. After that, all you need to do is grow your vocabulary.
              </p>
              <h3>WHAT IS THE BEST WAY TO LEARN CHINESE?</h3>
              <p>We think a carefully structured course integrating pronunciation, vocabulary, sentence patterns and culture in a single package is the most effective way of studying Chinese. This is why we created ChineseMe - the “anti-Duolingo” of Chinese language learning!</p>
              <h3>WHAT IS THE MOST EFFICIENT WAY TO REVIEW WHAT I LEARN?</h3>
              <p>
                When learning Chinese, you will realize that you will keep forgetting most of the new things that you learn. Many strategies exist to refresh your memory. The most efficient and proven way is to use flashcards. We recommend this approach: <a href="https://blog.chinese-me.com/the-ultimate-chinese-flashcard-system-fbd71e2b63b5">the ultimate Chinese flashcard system</a>.
              </p>
              <h3>WHICH ARE THE BEST RESOURCES?</h3>
              <p>Trying to find the best online resources for Chinese is like panning for gold. There are hundreds of sites, some of them with slick design, claiming to “make Chinese easy”. Few are very useful, but it can be hard for beginners to tell the difference. Below, we highlight a few gold nuggets.</p>
              <h4>Methodology</h4>
              <ul>
                <li>Olle Linge’s blog <a href="http://www.hackingchinese.com">Hacking Chinese</a> is our favorite “how-to” guide for students, telling you what to focus on, where to find the best resources, and so on.</li>
              </ul>
              <h4>Pronunciation</h4>
              <ul>
                <li>Yoyo Chinese has attractively packaged youtube videos on Chinese pronunciation. Some explanations should be taken with a grain of sand. Here is Yoyo’s pronunciation <a href="https://www.youtube.com/watch?v=q2hrlAGewvY&list=PLioS_-8erSI1B8dEErLr28sdgsHMui1d-">playlist</a>.</li>
              </ul>
              <h4>Vocabulary</h4>
              <ul>
                <li>The best dictionary for Chinese is <a href="https://www.pleco.com/">Pleco</a>; its free version is good enough for beginners, and the paid add-on dictionaries are great value for money if you are serious about learning Chinese.</li>
                <li>Our favorite review app is <a href="https://apps.ankiweb.net/">Anki</a>, an open-source flashcard app with space repetition algorithm. The desktop and web-based versions are free and it is available on mobile as a paid app.</li>
              </ul>
              <h4>Forums and volunteer sites</h4>
              <ul>
                <li><a href="https://www.chinese-forums.com/">Chinese-forums</a> has a strong community of language enthusiasts sharing advice on China and the Chinese language.</li>
                <li><a href="https://chinese.stackexchange.com/">Chinese StackExchange</a> is relatively new, so the community is not yet as strong as that of Chinese-forums, but it still contains useful content.</li>
              </ul>
              <p>These are free of charge as long as you help others correct assignments in your own language:</p>
              <ul>
                <li><a href="http://lang-8.com/">Lang-8</a> provides native Mandarin Chinese speakers who will correct your writing assignments, usually within the day. Be aware that volunteers are not professional teachers, so they may miss errors or make corrections that are not really relevant.</li>
                <li>At <a href="https://rhinospike.com/">RhinoSpike</a>, you can upload phrases or entire texts and have native Mandarin Chinese speakers record them for you within a day or two. The quality is usually high.</li>
              </ul>
            </div>
          </div>

          <NLSignupForm
            title="Get our free PDF course"
            text="Sign up now to receive the free PDF version of our Chinese course for beginners, as well as the latest news about the project."
          />
        </Wrapper>
      </ScrollableWrapper>
    );
  }
}

HomePage.propTypes = {
  router: propTypes.object.isRequired
};

export default HomePage;
