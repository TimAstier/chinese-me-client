import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenButton } from '../.';
import { Popup } from 'semantic-ui-react';
import userIcon from '../../images/defaultMaleUserIcon.svg';
import { Link } from 'react-router';
import { UserPopup } from '../.';
import Media from 'react-media';

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
  color: white;
`;

const Toggler = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Stripe = styled.div`
  background-color: white;
  height: 8px;
  border-radius: 2px;
`;

const LeftWrapper = styled.div`
  flex-grow: 1;
  max-width: 100px;  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
  flex-grow: 1;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rightTrigger = (
  <img src={userIcon} alt=""/>
);

const leftTrigger = (
  <Toggler>
    <Stripe />
    <Stripe />
    <Stripe />
  </Toggler>
);

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  align-items: stretch;
  a:hover, a:active{
    background-color: lightgrey;
  }
`;

const Item = styled.div`
  font-size: 16px;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #4183C4;
`;

class MobileNavbar extends Component {
  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <Popup
            trigger={leftTrigger}
            positioning="bottom center"
            hoverable
            hideOnScroll
          >
            <Menu>
              <Link to={'/'}>
                <Item>Home</Item>
              </Link>

              <Link to={'/course'}>
                <Item>Course</Item>
              </Link>

              <Link to={'/blog'}>
                <Item>Blog</Item>
              </Link>
              <Item onClick={this.props.askQuestion}>
                Ask Question
              </Item>
              <Link to={'/help'}>
                <Item>Help</Item>
              </Link>
            </Menu>
          </Popup>
        </LeftWrapper>
        <MiddleWrapper>
          <Media query="(min-width: 900px)">
            { matches => matches
              ? (
                <ScreenButton
                  text="Table of Contents"
                  width={160}
                  height={38}
                  fontSize={16}
                  onClick={this.props.openMapModal}
                />
              )
              : null
            }
          </Media>
        </MiddleWrapper>
        <RightWrapper>
          {this.props.isAuthenticated &&
            <UserPopup logout={this.props.logout} />
          }
          {!this.props.isAuthenticated &&
            <Popup
              trigger={rightTrigger}
              positioning="bottom center"
              hoverable
              hideOnScroll
            >
              <Menu>
                <Link to={'/login'}>
                  <ScreenButton
                    text="LOG IN"
                    width={100}
                    height={30}
                    fontSize={14}
                  />
                </Link>
                <Link to={'/signup'}>
                  <ScreenButton
                    text="REGISTER"
                    width={100}
                    height={30}
                    fontSize={14}
                    primary
                  />
                </Link>
              </Menu>
            </Popup>
          }
        </RightWrapper>
      </Wrapper>
    );
  }
}

MobileNavbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  openMapModal: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired
};

export default MobileNavbar;
