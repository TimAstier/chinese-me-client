import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import iconCharacter from '../../images/iconCharacter.svg';
import iconGrammar from '../../images/iconGrammar.svg';
import iconDialog from '../../images/iconDialog.svg';
import iconReview from '../../images/iconReview.svg';
import iconExam from '../../images/iconExam.svg';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  mapPartNumberToTitleAndIcon() {
    switch (this.props.partNumber) {
      case 1: return { title: 'CHARACTERS', icon: iconCharacter };
      case 2: return { title: 'GRAMMAR', icon: iconGrammar };
      case 3: return { title: 'DIALOGS', icon: iconDialog };
      case 4: return { title: 'REVIEW', icon: iconReview };
      case 5: return { title: 'FINAL EXAM', icon: iconExam };
      default: return console.log('unkown part number');
    }
  }

  render() {
    const { title, icon } = this.mapPartNumberToTitleAndIcon();
    return (
      <Wrapper>
        <ImageWrapper>
          <img src={icon} alt={title + ' icon'} />
        </ImageWrapper>
        <LabelsWrapper>
          <PartNumberLabel>{'PART ' + this.props.partNumber}</PartNumberLabel>
          <TitleLabel>{title}</TitleLabel>
        </LabelsWrapper>
      </Wrapper>
    );
  }
}

Title.propTypes = {
  partNumber: propTypes.number.isRequired
};

export default Title;
