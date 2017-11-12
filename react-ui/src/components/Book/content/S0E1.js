import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S0E1 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog,
      review, grammarTitle, pageNumber, character, characterPractice }
      = this.props;
    return (
      <div>
        <c.Page number={pageNumber()}>
          {lessonTitle()}
          <c.P>Welcome to the language with more native speakers than any other in the world: Chinese.</c.P>
          <c.P>This is Wang Yi. Listen carefully as she introduces herself to you.</c.P>
          {example({ basic: true, big: true })}
          <c.P>The literal translation of this sentence is I CALLED WANG YI. Translated to more natural English, it means My name is Wang Yi.</c.P>
          <c.P>In China, the family name comes before the given name. There are only a few hundred family names, but any combination of one or two characters can be used as a given name. Different names have been popular during different periods: in revolutionary times, some children were named New Constitution and Strong Country. Names often reflect traditional gender roles: Strong and Thunder for boys; Little Swallow and Beautiful Jade for girls. Wang Yi’s family name is Wang, which means king, and her given name is the gender-neutral One.</c.P>
          <c.P>Now, it’s your turn to introduce yourself. Western names are hard to pronounce for Chinese people, so we will give you a Chinese name based on your actual name, your gender and your nationality. Please input them here.</c.P>
          <c.PartTitle>Explore: Your Chinese name</c.PartTitle>
          <c.P>Now, practice your Chinese name. Remember that the family name comes first, followed by the given name:</c.P>
          {example({ basic: true, big: true })}
          <c.PartTitle>Role Play: Introduce yourself</c.PartTitle>
          <c.PartTitle>Each Chinese character corresponds to one spoken syllable</c.PartTitle>
          <c.PartTitle>Pinyin – explaining Chinese pronunciation with English letters</c.PartTitle>
          <c.PartTitle>Character stories</c.PartTitle>
          <c.PartTitle>Pictograms</c.PartTitle>
          <c.PartTitle>Radicals for meaning – phonetics for sound</c.PartTitle>
          <c.PartTitle>Calligraphy – the ancient art of writing</c.PartTitle>
          <c.PartTitle>一 yī one</c.PartTitle>
          {character(0)}
          {characterPractice(0)}
          <c.PartTitle>王 wáng king</c.PartTitle>
          <c.PartTitle>口 kǒu mouth, opening</c.PartTitle>
          <c.PartTitle>叫 jiào to be called</c.PartTitle>
          <c.PartTitle>我 wǒ I, me</c.PartTitle>
          {character(1)}
          {characterPractice(1)}
          <c.PartTitle>New characters</c.PartTitle>
          <c.PartTitle>Review</c.PartTitle>
        </c.Page>
      </div>
    );
  }
}
