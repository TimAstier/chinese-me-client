import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Popup } from 'semantic-ui-react';
import userIcon from '../../images/defaultMaleUserIcon.svg';
import logoutIcon from '../../images/logoutIcon.svg';

const trigger = (
  <img src={userIcon} alt=""/>
);

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`;

const Item = styled.div`
  font-size: 16px;
  text-align: center;
  color: #7f8c94;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #F2F7FA;
  }
`;

const Label = styled.div`
  font-family: 'Open Sans';
  display: flex;
  align-items: center;
  span {
    margin-left: 11px;
  }
`;

class UserPopup extends Component {
  render() {
    return (
      <Popup
        trigger={trigger}
        positioning="bottom center"
        hoverable
      >
        <Menu>
          <Item onClick={this.props.logout}>
            <Label>
              <img src={logoutIcon} alt=""/><span>Log Out</span>
            </Label>
          </Item>
        </Menu>
      </Popup>
    );
  }
}

UserPopup.propTypes = {
  logout: propTypes.func.isRequired
};

export default UserPopup;
