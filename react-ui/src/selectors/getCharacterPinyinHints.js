import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getExerciseCharacter from './getExerciseCharacter';

const getCharacterPinyinHints = createSelector(
  getExerciseCharacter,
  s.characterPinyin.getAttemptsLeft,
  s.characterPinyin.getUserAnswer,
  (character, attemptsLeft, userAnswer) => {
    const finalSentence = attemptsLeft => {
      return attemptsLeft === 2 ?
        'You have two more tries.'
        : 'You have one last try.';
    };
    const expectedAnswer = character.get('pinyinNumber');
    const trimedUserAnswer = userAnswer.replace(/\s+/g, '');
    const lastCharacter = trimedUserAnswer[trimedUserAnswer.length - 1];
    const validToneNumbers = ['0', '1', '2', '3', '4'];
    if (userAnswer) {
      if (isNaN(lastCharacter)) {
        return {
          title: "Don't forget the tone!",
          message: `Your answer should end with a tone number. ${finalSentence(attemptsLeft)}`
        };
      }
      if (validToneNumbers.indexOf(lastCharacter) === -1) {
        return {
          title: "This tone doesn't exist!",
          message: `Possible tones are 1, 2, 3, 4 and 0 (neutral tone). ${finalSentence(attemptsLeft)}`
        };
      }
      if (lastCharacter === expectedAnswer[expectedAnswer.length - 1]) {
        return {
          title: 'Nice try!',
          message: `The tone number (${lastCharacter}) is correct. ${finalSentence(attemptsLeft)}`
        };
      }
      if (trimedUserAnswer.slice(0, -1) === expectedAnswer.slice(0, -1)) {
        return {
          title: 'Very close!',
          message: `The sound (${trimedUserAnswer.slice(0, -1)}) is correct, but the tone is wrong. ${finalSentence(attemptsLeft)}`
        };
      }
    }
    return {
      title: 'Wrong',
      message: `${finalSentence(attemptsLeft)}`
    };
  }
);

export default getCharacterPinyinHints;
