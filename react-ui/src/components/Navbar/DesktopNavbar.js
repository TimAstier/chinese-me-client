import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import logo from '../../images/logo.svg';
import helpIcon from '../../images/helpIcon.svg';
import messageIcon from '../../images/messageIcon.svg';
import Clickable from '../Shared/Clickable';
import { Link } from 'react-router';
import { UserPopup } from '../.';
import { ScreenButton } from '../.';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 55px;
  background-color: #363636;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
  display: flex;
  z-index: 1;
  @media print {
    display: none;
  }
`;

const Icon = styled.img`
  height: 35px;
  width: 35px;
`;

const LogoWrapper = styled.div`
  flex-basis: 186px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftMenuWrapper = styled.div`
  flex-basis: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LeftMenuItem = styled.div`
  font-family: 'Open Sans';
  font-size: 20px;
  color: #ffffff;
  a {
    color: inherit;
  }
  a:hover {
    color: #f2f7fa;
  }
`;

const RightMenuWrapper = styled.div`
  width: 120px;
  margin-left: auto;
  display: flex;
`;

const UserMenuWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  margin-top: -5px;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  margin-right: 15px;
`;

const UserIconWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  justify-content: flex-end;
`;

const LoginLinks = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  min-width: 225px;
`;

const IconWrapper = styled.div`
  flex-basis: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class DesktopNavbar extends Component {
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Link to={'/'}>
            <img src={logo} alt="chineseMe logo"/>
          </Link>
        </LogoWrapper>
        <LeftMenuWrapper>
          <LeftMenuItem>
            <Link to={'/blog'}>
              Blog
            </Link>
          </LeftMenuItem>
          <LeftMenuItem>
            <Link to={'/course'}>
              Course
            </Link>
          </LeftMenuItem>
          <LeftMenuItem>
            <ScreenButton
              text="Table of Contents"
              width={160}
              height={38}
              fontSize={16}
              onClick={this.props.openMapModal}
            />
          </LeftMenuItem>
        </LeftMenuWrapper>
        <UserMenuWrapper>
          <UserIconWrapper>
            {
              this.props.isAuthenticated &&
                <UserPopup logout={this.props.logout} />
            }
          </UserIconWrapper>
          {
            !this.props.isAuthenticated &&
              <LoginLinks>
                <Link to={'/login'}>
                  <ScreenButton
                    text="LOG IN"
                    width={100}
                    height={35}
                    fontSize={14}
                  />
                </Link>
                <Link to={'/signup'}>
                  <ScreenButton
                    text="REGISTER"
                    width={100}
                    height={35}
                    fontSize={14}
                    primary
                  />
                </Link>
              </LoginLinks>
          }
        </UserMenuWrapper>
        <RightMenuWrapper>
          <IconWrapper>
            <Clickable>
              <Icon
                src={messageIcon}
                alt=""
                onClick={this.props.askQuestion}
              />
            </Clickable>
          </IconWrapper>
          <IconWrapper>
            <Clickable>
              <Link to={'/help'}>
                <Icon src={helpIcon} alt= "" />
              </Link>
            </Clickable>
          </IconWrapper>
        </RightMenuWrapper>
      </Wrapper>
    );
  }
}

DesktopNavbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  openMapModal: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired
};

export default DesktopNavbar;
