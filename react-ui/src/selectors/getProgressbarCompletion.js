import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCharacterCompletion from './getCharacterCompletion';
import getGrammarCompletion from './getGrammarCompletion';
import getDialogCompletion from './getDialogCompletion';

const getProgressbarCompletion = createSelector(
  s.routing.getElementType,
  getCharacterCompletion,
  getGrammarCompletion,
  getDialogCompletion,
  (elementType, cComp, gComp, dComp) => {
    switch (elementType) {
      case 'character': return cComp;
      case 'grammar': return gComp;
      case 'dialog': return dComp;
      default: return undefined;
    }
  }
);

export default getProgressbarCompletion;
