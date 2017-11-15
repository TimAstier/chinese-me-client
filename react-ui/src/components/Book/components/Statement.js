import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookContainers as C } from '../../../containers';

class Statement extends Component {
  render() {
    if (!this.props.sentences) {
      return null;
    }
    const array = this.props.sentences.map(id => {
      return (
        <C.Sentence
          key={id}
          sentenceId={id}
          sentenceType={this.props.sentenceType}
          displayNames={this.props.displayNames}
          avatarId={this.props.avatarId}
        />);
    });
    return <div>{array}</div>;
  }
}

Statement.propTypes = {
  sentenceType: propTypes.oneOf(['chinese', 'pinyin', 'translation']).isRequired,
  sentences: propTypes.arrayOf(propTypes.number),
  displayNames: propTypes.bool.isRequired,
  avatarId: propTypes.number
};

export default Statement;
