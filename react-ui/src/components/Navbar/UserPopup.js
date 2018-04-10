import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Popup } from 'semantic-ui-react';
import userIcon from '../../images/defaultMaleUserIcon.svg';
import logoutIcon from '../../images/logoutIcon.svg';
// import accountIcon from '../../images/iconSetting.svg';
import booksIcon from '../../images/books.png';
import { Link } from 'react-router';

const trigger = (
  <img src={userIcon} alt=""/>
);

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
`;

const Item = styled.div`
  font-size: 16px;
  color: #7f8c94;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'Open Sans';
  :hover {
    background-color: #F2F7FA;
  }
  width: 100%;
`;

const IconWrapper = styled.div`
  width: 22px;
  img {
    max-width: 22px;
    height: auto;
  }
`;

const Label = styled.div`
  padding-left: 20px;
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
          {/* <Link to={'/study/account'}>
            <Item>
              <IconWrapper>
                <img src={accountIcon} alt=""/>
              </IconWrapper>
              <Label>Account</Label>
            </Item>
          </Link> */}
          <Link to={'/study/store'}>
            <Item>
              <IconWrapper>
                <img src={booksIcon} alt=""/>
              </IconWrapper>
              <Label>Store</Label>
            </Item>
          </Link>
          <Item onClick={this.props.logout}>
            <IconWrapper>
              <img src={logoutIcon} alt=""/>
            </IconWrapper>
            <Label>Log Out</Label>
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
