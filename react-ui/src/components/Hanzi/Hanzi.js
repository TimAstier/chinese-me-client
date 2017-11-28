// Integration based on the following article
// http://krasimirtsonev.com/blog/article/react-third-party-library-integration

import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import hanziWriterConfig from '../../constants/hanziWriterConfig';
import HanziWriter from 'hanzi-writer';

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
`;

class Hanzi extends Component {

  /* componentDidMount is the proper lifecycle method for initializing
  ** the writer. That’s because we get it called when React mounts the
  ** target-div in the render method.
  */
  componentDidMount() {
    this.targetDiv = this.refs.targetDiv;
    this.writer = new HanziWriter(this.targetDiv, this.props.char, { // eslint-disable-line
      width: 230,
      height: 230,
      strokeAnimationDuration: 800,
      strokeHighlightDuration: 200,
      delayBetweenStrokes: 300,
      showHintAfterMisses: 1,
      showCharacter: this.props.mode === 'static',
      showOutline: this.props.mode === 'animation'
    });
    switch (this.props.mode) {
      case 'animation': return this.animateCharacter();
      case 'quiz': return this.quiz();
      default: return null;
    }
  }

  componentWillReceiveProps(nextProps) {
    // Happens when moving through characters with ElementsNav
    if (this.props.char !== nextProps.char) {
      this.writer.setCharacter(nextProps.char);
    }
    // Happens when clicking watchAgain button in CharacterStrokeQuiz
    if (this.props.watchAgain === false && nextProps.watchAgain === true) {
      this.writer.cancelQuiz();
      this.writer.animateCharacter({
        onComplete: () => {
          this.props.setWatchAgain(false);
          this.quiz();
        }
      });
    }
  }

  // Force a single-render
  shouldComponentUpdate() {
    return false;
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
        <div ref="targetDiv" />
      </Wrapper>
    );
  }
}

Hanzi.propTypes = {
  char: propTypes.string.isRequired,
  mode: propTypes.oneOf(['static', 'animation', 'quiz']).isRequired,
  strokeAnimationFinished: propTypes.func.isRequired,
  onQuizComplete: propTypes.func,
  watchAgain: propTypes.bool.isRequired,
  setWatchAgain: propTypes.func.isRequired,
  animationId: propTypes.string
};

export default Hanzi;
