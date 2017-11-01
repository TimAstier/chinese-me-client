import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCharactersNavParams from './getCharactersNavParams';
import getGrammarsNavParams from './getGrammarsNavParams';
import getDialogsNavParams from './getDialogsNavParams';
import getReviewNavParams from './getReviewNavParams';
import getExamNavParams from './getExamNavParams';

const getElementsNavParams = createSelector(
  s.routing.getElementType,
  getCharactersNavParams,
  getGrammarsNavParams,
  getDialogsNavParams,
  getReviewNavParams,
  getExamNavParams,
  (elementType, cParams, gParams, dParams, rParams, eParams) => {
    switch (elementType) {
      case 'character': return cParams;
      case 'grammar': return gParams;
      case 'dialog': return dParams;
      case 'review': return rParams;
      case 'exam': return eParams;
      default: return undefined;
    }
  }
);

export default getElementsNavParams;
