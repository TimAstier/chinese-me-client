import React, { Component, PropTypes } from 'react';
import { ResourceLoader, ResourceNotFound } from '../';

class Character extends Component {

  componentWillMount() {
    return this.props.getChar(this.props.routeParams.id);
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

Character.propTypes = {
  getChar: PropTypes.func,
  char: PropTypes.object,
  isFetching: PropTypes.bool,
  routeParams: PropTypes.object.isRequired
};

export default Character;
