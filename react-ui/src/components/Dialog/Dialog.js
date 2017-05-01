import React, { Component, PropTypes } from 'react';
import { Header, Comment } from 'semantic-ui-react';
import { DialogLine } from '../';
import { ResourceLoader, ResourceNotFound } from '../';

class Dialog extends Component {

  componentDidMount() {
    return this.props.fetchDialog(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.fetchDialog(this.props.id);
    }
  }

  renderDialogLines(lines) {
    return lines.map((line, i) => {
      return (
        <DialogLine
          key={i}
          avatar={line.get('avatar')}
          name={line.get('name')}
          meta={line.get('meta')}
          text={line.get('text')}
        />
      );
    });
  }

  renderDialog(title, lines) {
    return (
      <div id="dialog">
        <div className="title-container">
          <Header as="h1">{title}</Header>
        </div>
        <div className="dialog-container">
          <Comment.Group className="large">
            {this.renderDialogLines(lines)}
          </Comment.Group>
        </div>
      </div>
    );
  }

  render() {
    const { title, lines, isFetching } = this.props;
    if (isFetching) {
      return <ResourceLoader />;
    }
    if (title === '') {
      return <ResourceNotFound />;
    }
    return this.renderDialog(title, lines);
  }
}

Dialog.propTypes = {
  fetchDialog: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  lines: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default Dialog;
