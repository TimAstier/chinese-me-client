import React, { Component } from 'react';
import * as c from '../components';
import { Objective } from '../../../containers/Book/containers';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import { Row } from '../../Shared';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog, grammarTitle,
      practiceIds, newWords, pronunciationTitle } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <Objective
            text="The importance of being humble in Chinese"
          />
          <c.PartTitle name="pronunciation" />
          {pronunciationTitle()}
          <c.P>
            A few characters can be pronounced in more than one way. For example, we have learned that <c.Chinese>好</c.Chinese> is pronounced <b>hǎo</b> and means <i>good</i>. But <c.Chinese>好</c.Chinese> can also be a verb meaning <i>to like</i>; in this case it has Tone 4: <b>hào</b>. This meaning – and pronunciation – of <c.Chinese>好</c.Chinese> only appears as part of words, such as <c.Chinese>好客</c.Chinese> <b>hàokè</b> <i>hospitable</i> which literally means <i>to like guests</i>.
          </c.P>
          <c.PartTitle name="characters" />
          {newCharacters()}
          <c.PartTitle name="patterns" />
          {grammarTitle()}
          <c.P><c.Chinese>不</c.Chinese> <b>bù</b> can be used independently to answer a question, just like English <i>no</i>. It can also be used like English <i>not</i> to negate any of the sentences we have learned so far. <c.Chinese>不</c.Chinese> <b>bù</b> is always placed in front of the word or phrase it should negate. Let’s start by negating simple Topic-Comment sentences:</c.P>
          {example(1, { audio: true })}
          {example(2, { audio: true })}
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
          <c.P>The filler word <c.Chinese>很</c.Chinese> <b>hěn</b> comes before the negation:</c.P>
          {example(3, { audio: true })}
          <c.P>In the same way, <c.Chinese>不</c.Chinese> can be placed before verbs:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          <c.P>Note the pronunciation in the patterns above: <c.Chinese>不</c.Chinese> is pronounced in two different ways, depending on the tone that comes after. If the following tone is 1, 2, or 3, <c.Chinese>不</c.Chinese> is pronounced <b>bù</b>, with Tone 4:</c.P>
          <c.Bookrow flexDirection="column">
            <Row marginBottom={10}><b>bù hǎo</b><c.Space width={30}/><i>not good</i></Row>
            <Row><b>bù měi</b><c.Space width={30}/><i>not beautiful</i></Row>
          </c.Bookrow>
          <c.P>But if the following tone is Tone 4, <c.Chinese>不</c.Chinese> changes to Tone 2, <b>bú</b>:</c.P>
          <c.Bookrow flexDirection="column">
            <Row marginBottom={10}><b>bú huì</b><c.Space width={30} marginBottom={10}/><i>cannot</i></Row>
            <Row><b>bú shì</b><c.Space width={30}/><i>is not</i></Row>
          </c.Bookrow>
          <c.P>
            This is another example of <i>tone sandhi</i>, where the tone on a character changes depending on what comes after it – we have seen other examples of this, for example when a Tone 3 comes before another Tone 3. Tone sandhi is usually not marked in dictionaries and textbooks: <c.Chinese>不</c.Chinese> is written <b>bù</b>, with Tone 4, regardless of what comes after. You will just have to remember that the actual pronunciation is different from what the dictionary indicates.
          </c.P>
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
          <c.P>Remember that <c.Chinese>不</c.Chinese> <b>bù</b> negates whatever comes immediately after it. When we negate a statement with <c.Chinese>也</c.Chinese> <b>yě</b> <i>also</i> the resulting phrase can be translated using <i>not… either</i> in English:</c.P>
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>But in questions with <c.Chinese>也</c.Chinese> <b>yě</b> <i>also</i> we actually have two possibilities. We can negate the meaning of the phrase following <c.Chinese>也</c.Chinese>:</c.P>
          {example(8, { audio: true })}
          <c.P>The other possibility is to use <c.Chinese>不</c.Chinese> <b>bù</b> to negate <c.Chinese>也</c.Chinese> :</c.P>
          {example(9, { audio: true })}
          <c.P>Pattern 9:9 expresses surprise; it can be translated as a rhetorical question: <i>(but) isn’t it the case that you are also American?</i> Again, the literal translation should make the difference clear.</c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[2]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {grammarTitle()}
          <c.P>In Lesson 6, we learned how to use the question particle <c.Chinese>吗</c.Chinese> <b>må</b> to formulate questions that can be answered <i>yes</i> or <i>no</i>, such as <i>can you write Chinese characters?</i> The most common way of answering <i>yes</i> is by repeating only the thing being asked about:</c.P>
          {example(10, { audio: true })}
          <c.P>The answer is "KNOW-HOW-TO", because that is what the question is asking about. You normally can't just say <c.Chinese>是</c.Chinese> <b>shì</b> or  <c.Chinese>不</c.Chinese> <b>bù</b> as we say <i>yes</i> or <i>no</i> in English – in Chinese it would sound harsh, like a military order. But just like in English, you can answer with a shorter or longer phrase (<i>yes</i>; <i>yes I can</i>; or <i>yes I can speak Chinese</i>) depending on how clear you want to be:</c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>- 你会说中国话吗？</c.Char></Row>
            <Row><c.Char>- 会。</c.Char></Row>
            <Row><c.Char>- 会说。</c.Char></Row>
            <Row><c.Char>- 我会说。</c.Char></Row>
            <Row><c.Char>- 我会说中国话。</c.Char></Row>
          </c.Bookrow>
          <c.P>If you want to answer <i>no</i>, you use <c.Chinese>不</c.Chinese> <b>bù</b> <i>not</i> to negate your response:</c.P>
          {example(11, { audio: true })}
          <c.P>Again, you can choose a more complete answer as appropriate:</c.P>
          <c.Bookrow flexDirection="column">
            <Row><c.Char>- 你会说中国话吗？</c.Char></Row>
            <Row><c.Char>- 不会。</c.Char></Row>
            <Row><c.Char>- 不会说。</c.Char></Row>
            <Row><c.Char>- 我不会说。</c.Char></Row>
            <Row><c.Char>- 我不会说中国话。</c.Char></Row>
          </c.Bookrow>
          <c.P>In some contexts, it is also possible to use <c.Chinese>不</c.Chinese> <b>bù</b> directly like English <i>no</i> to answer a question or contradict a statement:</c.P>
          {example(12, { audio: true })}
          <c.P>Using <c.Chinese>不</c.Chinese> <b>bù</b> as an answer is very forceful: <i>no!</i> Usually this would sound brusque and impolite, but when you are being humble, this forcefulness actually makes the statement even more polite.</c.P>
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
          <c.P>The word <c.Chinese>对</c.Chinese> <b>duì</b>, which literally means <i>correct</i>, is used to agree with something someone has just said:</c.P>
          {example(13, { audio: true })}
          <c.P>Because of this, <c.Chinese>对</c.Chinese> <b>duì</b> <i>correct</i> can be used to answer a yes/no question more or less like <i>yes</i> in English:</c.P>
          {example(14, { audio: true })}
          <c.P>In the same way, <c.Chinese>不对</c.Chinese> <b>bú duì</b> <i>not correct</i> can be used like English <i>no</i>:</c.P>
          {example(15, { audio: true })}
          <c.P>But as we saw above, a more common way of answering this kind of question is by repeating or negating the thing that is being asked about.</c.P>
          <c.P
            buttonOptions={{
              type: 'practice',
              data: {
                elementId: practiceIds[4]
              }
            }}
          >
            <i>Practice.</i>
          </c.P>
          {/* <c.Bookrow center>
            <img src="http://via.placeholder.com/550x450" alt="" />
          </c.Bookrow> */}
          <c.PartTitle name="dialog_zh" />
          {dialog(1, { sentenceType: 'chinese', displayNames: true })}
          {dialog(1, { sentenceType: 'translation', displayNames: true })}
          {dialog(2, { sentenceType: 'chinese', displayNames: true })}
          <c.PartTitle name="words" />
          {newWords()}
          <c.PartTitle name="culture" />
          <c.PartTitle type="secondary">Different names for languages</c.PartTitle>
          <c.P>
            There are several different Chinese terms for the Chinese language.
            In everyday conversation, it is called <c.Chinese>汉语</c.Chinese> <b>hànyǔ</b> or <c.Chinese>中文</c.Chinese> <b>zhōngwén</b>. They are synonyms, with <c.Chinese>汉语</c.Chinese> being slightly more formal. Strictly speaking, however, both of them mean “Chinese” in the sense of all Chinese dialects, not just Mandarin. Somewhat less common, and least formal, is <c.Chinese>中国话</c.Chinese> <b>zhōngguóhuà</b>, which literally means <i>China speech</i>.
          </c.P>
          <c.P><b>Pǔtōnghuà</b>, <i>common speech</i>, is the official PRC name for Mandarin Chinese. It has a slightly political overtone and is not used in normal conversation unless you really want to emphasize that you are talking about Mandarin as opposed to local dialects. In Táiwān, the corresponding terms are <c.Chinese>国语</c.Chinese> <b>guóyǔ</b> or <c.Chinese>国文</c.Chinese> <b>guówén</b>.</c.P>
          <c.P><i>Chinese characters</i> are called <c.Chinese>汉字</c.Chinese> <b>hànzì</b> or <c.Chinese>中国字</c.Chinese> <b>zhōngguózì</b>.</c.P>
          <c.PartTitle type="secondary">Receiving compliments</c.PartTitle>
          <c.P>The cultural codes for giving and receiving compliments differ between China and the West. In western societies, we are taught to accept a compliment with a <i>thank you</i>. But when a Chinese person receives praise, the appropriate response is denial. If someone says that you speak excellent Chinese, for example, the appropriate response would be <i>not at all</i>:</c.P>
          <c.Bookrow><Row><c.Char>- 你中文很好。</c.Char><c.Meaning>You speak good Chinese.</c.Meaning></Row></c.Bookrow>
          <c.Bookrow><Row><c.Char>- 不好，不好。</c.Char><c.Meaning>No, not at all.</c.Meaning></Row></c.Bookrow>
          <c.P>Chinese etiquette, based on Confucian ideals, revolves around praising the other party while expressing personal humility. Depending on how formal and polite the two speakers are, the dialog above could therefore continue with the first speaker reaffirming the original statement, perhaps emphasizing <c.Chinese>很</c.Chinese> <b>hěn</b> to say your Chinese is <i>very</i> good, prompting an even more humble response:</c.P>
          <c.Bookrow><Row><c.Char>- 你中文很好! </c.Char><c.Meaning>You speak very good Chinese.</c.Meaning></Row></c.Bookrow>
          <c.Bookrow><Row><c.Char>- 不好，不好。我中文很不好。</c.Char><c.Meaning>No, no, my Chinese is not good at all.</c.Meaning></Row></c.Bookrow>
          <c.P>Politeness established, the conversation may now move on to other topics. At this point, it can be appropriate to use <i>thank you</i> as a closer, showing that you accept the overdone praise by the other party.</c.P>
          <c.Review />
          <c.Exam />
        </c.Page>
      </div>
    );
  }
}
