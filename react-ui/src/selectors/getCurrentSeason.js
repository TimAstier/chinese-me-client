import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentSeason = createSelector(
  s.study.getCurrentSeasonId,
  s.entities.getSeasons,
  (id, seasons) => {
    if (!id || !seasons) {
      return undefined;
    }
    return seasons.get(String(id)) ? seasons.get(String(id)) : undefined;
  }
);

export default getCurrentSeason;
