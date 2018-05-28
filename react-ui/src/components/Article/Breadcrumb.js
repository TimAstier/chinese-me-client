import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

const Wrapper = styled.section`
  width: 400px;
  max-width: 95%;
  height: 250px;
  border-radius: 15px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  display: flex;
  h3 {
    font-size: 20px;
    text-align: center;
  }
`;

const Img = styled.img`
  max-width: 250px;
  max-height: 125px;
  width: auto;
  height: auto;
`;

class Breadcrumb extends Component {
  render() {
    return (
      <Link to={this.props.path}>
        <Wrapper>
          <h3>{this.props.title}</h3>
          {
            this.props.image &&
              <Img
                src={assetEndpointToUrl('/images/' + this.props.image)}
              />
          }
        </Wrapper>
      </Link>

    );
  }
}

Breadcrumb.propTypes = {
  title: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
  image: propTypes.string
};

export default Breadcrumb;
