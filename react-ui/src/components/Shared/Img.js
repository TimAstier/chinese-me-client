import React, { Component } from 'react';
import propTypes from 'prop-types';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

import styled from 'styled-components';

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
  height: auto;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  font-style: italic;
  color: rgba(0,0,0,.68);
  font-size: 18px;
  line-height: 1.3;
  font-weight: 400;
  margin-top: 10px;
  font-family: "Lucida Grande","Lucida Sans Unicode","Lucida Sans", Geneva, Arial, sans-serif;
`;

class Img extends Component {
  _src() {
    if (this.props.src) {
      return this.props.src;
    }
    return assetEndpointToUrl('/images/' + this.props.name);
  }
  render() {
    return (
      <Figure>
        <StyledImg
          src={this._src()}
          maxWidth={this.props.maxWidth}
          alt={this.props.alt ? this.props.alt : this.props.name}
        />
        {
          this.props.caption &&
            <Figcaption>{this.props.caption}</Figcaption>
        }
      </Figure>
    );
  }
}

Img.propTypes = {
  src: propTypes.string,
  name: propTypes.string,
  alt: propTypes.string,
  maxWidth: propTypes.number,
  caption: propTypes.string
};

export default Img;
