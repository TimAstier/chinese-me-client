import React, { Component } from 'react';

class Character extends Component {

  render() {
    return (
      <div id="character">
        <div className="infos">
          <div className="ancients">
            <div className="ancient">一</div>
            <div className="ancient">二</div>
            <div className="ancient">三</div>
          </div>
          <div className="box">中</div>
          <div className="pinyin">zhong</div>
        </div>
        <div className="description">
          <p>This character used to represent a flag. It can also be
            understood as middle, since the vertical stroke crosses
            the square right in the middle.
          </p>
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
}

Character.propTypes = {};

export default Character;
