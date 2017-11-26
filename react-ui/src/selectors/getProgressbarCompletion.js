import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getDialogCompletion from './getDialogCompletion';

const getProgressbarCompletion = createSelector(
  s.routing.getElementType,
  getDialogCompletion,
  s.practice.getPracticeCompletion,
  (elementType, dComp, pComp) => {
    switch (elementType) {
      case 'dialog': return dComp;
      case 'practice': return pComp;
      default: return undefined;
    }
  }
);

export default getProgressbarCompletion;
