import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

const Wrapper = styled.section`
  width: 95%;
  max-width: 450px;
  height: 250px;
  padding-top: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 20px;
  }
`;

const Img = styled.img`
  width: 95%;
  height: auto;
`;

class Breadcrumb extends Component {
  render() {
    return (
      <Link to={this.props.path}>
        <Wrapper>
          <h3>{this.props.title}</h3>
          <Img
            src={assetEndpointToUrl('/images/' + this.props.image)}
          />
        </Wrapper>
      </Link>

    );
  }
}

Breadcrumb.propTypes = {
  title: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
  image: propTypes.string.isRequired
};

export default Breadcrumb;
