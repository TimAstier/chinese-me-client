import React, { Component } from 'react';
import { Menu, Label, Icon } from 'semantic-ui-react';

class LessonMenu extends Component {

  render() {
    return (
      <div id="lesson-menu">
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Lesson 1</Menu.Header>
            <Menu.Menu>
              <Menu.Item name="objectives">
                <Icon name="checkmark" color="green" size="large"/>
                Objectives
              </Menu.Item>
              <Menu.Item name="grammar" active>
                <Label color="teal" circular size="tiny">3</Label>
                Grammar
              </Menu.Item>
              <Menu.Item name="Dialog" />
              <Menu.Item name="characters">
                <Label color="teal" circular size="tiny">7</Label>
                Characters
              </Menu.Item>
              <Menu.Item name="words">
                <Label color="teal" circular size="tiny">9</Label>
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

LessonMenu.propTypes = {};

export default LessonMenu;
