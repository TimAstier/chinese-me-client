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
          this.props.purchasedProduct(
            {
              productName: this.props.productName,
              price: this.props.price
            }
          );
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
        panelLabel={`${this.props.preorder ? 'Pre-order' : 'Buy'} for`}
      >
        <ScreenButton
          secondary
          text={
            `${this.props.preorder ? 'Pre-order' : 'Buy'} for ${(this.props.price / 100)
              .toLocaleString('en-US', {style: 'currency', currency: 'USD'})
            }`}
          width={180}
          height={40}
          fontSize={16}
          onClick={() => this.props.clickedBuyButton(this.props.productName)}
        />
      </StripeCheckout>
    );
  }
}

TakeMoney.propTypes = {
  email: propTypes.string,
  productName: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  seasonId: propTypes.number.isRequired,
  reloadApp: propTypes.func.isRequired,
  clickedBuyButton: propTypes.func.isRequired,
  purchasedProduct: propTypes.func.isRequired,
  preorder: propTypes.bool
};

export default TakeMoney;
