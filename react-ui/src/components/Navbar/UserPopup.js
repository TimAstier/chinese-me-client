import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Popup } from 'semantic-ui-react';
import userIcon from '../../images/defaultMaleUserIcon.svg';
import logoutIcon from '../../images/logoutIcon.svg';
import accountIcon from '../../images/iconSetting.svg';
import { Link } from 'react-router';

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
  width: 100%;
`;

const Label = styled.div`
  font-family: 'Open Sans';
  flex-grow: 1;
  display: flex;
  div:nth-child(1) {
    flex-grow: 2;
  }
  div:nth-child(2) {
    flex-grow: 5;
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
          <Link to={'/study/account'}>
            <Item>
              <Label>
                <div>
                  <img src={accountIcon} alt=""/>
                </div>
                <div>Account</div>
              </Label>
            </Item>
          </Link>
          <Item onClick={this.props.logout}>
            <Label>
              <div>
                <img src={logoutIcon} alt=""/>
              </div>
              <div>Log Out</div>
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
