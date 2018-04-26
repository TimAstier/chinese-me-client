import React, { Component } from 'react';
import propTypes from 'prop-types';
import insertVariables from '../../../utils/insertVariables';
import { bookComponents as c } from '../../.';
import { Row } from '../../Shared';
import styled from 'styled-components';
import exerciseIcon from '../../../images/exerciseIcon.svg';

const Wrapper = styled.div`
  font-family: 'Cambria';
  font-size: 21px;
  text-align: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid red;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-bottom: 20px;
`;

class ChineseName extends Component {
  render() {
    const settings = this.props.userSettings;
    return (
      <Wrapper>
        <InfoWrapper>
          <Row alignItems="center" lineHeight={35}>Your Chinese given name is &nbsp;<c.Char>{insertVariables('[CHINESE_GIVEN_NAME]', settings)}</c.Char>.</Row>
          <Row lineHeight={35}>It means &nbsp;<i>{insertVariables('[NAME_MEANING]', settings)}</i>.</Row>
          <Row alignItems="center" lineHeight={35}>Your Chinese family name is &nbsp;<c.Char>{insertVariables('[CHINESE_FAMILY_NAME]', settings)}</c.Char>.</Row>
          <Row alignItems="center" lineHeight={35}>Your full Chinese name is &nbsp;<c.Char>{insertVariables('[CHINESE_FAMILY_NAME][CHINESE_GIVEN_NAME]', settings)}</c.Char>.</Row>
        </InfoWrapper>
        <div>
          <img src={exerciseIcon} alt="" height={30} width={30}/>
        </div>
        <p>You can now practice saying your Chinese name by clicking the <i><b>Practice icon</b></i> in the course.</p>
      </Wrapper>
    );
  }
}

ChineseName.propTypes = {
  userSettings: propTypes.object.isRequired,
};

export default ChineseName;
