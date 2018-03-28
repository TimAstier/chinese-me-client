import React, { Component } from 'react';
import propTypes from 'prop-types';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
  height: auto;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  font-style: italic;
  color: rgba(0,0,0,.68);
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  font-family: "Lucida Grande","Lucida Sans Unicode","Lucida Sans", Geneva, Arial, sans-serif;
`;

class Img extends Component {
  render() {
    return (
      <figure>
        <StyledImg
          src={assetEndpointToUrl('/images/' + this.props.name)}
          maxWidth={this.props.maxWidth}
          alt={this.props.alt}
        />
        {
          this.props.caption &&
            <Figcaption>{this.props.caption}</Figcaption>
        }
      </figure>
    );
  }
}

Img.propTypes = {
  name: propTypes.string.isRequired,
  alt: propTypes.string,
  maxWidth: propTypes.number,
  caption: propTypes.string
};

export default Img;
