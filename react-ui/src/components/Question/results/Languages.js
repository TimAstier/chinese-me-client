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

class Languages extends Component {
  render() {
    const settings = this.props.userSettings;
    return (
      <Wrapper>
        <InfoWrapper>
          <p>Here are the names of your languages in Chinese:</p>
          <Row alignItems="center" lineHeight={35}>
            <c.Char>{insertVariables('[MOTHER_TONGUE_ZH]', settings)}</c.Char>
            <c.Pinyin>{insertVariables('[MOTHER_TONGUE_PINYIN]', settings)}</c.Pinyin>
            <c.Meaning>{insertVariables('[MOTHER_TONGUE]', settings)}</c.Meaning>
          </Row>
          {
            insertVariables('[OTHER_LANGUAGE]', settings) !== '__' &&
            insertVariables('[OTHER_LANGUAGE]', settings) !== 'N/A' &&
              <Row alignItems="center" lineHeight={35}>
                <c.Char>{insertVariables('[OTHER_LANGUAGE_ZH]', settings)}</c.Char>
                <c.Pinyin>{insertVariables('[OTHER_LANGUAGE_PINYIN]', settings)}</c.Pinyin>
                <c.Meaning>{insertVariables('[OTHER_LANGUAGE]', settings)}</c.Meaning>
              </Row>
          }
          <Row alignItems="center" lineHeight={35}>
            <c.Char>中文</c.Char>
            <c.Pinyin>zhōngwén</c.Pinyin>
            <c.Meaning>Chinese</c.Meaning>
          </Row>
        </InfoWrapper>
        <div>
          <img src={exerciseIcon} alt="" height={30} width={30}/>
        </div>
        <p>You can now practice talking about the languages you speak by clicking the <i><b>Exercise icon</b></i> in the course.</p>
      </Wrapper>
    );
  }
}

Languages.propTypes = {
  userSettings: propTypes.object.isRequired,
};

export default Languages;
