import integerToAlphabet from './integerToAlphabet';

export const getTitleLetter = count => integerToAlphabet(count);
export const getGrammarSentenceCode = (lessonNumber, exampleNumber) =>
  lessonNumber + ':' + exampleNumber;
