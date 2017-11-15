import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
// import { Link as LinkComponent } from '../../Shared';
// import { Link } from 'react-router';
import { Bookrow } from './.';

const H2 = styled.h2`
  font-size: ${props => props.secondary ? '22px' : '24px'};
  font-family: 'Calibri';
  color: ${props => props.secondary ? '#C0504D' : '#4F81BD'};
`;

class PartTitle extends Component {

  // _renderWithLink() {
  //   return (
  //     <LinkComponent>
  //       <Link to={this.props.linkUrl}>
  //         {this.props.children}
  //       </Link>
  //     </LinkComponent>
  //   );
  // }

  render() {
    const { secondary } = this.props;
    return (
      <Bookrow marginBottom={15}>
        <H2 secondary={secondary ? secondary : false}>
          { this.props.children }
        </H2>
      </Bookrow>
    );
  }
}

PartTitle.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired,
  secondary: propTypes.bool
  // linkUrl: propTypes.string
};

export default PartTitle;
