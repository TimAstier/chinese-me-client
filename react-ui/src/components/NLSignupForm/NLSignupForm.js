import React, { Component } from 'react';
import propTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from 'styled-components';

const SignupFormWrapper = styled.div`
  margin-top: 60px;
  background-color: #ce3535;
  div {
    padding-top: 30px;
    padding-bottom: 15px;
    color: white;
    text-align: center;
    h2 {
      margin: 0;
      margin-bottom: 20px;
      font-size: 30px;
    }
    div > div {
      background-color: #ffffff;
      margin-bottom: 20px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    input {
      font-family: "Open Sans","Helvetica Neue",Arial,Helvetica,Verdana,sans-serif;
      font-size: 15px;
      border: 1px solid #ABB0B2;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      color: #343434;
      background-color: #fff;
      box-sizing: border-box;
      height: 32px;
      padding: 0px 0.4em;
      display: inline-block;
      margin: 0;
      width: 350px;
      vertical-align: top;
    }
    button {
      background-color: #244746;
      height: 32px;
      line-height: 32px;
      padding: 0 18px;
      transition: all 0.23s ease-in-out 0s;
      border-radius: 3px;
      border: none;
      font-size: 14px;
      margin-left: 5px;
    }
    button:hover {
      background-color: #777;
      cursor: pointer;
    }
  }
`;

const P = styled.p`
  font-size: 16px;
  line-height: 22px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Lucida Grande", Helvetica, Arial, sans-serif;
`;

class NLSignupForm extends Component {
  render() {
    const SimpleForm = () => <MailchimpSubscribe url="https://chinese-me.us17.list-manage.com/subscribe/post?u=e766866f8f1d9b5c999504f74&amp;id=220277c22b"/>;
    return (
      <SignupFormWrapper>
        <div>
          <h2>{ this.props.title }</h2>
          <P>{ this.props.text }</P>
          { SimpleForm() }
        </div>
      </SignupFormWrapper>
    );
  }
}

NLSignupForm.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired
};

export default NLSignupForm;
