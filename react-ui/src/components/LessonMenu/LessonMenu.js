import React, { Component, PropTypes } from 'react';
import { Menu, Label, Icon } from 'semantic-ui-react';

class LessonMenu extends Component {

  // TODO: Display number of words
  // TODO: Count number of resources that are completed
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
              <Menu.Item name="grammar" active>
                <Label color="teal" circular size="tiny">
                  0/{this.props.grammarCount}
                </Label>
                Grammar
              </Menu.Item>
              <Menu.Item name="Dialog" />
              <Menu.Item name="characters">
                <Label color="teal" circular size="tiny">
                  0/{this.props.charCount}
                </Label>
                Characters
              </Menu.Item>
              <Menu.Item name="words">
                <Label color="teal" circular size="tiny">
                  0/9
                </Label>
                Words / Expressions
              </Menu.Item>
              <Menu.Item name="Practice" />
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
  grammarCount: PropTypes.number.isRequired
};

export default LessonMenu;
