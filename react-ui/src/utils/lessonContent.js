import createCounter from './createCounter';
import integerToAlphabet from './integerToAlphabet';

const grammarCounter = createCounter();
const grammarSentenceCounter = createCounter();

export const getGrammarLetter = () => integerToAlphabet(grammarCounter());
export const getGrammarSentenceCode = lessonNumber =>
  lessonNumber + ':' + grammarSentenceCounter();
