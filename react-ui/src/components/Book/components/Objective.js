import React, { Component } from 'react';
import propTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import * as c from './.';
import { getGrammarLetter } from '../../../utils/bookContent';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  border: solid black 2px;
  border-radius: 40px;
  width: 80%;
  margin-top: 60px;
  padding-bottom: 50px;
`;

class Objective extends Component {
  _renderPronunciations() {
    const array = [];
    if (isEmpty(this.props.pronunciations)) {
      return null;
    }
    this.props.pronunciations.forEach((p, i) => {
      array.push(
        <div key={i}>{`${getGrammarLetter(i + 1)}. ${p}`}</div>
      );
    });
    return array;
  }

  _renderGrammars() {
    const array = [];
    if (isEmpty(this.props.grammarIds)) {
      return null;
    }
    this.props.grammarIds.forEach((id, i) => {
      array.push(
        <div key={id}>{`${getGrammarLetter(i + 1)}. ${this.props.grammars.get(String(id)).title}`}</div>
      );
    });
    return array;
  }

  render() {
    return (
      <Wrapper>
        <c.PartTitle name="objective" />
        <c.P><i>{this.props.text}</i></c.P>
        <c.PartTitle type="secondary">Pronunciation</c.PartTitle>
        <c.P>{this._renderPronunciations()}</c.P>
        <c.PartTitle type="secondary">Patterns</c.PartTitle>
        <c.P>{this._renderGrammars()}</c.P>
      </Wrapper>
    );
  }
}

Objective.propTypes = {
  grammars: propTypes.object.isRequired,
  grammarIds: propTypes.array.isRequired,
  text: propTypes.string,
  pronunciations: propTypes.arrayOf(propTypes.string)
};

export default Objective;
