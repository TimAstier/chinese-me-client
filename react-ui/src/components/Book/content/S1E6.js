import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
import { Row } from '../../Shared';

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
          <c.P>The Chinese equivalent of English <i>it</i> is pronounced <b>tā</b>, just like Chinese <i>he</i> and <i>she</i>:</c.P>
          {example(1, { audio: true })}
          {grammarTitle()}
          <c.P>在 <b>zài</b> specifies location; it replaces English <i>at</i>, <i>in</i> and other similar prepositions:</c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>在 <b>zài</b> can also function as a verb in itself, meaning <i>to be in</i>, <i>to be at</i> and so on:</c.P>
          {example(4, { audio: true })}
          <c.P>It can even be used on its own meaning <i>be there</i>, <i>be around</i>.</c.P>
          {example(5, { audio: true })}
          <c.P>This example is the most typical way of asking for somebody at an office or reception desk.</c.P>
          {grammarTitle()}
          <c.P>We have already learned how to use the particle 的 <b>de̊.1</b> to formulate the <i>possessive</i>, that something "belongs" to something else:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>我的书。</c.Char><c.Pinyin>Wǒ de̊.1 shū. </c.Pinyin><c.Meaning>My book.</c.Meaning></Row></li>
              <li><Row><c.Char>李玉的英文。</c.Char><c.Pinyin>Lǐ Yù de̊.1 yīngwén. </c.Pinyin><c.Meaning>Li Yu's English.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>But the use of <b>de̊.1</b> to modify a noun is much more general. In English, we use many different constructions to modify nouns. By “modify” we mean “say something about”. The noun being modified is called the <i>head noun</i>.</c.P>
          <c.P>As an example, let us look at the noun <i>book</i>. We can add a possessive pronoun to state whom the phone belongs to: <i>her</i> book. We can use an adjective to say what it is like: an <i>expensive</i>book. We can modify it using another noun: <i>this year's</i> book. We can even add a whole clause to describe it in more detail: the book <i>that I read last year</i>.</c.P>
          <c.P>Chinese grammar is more straightforward: all four examples above can be translated using the particle <b>de̊.1</b>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row>SHE DE̊.1 BOOK</Row></li>
              <li><Row>EXPENSIVE DE̊.1 BOOK</Row></li>
              <li><Row>THIS YEAR DE̊.1 BOOK</Row></li>
              <li><Row>I READ LAST YEAR DE̊.1 BOOK</Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Whatever comes before de̊.1 modifies the head noun coming after. As you can see, this pattern is a bit similar to a Topic-Comment construction, but in reverse order:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row>Topic, Comment - DE̊.1 phrase</Row></li>
              <li><Row>THIS BOOK, EXPENSIVE - EXPENSIVE DE̊.1 BOOK</Row></li>
              <li><Row>THIS BOOK, I READ LAST YEAR - I READ LAST YEAR DE̊.1 BOOK.</Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>To recap, <b>de̊.1</b> can be used for the possessive:</c.P>
          {example(6, { audio: true })}
          <c.P>It can modify the head noun with an adjective:</c.P>
          {example(7, { audio: true })}
          {example(8, { audio: true })}
          <c.P>It can even modify the head noun with a whole phrase:</c.P>
          {example(9, { audio: true })}
          {example(10, { audio: true })}
          <c.P>In the literal translations, we have glossed <b>de̊.1</b> with a hyphenated <i>-Y</i> to try to give a sense of how it makes helps "modify" the nouns.</c.P>
          <c.P>The phrases with <b>de̊.1</b> above can of course form part of complete sentences:</c.P>
          {example(11, { audio: true })}
          <c.P>Note the difference between this pattern using <b>de̊.1</b> and the similar pattern with <b>de̊.3</b>. 他英文说得很好 states that he <i>speaks</i> English well, while pattern 6:10 says that the <i>English</i> that he speaks is good.</c.P>
          {example(12, { audio: true })}
          {grammarTitle()}
          <c.P>的 <b>de̊.1</b> can appear without a head noun or pronoun, for example in <i>mine</i>, <i>yours</i>, <i>hers</i>:</c.P>
          {example(13, { audio: true })}
          {example(14, { audio: true })}
          <c.P>Just as in English, the head noun can also be omitted when it is understood implicitly, from the context:</c.P>
          {example(15, { audio: true })}
          {example(16, { audio: true })}
          <c.P>In fact, in the examples above <i>mine</i> or "the Chinese one* can refer to whatever the speakers have just been talking about, whether a book, a dress or a bicycle. This is an example of a grammatical phenomenon called <i>nominalization</i> where a whole phrase is, grammatically speaking, transformed into a noun. In English, we often have to translate this using phrases like <i>the one</i>, <i>that which</i> or <i>what</i>:</c.P>
          {example(17, { audio: true })}
          {grammarTitle()}
          <c.P>的 <b>de̊.1</b> is often optional, and the rules for when to use it are not always clear-cut. As we have seen in an earlier lesson, we can skip it after personal pronouns: saying 我朋友 <b>wǒ péngyo̊u</b>, without <b>de̊.1</b>, is just as common as saying 我的朋友 <b>wǒ de̊.1 péngyo̊u</b>.</c.P>
          <c.P>In general, we can say that the more "natural" or closely associated a word becomes with a noun, the less we need 的 <b>de̊.1</b>. Just as in English, this creates a nuance in meaning:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>一个美国公司</c.Char><c.Pinyin>yíge̊ měiguó gōngsī </c.Pinyin><c.Meaning>an American company</c.Meaning></Row></li>
              <li><Row><c.Char>一个美国的公司</c.Char><c.Pinyin>yíge̊ měiguó de̊.1 gōngsī  </c.Pinyin><c.Meaning>an adult</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>You sometimes cannot skip 的 <b>de̊.1</b> because there is already a fixed concept or word with a different meaning:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>一个大的人</c.Char><c.Pinyin>yíge̊ dà de̊.1 rén </c.Pinyin><c.Meaning>a big person</c.Meaning></Row></li>
              <li><Row><c.Char>一个大人</c.Char><c.Pinyin>yíge̊ dàrén </c.Pinyin><c.Meaning>a company from America</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>But often, the two variants differ only in degree:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>一个好的人</c.Char><c.Pinyin>yíge̊ hǎo de̊.1 rén</c.Pinyin><c.Meaning>a good person, a person who is good</c.Meaning></Row></li>
              <li><Row><c.Char>一个好人</c.Char><c.Pinyin>yíge̊ hǎorén </c.Pinyin><c.Meaning>a good person, a paragon</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Chinese speakers also try to avoid using more than one 的 <b>de̊.1</b>  in a single sentence. It is possible to say:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>李玉的朋友的中文很好。</c.Char></Row></li>
              <li><Row><c.Pinyin>Lǐ Yù de̊.1 péngyo̊u de̊.1 zhōngwén hěn hǎo.</c.Pinyin></Row></li>
              <li><Row><c.Meaning>Li Yu's friend's Chinese is good.</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>But sentences like this are felt to be a bit clumsy (in fact, this is also the case in English, as we can see from the  translation). Usually, Chinese speakers will rephrase a sentence like this to avoid repeating 的 <b>de̊.1</b> , for example by using a Topic-Comment construction:</c.P>
          {example(18, { audio: true })}
          {grammarTitle()}
          <c.P>Many Chinese verbs can be <i>reduplicated</i> - repeated - with neutral tone to give the meaning <i>do a little bit of something</i> or <i>do something tentatively</i>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>看</c.Char><c.Pinyin>kàn</c.Pinyin><c.Meaning>look --></c.Meaning> <c.Char>看看</c.Char><c.Pinyin>kànkån</c.Pinyin><c.Meaning>have a look</c.Meaning></Row></li>
              <li><Row><c.Char>想</c.Char><c.Pinyin>xiǎng</c.Pinyin><c.Meaning>think --></c.Meaning> <c.Char>想想</c.Char><c.Pinyin>xiǎngxiång</c.Pinyin><c.Meaning>think about, consider</c.Meaning></Row></li>
              <li><Row><c.Char>说</c.Char><c.Pinyin>shuō</c.Pinyin><c.Meaning>say --></c.Meaning> <c.Char>说说</c.Char><c.Pinyin>shuōshuo̊</c.Pinyin><c.Meaning>say something, speak a little</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Sometimes, 一 <b>yi̊</b> is inserted in the middle:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>看一看</c.Char><c.Pinyin>kànyi̊kån</c.Pinyin><c.Meaning>have a look</c.Meaning></Row></li>
              <li><Row><c.Char>想一想</c.Char><c.Pinyin>xiǎngyi̊xiång</c.Pinyin><c.Meaning>think about, consider</c.Meaning></Row></li>
              <li><Row><c.Char>说一说</c.Char><c.Pinyin>shuōyi̊shuo̊</c.Pinyin><c.Meaning>say something, speak a little</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle name="dialog" />
          <c.PartTitle type="secondary">你在中国做什么？</c.PartTitle>
          <c.P color={'#C0504D'}><i>Wang Meixin wants to know what Marvin is doing in China. When she understands that he has no clear plan, she suggests that he might become a language tutor. Marvin is not so sure.</i></c.P>
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
