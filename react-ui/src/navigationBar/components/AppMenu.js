import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

function isActive() {
  return ' active';
}

const AppMenu = () => {
  return (
    <Menu.Menu className="main-menu-link">
      <a
        href="#"
        className={`item${isActive()}`}
      >
        <Icon name="pencil" />
      </a>
      <a
        href="#"
        className={`item${isActive()}`}
      >
        <Icon name="idea" />
      </a>
    </Menu.Menu>
  );
};

AppMenu.propTypes = {

};

export default AppMenu;
