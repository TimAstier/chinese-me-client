import React, { Component, PropTypes } from 'react';
import { ResourceLoader, ResourceNotFound } from '../';

class Char extends Component {

  componentDidMount() {
    return this.props.fetchChar(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.fetchChar(this.props.id);
    }
  }

  renderChar(chinese, pinyint, explanation) {
    return (
      <div id="char">
        <div id="chinese">{chinese}</div>
        <div id="pinyint">{pinyint}</div>
        <div id="explanation">{explanation}</div>
      </div>
    );
  }

  render() {
    const { chinese, pinyint, explanation, isFetching } = this.props;
    if (isFetching) {
      return <ResourceLoader />;
    }
    if (chinese === '') {
      return <ResourceNotFound />;
    }
    return this.renderChar(chinese, pinyint, explanation);
  }
}

Char.propTypes = {
  fetchChar: PropTypes.func.isRequired,
  chinese: PropTypes.string.isRequired,
  pinyint: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default Char;
