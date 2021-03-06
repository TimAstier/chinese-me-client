import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
// import pinyinNumberToAudioUrl from '../../../utils/pinyinNumberToAudioUrl';
import { Row } from '../../Shared';
// import insertVariables from '../../../utils/insertVariables';
import styled from 'styled-components';

// Custom code to handle "example" dialogs
const Chinese = styled.div`
  font-size: 30px;
  font-family: ChineseFont;
  line-height: 35px;
  min-width: 300px;
`;

const Translation = styled.div`
  line-height: 25px;
  display: flex;
  font-style: italic;
`;

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, practiceIds,
      newWords, grammarTitle, pronunciationTitle, image } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.Bookrow center>{image({ caption: 'At work and in formal settings, you can can call people by family name followed by a title, or preceded by the more relaxed 小 little or 老 old.'})}</c.Bookrow>
          <Objective
            text="How to greet people a bit more formally"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>If you listen to the pronunciation of the characters in this lesson, you will notice that two different sounds are both spelled with the pīnyīn letter <b>a</b>. In the finals -<b>ao</b> and <b>-iao</b>, for example, the <b>a</b> is pronounced like English <i>o</i> in <i>how</i>:</c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>好</c.Char><c.Pinyin>hǎo</c.Pinyin><c.Meaning>good</c.Meaning></Row>
            <Row><c.Char>小</c.Char><c.Pinyin>xiǎo</c.Pinyin><c.Meaning>small</c.Meaning></Row>
          </c.Bookrow>
          <c.P>But the final <b>-ian</b>, on the other hand, is pronounced <i>ien</i>, so here, the pīnyīn <b>a</b> sounds like the <i>e</i> in English <i>pen</i>:</c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>见</c.Char><c.Pinyin>jiàn</c.Pinyin><c.Meaning>see</c.Meaning></Row>
            <Row><c.Char>先</c.Char><c.Pinyin>xiān</c.Pinyin><c.Meaning>first</c.Meaning></Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[0]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {pronunciationTitle()}
          <c.P>Just like in English, you have to raise your tone at the end of a sentence when you ask a question:</c.P>
          <c.Bookrow flexDirection="column">
            <Row lineHeight={25}><c.Char>她很好。/ 她很好吗？</c.Char>↗</Row>
            <Row lineHeight={25}><b>Tā hěn hǎo. / Tā hěn hǎo må?</b></Row>
            <Row lineHeight={25}><i>She is nice. / Is she nice?</i></Row>
          </c.Bookrow>
          <c.Bookrow flexDirection="column">
            <Row lineHeight={25}><c.Char>我是中国人。/ 你也是中国人吗？</c.Char>↗</Row>
            <Row lineHeight={25}><b>Wǒ shì zhōngguó rén. / Nǐ yě shì zhōngguó rén ma?</b></Row>
            <Row lineHeight={25}><i>I am Chinese. / Are you Chinese, too?</i></Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[1]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P>Function words, also called "particles", are an important feature of Chinese. One of the most common examples is the question particle <c.Chinese>吗</c.Chinese> <b>må</b> which transforms statements into "yes/no" questions, questions that can be answered with a <i>yes</i> or a <i>no</i>:</c.P>
          {example(1, { audio: true })}
          <c.P>The question particle always has neutral tone.</c.P>
          <c.P>In English, we usually change the word order to formulate a question:</c.P>
          <c.P>He is busy. ➡ Is he busy?</c.P>
          <c.P>In Chinese, the word order doesn't change; you just add the question particle <c.Chinese>吗</c.Chinese> <b>må</b> to the end of the sentence:</c.P>
          {example(2, { audio: true })}
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Practice asking questions using <c.Chinese>吗</c.Chinese> <b>må</b>.</i>
          </c.P>
          <c.P>The question particle <c.Chinese>吗</c.Chinese> <b>må</b> is used for one a common polite expression:</c.P>
          {example(3, { audio: true })}
          <c.P>Some language learners have misunderstood this phrase as an alternative to <c.Chinese>你好</c.Chinese> <b>nǐhǎo</b> <i>hi!</i> But adding the question particle changes the meaning to <i>How are you?</i>, which is used to inquire about the other person’s well-being, and never as a greeting.</c.P>
          {grammarTitle()}
          <c.P>In a previous lesson, we learned how to <c.Chinese>叫</c.Chinese> <b>jiào</b> <i>call</i> someone we know well. The simplest way is to say the person's full name followed by a greeting:</c.P>
          <c.Bookrow>
            <Row><Chinese>- 王一，你好！</Chinese><Translation>- Hi, Wang Yi!</Translation></Row>
          </c.Bookrow>
          <c.P>At work and in formal settings, it is more common to use only the family name followed by a title or kinship term. The most frequent is to call someone <c.Chinese>小</c.Chinese> <i>little</i> or <c.Chinese>老</c.Chinese> <i>old</i>:</c.P>
          <c.Bookrow flexDirection="column">
            <Row><Chinese>- 小王！</Chinese><Translation>- Little Wang!</Translation></Row>
            <Row><Chinese>- 老李，你好！</Chinese><Translation>- Hi, Old Li!</Translation></Row>
          </c.Bookrow>
          <c.P>
            Both <c.Chinese>小</c.Chinese> and <c.Chinese>老</c.Chinese> can be used as general terms of affection, so someone at the office can be known as <c.Chinese>老王</c.Chinese> to all her colleagues, whether they are older than her or not. In addition, many middle-aged married couples address each other as <c.Chinese>老</c.Chinese> + last name.
            Most commonly, however, the choice between <c.Chinese>小</c.Chinese> and <c.Chinese>老</c.Chinese> depends on whether the person you are addressing is younger or older than yourself. Age is important in China, so a younger person almost always addresses someone older with <c.Chinese>老</c.Chinese> <b>lǎo</b> <i>old</i> as a term of respect,
            while an older person would usually say <c.Chinese>小</c.Chinese> <b>xiǎo</b> <i>little</i> as a term of endearment. If you follow this general rule, you will never go wrong.
          </c.P>
          <c.P>If you don't know the person, or the relationship is very formal, you would use the titles <c.Chinese>先生</c.Chinese> <i>mr.</i> and <c.Chinese>女士</c.Chinese> <i>ms. </i>:</c.P>
          <c.Bookrow flexDirection="column">
            <Row><Chinese>- 王先生！</Chinese><Translation>- Mr. Wang!</Translation></Row>
            <Row><Chinese>- 李女士，你好！</Chinese><Translation>- Hi, Ms. Li!</Translation></Row>
          </c.Bookrow>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[3]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {grammarTitle()}
          <c.P>The most common way of saying <i>bye</i> is:</c.P>
          {example(4, { audio: true })}
          <c.P>These days, many people also use the English term <i>bye, bye, </i> usually pronounced <b>bāibāi</b> (or <b>bābāi</b> with the second syllable much longer than the first).</c.P>
          <c.P>Before saying goodbye, it is also common to add the phrase <c.Chinese>我先走</c.Chinese> <b>wǒ xiān zǒu</b>, literally I FIRST LEAVE, meaning <i>I’ll leave now</i> or <i>OK, I’ll be off</i>.</c.P>
          <c.PartTitle name="dialogs" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          {dialog(2, { sentenceType: 'chinese', displayNames: true })}
          {dialog(2, { sentenceType: 'translation', displayNames: true })}
          {dialog(3, { sentenceType: 'chinese', displayNames: true })}
          {dialog(3, { sentenceType: 'translation', displayNames: true })}
          {dialog(4, { sentenceType: 'chinese', displayNames: true })}
          {dialog(4, { sentenceType: 'translation', displayNames: true })}
          {dialog(5, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
