import React, { Component, PropTypes } from 'react';
import { Menu, Label, Icon } from 'semantic-ui-react';

class LessonMenu extends Component {

  renderCompletedMenuItem(name, wording, active) {
    return (
      <Menu.Item name={name} active={active}>
        <Icon name="checkmark" color="green" size="large"/>
        {wording}
      </Menu.Item>
    );
  }

  renderNotCompletedMenuItem(name, wording, active, count, completedCount) {
    return (
      <Menu.Item name={name} active={active}>
        <Label color="teal" circular size="tiny">
          {completedCount}/{count}
        </Label>
        {wording}
      </Menu.Item>
    );
  }

  renderMenuItem(name, wording, count, completedCount) {
    const completed = (completedCount === count);
    const active = (this.props.activeType === name);
    if (count === 0) {
      return false;
    }
    if (completed) {
      return this.renderCompletedMenuItem(name, wording, active);
    }
    return this.renderNotCompletedMenuItem(name, wording, active, count, completedCount);
  }

  render() {
    return (
      <div id="lesson-menu">
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>{this.props.title}</Menu.Header>
            <Menu.Menu>
              <Menu.Item name="objectives">
                <Icon name="checkmark" color="green" size="large"/>
                Objectives
              </Menu.Item>
              {this.renderMenuItem('grammar', 'Grammar', this.props.grammarCount, this.props.completedGrammarCount)}
              {this.renderMenuItem('dialog', 'Dialog', this.props.dialogCount, this.props.completedDialogCount)}
              {this.renderMenuItem('char', 'Characters', this.props.charCount, this.props.completedCharCount)}
              {this.renderMenuItem('word', 'Words', this.props.wordCount, this.props.completedWordCount)}
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

LessonMenu.propTypes = {
  title: PropTypes.string.isRequired,
  charCount: PropTypes.number.isRequired,
  completedCharCount: PropTypes.number.isRequired,
  grammarCount: PropTypes.number.isRequired,
  completedGrammarCount: PropTypes.number.isRequired,
  dialogCount: PropTypes.number.isRequired,
  completedDialogCount: PropTypes.number.isRequired,
  wordCount: PropTypes.number.isRequired,
  completedWordCount: PropTypes.number.isRequired,
  activeType: PropTypes.string.isRequired
};

export default LessonMenu;
