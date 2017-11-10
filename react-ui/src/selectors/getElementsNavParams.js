import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getReviewNavParams from './getReviewNavParams';
import getExamNavParams from './getExamNavParams';

const getElementsNavParams = createSelector(
  s.routing.getElementType,
  getReviewNavParams,
  getExamNavParams,
  (elementType, rParams, eParams) => {
    switch (elementType) {
      case 'review': return rParams;
      case 'exam': return eParams;
      default: return undefined;
    }
  }
);

export default getElementsNavParams;
