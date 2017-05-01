import React, { Component, PropTypes } from 'react';
import { ResourceLoader, ResourceNotFound } from '../';

class Word extends Component {

  componentDidMount() {
    return this.props.fetchWord(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.fetchWord(this.props.id);
    }
  }

  renderWord(chinese, pinyint, explanation, english) {
    return (
      <div id="word">
        <div id="chinese">{chinese}</div>
        <div id="pinyint">{pinyint}</div>
        <div id="english">{english}</div>
        <div id="explanation">{explanation}</div>
      </div>
    );
  }

  render() {
    const { chinese, pinyint, explanation, isFetching, english } = this.props;
    if (isFetching) {
      return <ResourceLoader />;
    }
    if (chinese === '') {
      return <ResourceNotFound />;
    }
    return this.renderWord(chinese, pinyint, explanation, english);
  }
}

Word.propTypes = {
  fetchWord: PropTypes.func.isRequired,
  chinese: PropTypes.string.isRequired,
  pinyint: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  english: PropTypes.string.isRequired
};

export default Word;
