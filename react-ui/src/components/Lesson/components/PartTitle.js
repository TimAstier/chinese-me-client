import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link as LinkComponent } from '../../Shared';
import { Link } from 'react-router';

const H2 = styled.h2`
  font-size: 18px;
  font-family: 'Calibri';
  color: black;
`;

class PartTitle extends Component {

  render() {
    if (!this.props.linkUrl) {
      return <H2>{this.props.children}</H2>;
    }
    return (
        <Link to={this.props.linkUrl}>
          <H2>
            <LinkComponent>
              {this.props.children}
            </LinkComponent>
          </H2>
        </Link>
    );
  }
}

PartTitle.propTypes = {
  children: propTypes.string.isRequired,
  linkUrl: propTypes.string
};

export default PartTitle;
