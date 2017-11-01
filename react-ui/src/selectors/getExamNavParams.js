import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getExamNavParams = createSelector(
  s.exam.getScoreMax,
  s.exam.getCurrentExerciseIndex,
  (scoreMax, index) => {
    try {
      return {
        type: 'question',
        currentElement: index + 1,
        totalElements: scoreMax,
      };
    } catch (e) {
      return undefined;
    }
  }
);

export default getExamNavParams;
