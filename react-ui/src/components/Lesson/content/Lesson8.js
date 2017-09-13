import React, { Component } from 'react';
import * as c from '../components';
import { getGrammarLetter } from '../../../utils/lessonContent';
import propTypes from 'prop-types';

class Lesson8 extends Component {
  render() {
    const { example } = this.props;
    return (
      <div>
        <c.LessonTitle>Episode 7: 你家人都在中国吗？</c.LessonTitle>
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
        {example()}
        <br/>
        <p>In order to say <i>both... and</i>, the speaker will list two or more things followed by 都 <b>dōu</b>.</p>
        <p>In the pattern above, you may have noticed that Chinese uses a special comma as a break between items in a list which is different from the comma used to create a pause in sentences. Here is a sentence using both kinds of commas:</p>
        <br/>
        <p>Often, 都 <b>dōu</b> is used together with another word meaning *all*, for example 所有 <b>suǒyǒu</b>:</p>
        <br/>
        <c.GrammarTitle letter={getGrammarLetter()}>
          都 meaning <i>even</i>
        </c.GrammarTitle>
        <p>Placed after a noun or pronoun, 都 <b>dōu</b> can mean <i>even</i>:</p>
        <br/>
        <c.PartTitle>会话：你家人都在中国吗？</c.PartTitle>
        <p>The acquaintances learn a bit about each other's families and Marvin picks up a few new words.</p>
        <c.Statement
          name={'李玉'}
          text={'马文，你家人都在中国吗？'}
          type={'chinese'}
        />
        <c.Statement
          name={'马文'}
          text={'我的家人都在美国。我一个人在中国。'}
          type={'chinese'}
        />
        <c.Statement
          name={'王美心'}
          text={'高英也是，她老公在美国，是不是，高英？'}
          type={'chinese'}
        />
        <c.Statement
          text={'这里没有名字'}
          type={'chinese'}
        />
        <br/>
        <c.Statement
          name={'Li3yu4'}
          text={'ma3wen2, ni3 jia1 dou1 zai4 Zhong1guo2 ma0?'}
          type={'pinyin'}
        />
        <c.Statement
          name={'Liyu'}
          text={'Ma Wen, is your whole family in China? '}
          type={'translation'}
        />
      </div>
    );
  }
}

Lesson8.propTypes = {
  number: propTypes.number.isRequired,
  example: propTypes.func.isRequired
};

export default Lesson8;
