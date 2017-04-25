import React, { Component, PropTypes } from 'react';
import { ResourceLoader, ResourceNotFound } from '../';

class Char extends Component {

  componentWillMount() {
    return this.props.getChar(this.props.id);
  }

  renderChar() {
    return (
      <div id="character">
        <div className="infos">
          <div className="ancients">
            <div className="ancient">一</div>
            <div className="ancient">二</div>
            <div className="ancient">三</div>
          </div>
          <div className="box">{this.props.char.get('chinese')}</div>
          <div className="pinyin">{this.props.char.get('pinyint')}</div>
        </div>
        <div className="description">
          <p>{this.props.char.get('explanation')}</p>
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
    if (this.props.isFetching) {
      return <ResourceLoader />;
    }
    if (this.props.char.get('chinese') === undefined) {
      return <ResourceNotFound />;
    }
    return this.renderChar();
  }
}

Char.propTypes = {
  getChar: PropTypes.func.isRequired,
  char: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default Char;
