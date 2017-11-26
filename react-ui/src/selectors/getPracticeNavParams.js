import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getPracticeNavParams = createSelector(
  s.study.getCurrentEpisodeId,
  s.practice.getExercises,
  (episodeId, exercises) => {
    try {
      return {
        type: 'exercise',
        currentElement: null,
        totalElements: exercises.size,
      };
    } catch (e) {
      return undefined;
    }
  }
);

export default getPracticeNavParams;
