import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle name="characters" />
          <c.P><i>Practice the stroke order animations. Some characters have material on Stories and Calligraphy.</i></c.P>
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>The basic meaning of 用 <b>yòng</b> is <i>to use</i>:</c.P>
          {example(1, { audio: true })}
          <c.P>Depending on context, this sense of <i>using</i> can be translated into many different English expressions, such as <i>with</i>, <i>through</i> or even <i>by</i>:</c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          {example(4, { audio: true })}
          {grammarTitle()}
          {example(5, { audio: true })}
          <c.P>This is also the form of a very common polite phrase in response to someone's thanks:</c.P>
          {example(6, { audio: true })}
          {grammarTitle()}
          <c.P>这么 <b>zhème̊</b> and 那么 <b>nàme̊</b> mean <i>this much</i>, <i>to this extent</i>, and <i>that much</i>, <i>so</i>, <i>to that extent</i>:</c.P>
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          {grammarTitle()}
          <c.P>每 <b>měi</b> can be used with a noun or a measure word to mean <i>each</i></c.P>
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          <c.PartTitle name="dialog" />
          <c.PartTitle type="secondary">你中文怎么学？</c.PartTitle>
          <c.P color={'#C0504D'}><i>The five friends discuss language learning. Colleen and Li Yu then help Marvin go to a bookstore to get some Chinese language books.</i></c.P>
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          <c.PartTitle name="culture" />
          <c.Bookrow center>{image()}</c.Bookrow>
          <c.PartTitle name="words" />
          {newWords()}
          <c.PartTitle anchor="review" name="review" />
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Now, go through the review exercises to practice pronunciation, grammar and character writing. Then do the Exam to progress to the next Lesson.</i>
          </c.P>
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
