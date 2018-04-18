import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getDialogCompletion from './getDialogCompletion';
import getQuestionCompletion from './getQuestionCompletion';

const getProgressbarCompletion = createSelector(
  s.routing.getElementType,
  getDialogCompletion,
  s.practice.getPracticeCompletion,
  getQuestionCompletion,
  (elementType, dComp, pComp, qComp) => {
    switch (elementType) {
      case 'dialog': return dComp;
      case 'practice': return pComp;
      case 'question': return qComp;
      default: return undefined;
    }
  }
);

export default getProgressbarCompletion;
