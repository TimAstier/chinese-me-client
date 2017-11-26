import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getPracticeNavParams from './getPracticeNavParams';
import getExamNavParams from './getExamNavParams';

const getElementsNavParams = createSelector(
  s.routing.getElementType,
  getPracticeNavParams,
  getExamNavParams,
  (elementType, pParams, eParams) => {
    switch (elementType) {
      case 'practice': return pParams;
      case 'exam': return eParams;
      default: return undefined;
    }
  }
);

export default getElementsNavParams;
