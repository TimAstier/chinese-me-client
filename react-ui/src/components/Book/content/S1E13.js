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
          <c.P>This is a very common character which has many different uses. Its basic meaning is <i>to come</i>, <i>to arrive</i>. Note that in Chinese, you do not need any preposition after 来; you simply say COME CHINA rather than COME TO CHINA:</c.P>
          {example(1, { audio: true })}
          {grammarTitle()}
          <c.P>English has words for <i>come</i> and <i>go</i>, but often uses direction-neutral words like <i>enter</i> or <i>exit</i>. Chinese verbs always care about the direction relative to the speaker:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>进来</c.Char><c.Pinyin>jìnlåi</c.Pinyin><c.Meaning>come in</c.Meaning></Row></li>
              <li><Row><c.Char>进去</c.Char><c.Pinyin>jìnqů</c.Pinyin><c.Meaning>go in</c.Meaning></Row></li>
              <li><Row><c.Char>出来</c.Char><c.Pinyin>chūlåi</c.Pinyin><c.Meaning>come out</c.Meaning></Row></li>
              <li><Row><c.Char>出去</c.Char><c.Pinyin>chūqů</c.Pinyin><c.Meaning> go out</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          {grammarTitle()}
          <c.P>The English verb <i>go</i> can be used to describe that something will happen in the future. In the same way, Chinese 来 <b>lái</b> and 去 <b>qù</b> can be used with other verbs without the speaker "coming to" or "going from" an actual location. In this function, they have neutral tone:</c.P>
          {example(2, { audio: true })}
          {example(3, { audio: true })}
          <c.P>Both of the patterns above are possible without 来 and 去, but in other cases they form part of fixed expressions:</c.P>
          {example(4, { audio: true })}
          {example(5, { audio: true })}
          {example(6, { audio: true })}
          {example(7, { audio: true })}
          <c.P>In other cases, inserting 来 or 去 is preferred because the sentence could otherwise become ambiguous:</c.P>
          {example(8, { audio: true })}
          <c.P>Without the 去, this sentence could mean either <i>I can study</i> or <i>I will study</i>.</c.P>
          {grammarTitle()}
          <c.P>In the previous episode, we learned that 上 and 下 can be used as verb complements. Several other direction words can be used in a similar way, alone or in combination.</c.P>
          <c.P>起来 <b>qǐlái</b> means <i>get up</i> or <i>stand up</i>. It is used as a complement meaning <i>begin to</i>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>忙起来</c.Char><c.Pinyin>mángqi̊låi</c.Pinyin><c.Meaning>get busy</c.Meaning></Row></li>
              <li><Row><c.Char>笑起来</c.Char><c.Pinyin>xiàoqi̊låi</c.Pinyin><c.Meaning>burst out laughing</c.Meaning></Row></li>
              <li><Row><c.Char>打起来</c.Char><c.Pinyin>dǎqi̊låi</c.Pinyin><c.Meaning>begin to fight</c.Meaning></Row></li>
              <li><Row><c.Char>说起来</c.Char><c.Pinyin>shuōqi̊låi</c.Pinyin><c.Meaning>start to talk about, mention, bring up</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Adjectives, which some grammarians call <i>adjectival verbs</i>, can also take such verbal complements:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>好起来</c.Char><c.Pinyin>hǎoqi̊låi</c.Pinyin><c.Meaning>get better</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Sometimes, the meaning is abstract:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>问起来</c.Char><c.Pinyin>wènqi̊låi</c.Pinyin><c.Meaning>ask about, inquire about</c.Meaning></Row></li>
              <li><Row><c.Char>想起来</c.Char><c.Pinyin>xiǎngqi̊låi</c.Pinyin><c.Meaning>remember, recall</c.Meaning></Row></li>
              <li><Row><c.Char>看起来</c.Char><c.Pinyin>kànqi̊låi</c.Pinyin><c.Meaning>look like, seem, appear</c.Meaning></Row></li>
              <li><Row><c.Char>听起来</c.Char><c.Pinyin>tīngqi̊låi</c.Pinyin><c.Meaning>sound like, seem</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Other direction words can be used in a similar way. Some have a concrete meaning closely related to direction:</c.P>
          {example(9, { audio: true })}
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>说下去</c.Char><c.Pinyin>shuōxiåqů</c.Pinyin><c.Meaning>keep talking</c.Meaning></Row></li>
              <li><Row><c.Char>问下去</c.Char><c.Pinyin>wènxiåqů</c.Pinyin><c.Meaning>keep asking</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.P>Others are abstract; 下去, for example, can mean <i>to continue</i></c.P>
          {example(10, { audio: true })}
          {example(11, { audio: true })}
          {example(12, { audio: true })}
          {example(13, { audio: true })}
          {example(14, { audio: true })}
          <c.P>The complements 得了 <b>de̊liǎo</b> and 不了 <b>bůliǎo</b> mean <i>be able to</i>:</c.P>
          {example(15, { audio: true })}
          {example(16, { audio: true })}
          {example(17, { audio: true })}
          {grammarTitle()}
          <c.P>还 <b>hái</b> is used in some common idiomatic expressions meaning <i>pretty good</i>, <i>ok</i>:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li><Row><c.Char>还可以</c.Char><c.Pinyin>hái kěyǐ </c.Pinyin><c.Meaning>not bad, ok</c.Meaning></Row></li>
              <li><Row><c.Char>还好</c.Char><c.Pinyin>hái hǎo</c.Pinyin><c.Meaning>pretty good, not bad</c.Meaning></Row></li>
            </c.Ul>
          </c.Bookrow>
          <c.PartTitle name="dialog" />
          <c.PartTitle type="secondary">来一杯茶吧！</c.PartTitle>
          <c.P color={'#C0504D'}><i>五个人去喝茶 The five go out to have tea. Marvin is confused by the different varieties and decides to try "white tea", which in his opinion tastes remarkably similar to water.</i></c.P>
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
