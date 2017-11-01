import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentWord = createSelector(
  s.entities.getWords,
  s.study.getCurrentWordId,
  (words, id) => {
    if (words.get(String(id))) {
      return words.get(String(id));
    }
    return undefined;
  }
);

export default getCurrentWord;
