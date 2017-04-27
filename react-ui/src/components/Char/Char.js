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
      <div id="character">
        <div className="infos">
          <div className="ancients">
            <div className="ancient">一</div>
            <div className="ancient">二</div>
            <div className="ancient">三</div>
          </div>
          <div className="box">{chinese}</div>
          <div className="pinyin">{pinyint}</div>
        </div>
        <div className="description">
          <p>{explanation}</p>
        </div>
        <div className="words">
          <p>Words you've seen before containing 中</p>
          <div>中国</div>
          <div>高中</div>
          <div>中间</div>
        </div>
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
  id: PropTypes.number.isRequired
};

export default Char;
