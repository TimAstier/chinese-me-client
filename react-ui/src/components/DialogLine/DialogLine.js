import React, { Component, PropTypes } from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import meijia from './meijia.png';
import yuguo from './zenglaoshi.png';
import gao from './gao.png';
import mawen from './mawen.png';

const avatars = {
  'meijia': meijia,
  'yuguo': yuguo,
  'mawen': mawen,
  'gao': gao
};

class DialogLine extends Component {

  render() {
    return (
      <Comment>
        <Comment.Avatar as="a" src={avatars[this.props.avatar]} />
        <Comment.Content>
          <Comment.Author as="a">{this.props.name}</Comment.Author>
          <Comment.Metadata>
            <span>{this.props.meta}</span>
          </Comment.Metadata>
          <Comment.Text>
            {this.props.text}
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>
              <Icon name="video play" />
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}

DialogLine.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  meta: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default DialogLine;
