import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCurrentDialog from './getCurrentDialog';

const getCurrentWords = createSelector(
  getCurrentDialog,
  s.entities.getWords,
  (dialog, words) => {
    const arrayOfWords = [];
    if (dialog && words) {
      dialog.words.forEach(w => {
        arrayOfWords.push(words.get(String(w)));
      });
    }
    return arrayOfWords;
  }
);

export default getCurrentWords;
