import React, { Component } from 'react';
import propTypes from 'prop-types';
import insertVariables from '../../../utils/insertVariables';
import { bookComponents as c } from '../../.';
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

class Reason extends Component {
  render() {
    const settings = this.props.userSettings;
    return (
      <Wrapper>
        <InfoWrapper>
          <p>In Chinese, <i>{insertVariables('[REASON_LEARN_CHINESE_EN]', settings)}</i> is:</p>
          <c.Char>{insertVariables('[REASON_LEARN_CHINESE]', settings)}</c.Char>
          <c.Pinyin>{insertVariables('[REASON_LEARN_CHINESE_PINYIN]', settings)}</c.Pinyin>
          <br/>
        </InfoWrapper>
        <div>
          <img src={exerciseIcon} alt="" height={30} width={30}/>
        </div>
        <p>You can now practice explaining why you learn Chinese by clicking the <i><b>Exercise icon</b></i> in the course.</p>
      </Wrapper>
    );
  }
}

Reason.propTypes = {
  userSettings: propTypes.object.isRequired,
};

export default Reason;
