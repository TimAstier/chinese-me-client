import React, { Component } from 'react';
import propTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { ScreenButton } from '../.';
import Api from '../../utils/api';

class TakeMoney extends Component {
  // TODO: send the seasonId
  onToken = token => {
    Api
      .post('/stripe-payment', {
        source: token.id,
        productName: this.props.productName,
        amount: this.props.price,
        email: token.email
      })
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
        name="ChineseMe"
        description={this.props.productName}
        image="https://s3.eu-west-2.amazonaws.com/chineseme/square_logo_small.png"
        amount={this.props.price}
        currency="USD"
        email={this.props.email}
        allowRememberMe={false}
        panelLabel="Buy for"
      >
        <ScreenButton primary text="Buy"/>
      </StripeCheckout>
    );
  }
}

TakeMoney.propTypes = {
  email: propTypes.string.isRequired,
  productName: propTypes.string.isRequired,
  price: propTypes.number.isRequired
};

export default TakeMoney;
