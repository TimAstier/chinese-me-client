import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as models from '../../../models';
import styled from 'styled-components';
import { Row } from '../../Shared';
import pinyinize from 'pinyinize';
import { bookContainers as C } from '../../../containers';

const Char = styled.div`
  font-size: 30px;
  font-family: ChineseFont;
  line-height: 1.1;
`;

const Pinyin = styled.div`
  font-family: 'Cambria';
  font-size: 21px;
  font-weight: bold;
  color: #454545;
  margin-left: 10px;
  margin-top: 10px;
`;

const Meaning = styled.div`
  font-family: 'Cambria';
  font-size: 21px;
  font-style: italic;
  color: #454545;
  margin-left: 10px;
  margin-top: 10px;
`;

class CharacterDetails extends Component {

  render() {
    return (
      <Row>
        <Char>{this.props.character.simpChar}</Char>
        <Pinyin>{pinyinize(this.props.character.pinyinNumber)}</Pinyin>
        <Meaning>{this.props.character.meaning}</Meaning>
        {
          this.props.character.writingUrl &&
            <C.BookButton
              buttonOptions={{
                type: 'writing',
                data: {
                  elementId: this.props.character.id
                }
              }}
            />
        }
        {
          this.props.character.etymologyUrl &&
            <C.BookButton
              buttonOptions={{
                type: 'story',
                data: {
                  elementId: this.props.character.id
                }
              }}
            />
        }
      </Row>
    );
  }
}

CharacterDetails.propTypes = {
  character: propTypes.instanceOf(models.Character).isRequired
};

export default CharacterDetails;
