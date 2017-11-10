import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link as LinkComponent } from '../../Shared';
import { Link } from 'react-router';

const H2 = styled.h2`
  font-size: 20px;
  font-family: 'Calibri';
  color: black;
`;

class PartTitle extends Component {

  render() {
    if (!this.props.linkUrl) {
      return <H2>{this.props.children}</H2>;
    }
    return (
      <H2>
        <LinkComponent>
          <Link to={this.props.linkUrl}>
            {this.props.children}
          </Link>
        </LinkComponent>
      </H2>
    );
  }
}

PartTitle.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired,
  linkUrl: propTypes.string
};

export default PartTitle;
