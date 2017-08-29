import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { AudioToText as AudioToTextComponent } from '../../components';
import selectors from '../../rootSelectors';

const wordsTest = [{
  chinese: '我',
  pinyin: 'wo3',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '明天',
  pinyin: 'ming2tian1',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '去',
  pinyin: 'qu4',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '你',
  pinyin: 'ni3',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '家',
  pinyin: 'jia1',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '吃饭',
  pinyin: 'chi1fan4',
  aurdioUrl: 'blabla.com'
}];

class AudioToText extends Component {

  render() {
    return (
      <AudioToTextComponent
        words={wordsTest}
        currentBoxIndex={this.props.currentBoxIndex}
      />
    );
  }
}

AudioToText.propTypes = {
  currentBoxIndex: propTypes.number.isRequired
};

const mapStateToProps = state => ({
  currentBoxIndex: selectors.getCurrentBoxIndex(state)
});

export default connect(
  mapStateToProps
)(AudioToText);
