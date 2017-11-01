import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getReviewNavParams = createSelector(
  s.study.getCurrentEpisodeId,
  s.review.getExercises,
  (episodeId, reviewExercises) => {
    try {
      return {
        type: 'exercise',
        currentElement: null,
        totalElements: reviewExercises.size,
      };
    } catch (e) {
      return undefined;
    }
  }
);

export default getReviewNavParams;
