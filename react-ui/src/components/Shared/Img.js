import React, { Component } from 'react';
import propTypes from 'prop-types';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;

class Img extends Component {
  render() {
    return (
      <StyledImg
        src={assetEndpointToUrl('/images/' + this.props.name)}
        alt={this.props.alt}
      />
    );
  }
}

Img.propTypes = {
  name: propTypes.string.isRequired,
  alt: propTypes.string
};

export default Img;
