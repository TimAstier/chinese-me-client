import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getUnlockedEpisodes = createSelector(
  s.entities.getEpisodes,
  episodes => {
    return episodes.filter(episode => episode.get('locked') === false);
  }
);

export default getUnlockedEpisodes;
