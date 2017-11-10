import integerToAlphabet from './integerToAlphabet';

export const getGrammarLetter = count => integerToAlphabet(count);
export const getGrammarSentenceCode = (lessonNumber, count) =>
  lessonNumber + ':' + count;
