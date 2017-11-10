import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getDialogCompletion from './getDialogCompletion';

const getProgressbarCompletion = createSelector(
  s.routing.getElementType,
  getDialogCompletion,
  (elementType, dComp) => {
    switch (elementType) {
      case 'dialog': return dComp;
      default: return undefined;
    }
  }
);

export default getProgressbarCompletion;
