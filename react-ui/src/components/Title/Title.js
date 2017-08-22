import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  background-color: orangered;
`;

const LabelsWrapper = styled.div`
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`;

const TitleLabel = styled.div`
  margin-top: 25px;
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 3px;
  color: #454545;
`;

const PartNumberLabel = styled.div`
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #b2babf;
`;

class Title extends Component {

  mapPartNumberToTitle() {
    switch (this.props.partNumber) {
      case 1: return 'CHARACTERS';
      case 2: return 'GRAMMAR';
      case 3: return 'DIALOGS';
      case 4: return 'REVIEW';
      case 5: return 'FINAL EXAM';
      default: return console.log('unkown part number');
    }
  }

  render() {
    return (
      <Wrapper>
        <ImageWrapper></ImageWrapper>
        <LabelsWrapper>
          <PartNumberLabel>{'PART ' + this.props.partNumber}</PartNumberLabel>
          <TitleLabel>{this.mapPartNumberToTitle()}</TitleLabel>
        </LabelsWrapper>
      </Wrapper>
    );
  }
}

Title.propTypes = {
  partNumber: propTypes.number.isRequired
};

export default Title;
