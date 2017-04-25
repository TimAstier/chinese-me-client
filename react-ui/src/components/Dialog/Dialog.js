import React, { Component, PropTypes } from 'react';
import { Header, Comment } from 'semantic-ui-react';
import { DialogLine } from '../';
import { ResourceLoader, ResourceNotFound } from '../';

class Dialog extends Component {

  componentWillMount() {
    return this.props.getDialog(this.props.id);
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

  renderDialog() {
    return (
      <div id="dialog">
        <div className="title-container">
          <Header as="h1">{this.props.dialog.get('title')}</Header>
        </div>
        <div className="dialog-container">
          <Comment.Group className="large">
            {this.renderDialogLines(this.props.lines)}
          </Comment.Group>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.isFetching) {
      return <ResourceLoader />;
    }
    if (this.props.dialog.get('title') === undefined) {
      return <ResourceNotFound />;
    }
    return this.renderDialog();
  }
}

Dialog.propTypes = {
  getDialog: PropTypes.func.isRequired,
  dialog: PropTypes.object.isRequired,
  lines: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default Dialog;
