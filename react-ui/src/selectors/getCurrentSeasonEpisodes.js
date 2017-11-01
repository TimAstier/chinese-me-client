import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentSeasonEpisodes = createSelector(
  s.entities.getEpisodes,
  s.study.getCurrentSeasonId,
  (episodes, seasonId) => {
    const result = episodes
      .filter(e => e.seasonId === Number(seasonId))
      .sortBy(item => item.number);
    return result;
  }
);

export default getCurrentSeasonEpisodes;
