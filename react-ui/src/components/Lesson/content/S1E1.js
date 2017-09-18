import React, { Component } from 'react';
import * as c from '../components';
import { getGrammarLetter } from '../../../utils/lessonContent';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S1E1 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { example, lessonTitle, dialog } = this.props;
    return (
      <div>
        {lessonTitle()}
        <c.PartTitle>Grammar</c.PartTitle>
        <c.GrammarTitle letter={getGrammarLetter()}>
          都, <b>dōu</b>, <i>both</i>; <i>all</i>
        </c.GrammarTitle>
        <p>Chinese does not make any difference between <b>both</b> and <b>all</b>; after all, the concept is the same:</p>
        {example()}
        <br/>
        <p>If you want to clarify, you can add the exact number, together with the appropriate measure word, before 都 <b>dōu</b>:</p>
        {example()}
        <br/>
        <br/>
        <p>In order to say <i>both... and</i>, the speaker will list two or more things followed by 都 <b>dōu</b>.</p>
        <br/>
        <p>In the pattern above, you may have noticed that Chinese uses a special comma as a break between items in a list which is different from the comma used to create a pause in sentences. Here is a sentence using both kinds of commas:</p>
        <p>Often, 都 <b>dōu</b> is used together with another word meaning *all*, for example 所有 <b>suǒyǒu</b>:</p>
        <p>Placed after a noun or pronoun, 都 <b>dōu</b> can mean <i>even</i>:</p>
        {dialog()}
      </div>
    );
  }
}
