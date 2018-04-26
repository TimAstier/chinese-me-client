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

class Age extends Component {
  render() {
    const settings = this.props.userSettings;
    return (
      <Wrapper>
        <InfoWrapper>
          <Row alignItems="center" lineHeight={35}>Your age in Chinese numbers is: &nbsp;<c.Char>{insertVariables('[AGE]', settings)}</c.Char>.</Row>
          <Row alignItems="center" lineHeight={35}>You can tell your age to somebody by saying: &nbsp;<c.Char>{insertVariables('我[AGE]岁。', settings)}</c.Char></Row>
        </InfoWrapper>
        <div>
          <img src={exerciseIcon} alt="" height={30} width={30}/>
        </div>
        <p>You can now practice saying your age in Chinese by clicking the <i><b>Exercise icon</b></i> in the course.</p>
      </Wrapper>
    );
  }
}

Age.propTypes = {
  userSettings: propTypes.object.isRequired,
};

export default Age;
