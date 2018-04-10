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
        email: token.email,
        seasonId: this.props.seasonId
      })
      .then(response => {
        if (response.status === 200) {
          return this.props.reloadApp();
        }
        return null;
      });
  }

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
        name="ChineseMe"
        description={this.props.productName}
        image="https://s3.eu-west-2.amazonaws.com/chineseme/square_logo_small.png"
        amount={this.props.price}
        currency="USD"
        email={this.props.email}
        panelLabel="Buy for"
      >
        <ScreenButton
          primary
          text="Buy"
          fontSize={14}
          height={25}
          width={75}
        />
      </StripeCheckout>
    );
  }
}

TakeMoney.propTypes = {
  email: propTypes.string.isRequired,
  productName: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  seasonId: propTypes.number.isRequired,
  reloadApp: propTypes.func.isRequired
};

export default TakeMoney;
