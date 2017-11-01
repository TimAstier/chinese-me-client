import { createSelector } from 'reselect';
import getCharactersNavParams from './getCharactersNavParams';

const getCharacterCompletion = createSelector(
  getCharactersNavParams,
  params => params ? (params.currentElement - 1) / (params.totalElements - 1) * 100 : 0
);

export default getCharacterCompletion;
