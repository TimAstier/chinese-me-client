// Integration based on the following article
// http://krasimirtsonev.com/blog/article/react-third-party-library-integration

import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import hanziWriterConfig from '../../constants/hanziWriterConfig';
import HanziWriter from 'hanzi-writer';

// Note: div and svg styles are here to fix svg tag height bug on Safari.
// See: https://benfrain.com/attempting-to-fix-responsive-svgs-in-desktop-safari/
const Wrapper = styled.div`
  margin-top: 20px;
  width: ${`${hanziWriterConfig.width}px`};
  min-height: ${`${hanziWriterConfig.height}px`};
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.08);
  border: solid 2px #dce6eb;
  font-size: 100px;
  font-family: 'STKaitiSC';
	color: #454545;
  display: flex;
  div {
    width: 100%;
  	display: block;
  	height: auto;
  	position: relative;
  	padding-top: 100%;
  }
  div > svg {
    width: 100%;
  	height: 100%;
  	position: absolute;
  	top: 0;
  	left: 0;
  }
  div > div {
    font-size: 20px;
  }
`;

class Hanzi extends Component {
  /* componentDidMount is the proper lifecycle method for initializing
  ** the writer. That’s because we get it called when React mounts the
  ** target-div in the render method.
  */
  componentDidMount() {
    this.targetDiv = this.refs.targetDiv;
    this.configureWriter(this.props.char, this.props.hanziData);
    switch (this.props.mode) {
      case 'animation': return this.animateCharacter();
      case 'quiz': return this.quiz();
      default: return null;
    }
  }

  componentWillReceiveProps(nextProps) {
    // Happens when two characterStroke exercises follow one-another
    // and click on "continue" (not hit enter) for some unkown reasons
    if (this.props.char !== nextProps.char) {
      this.writer.hideCharacter();
      this.configureWriter(nextProps.char, nextProps.hanziData);
      return this.quiz();
    }
    // Happens when clicking watchAgain button in CharacterStrokeQuiz
    if (this.props.watchAgain === false && nextProps.watchAgain === true) {
      this.writer.cancelQuiz();
      return this.writer.animateCharacter({
        onComplete: () => {
          this.props.setWatchAgain(false);
          this.quiz();
        }
      });
    }
    return null;
  }

  // Force a single-render
  shouldComponentUpdate() {
    return false;
  }

  configureWriter(char, hanziData) {
    if (!hanziData) {
      throw new Error(`Missing hanziData for ${this.props.char}`);
    }
    this.writer = new HanziWriter(this.targetDiv, char, { // eslint-disable-line
      charDataLoader: () => hanziData,
      width: hanziWriterConfig.width,
      height: hanziWriterConfig.height,
      strokeAnimationDuration: 800,
      strokeHighlightDuration: 200,
      delayBetweenStrokes: 300,
      showHintAfterMisses: 1,
      showCharacter: this.props.mode === 'static',
      showOutline: this.props.mode === 'animation'
    });
  }

  animateCharacter() {
    this.writer.animateCharacter({
      onComplete: () => {
        this.props.strokeAnimationFinished(this.props.animationId);
      }
    });
  }

  quiz() {
    this.writer.quiz({
      onComplete: () => this.props.onQuizComplete()
    });
  }

  render() {
    return (
      <Wrapper>
        <div ref="targetDiv"/>
      </Wrapper>
    );
  }
}

Hanzi.propTypes = {
  char: propTypes.string.isRequired,
  hanziData: propTypes.object.isRequired,
  mode: propTypes.oneOf(['static', 'animation', 'quiz']).isRequired,
  strokeAnimationFinished: propTypes.func.isRequired,
  onQuizComplete: propTypes.func,
  watchAgain: propTypes.bool.isRequired,
  setWatchAgain: propTypes.func.isRequired,
  animationId: propTypes.string
};

export default Hanzi;
