import React, { Component } from 'react';
import { Header, Comment } from 'semantic-ui-react';
import { DialogLine } from '../';
import meijia from './meijia.png';
import zenglaoshi from './zenglaoshi.png';

// TODO: Import this from the DB
const dialogLines = [{
  avatar: zenglaoshi,
  name: '玉国',
  meta: 'Curious',
  text: '你好美女，你叫什么名字？'
}, {
  avatar: meijia,
  name: '美心',
  meta: 'Happy',
  text: '我叫王美心。人美，心也美！'
}, {
  avatar: zenglaoshi,
  name: '玉国',
  meta: 'Shocked',
  text: '你的名字...好特别！'
}, {
  avatar: meijia,
  name: '美心',
  meta: '',
  text: '对啊，我人也很特别。'
}, {
  avatar: meijia,
  name: '美心',
  meta: '',
  text: '对啊，我人也很特别。'
}, {
  avatar: meijia,
  name: '美心',
  meta: '',
  text: '对啊，我人也很特别。'
}];

class Dialog extends Component {

  renderDialogLines(lines) {
    return lines.map((line, i) => {
      return (
        <DialogLine
          key={i}
          avatar={line.avatar}
          name={line.name}
          meta={line.meta}
          text={line.text}
        />
      );
    });
  }

  render() {
    return (
      <div id="dialog">
        <div className="title-container">
          <Header as="h1">What's your name?</Header>
        </div>
        <div className="dialog-container">
          <Comment.Group className="large">
            {this.renderDialogLines(dialogLines)}
          </Comment.Group>
        </div>
      </div>
    );
  }
}

Dialog.propTypes = {};

export default Dialog;
