import { createSelector } from 'reselect';
import getGrammarsNavParams from './getGrammarsNavParams';

const getGrammarCompletion = createSelector(
  getGrammarsNavParams,
  params => params ? (params.currentElement - 1) / (params.totalElements - 1) * 100 : 0
);

export default getGrammarCompletion;
